using System.Text.Json.Serialization;

namespace ReadingRoom.CloudflareStream.Models.Api.Token;

public class AccessRule
{
    [JsonPropertyName("Action")]
    public string Action => Allow ? "allow" : "block";

    [JsonIgnore]
    public bool Allow { get; set; }

    [JsonPropertyName("Country")]
    public List<string>? Country { get; set; }

    [JsonPropertyName("Ip")]
    public List<string>? Ip { get; set; }

    /// <summary>
    ///     Allowed values: any, ip.src, ip.geoip.country
    /// </summary>
    [JsonPropertyName("Type")]
    public string? Type { get; set; }

    [JsonIgnore]
    public AccessRuleType AccessRuleType => Type switch
    {
        "any" => AccessRuleType.Any,
        "ip.src" => AccessRuleType.IpSource,
        "ip.geoip.country" => AccessRuleType.IpGeoIpCountry,
        _ => AccessRuleType.Any
    };
}