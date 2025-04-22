using Newtonsoft.Json;
using ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;
using Umbraco.Cms.Core.Models;

namespace ReadingRoom.Umbraco.CloudflareStream.Extensions;

public static class MediaExtensions
{
    public static bool IsCloudflareStream(this IMedia media) => media.Properties.Any(x => x.PropertyType.PropertyEditorAlias == Constants.PropertyEditors.Aliases.CloudflareStreamMedia);

    public static CloudflareStreamMediaValueDto? GetCloudflareStreamValue(this IMedia media) => media.GetCloudflareStreamProperty()?.GetCloudflareStreamValue();

    public static CloudflareStreamMediaValueDto? GetCloudflareStreamValue(this IProperty? property)
    {
        if (property?.GetValue() is not string json)
        {
            return null;
        }

        try
        {
            return JsonConvert.DeserializeObject<CloudflareStreamMediaValueDto>(json);
        }
        catch
        {
            return null;
        }
    }

    public static IProperty? GetCloudflareStreamProperty(this IMedia media)
    {
        return media.Properties.FirstOrDefault(x => x.PropertyType.PropertyEditorAlias == Constants.PropertyEditors.Aliases.CloudflareStreamMedia);
    }
}