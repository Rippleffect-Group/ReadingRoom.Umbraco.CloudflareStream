using Microsoft.Extensions.Configuration;
using ReadingRoom.CloudflareStream;
using ReadingRoom.Umbraco.CloudflareStream.Extensions;
using ReadingRoom.Umbraco.CloudflareStream.Services;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Composing;

public class ServerVariableNotificationHandler(
    IConfiguration configuration,
    IMediaTypeService mediaTypeService,
    ICloudflareStreamUrlHelper urlHelper)
    : INotificationHandler<ServerVariablesParsingNotification>
{
    public void Handle(ServerVariablesParsingNotification notification)
    {
        var mediaTypes = mediaTypeService.GetAll().Where(x => x.IsCloudflareStream()).Select(x => new
        {
            alias = x.Alias,
            icon = x.Icon,
            name = x.Name,
        });

        var settings = CloudflareStreamOptions.Empty;
        configuration.Bind(ReadingRoom.CloudflareStream.Constants.AppSettingsSection, settings);

        notification.ServerVariables.Add("CloudflareStream", new Dictionary<string, object>
        {
            { "enabled", settings.IsValid() },
            { "mediaTypes", mediaTypes },
            { "placeHolderImageUrl", settings.PlaceHolderImageUrl },
            { "mediaPickerView", Constants.Paths.MediaPicker },
            { "fileDropZoneView", Constants.Paths.FileDropZone },
            { "propertyEditorAlias", Constants.PropertyEditors.Aliases.CloudflareStreamMedia },
            { "baseMediaPath", urlHelper.BaseMediaPath.EnsureEndsWith("/") },
            { "thumbnailPath", "thumbnails/thumbnail.gif" },
        });
    }
}