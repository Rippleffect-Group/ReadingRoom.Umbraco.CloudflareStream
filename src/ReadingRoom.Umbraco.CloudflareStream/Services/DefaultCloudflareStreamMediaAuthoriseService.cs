using Microsoft.AspNetCore.Http;
using Umbraco.Cms.Core.Models;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public class DefaultCloudflareStreamMediaAuthoriseService : ICloudflareStreamMediaAuthoriseService
{
    public Task<bool> AuthoriseRequest(string videoId, HttpContext context, IMedia media) => Task.FromResult(true);
}