using Microsoft.Extensions.Logging;
using ReadingRoom.Umbraco.CloudflareStream.Extensions;
using ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;
using ReadingRoom.Umbraco.CloudflareStream.Services;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Serialization;
using Umbraco.Cms.Core.Services;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Composing;

public class CloudflareStreamMediaNotificationHandler(
    ILogger<CloudflareStreamMediaNotificationHandler> logger,
    ICloudflareStreamMediaService service, 
    IDataTypeService dataTypeService, 
    IJsonSerializer serializer)
    : INotificationAsyncHandler<MediaDeletedNotification>, INotificationHandler<MediaSavingNotification>
{
    public async Task HandleAsync(MediaDeletedNotification notification, CancellationToken cancellationToken)
    {
        foreach (var media in notification.DeletedEntities)
        {
            if (!media.IsCloudflareStream())
            {
                continue;
            }

            var dto = media.GetCloudflareStreamValue();
            if (dto == null)
            {
                logger.LogError("Cannot delete Cloudflare Stream Media: CloudflareStream value is null for media with id {Id}", media.Id);
                continue;
            }

            var result = await service.DeleteAsync(dto.Id);
            if (!result.Success)
            {
                logger.LogError(result.Exception, "Failed to delete Cloudflare Stream Media: {MediaId}", media.Id);
            }
        }
    }

    public void Handle(MediaSavingNotification notification)
    {
        foreach (var media in notification.SavedEntities)
        {
            if (!media.IsCloudflareStream())
            {
                continue;
            }

            var property = media.GetCloudflareStreamProperty();
            if (property == null)
            {
                logger.LogError("Cannot update Cloudflare Stream Media: CloudflareStream property is null for media with id {Id}", media.Id);
                continue;
            }

            var dto = property.GetCloudflareStreamValue();
            if (dto == null)
            {
                logger.LogError("Cannot update Cloudflare Stream Media: CloudflareStream value is null for media with id {Id}", media.Id);
                continue;
            }
            
            var dataType = dataTypeService.GetDataType(property.PropertyType.DataTypeKey);
            var config = dataType?.ConfigurationAs<CloudflareStreamMediaConfiguration>();
            if (config == null)
            {
                logger.LogError("Cannot update Cloudflare Stream Media: CloudflareStreamMediaConfiguration is null for media with id {Id}", media.Id);
                continue;
            }
            
            if (config.RequiresSignedUrls == dto.IsSigned)
            {
                continue;
            }

            dto.IsSigned = config.RequiresSignedUrls;
            property.SetValue(serializer.Serialize(dto));
        }
    }
}