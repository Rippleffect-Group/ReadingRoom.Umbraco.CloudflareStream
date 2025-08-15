using ReadingRoom.Umbraco.CloudflareStream.Services;

namespace ReadingRoom.Umbraco.CloudflareStream.TestSite.Services;

public class CloudflareStreamCreatorService : ICloudflareStreamCreatorResolver
{
    public string ResolveCreator(HttpContext context)
    {
        
        return "testCreator";
    }
}