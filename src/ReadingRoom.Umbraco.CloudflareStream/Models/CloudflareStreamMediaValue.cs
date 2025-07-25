using Umbraco.Cms.Core.Models.PublishedContent;

namespace ReadingRoom.Umbraco.CloudflareStream.Models;

public class CloudflareStreamMediaValue : PublishedContentWrapped
{
    private CloudflareStreamMediaValue(
        IPublishedContent content,
        string videoId,
        long size,
        long width,
        long height,
        long duration,
        DateTime uploadDate,
        CloudflareStreamPlaybackUrls playback,
        IPublishedValueFallback publishedValueFallback) : base(content, publishedValueFallback)
    {
        Duration = duration;
        Playback = playback;
        Size = size;
        Height = height;
        Width = width;
        VideoId = videoId;
        UploadDate = uploadDate;
    }

    public CloudflareStreamPlaybackUrls Playback { get; }
    public long Size { get; }
    public long Height { get; }
    public long Width { get; }
    public string VideoId { get; }
    public long Duration { get; }
    public DateTime UploadDate { get; }

    public string? AspectRatio => GetAspectRatio();
    
    private string? GetAspectRatio()
    {
        try
        {
            var gcd = GreatestCommonDivisor(Width, Height);
            var simplifiedWidth = Width / gcd;
            var simplifiedHeight = Height / gcd;
            return $"{simplifiedWidth}/{simplifiedHeight}";
        }
        catch (Exception)
        {
            return null;
        }
    }

    private static long GreatestCommonDivisor(long a, long b)
    {
        while (b != 0)
        {
            var temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    public static CloudflareStreamMediaValue? Create(
        IPublishedContent owner,
        string id,
        long size,
        long width,
        long height,
        long duration,
        DateTime uploadDate,
        CloudflareStreamPlaybackUrls urls,
        IPublishedValueFallback fallback)
    {
        return new CloudflareStreamMediaValue(owner, id, size, width, height, duration, uploadDate, urls, fallback);
    }
}