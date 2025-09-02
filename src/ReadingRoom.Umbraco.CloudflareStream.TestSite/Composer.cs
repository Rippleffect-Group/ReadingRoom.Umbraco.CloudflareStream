using ReadingRoom.Umbraco.CloudflareStream.Composing;
using ReadingRoom.Umbraco.CloudflareStream.Services;
using ReadingRoom.Umbraco.CloudflareStream.TestSite.Services;
using Umbraco.Cms.Core.Composing;

namespace ReadingRoom.Umbraco.CloudflareStream.TestSite;

public class Composer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.SetCloudflareStreamCreatorService<CloudflareStreamCreatorService>();
    }
}