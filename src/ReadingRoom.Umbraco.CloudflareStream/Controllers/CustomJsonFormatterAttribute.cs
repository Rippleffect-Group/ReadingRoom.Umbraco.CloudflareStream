using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Formatters;
using ReadingRoom.Umbraco.CloudflareStream.Models;
using System.Text.Json;
using System.Text.Json.Serialization.Metadata;

namespace ReadingRoom.Umbraco.CloudflareStream.Controllers;

internal class CustomJsonFormatterAttribute : Attribute, IActionFilter
{
    public void OnActionExecuting(ActionExecutingContext context) { }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        if (context.Result is not ObjectResult objectResult)
        {
            return;
        }

        objectResult.Formatters.Clear();
        var options = new JsonSerializerOptions
        {
            PropertyNamingPolicy = new ToFirstUpperNamingPolicy(),
            TypeInfoResolver = new DefaultJsonTypeInfoResolver()
        };

        objectResult.Formatters.Add(new SystemTextJsonOutputFormatter(options));
    }
}