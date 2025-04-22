using Newtonsoft.Json;
using ReadingRoom.Umbraco.CloudflareStream.Models;
using ReadingRoom.Umbraco.CloudflareStream.Services;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Extensions;

// ReSharper disable ClassNeverInstantiated.Global

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;

public class CloudflareStreamMediaValueConverter(ICloudflareStreamUrlHelper urlHelper, IPublishedValueFallback publishedValueFallback) : PropertyValueConverterBase
{
    public override bool IsConverter(IPublishedPropertyType propertyType) => propertyType.EditorAlias.InvariantEquals(Constants.PropertyEditors.Aliases.CloudflareStreamMedia);

    public override object? ConvertIntermediateToObject(
        IPublishedElement owner,
        IPublishedPropertyType propertyType,
        PropertyCacheLevel referenceCacheLevel,
        object? inter,
        bool preview)
    {
        if (inter is not string data || !data.DetectIsJson())
        {
            return null;
        }

        var dto = JsonConvert.DeserializeObject<CloudflareStreamMediaValueDto>(data);
        if (dto == null)
        {
            return null;
        }

        var urls = urlHelper.CreateLocalUrls(dto.Id);
        return CloudflareStreamMediaValue.Create((IPublishedContent)owner, dto.Id, dto.Size, dto.Width, dto.Height, dto.Duration, dto.UploadDate.GetValueOrDefault(), urls, publishedValueFallback);
    }

    public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(CloudflareStreamMediaValue);
}