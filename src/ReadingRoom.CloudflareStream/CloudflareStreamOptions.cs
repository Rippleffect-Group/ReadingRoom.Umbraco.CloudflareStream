using System.Diagnostics.CodeAnalysis;

namespace ReadingRoom.CloudflareStream;

public class CloudflareStreamOptions
{
    public static CloudflareStreamOptions Empty = new()
    {
        AccountId = string.Empty,
        ApiToken = string.Empty,
        CustomerSubdomain = string.Empty
    };

    [MemberNotNullWhen(true, nameof(AccountId), nameof(ApiToken), nameof(CustomerSubdomain), nameof(CustomerSubdomainUri))]
    public bool IsValid() =>
        !string.IsNullOrWhiteSpace(AccountId) &&
        !string.IsNullOrWhiteSpace(ApiToken) &&
        !string.IsNullOrWhiteSpace(CustomerSubdomain) &&
        Uri.TryCreate(GetCustomerSubdomain(), UriKind.Absolute, out _);

    public required string AccountId { get; set; }
    public required string ApiToken { get; set; }
    public required string CustomerSubdomain { get; set; }

    public Uri? CustomerSubdomainUri => GetCustomerSubdomainUri();

    public Uri BaseAddress => new($"https://api.cloudflare.com/client/v4/accounts/{AccountId}/stream/");
    public string PlaceHolderImageUrl { get; set; } = "/App_Plugins/ReadingRoom.Umbraco.CloudflareStream/MediaPicker/video-not-found.png";


    private Uri? GetCustomerSubdomainUri()
    {
        if (!IsValid())
        {
            return null;
        }

        var url = GetCustomerSubdomain();
        if (string.IsNullOrWhiteSpace(url))
        {
            return null;
        }

        try
        {
            return new UriBuilder(url)
            {
                Scheme = "https",
                Port = -1
            }.Uri;
        }
        catch (UriFormatException)
        {
            return null;
        }
    }

    private string? GetCustomerSubdomain()
    {
        var url = CustomerSubdomain;
        if (string.IsNullOrWhiteSpace(url))
        {
            return null;
        }

        if (url.StartsWith("http://"))
        {
            url = url.Replace("http://", "https://");
        }

        if (!url.StartsWith("https://"))
        {
            url = $"https://{url}";
        }

        return url;
    }
}