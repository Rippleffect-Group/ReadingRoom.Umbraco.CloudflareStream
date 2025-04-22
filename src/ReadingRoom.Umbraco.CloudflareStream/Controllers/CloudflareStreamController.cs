using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReadingRoom.Umbraco.CloudflareStream.Services;
using System.Text.Json.Serialization;
using Umbraco.Cms.Web.BackOffice.Filters;
using Umbraco.Cms.Web.Common.Attributes;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Web.Common.Filters;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.Controllers;

[IsBackOffice]
[UmbracoUserTimeoutFilter]
[Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
[DisableBrowserCache]
[UmbracoRequireHttps]
[CustomJsonFormatter]
public class CloudflareStreamController(ICloudflareStreamMediaService cloudflareStreamMediaService, ILogger<CloudflareStreamController> logger) : UmbracoApiController
{
    private readonly ILogger _logger = logger;

    [HttpPost]
    public async Task<IActionResult> Initialise()
    {
        var length = Request.Headers["Upload-Length"].ToString();
        var metadata = Request.Headers["Upload-Metadata"].ToString();
        var creator = Request.Headers["Upload-Creator"].ToString();
        if (!Guid.TryParse(Request.Headers["Upload-DataType"].ToString(), out var dataType))
        {
            _logger.LogError("Invalid data type");
            return BadRequest();
        }

        if (creator.IsNullOrWhiteSpace())
        {
            creator = User.Identity?.GetUserId();
        }

        var result = await cloudflareStreamMediaService.InitialiseUploadAsync(length, metadata, creator, dataType);
        if (!result.IsSuccess)
        {
            return BadRequest();
        }

        Response.Headers.AccessControlAllowHeaders = "*";
        Response.Headers.AccessControlAllowOrigin = "*";
        Response.Headers.Location = result.Location.ToString();
        Response.Headers["stream-media-id"] = result.MediaId;
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> Status(string id)
    {
        var data = await cloudflareStreamMediaService.GetDetails(id);
        if (data?.Result == null)
        {
            return NotFound();
        }

        return Ok(data);
    }
}