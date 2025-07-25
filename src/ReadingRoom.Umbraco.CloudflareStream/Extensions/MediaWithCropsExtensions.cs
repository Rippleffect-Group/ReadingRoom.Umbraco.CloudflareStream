using ReadingRoom.Umbraco.CloudflareStream.Models;
using Umbraco.Cms.Core.Models;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Extensions;

public static class MediaWithCropsExtensions
{
    public static CloudflareStreamMediaValue? GetCloudflareStreamMediaValue(this MediaWithCrops media)
    {
        var editor = media.Content.Properties.FirstOrDefault(x => x.PropertyType.EditorAlias == Constants.PropertyEditors.Aliases.CloudflareStreamMedia);
        return editor == null ? null : media.Content.Value<CloudflareStreamMediaValue>(editor.Alias);
    }
}