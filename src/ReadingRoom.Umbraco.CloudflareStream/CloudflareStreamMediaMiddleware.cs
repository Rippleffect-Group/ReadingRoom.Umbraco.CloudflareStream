using Microsoft.AspNetCore.Http;
using ReadingRoom.Umbraco.CloudflareStream.Extensions;
using ReadingRoom.Umbraco.CloudflareStream.Models;
using ReadingRoom.Umbraco.CloudflareStream.Services;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Services;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream;

public class CloudflareStreamMediaMiddleware : IMiddleware
{
    private readonly ICloudflareStreamMediaAuthoriseService _authoriseService;
    private readonly ICloudflareStreamUrlHelper _urlHelper;
    private readonly ICloudflareStreamMediaService _cloudflareStreamMediaService;
    private readonly IMediaService _mediaService;
    private readonly string _streamPath;

    public CloudflareStreamMediaMiddleware(
        ICloudflareStreamMediaService cloudflareStreamMediaService,
        IMediaService mediaService,
        ICloudflareStreamMediaAuthoriseService authoriseService,
        ICloudflareStreamUrlHelper urlHelper)
    {
        _cloudflareStreamMediaService = cloudflareStreamMediaService;
        _mediaService = mediaService;
        _authoriseService = authoriseService;
        _urlHelper = urlHelper;
        _streamPath = _urlHelper.BaseMediaPath;
    }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        var path = context.Request.Path.Value;
        if (!(path?.StartsWith(_streamPath) ?? false))
        {
            await next(context);
            return;
        }

        var requestModel = CloudflareStreamMediaRequest.Parse(path, _urlHelper.BaseMediaPath);
        if (!requestModel.IsValid)
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            return;
        }

        var mediaPath = requestModel.MediaPath;
        var media = _mediaService.GetMediaByPath(mediaPath);
        if (media == null)
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            return;
        }

        var dto = media.GetCloudflareStreamValue();
        if (dto == null)
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            return;
        }

        if (!await AuthoriseRequest(context, requestModel.StreamId, media))
        {
            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
            return;
        }

        var urls = await _cloudflareStreamMediaService.CreatePlaybackUrls(dto.Id, dto.IsSigned);
        if (urls == null)
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            return;
        }

        var url = requestModel.RequestType switch
        {
            CloudflareStreamMediaRequestType.MediaPath => urls.IFrameUrl,
            CloudflareStreamMediaRequestType.Thumbnail => requestModel.Extension switch
            {
                ".gif" => urls.AnimatedThumbnailUrl(),
                _ => urls.ThumbnailUrl
            },
            CloudflareStreamMediaRequestType.Frame => urls.IFrameUrl,
            CloudflareStreamMediaRequestType.Hls => urls.HlsManifestUrl,
            CloudflareStreamMediaRequestType.Dash => urls.DashManifestUrl,
            CloudflareStreamMediaRequestType.Unknown => null,
            _ => null
        };

        if (url.IsNullOrWhiteSpace())
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            return;
        }

        var builder = new UriBuilder(url);
        if (requestModel.RequestType == CloudflareStreamMediaRequestType.Frame)
        {
            builder.Query = _urlHelper.CleanFrameQueryString(context.Request.Query).ToUriComponent();
        }

        context.Response.Redirect(builder.Uri.ToString(), false);
    }

    private async Task<bool> AuthoriseRequest(HttpContext context, string videoId, IMedia media) => await _authoriseService.AuthoriseRequest(videoId, context, media);
}