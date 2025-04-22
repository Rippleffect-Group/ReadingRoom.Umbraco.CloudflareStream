using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;
using Umbraco.Cms.Core.Models;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Services;

public class CloudflareStreamMediaUrlGenerator(ICloudflareStreamUrlHelper urlHelper, ILogger<CloudflareStreamMediaUrlGenerator> logger) : IMediaUrlGenerator
{
    private readonly ILogger _logger = logger;

    public bool TryGetMediaPath(string? propertyEditorAlias, object? value, out string? mediaPath)
    {
        mediaPath = null;
        if (propertyEditorAlias != Constants.PropertyEditors.Aliases.CloudflareStreamMedia)
        {
            return false;
        }

        if (value is not string data || !data.DetectIsJson())
        {
            return false;
        }

        try
        {
            var dto = JsonConvert.DeserializeObject<CloudflareStreamMediaValueDto>(data);
            if (dto == null)
            {
                return false;
            }

            var mediaValue = urlHelper.GetMediaPath(dto.Id);
            mediaPath = mediaValue;
            return !mediaPath.IsNullOrWhiteSpace();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to get media path for Cloudflare Stream media");
            return false;
        }
    }
}