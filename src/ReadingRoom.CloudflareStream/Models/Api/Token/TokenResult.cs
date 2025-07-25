using System.Text.Json.Serialization;

namespace ReadingRoom.CloudflareStream.Models.Api.Token;

public class TokenResult
{
    [JsonPropertyName("Token")]
    public string? Token { get; set; }
}