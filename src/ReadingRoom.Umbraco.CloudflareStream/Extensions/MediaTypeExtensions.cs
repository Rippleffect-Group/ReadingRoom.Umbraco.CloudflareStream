using Umbraco.Cms.Core.Models;

namespace ReadingRoom.Umbraco.CloudflareStream.Extensions;

public static class MediaTypeExtensions
{
    public static bool IsCloudflareStream(this IMediaType mediaType) => mediaType.PropertyTypes.Any(x => x.PropertyEditorAlias == Constants.PropertyEditors.Aliases.CloudflareStreamMedia);
}