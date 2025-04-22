using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System.Net.Http.Headers;

namespace ReadingRoom.CloudflareStream;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddCloudflareStreamApiClient(this IServiceCollection services, IConfiguration configuration)
    {
        var section = configuration.GetSection(Constants.AppSettingsSection);
        var settings = CloudflareStreamOptions.Empty;
        if (section.Exists())
        {
            section.Bind(settings);
        }
        
        services.AddOptions<CloudflareStreamOptions>().Bind(section);
        services.AddHttpClient<ICloudflareStreamApiClient, CloudflareStreamApiClient>((sp, client) =>
        {
            var options = sp.GetRequiredService<IOptions<CloudflareStreamOptions>>().Value;
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", options.ApiToken);
            client.BaseAddress = options.BaseAddress;
        });

        return services;
    }
}