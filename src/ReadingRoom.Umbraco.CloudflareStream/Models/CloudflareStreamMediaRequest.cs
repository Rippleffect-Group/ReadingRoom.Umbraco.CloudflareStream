using System.Diagnostics.CodeAnalysis;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Models;

public class CloudflareStreamMediaRequest
{
    private CloudflareStreamMediaRequest(string? extension, string? streamId, string? mediaPath, CloudflareStreamMediaRequestType requestType)
    {
        Extension = extension;
        StreamId = streamId;
        MediaPath = mediaPath;
        RequestType = requestType;
    }

    [MemberNotNullWhen(true, nameof(StreamId), nameof(MediaPath))]
    public bool IsValid => !string.IsNullOrWhiteSpace(StreamId);

    public string? Extension { get; }
    public string? MediaPath { get; }
    public string? StreamId { get; }
    public CloudflareStreamMediaRequestType RequestType { get; }

    public static CloudflareStreamMediaRequest Parse(string path, string baseMediaPath)
    {
        var cleanPath = path.Replace(baseMediaPath, "").TrimStart("/");
        var segements = cleanPath.Split('/', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
        var streamId = segements.FirstOrDefault();
        if (streamId.IsNullOrWhiteSpace())
        {
            return new CloudflareStreamMediaRequest(null, null, null, CloudflareStreamMediaRequestType.Unknown);
        }

        var mediaPath = $"{baseMediaPath}/{streamId}";
        var extension = Path.GetExtension(path);

        if (segements.Length < 2)
        {
            return new CloudflareStreamMediaRequest(null, streamId, mediaPath, CloudflareStreamMediaRequestType.MediaPath);
        }

        var restOfPath = cleanPath.Replace(streamId, "");
        var type = restOfPath switch
        {
            "/thumbnails/thumbnail.jpg" => CloudflareStreamMediaRequestType.Thumbnail,
            "/thumbnails/thumbnail.gif" => CloudflareStreamMediaRequestType.Thumbnail,
            "/iframe" => CloudflareStreamMediaRequestType.Frame,
            "/manifest/video.m3u8" => CloudflareStreamMediaRequestType.Hls,
            "/manifest/video.mpd" => CloudflareStreamMediaRequestType.Dash,
            _ => CloudflareStreamMediaRequestType.Unknown
        };

        return new CloudflareStreamMediaRequest(extension, streamId, mediaPath, type);
    }
}