using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaPicker;

[DataEditor(
    Constants.PropertyEditors.Aliases.CloudflareStreamMediaPicker,
    ValueType = ValueTypes.Json,
    ValueEditorIsReusable = true)]
public class CloudflareStreamMediaPicker(
    IDataValueEditorFactory dataValueEditorFactory,
    IIOHelper ioHelper)
    : MediaPicker3PropertyEditor(dataValueEditorFactory, ioHelper)
{
    protected override IConfigurationEditor CreateConfigurationEditor()
    {
        var config = base.CreateConfigurationEditor();

        var fieldsToRemove = new[]
        {
            "enableLocalFocalPoint",
            "crops",
            "filter"
        };

        var filterField = config.Fields.FirstOrDefault(x => x.Key == "filter");
        foreach (var field in fieldsToRemove)
        {
            var prop = config.Fields.FirstOrDefault(x => x.Key == field);
            if (prop != null)
            {
                config.Fields.Remove(prop);
            }
        }

        if (filterField == null)
        {
            return config;
        }

        filterField.Config = new Dictionary<string, object>
        {
            { "itemType", Constants.MediaType.Alias }
        };
        config.Fields.Add(filterField);
        return config;
    }
}