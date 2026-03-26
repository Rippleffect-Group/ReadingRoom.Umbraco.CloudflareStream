namespace ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;

public class CloudflareStreamMediaConfiguration
{
    public bool RequiresSignedUrls { get; set; }
    public int? Expiry { get; set; }
    public int? DeleteAfter { get; set; }

    public TimeSpan? GetExpiry => Expiry.HasValue ? TimeSpan.FromDays(Expiry.Value) : null;
    public TimeSpan? GetDeleteAfter => DeleteAfter.HasValue ? TimeSpan.FromDays(DeleteAfter.Value) : null;
}