using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;

public class CloudflareStreamMediaConfigurationEditor : ConfigurationEditor<CloudflareStreamMediaConfiguration>
{
    [Obsolete("Obsolete")]
    public CloudflareStreamMediaConfigurationEditor(IIOHelper ioHelper) : base(ioHelper) { }

    public CloudflareStreamMediaConfigurationEditor(IIOHelper ioHelper, IEditorConfigurationParser editorConfigurationParser) : base(ioHelper, editorConfigurationParser) { }
}