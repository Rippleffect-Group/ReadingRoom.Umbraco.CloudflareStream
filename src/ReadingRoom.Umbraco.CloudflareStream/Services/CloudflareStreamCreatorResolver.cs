using Microsoft.AspNetCore.Http;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public class CloudflareStreamCreatorResolver : ICloudflareStreamCreatorResolver
{
    public string ResolveCreator(HttpContext context)
    {
        if (context.User.Identity is not { IsAuthenticated: true })
        {
            throw new UnauthorizedAccessException();
        }

        var userId = context.User.Identity.GetUserId();

        ArgumentException.ThrowIfNullOrWhiteSpace(userId);
        
        return userId;
    }
}
