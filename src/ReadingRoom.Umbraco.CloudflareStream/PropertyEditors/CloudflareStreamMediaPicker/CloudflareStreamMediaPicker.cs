using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaPicker;

[DataEditor(
    Constants.PropertyEditors.Aliases.CloudflareStreamMediaPicker,
    EditorType.PropertyValue,
    Constants.PropertyEditors.Names.CloudflareStreamMediaPicker,
    "mediapicker3",
    ValueType = ValueTypes.Json,
    Group = Constants.PropertyEditors.Groups.CloudflareStream,
    Icon = global::Umbraco.Cms.Core.Constants.Icons.MediaImage,
    ValueEditorIsReusable = true)]
public class CloudflareStreamMediaPicker : MediaPicker3PropertyEditor
{
    [Obsolete("Obsolete")]
    public CloudflareStreamMediaPicker(IDataValueEditorFactory dataValueEditorFactory, IIOHelper ioHelper, EditorType type = EditorType.PropertyValue) : base(dataValueEditorFactory, ioHelper, type) { }

    public CloudflareStreamMediaPicker(
        IDataValueEditorFactory dataValueEditorFactory,
        IIOHelper ioHelper,
        IEditorConfigurationParser editorConfigurationParser,
        EditorType type = EditorType.PropertyValue) : base(dataValueEditorFactory, ioHelper, editorConfigurationParser, type) { }

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