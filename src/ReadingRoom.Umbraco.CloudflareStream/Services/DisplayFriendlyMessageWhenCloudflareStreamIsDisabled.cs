using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public class DisplayFriendlyMessageWhenCloudflareStreamIsDisabled : INotificationHandler<SendingMediaNotification>
{
    public void Handle(SendingMediaNotification notification)
    {
        var media = notification.Media;

        // Any properties that have alias umbracoFile but Label editor suggests that Cloudflare Stream is disabled
        var properties = media.Properties
            .Where(x => x.Alias == global::Umbraco.Cms.Core.Constants.Conventions.Media.File && x.PropertyEditor?.Alias == global::Umbraco.Cms.Core.Constants.PropertyEditors.Aliases.Label).ToList();

        if (!properties.Any())
        {
            return;
        }

        foreach (var property in properties)
        {
            var value = property.Value?.ToString();
            property.View = "readonlyvalue";
            var technicalDetails = value.IsNullOrWhiteSpace()
                ? ""
                : $"""
                   <div>
                      <h5>Technical Details</h5>
                      <pre><code>{value}</code></pre>
                   </div>
                   """;

            property.Value =
                $"""
                 <div class='alert alert-warning'>
                 Cloudflare Stream is not configured for this environment
                 </div>
                 {technicalDetails}
                 """;
        }
    }
}