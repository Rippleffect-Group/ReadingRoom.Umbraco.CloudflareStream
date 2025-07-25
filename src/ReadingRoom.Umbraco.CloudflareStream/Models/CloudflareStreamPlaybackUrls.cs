using Microsoft.AspNetCore.Http;
using System.Diagnostics.CodeAnalysis;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Models;

public class CloudflareStreamPlaybackUrls
{
    public string? HlsManifestUrl { get; init; }
    public string? IFrameUrl { get; init; }
    public string? DashManifestUrl { get; init; }
    public string? ThumbnailUrl { get; init; }

    public string? Url { get; init; }

    [MemberNotNullWhen(true, nameof(HlsManifestUrl), nameof(IFrameUrl), nameof(DashManifestUrl), nameof(ThumbnailUrl), nameof(Url))]
    public bool IsValid => HlsManifestUrl != null && IFrameUrl != null && DashManifestUrl != null && ThumbnailUrl != null && Url != null;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="autoplay">If the autoplay flag is included as a querystring parameter, the player will attempt to autoplay the video. If you don’t want the video to autoplay, don’t include the autoplay flag at all (instead of setting it to autoplay=false.) Note that mobile browsers generally do not support this attribute, the user must tap the screen to begin video playback. Please consider mobile users or users with Internet usage limits as some users don’t have unlimited Internet access before using this attribute.</param>
    /// <param name="controls">Shows video controls such as buttons for play/pause, volume controls.</param>
    /// <param name="defaultTextTrack">Will initialize the player with the specified language code’s text track enabled. The value should be the BCP-47 language code that was used to upload the text track. If the specified language code has no captions available, the player will behave as though no language code had been provided.</param>
    /// <param name="letterBoxColor">Any valid CSS color value provided will be applied to the letterboxing/pillarboxing of the player’s UI. This can be set to transparent to avoid letterboxing/pillarboxing when not in fullscreen mode.</param>
    /// <param name="loop">If enabled the player will automatically seek back to the start upon reaching the end of the video.</param>
    /// <param name="muted">If set, the audio will be initially silenced.</param>
    /// <param name="preload">This enumerated option is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. You may specify the value preload="auto" to preload the beginning of the video. Not including the option or using preload="metadata" will just load the metadata needed to start video playback when requested.</param>
    /// <param name="poster">A URL for an image to be shown before the video is started or while the video is downloading. If this attribute isn’t specified, a thumbnail image of the video is shown.</param>
    /// <param name="primaryColor">Any valid CSS color value provided will be applied to certain elements of the player’s UI.</param>
    /// <param name="startTime">A timestamp that specifies the time when playback begins. If a plain number is used such as ?startTime=123, it will be interpreted as 123 seconds. More human readable timestamps can also be used, such as ?startTime=1h12m27s for 1 hour, 12 minutes, and 27 seconds.</param>
    /// <param name="adUrl">The Stream Player supports VAST Tags to insert ads such as prerolls. If you have a VAST tag URI, you can pass it to the Stream Player by setting the ad-url parameter.</param>
    /// <returns></returns>
    public string? CreateIFrameUrl(
        bool autoplay = false,
        bool controls = true,
        string? defaultTextTrack = null,
        string? letterBoxColor = null,
        bool loop = false,
        bool muted = false,
        PreloadMode preload = PreloadMode.None,
        string? poster = null,
        string? primaryColor = null,
        TimeSpan? startTime = null,
        string? adUrl = null)
    {
        if (IFrameUrl.IsNullOrWhiteSpace())
        {
            return null;
        }

        startTime ??= TimeSpan.Zero;

        var kvp = new Dictionary<string, string?>
        {
            { "controls", controls.ToString().ToLower() },
            { "defaultTextTrack", defaultTextTrack },
            { "letterBoxColor", letterBoxColor },
            { "loop", loop.ToString().ToLower() },
            { "primaryColor", primaryColor },
            { "startTime", $"{startTime.Value.TotalSeconds}s" },
            { "poster", poster },
            { "ad-url", adUrl }
        };

        if (autoplay)
        {
            kvp.Add("autoplay", "true");
        }

        if (muted)
        {
            kvp.Add("muted", "true");
        }

        if (preload != PreloadMode.None)
        {
            var preloadOption = preload switch
            {
                PreloadMode.Auto => "auto",
                PreloadMode.Metadata => "metadata",
                _ => "none"
            };
            kvp.Add("preload", preloadOption);
        }

        var filtered = kvp
            .Where(x => !x.Value.IsNullOrWhiteSpace())
            .ToDictionary(x => x.Key, x => x.Value);

        var query = QueryString.Create(filtered);
        if (IFrameUrl.StartsWith("/"))
        {
            return $"{IFrameUrl}{query.ToUriComponent()}";
        }

        var builder = new UriBuilder(IFrameUrl)
        {
            Query = query.ToUriComponent()
        };

        return builder.Uri.ToString();
    }

    /// <summary>
    ///     Get an animated thumbnail of the video. See https://developers.cloudflare.com/stream/viewing-videos/displaying-thumbnails/#animated-gif-thumbnails
    /// </summary>
    /// <param name="startAt"></param>
    /// <param name="height"></param>
    /// <param name="width"></param>
    /// <param name="fit"></param>
    /// <param name="duration"></param>
    /// <param name="fps"></param>
    /// <returns></returns>
    public string? AnimatedThumbnailUrl(TimeSpan? startAt = null, long height = 300, long width = 400, ThumbnailCropType fit = ThumbnailCropType.Crop, TimeSpan? duration = null, int fps = 8)
    {
        startAt ??= TimeSpan.Zero;
        duration ??= TimeSpan.FromSeconds(5);
        height = Math.Clamp(height, 10, 600);
        width = Math.Clamp(width, 10, 600);
        var url = ThumbnailUrl;
        if (url == null)
        {
            return null;
        }

        var kvp = new Dictionary<string, string?>
        {
            { "time", $"{startAt.Value.TotalSeconds}s" },
            { "height", height.ToString() },
            { "width", width.ToString() },
            { "fit", fit.ToString().ToLower() },
            { "duration", $"{duration.Value.TotalSeconds}s" },
            { "fps", fps.ToString() }
        };

        url = url.Replace(".jpg", ".gif");
        var query = QueryString.Create(kvp);
        if (url.StartsWith("/"))
        {
            return $"{url}{query.ToUriComponent()}";
        }

        var builder = new UriBuilder(url)
        {
            Query = query.ToUriComponent()
        };
        return builder.Uri.ToString();
    }
}