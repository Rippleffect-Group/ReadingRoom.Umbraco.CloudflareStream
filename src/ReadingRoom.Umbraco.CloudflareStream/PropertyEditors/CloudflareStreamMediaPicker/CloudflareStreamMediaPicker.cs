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
}