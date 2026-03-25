using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;

public class CloudflareStreamMediaConfigurationEditor(IIOHelper ioHelper)
    : ConfigurationEditor<CloudflareStreamMediaConfiguration>(ioHelper);