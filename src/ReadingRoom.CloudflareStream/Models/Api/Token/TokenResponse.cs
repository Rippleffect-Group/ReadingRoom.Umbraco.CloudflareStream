using System.Text.Json.Serialization;

namespace ReadingRoom.CloudflareStream.Models.Api.Token;

public class TokenResponse
{
    [JsonPropertyName("Result")]
    public TokenResult Result { get; set; } = new();

    [JsonPropertyName("Errors")]
    public List<ErrorModel> Errors { get; set; } = new();

    [JsonPropertyName("Success")]
    public bool Success { get; set; }
}