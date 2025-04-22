using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using ReadingRoom.CloudflareStream;
using ReadingRoom.Umbraco.CloudflareStream.Extensions;
using ReadingRoom.Umbraco.CloudflareStream.Models;
using System.Globalization;
using System.Web;
using Umbraco.Cms.Core.Configuration.Models;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public class CloudflareStreamUrlHelper : ICloudflareStreamUrlHelper
{
    private readonly CloudflareStreamOptions _options;

    public CloudflareStreamUrlHelper(IOptions<GlobalSettings> globalSettings, IOptions<CloudflareStreamOptions> options)
    {
        _options = options.Value;
        var umbMediaPath = globalSettings.Value.UmbracoMediaPath
            .TrimStart("~")
            .EnsureStartsWith("/")
            .EnsureEndsWith("/");

        BaseMediaPath = $"{umbMediaPath}stream";
    }

    public string BaseMediaPath { get; }

    public string? GetMediaPath(string id) => $"{BaseMediaPath}/{id}";

    public CloudflareStreamPlaybackUrls CreateLocalUrls(string id)
    {
        var baseUri = $"{BaseMediaPath}";
        var thumbnailUri = $"{baseUri}/{id}/thumbnails/thumbnail.jpg";
        var hlsUri = $"{baseUri}/{id}/manifest/video.m3u8";
        var dashUri = $"{baseUri}/{id}/manifest/video.mpd";
        var ifame = $"{baseUri}/{id}/iframe";
        var urls = new CloudflareStreamPlaybackUrls
        {
            HlsManifestUrl = hlsUri,
            DashManifestUrl = dashUri,
            ThumbnailUrl = thumbnailUri,
            IFrameUrl = ifame,
            Url = GetMediaPath(id)
        };
        return urls;
    }

    public CloudflareStreamPlaybackUrls CreateCloudflareStreamUrls(string id, string? accessToken = null)
    {
        accessToken ??= id;
        var baseUrl = _options.CustomerSubdomainUri?.ToString().EnsureEndsWith("/");
        var thumbnailUrl = $"{baseUrl}{accessToken}/thumbnails/thumbnail.jpg";
        var hlsUrl = $"{baseUrl}{accessToken}/manifest/video.m3u8";
        var dashUrl = $"{baseUrl}{accessToken}/manifest/video.mpd";
        var frameUrl = $"{baseUrl}{accessToken}/iframe";
        var urls = new CloudflareStreamPlaybackUrls
        {
            HlsManifestUrl = hlsUrl,
            DashManifestUrl = dashUrl,
            ThumbnailUrl = thumbnailUrl,
            IFrameUrl = frameUrl,
            Url = GetMediaPath(id)
        };
        return urls;
    }

    public bool IsValidUrl(string? url) => url?.StartsWith(BaseMediaPath) ?? false;

    public QueryString CleanFrameQueryString(IQueryCollection requestQuery)
    {
        var dictionary = new Dictionary<string, string?>();

        foreach (var query in requestQuery)
        {
            switch (query.Key)
            {
                case "autoplay":
                    if (query.Value == "true")
                    {
                        dictionary.Add(query.Key, query.Value);
                    }

                    continue;
                case "loop":
                case "controls":
                case "muted":
                    if (query.Value == "false" || query.Value == "true")
                    {
                        dictionary.Add(query.Key, query.Value);
                    }

                    continue;
                case "defaultTextTrack":
                case "preload":
                case "src":
                case "startTime":
                    if (string.IsNullOrWhiteSpace(query.Value))
                    {
                        continue;
                    }

                    dictionary.Add(query.Key, query.Value);
                    continue;
                case "letterboxColor":
                case "primaryColor":
                    if (!string.IsNullOrWhiteSpace(query.Value))
                    {
                        dictionary.Add(query.Key, query.Value);
                    }

                    continue;
                case "poster":
                case "ad-url":
                    if (IsUrlValid(query.Value))
                    {
                        dictionary.Add(query.Key, query.Value);
                    }

                    continue;
                default:
                    continue;
            }
        }

        return QueryString.Create(dictionary);
    }

    private bool IsUrlValid(string? url)
    {
        return Uri.TryCreate(url, UriKind.Absolute, out _);
    }
}