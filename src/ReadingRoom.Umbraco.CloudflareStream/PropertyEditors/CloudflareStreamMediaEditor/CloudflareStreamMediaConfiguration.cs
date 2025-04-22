using Umbraco.Cms.Core.PropertyEditors;

namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;

public class CloudflareStreamMediaConfiguration
{
    [ConfigurationField("requiresignedurls", "Require Signed Urls", "boolean")]
    public bool RequiresSignedUrls { get; set; }

    [ConfigurationField("expiry", "Expiry", "number")]
    public int? Expiry { get; set; }

    [ConfigurationField("deleteAfter", "Delete After", "number")]
    public int? DeleteAfter { get; set; }

    public TimeSpan? GetExpiry => Expiry.HasValue ? TimeSpan.FromDays(Expiry.Value) : null;
    public TimeSpan? GetDeleteAfter => DeleteAfter.HasValue ? TimeSpan.FromDays(DeleteAfter.Value) : null;
}