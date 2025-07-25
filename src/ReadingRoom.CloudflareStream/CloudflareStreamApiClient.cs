using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ReadingRoom.CloudflareStream.Models;
using ReadingRoom.CloudflareStream.Models.Api.Details;
using ReadingRoom.CloudflareStream.Models.Api.Token;
using System.Net;
using System.Net.Http.Json;

namespace ReadingRoom.CloudflareStream;

public class CloudflareStreamApiClient(
    HttpClient httpClient,
    IOptions<CloudflareStreamOptions> options,
    ILogger<CloudflareStreamApiClient> logger)
    : ICloudflareStreamApiClient
{
    private readonly CloudflareStreamOptions _options = options.Value;

    public async Task<DetailsResponse?> GetDetails(string id)
    {
        if (!_options.IsValid())
        {
            logger.LogError("Failed to get details for media {Id}: Cloudflare Stream API client is not correctly configured", id);
            throw new NullReferenceException("Cloudflare Stream API client is not configured");
        }

        try
        {
            var response = await httpClient.GetAsync($"{id}");
            if (response.StatusCode == HttpStatusCode.NotFound)
            {
                logger.LogWarning("Failed to get details for media {Id}: Not Found", id);
                return null;
            }

            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadFromJsonAsync<DetailsResponse>();
            if (result?.Result == null)
            {
                logger.LogWarning("Failed to get details for media {Id} - No Result", id);
                return null;
            }

            var builder = new UriBuilder(_options.CustomerSubdomainUri)
            {
                Path = $"{result.Result.Uid}/iframe",
                Scheme = "https",
                Port = -1
            };

            result.Result.Playback.Frame = builder.Uri.ToString();
            return result;
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to get details for media {Id}", id);
            throw;
        }
    }

    public async Task<UploadResponse> InitialiseUploadAsync(string length, string uploadMetadata, string? creatorName)
    {
        try
        {
            var request = new HttpRequestMessage(HttpMethod.Post, "?direct_user=true");
            request.Headers.Add("Tus-Resumable", "1.0.0");
            request.Headers.Add("Upload-Length", length);
            request.Headers.Add("Upload-Metadata", uploadMetadata);
            if (!string.IsNullOrWhiteSpace(creatorName))
            {
                request.Headers.Add("Upload-Creator", creatorName);
            }

            var response = await httpClient.SendAsync(request);
            if (response.StatusCode == HttpStatusCode.BadRequest)
            {
                var content = await response.Content.ReadAsStringAsync();
                logger.LogError("Failed to initialise upload: {StatusCode} {Content}", response.StatusCode, content);
            }

            response.EnsureSuccessStatusCode();

            var destination = response.Headers.Location;
            if (destination == null)
            {
                throw new InvalidOperationException("No location header in response");
            }

            var mediaId = response.Headers.GetValues("stream-media-id").FirstOrDefault();
            if (mediaId == null)
            {
                throw new InvalidOperationException("No stream-media-id header in response");
            }

            return UploadResponse.Success(destination, mediaId);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to initialise upload");
            return UploadResponse.Fail();
        }
    }

    public async Task<bool> DeleteAsync(string id)
    {
        try
        {
            var response = await httpClient.DeleteAsync($"{id}");
            if (response.StatusCode == HttpStatusCode.NotFound)
            {
                logger.LogWarning("Failed to delete Cloudflare Stream Video (Id: {Id}) - Not Found", id);
                return false;
            }

            response.EnsureSuccessStatusCode();
            return true;
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to delete Cloudflare Stream Video (Id: {Id})", id);
            throw;
        }
    }

    public async Task<TokenResponse?> GetTokenAsync(TokenRequest request)
    {
        try
        {
            var response = await httpClient.PostAsJsonAsync($"{request.Id}/token", request);
            if (response.StatusCode == HttpStatusCode.NotFound)
            {
                logger.LogWarning("Failed to get token for media {Id} - Not Found", request.SigningKeyId);
                return null;
            }

            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadFromJsonAsync<TokenResponse>();

            return result;
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to get token");
            return null;
        }
    }
}