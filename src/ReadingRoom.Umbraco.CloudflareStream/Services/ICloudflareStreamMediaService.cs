using ReadingRoom.CloudflareStream.Models;
using ReadingRoom.Umbraco.CloudflareStream.Models;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Services;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public interface ICloudflareStreamMediaService
{
    Task<UploadResponse> InitialiseUploadAsync(string length, string encodedMetadata, string? creatorName, Guid dataTypeKey);

    /// <summary>
    /// Create playback urls for a Cloudflare Stream video.
    /// </summary>
    /// <param name="id"></param>
    /// <param name="requiresSignedUrl">Generate a signed URL for the video</param>
    /// <returns></returns>
    Task<CloudflareStreamPlaybackUrls?> CreatePlaybackUrls(string id, bool requiresSignedUrl);

    Task<CloudflareStreamMediaDetails?> GetDetails(string id);

    Task<Attempt<OperationResultType>> DeleteAsync(string id);
}