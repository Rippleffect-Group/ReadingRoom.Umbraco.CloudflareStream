using Newtonsoft.Json;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;

public class CloudflareStreamMediaValueDto
{
    [JsonProperty(PropertyName = "size")]
    public long Size { get; set; }

    [JsonProperty(PropertyName = "name")]
    public string Name { get; set; } = string.Empty;

    [JsonProperty(PropertyName = "id")]
    public string Id { get; set; } = string.Empty;

    [JsonProperty(PropertyName = "extension")]
    public string Extension { get; set; } = string.Empty;

    [JsonProperty(PropertyName = "isSigned")]
    public bool IsSigned { get; set; }

    [JsonProperty(PropertyName = "width")]
    public long Width { get; set; }

    [JsonProperty(PropertyName = "height")]
    public long Height { get; set; }

    [JsonProperty(PropertyName = "uploadDate")]
    public DateTime? UploadDate { get; set; }

    [JsonProperty(PropertyName = "duration")]
    public long Duration { get; set; }
}