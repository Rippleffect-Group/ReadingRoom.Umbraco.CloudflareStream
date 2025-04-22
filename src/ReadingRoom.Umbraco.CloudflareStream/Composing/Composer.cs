using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;

namespace ReadingRoom.Umbraco.CloudflareStream.Composing;

public class Composer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.ManifestFilters().Append<ManifestFilter>();
        builder.AddCloudflareStream();
    }
}