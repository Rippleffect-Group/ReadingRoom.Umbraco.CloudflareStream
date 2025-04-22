using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace ReadingRoom.CloudflareStream.Models;

public class UploadResponse
{
    private UploadResponse(bool success, Uri? location, string? mediaId)
    {
        Location = location;
        MediaId = mediaId;
        IsSuccess = success && location != null && mediaId != null;
    }

    [JsonPropertyName("MediaId")]
    public string? MediaId { get; }

    [JsonPropertyName("Location")]
    public Uri? Location { get; }

    [JsonPropertyName("IsSuccess")]
    [MemberNotNullWhen(true, nameof(Location), nameof(MediaId))]
    public bool IsSuccess { get; }

    public static UploadResponse Fail() => new(false, null, null);

    public static UploadResponse Success(Uri location, string mediaId) => new(true, location, mediaId);
}