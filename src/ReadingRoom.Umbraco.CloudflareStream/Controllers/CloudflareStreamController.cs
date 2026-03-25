using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReadingRoom.Umbraco.CloudflareStream.Services;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Web.Common.Attributes;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Filters;

namespace ReadingRoom.Umbraco.CloudflareStream.Controllers;

[ApiController]
[Route("/umbraco/backoffice/api/CloudflareStream")]
[IsBackOffice]
[UmbracoUserTimeoutFilter]
[Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
[DisableBrowserCache]
[CustomJsonFormatter]
public class CloudflareStreamController(ICloudflareStreamMediaService cloudflareStreamMediaService, 
    ILogger<CloudflareStreamController> logger, 
    ICloudflareStreamCreatorResolver creatorResolver,
    IDataTypeService dataTypeService) : ControllerBase
{
    private readonly ILogger _logger = logger;

    [HttpPost("initialise")]
    [ProducesResponseType((int) HttpStatusCode.OK)]
    [ProducesResponseType((int) HttpStatusCode.BadRequest)]
    public async Task<IActionResult> Initialise()
    {
        var length = Request.Headers["Upload-Length"].ToString();
        var metadata = Request.Headers["Upload-Metadata"].ToString();
        
        var dataTypes = await dataTypeService.GetByEditorAliasAsync(Constants.PropertyEditors.Aliases.CloudflareStreamMedia);
        var dataType = dataTypes.FirstOrDefault();
    
        if (dataType == null)
        {
            _logger.LogError("No data type found for CloudflareStream editor");
            return BadRequest();
        }
        
        var creator = creatorResolver.ResolveCreator(HttpContext);

        var result = await cloudflareStreamMediaService.InitialiseUploadAsync(length, metadata, creator, dataType.Key);
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

    [HttpGet("status")]
    [ProducesResponseType((int) HttpStatusCode.OK)]
    [ProducesResponseType((int) HttpStatusCode.NotFound)]
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