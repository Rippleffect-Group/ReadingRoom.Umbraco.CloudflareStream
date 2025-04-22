using System.Text.Json.Serialization;

namespace ReadingRoom.CloudflareStream.Models.Api.Token;

public class ErrorModel
{
    [JsonPropertyName("Code")]
    public int Code { get; set; }

    [JsonPropertyName("Message")]
    public string? Message { get; set; }

    [JsonPropertyName("Messages")]
    public List<MessageModel> Messages { get; set; } = new();
}