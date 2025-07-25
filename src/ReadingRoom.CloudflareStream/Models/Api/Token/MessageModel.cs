using System.Text.Json.Serialization;

namespace ReadingRoom.CloudflareStream.Models.Api.Token;

public class MessageModel
{
    [JsonPropertyName("Code")]
    public int Code { get; set; }

    [JsonPropertyName("Message")]
    public string? Message { get; set; }
}