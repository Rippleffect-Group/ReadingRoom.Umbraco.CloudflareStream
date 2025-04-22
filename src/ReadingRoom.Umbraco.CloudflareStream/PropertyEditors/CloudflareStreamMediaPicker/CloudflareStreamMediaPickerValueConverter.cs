using ReadingRoom.Umbraco.CloudflareStream.Extensions;
using ReadingRoom.Umbraco.CloudflareStream.Models;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.PropertyEditors.ValueConverters;
using Umbraco.Cms.Core.PublishedCache;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Serialization;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaPicker;

public class CloudflareStreamMediaPickerValueConverter : MediaPickerWithCropsValueConverter
{
    [Obsolete("Scheduled for removal in V14")]
    public CloudflareStreamMediaPickerValueConverter(
        IPublishedSnapshotAccessor publishedSnapshotAccessor,
        IPublishedUrlProvider publishedUrlProvider,
        IPublishedValueFallback publishedValueFallback,
        IJsonSerializer jsonSerializer) : base(publishedSnapshotAccessor, publishedUrlProvider, publishedValueFallback, jsonSerializer) { }

    public override bool IsConverter(IPublishedPropertyType propertyType) => propertyType.EditorAlias.Equals(Constants.PropertyEditors.Aliases.CloudflareStreamMediaPicker);

    public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => IsMultipleDataType(propertyType.DataType)
        ? typeof(IEnumerable<CloudflareStreamMediaValue>)
        : typeof(CloudflareStreamMediaValue);

    private static bool IsMultipleDataType(PublishedDataType dataType) => dataType.ConfigurationAs<MediaPicker3Configuration>()?.Multiple ?? false;

    public override object? ConvertIntermediateToObject(IPublishedElement owner, IPublishedPropertyType propertyType, PropertyCacheLevel referenceCacheLevel, object? inter, bool preview)
    {
        var obj = base.ConvertIntermediateToObject(owner, propertyType, referenceCacheLevel, inter, preview);

        if (!IsMultipleDataType(propertyType.DataType))
        {
            return obj is not MediaWithCrops media ? null : media.GetCloudflareStreamMediaValue();
        }

        var list = new List<CloudflareStreamMediaValue?>();
        if (obj is not IEnumerable<MediaWithCrops> crops)
        {
            return null;
        }

        foreach (var crop in crops)
        {
            var cloudflareStreamMediaValue = crop.GetCloudflareStreamMediaValue();
            if (cloudflareStreamMediaValue != null)
            {
                list.Add(cloudflareStreamMediaValue);
            }
        }

        return list;
    }
}