using Microsoft.Extensions.Logging;
using ReadingRoom.CloudflareStream;
using ReadingRoom.CloudflareStream.Models;
using ReadingRoom.CloudflareStream.Models.Api.Token;
using ReadingRoom.Umbraco.CloudflareStream.Extensions;
using ReadingRoom.Umbraco.CloudflareStream.Models;
using ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Mapping;
using Umbraco.Cms.Core.Services;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public class CloudflareStreamMediaService(
    IUmbracoMapper mapper,
    ILogger<CloudflareStreamMediaService> logger,
    ICloudflareStreamApiClient apiClient,
    IDataTypeService dataTypeService,
    ICloudflareStreamUrlHelper urlHelper)
    : ICloudflareStreamMediaService
{
    public async Task<UploadResponse> InitialiseUploadAsync(string length, string encodedMetadata, string? creatorName, Guid dataTypeKey)
    {
        var dataType = dataTypeService.GetDataType(dataTypeKey);
        var config = dataType?.ConfigurationAs<CloudflareStreamMediaConfiguration>();
        if (config == null)
        {
            var ex = new InvalidOperationException("CloudflareStreamMediaConfiguration is null");
            logger.LogError(ex, "CloudflareStreamMediaConfiguration is null");
            throw ex;
        }

        var expiry = config.GetExpiry;
        var deleterAfter = config.GetDeleteAfter;
        var decodedMetaData = DecodeMetaData(encodedMetadata);

        if (expiry.HasValue)
        {
            AddOrUpdate(decodedMetaData, "expiry", DateTime.UtcNow.Add(expiry.Value).ToString("yyyy-MM-dd'T'HH:mm:ss.fffK"));
        }

        if (config.RequiresSignedUrls)
        {
            AddOrUpdate(decodedMetaData, "requiresignedurls");
        }

        if (deleterAfter.HasValue)
        {
            AddOrUpdate(decodedMetaData, "scheduleddeletion", DateTime.UtcNow.Add(deleterAfter.Value).ToString("yyyy-MM-dd'T'HH:mm:ss.fffK"));
        }

        var uploadMetadata = EncodeMetaData(decodedMetaData);

        return await apiClient.InitialiseUploadAsync(length, uploadMetadata, creatorName);
    }

    public async Task<CloudflareStreamPlaybackUrls?> CreatePlaybackUrls(string id, bool requiresSignedUrl)
    {
        try
        {
            if (!requiresSignedUrl)
            {
                return urlHelper.CreateCloudflareStreamUrls(id, null);
            }

            var request = TokenRequest.Create(id);
            var response = await apiClient.GetTokenAsync(request);
            if (response == null)
            {
                logger.LogError("Failed to get token for media {Id}. Response from Cloudflare is empty", id);
                return null;
            }

            if (!response.Success || response.Result.Token.IsNullOrWhiteSpace())
            {
                logger.LogError("Failed to get token for media {Id}", id);
                return null;
            }

            return urlHelper.CreateCloudflareStreamUrls(id, response.Result.Token);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to get playback urls for media {Id}", id);
            return null;
        }
    }

    public async Task<CloudflareStreamMediaDetails?> GetDetails(string id)
    {
        var data = await apiClient.GetDetails(id);
        if (data?.Result == null)
        {
            return null;
        }

        var requiresSignedUrls = data.Result.RequireSignedUrls;
        // Get signed urls
        if (requiresSignedUrls)
        {
            var signedUrls = await CreatePlaybackUrls(id, true);
            data.Result.Playback.Dash = signedUrls?.DashManifestUrl;
            data.Result.Playback.Hls = signedUrls?.HlsManifestUrl;
            data.Result.Playback.Frame = signedUrls?.IFrameUrl;
        }
        
        var model = mapper.Map<CloudflareStreamMediaDetails>(data);
        return model;
    }

    public async Task<Attempt<OperationResultType>> DeleteAsync(string id)
    {
        try
        {
            var result = await apiClient.DeleteAsync(id);
            return Attempt<OperationResultType>.If(result, result ? OperationResultType.Success : OperationResultType.FailedCannot);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to delete media {Id}", id);
            return Attempt.Fail(OperationResultType.FailedExceptionThrown, ex);
        }
    }


    private static string EncodeMetaData(Dictionary<string, string?> decodedMetaData)
    {
        var output = new List<string>();
        foreach (var kvp in decodedMetaData)
        {
            var key = kvp.Key;
            var value = kvp.Value;
            if (value.IsNullOrWhiteSpace())
            {
                output.Add(key);
            }
            else
            {
                var encodedValue = value.EncodeTo64();
                output.Add($"{key} {encodedValue}");
            }
        }

        return string.Join(",", output);
    }

    private static void AddOrUpdate(IDictionary<string, string?> data, string key, string? value = null)
    {
        data[key] = value;
    }

    private static Dictionary<string, string?> DecodeMetaData(string metadata)
    {
        var output = new Dictionary<string, string?>();
        var items = metadata.Split(",").ToList();
        foreach (var item in items)
        {
            var parts = item.Split(" ");
            var key = parts[0];
            string? value = null;
            if (parts.Length == 2)
            {
                value = parts[1].DecodeFrom64();
            }

            output.Add(key, value);
        }

        return output;
    }
}