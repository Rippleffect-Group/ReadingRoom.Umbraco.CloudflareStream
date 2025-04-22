using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;

[DataEditor(
    Constants.PropertyEditors.Aliases.CloudflareStreamMedia,
    Constants.PropertyEditors.Names.CloudflareStreamMedia,
    Constants.PropertyEditors.Views.CloudflareStream,
    Group = Constants.PropertyEditors.Groups.CloudflareStream,
    Icon = global::Umbraco.Cms.Core.Constants.Icons.MediaVideo,
    ValueEditorIsReusable = true)]
public class CloudflareStreamMediaPropertyEditor(
    IDataValueEditorFactory dataValueEditorFactory,
    IIOHelper ioHelper,
    IEditorConfigurationParser editorConfigurationParser,
    EditorType type = EditorType.PropertyValue)
    : DataEditor(dataValueEditorFactory, type)
{
    protected override IConfigurationEditor CreateConfigurationEditor() => new CloudflareStreamMediaConfigurationEditor(ioHelper, editorConfigurationParser);
}