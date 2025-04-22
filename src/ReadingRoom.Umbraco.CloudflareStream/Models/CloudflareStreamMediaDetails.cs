using System.Text.Json;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Models;
public class ToFirstUpperNamingPolicy : JsonNamingPolicy
{
    public override string ConvertName(string name) => name.ToFirstUpperInvariant();
}

public class CloudflareStreamMediaDetails(
    CloudflareStreamMediaDetails.DetailsResult result,
    bool success,
    List<CloudflareStreamMediaDetails.MessageDetail> messages,
    List<CloudflareStreamMediaDetails.MessageDetail> errors)
{
    public List<MessageDetail> Errors { get; } = errors;
    public List<MessageDetail> Messages { get; } = messages;
    public DetailsResult Result { get; } = result;
    public bool Success { get; } = success;

    public class MessageDetail(int code, string message)
    {
        public int Code { get; } = code;
        public string Message { get; } = message;
    }
    public class DetailsResult(
        List<string> allowedOrigins,
        DateTime? created,
        string? creator,
        decimal? duration,
        Input input,
        string? liveInput,
        decimal? maxDurationSeconds,
        Meta meta,
        DateTime? modified,
        Playback playback,
        string? preview,
        bool readyToStream,
        DateTime? readyToStreamAt,
        bool requireSignedUrls,
        DateTime? scheduledDeletion,
        int size,
        Status status,
        string? thumbnail,
        double thumbnailTimestampPct,
        string? uid,
        DateTime? uploadExpiry,
        DateTime? uploaded,
        Watermark? watermark)
    {
        public List<string> AllowedOrigins { get; } = allowedOrigins;
        public DateTime? Created { get; } = created;
        public string? Creator { get; } = creator;
        public decimal? Duration { get; } = duration;
        public Input Input { get; } = input;
        public string? LiveInput { get; } = liveInput;
        public decimal? MaxDurationSeconds { get; } = maxDurationSeconds;
        public Meta Meta { get; } = meta;
        public DateTime? Modified { get; } = modified;
        public Playback Playback { get; } = playback;
        public string? Preview { get; } = preview;
        public bool ReadyToStream { get; } = readyToStream;
        public DateTime? ReadyToStreamAt { get; } = readyToStreamAt;
        public bool RequireSignedUrls { get; } = requireSignedUrls;
        public DateTime? ScheduledDeletion { get; } = scheduledDeletion;
        public int Size { get; } = size;
        public Status Status { get; } = status;
        public string? Thumbnail { get; } = thumbnail;
        public double ThumbnailTimestampPct { get; } = thumbnailTimestampPct;
        public string? Uid { get; } = uid;
        public DateTime? UploadExpiry { get; } = uploadExpiry;
        public DateTime? Uploaded { get; } = uploaded;
        public Watermark? Watermark { get; } = watermark;
    }

    public class Input(int height, int width)
    {
        public int Height { get; } = height;
        public int Width { get; } = width;
    }

    public class Playback(string? dash, string? hls, string? frame)
    {
        public string? Dash { get; } = dash;
        public string? Hls { get; } = hls;
        public string? Frame { get; } = frame;
    }

    public class Meta(string? name, string? filename, string? filetype, string? relativePath, string? type)
    {
        public string? Name { get; } = name;
        public string? Filename { get; } = filename;
        public string? Filetype { get; } = filetype;
        public string? RelativePath { get; } = relativePath;
        public string? Type { get; } = type;
    }

    public class Status(string? errorReasonCode, string? errorReasonText, string? pctComplete, string? state)
    {
        public string? ErrorReasonCode { get; } = errorReasonCode;
        public string? ErrorReasonText { get; } = errorReasonText;
        public string? PctComplete { get; } = pctComplete;
        public string? State { get; } = state;
    }

    public class Watermark(
        DateTime? created,
        string? downloadedFrom,
        int height,
        string? name,
        double opacity,
        double padding,
        string? position,
        double scale,
        int size,
        string? uid,
        int width)
    {
        public DateTime? Created { get; } = created;
        public string? DownloadedFrom { get; } = downloadedFrom;
        public int Height { get; } = height;
        public string? Name { get; } = name;
        public double Opacity { get; } = opacity;
        public double Padding { get; } = padding;
        public string? Position { get; } = position;
        public double Scale { get; } = scale;
        public int Size { get; } = size;
        public string? Uid { get; } = uid;
        public int Width { get; } = width;
    }
}