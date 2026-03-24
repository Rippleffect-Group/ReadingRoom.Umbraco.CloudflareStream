using System.Text.Json.Serialization;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;

public class CloudflareStreamMediaValueDto
{
    [JsonPropertyName("size")]
    public long Size { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    [JsonPropertyName("id")]
    public string Id { get; set; } = string.Empty;

    [JsonPropertyName("extension")]
    public string Extension { get; set; } = string.Empty;

    [JsonPropertyName("isSigned")]
    public bool IsSigned { get; set; }

    [JsonPropertyName("width")]
    public long Width { get; set; }

    [JsonPropertyName("height")]
    public long Height { get; set; }

    [JsonPropertyName("uploadDate")]
    public DateTime? UploadDate { get; set; }

    [JsonPropertyName("duration")]
    public long Duration { get; set; }
}