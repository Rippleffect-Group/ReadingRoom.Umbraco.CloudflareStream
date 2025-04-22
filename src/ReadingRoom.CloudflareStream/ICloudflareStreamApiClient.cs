using ReadingRoom.CloudflareStream.Models;
using ReadingRoom.CloudflareStream.Models.Api.Details;
using ReadingRoom.CloudflareStream.Models.Api.Token;

namespace ReadingRoom.CloudflareStream;

public interface ICloudflareStreamApiClient
{
    Task<DetailsResponse?> GetDetails(string id);
    Task<UploadResponse> InitialiseUploadAsync(string length, string uploadMetadata, string? creatorName);
    Task<bool> DeleteAsync(string id);
    Task<TokenResponse?> GetTokenAsync(TokenRequest request);
}