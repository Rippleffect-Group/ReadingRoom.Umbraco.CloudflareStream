using System.Text.Json.Serialization;

namespace ReadingRoom.CloudflareStream.Models.Api.Details;

public class DetailsResponse
{
    [JsonPropertyName("Errors")]
    public List<MessageDetail> Errors { get; set; } = new();

    public class MessageDetail
    {
        [JsonPropertyName("Code")]
        public int Code { get; set; }

        [JsonPropertyName("Message")]
        public required string Message { get; set; }
    }

    [JsonPropertyName("Messages")]
    public List<MessageDetail> Messages { get; set; } = new();

    [JsonPropertyName("Result")]
    public DetailsResult? Result { get; set; }

    [JsonPropertyName("Success")]
    public bool Success { get; set; }

    public class DetailsResult
    {
        [JsonPropertyName("AllowedOrigins")]
        public List<string> AllowedOrigins { get; set; } = new();

        [JsonPropertyName("Created")]
        public DateTime? Created { get; set; }

        [JsonPropertyName("Creator")]
        public string? Creator { get; set; }

        [JsonPropertyName("Duration")]
        public decimal? Duration { get; set; }

        [JsonPropertyName("Input")]
        public Input Input { get; set; } = new();

        [JsonPropertyName("LiveInput")]
        public string? LiveInput { get; set; }

        [JsonPropertyName("MaxDurationSeconds")]
        public decimal? MaxDurationSeconds { get; set; }

        [JsonPropertyName("Meta")]
        public Meta Meta { get; set; } = new();

        [JsonPropertyName("Modified")]
        public DateTime? Modified { get; set; }

        [JsonPropertyName("Playback")]
        public Playback Playback { get; set; } = new();

        [JsonPropertyName("Preview")]
        public string? Preview { get; set; }

        [JsonPropertyName("ReadyToStream")]
        public bool ReadyToStream { get; set; }

        [JsonPropertyName("ReadyToStreamAt")]
        public DateTime? ReadyToStreamAt { get; set; }

        [JsonPropertyName("RequireSignedURLs")]
        public bool RequireSignedUrls { get; set; }

        [JsonPropertyName("ScheduledDeletion")]
        public DateTime? ScheduledDeletion { get; set; }

        [JsonPropertyName("Size")]
        public int Size { get; set; }

        [JsonPropertyName("Status")]
        public Status Status { get; set; } = new();

        [JsonPropertyName("Thumbnail")]
        public string? Thumbnail { get; set; }

        [JsonPropertyName("ThumbnailTimestampPct")]
        public double ThumbnailTimestampPct { get; set; }

        [JsonPropertyName("Uid")]
        public string? Uid { get; set; }

        [JsonPropertyName("UploadExpiry")]
        public DateTime? UploadExpiry { get; set; }

        [JsonPropertyName("Uploaded")]
        public DateTime? Uploaded { get; set; }

        [JsonPropertyName("Watermark")]
        public Watermark? Watermark { get; set; }
    }

    public class Input
    {
        [JsonPropertyName("Height")]
        public int Height { get; set; }

        [JsonPropertyName("Width")]
        public int Width { get; set; }
    }

    public class Playback
    {
        [JsonPropertyName("Dash")]
        public string? Dash { get; set; }

        [JsonPropertyName("Hls")]
        public string? Hls { get; set; }

        [JsonPropertyName("IFrame")]
        public string? Frame { get; set; }
    }

    public class Meta
    {
        [JsonPropertyName("Name")]
        public string? Name { get; set; }

        [JsonPropertyName("Filename")]
        public string? Filename { get; set; }

        [JsonPropertyName("Filetype")]
        public string? Filetype { get; set; }

        [JsonPropertyName("RelativePath")]
        public string? RelativePath { get; set; }

        [JsonPropertyName("Type")]
        public string? Type { get; set; }
    }

    public class Status
    {
        [JsonPropertyName("ErrorReasonCode")]
        public string? ErrorReasonCode { get; set; }

        [JsonPropertyName("ErrorReasonText")]
        public string? ErrorReasonText { get; set; }

        [JsonPropertyName("PctComplete")]
        public string? PctComplete { get; set; }

        [JsonPropertyName("State")]
        public string? State { get; set; }
    }

    public class Watermark
    {
        [JsonPropertyName("Created")]
        public DateTime? Created { get; set; }

        [JsonPropertyName("DownloadedFrom")]
        public string? DownloadedFrom { get; set; }

        [JsonPropertyName("Height")]
        public int Height { get; set; }

        [JsonPropertyName("Name")]
        public string? Name { get; set; }

        [JsonPropertyName("Opacity")]
        public double Opacity { get; set; }

        [JsonPropertyName("Padding")]
        public double Padding { get; set; }

        [JsonPropertyName("Position")]
        public string? Position { get; set; }

        [JsonPropertyName("Scale")]
        public double Scale { get; set; }

        [JsonPropertyName("Size")]
        public int Size { get; set; }

        [JsonPropertyName("Uid")]
        public string? Uid { get; set; }

        [JsonPropertyName("Width")]
        public int Width { get; set; }
    }
}