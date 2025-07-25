using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using ReadingRoom.CloudflareStream;
using ReadingRoom.Umbraco.CloudflareStream.Mappers;
using ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaEditor;
using ReadingRoom.Umbraco.CloudflareStream.PropertyEditors.CloudflareStreamMediaPicker;
using ReadingRoom.Umbraco.CloudflareStream.Services;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Web.Common.ApplicationBuilder;

namespace ReadingRoom.Umbraco.CloudflareStream.Composing;

public static class UmbracoBuilderExtensions
{
    public static IUmbracoBuilder SetCloudflareStreamAuthoriseService<T>(this IUmbracoBuilder builder) where T : class, ICloudflareStreamMediaAuthoriseService
    {
        builder.Services.AddSingleton<ICloudflareStreamMediaAuthoriseService, T>();
        return builder;
    }

    public static IUmbracoBuilder SetCloudflareStreamAuthoriseService<T>(this IUmbracoBuilder builder, Func<IServiceProvider, T> implementationFactory) where T : class, ICloudflareStreamMediaAuthoriseService
    {
        builder.Services.AddSingleton<ICloudflareStreamMediaAuthoriseService, T>(implementationFactory);
        return builder;
    }

    public static IUmbracoBuilder AddCloudflareStream(this IUmbracoBuilder builder)
    {
        builder.Services.AddCloudflareStreamApiClient(builder.Config);
        builder.Services.AddSingleton<ICloudflareStreamMediaService, CloudflareStreamMediaService>();
        builder.Services.AddSingleton<ICloudflareStreamUrlHelper, CloudflareStreamUrlHelper>();
        builder.SetCloudflareStreamAuthoriseService<DefaultCloudflareStreamMediaAuthoriseService>();
        builder.AddNotificationHandler<ServerVariablesParsingNotification, ServerVariableNotificationHandler>();

        builder.MediaUrlGenerators().Add<CloudflareStreamMediaUrlGenerator>();
        builder.Services.AddTransient<CloudflareStreamMediaMiddleware>();
        builder.Services.Configure<UmbracoPipelineOptions>(options =>
        {
            options.AddFilter(new UmbracoPipelineFilter("CloudflareStream")
            {
                PrePipeline = app => { app.UseMiddleware<CloudflareStreamMediaMiddleware>(); }
            });
        });

        builder.AddNotificationAsyncHandler<MediaDeletedNotification, CloudflareStreamMediaNotificationHandler>();
        builder.AddNotificationHandler<MediaSavingNotification, CloudflareStreamMediaNotificationHandler>();

        builder.AddMapDefinition<DetailsResponseMapDefinition>();
        
        return builder;
    }
}
