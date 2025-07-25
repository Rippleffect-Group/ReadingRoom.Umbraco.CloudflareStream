using Microsoft.AspNetCore.Http;
using ReadingRoom.Umbraco.CloudflareStream.Models;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public interface ICloudflareStreamUrlHelper
{
    string BaseMediaPath { get; }

    string? GetMediaPath(string id);

    CloudflareStreamPlaybackUrls CreateLocalUrls(string id);

    CloudflareStreamPlaybackUrls? CreateCloudflareStreamUrls(string id, string? accessToken = null);

    bool IsValidUrl(string? url);

    QueryString CleanFrameQueryString(IQueryCollection requestQuery);
}