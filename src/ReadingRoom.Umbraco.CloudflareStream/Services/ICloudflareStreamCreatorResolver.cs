using Microsoft.AspNetCore.Http;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public interface ICloudflareStreamCreatorResolver
{
    public string ResolveCreator(HttpContext context);
}