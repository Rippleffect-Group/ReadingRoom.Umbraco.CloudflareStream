using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;

[DataEditor(Constants.PropertyEditors.Aliases.CloudflareStreamMedia,
    ValueEditorIsReusable = true)]
public class CloudflareStreamMediaPropertyEditor(
    IDataValueEditorFactory dataValueEditorFactory,
    IIOHelper ioHelper)
    : DataEditor(dataValueEditorFactory)
{
    protected override IConfigurationEditor CreateConfigurationEditor() => new CloudflareStreamMediaConfigurationEditor(ioHelper);
}