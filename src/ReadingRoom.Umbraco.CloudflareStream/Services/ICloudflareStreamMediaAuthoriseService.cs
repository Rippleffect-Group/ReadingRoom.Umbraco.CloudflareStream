using Microsoft.AspNetCore.Http;
using Umbraco.Cms.Core.Models;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public interface ICloudflareStreamMediaAuthoriseService
{
    Task<bool> AuthoriseRequest(string videoId, HttpContext context, IMedia media);
}