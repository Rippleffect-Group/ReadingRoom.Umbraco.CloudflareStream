using System.Text.Json.Serialization;

namespace ReadingRoom.CloudflareStream.Models.Api.Token;

public class TokenRequest
{
    [JsonIgnore]
    public string Id { get; set; } = string.Empty;

    [JsonPropertyName("AccessRules")]
    public List<AccessRule>? AccessRules { get; set; }

    [JsonPropertyName("Downloadable")]
    public bool Downloadable { get; set; }

    /// <summary>
    ///     The optional unix epoch timestamp that specficies the time after a token is not accepted. The maximum time specification is 24 hours from issuing time. If this field is not set, the default is one hour after
    ///     issuing.
    /// </summary>
    [JsonPropertyName("Exp")]
    public int Expiry { get; set; }

    [JsonPropertyName("Id")]
    public string? SigningKeyId { get; set; }

    /// <summary>
    ///     The optional unix epoch timestamp that specifies the time before a the token is not accepted. If this field is not set, the default is one hour before issuing.
    /// </summary>
    [JsonPropertyName("Nbf")]
    public int Nbf { get; set; }

    [JsonPropertyName("Pem")]
    public string? Pem { get; set; }

    public static TokenRequest Create(string id, bool downloadable = true, TimeSpan? expires = null)
    {
        ArgumentNullException.ThrowIfNull(id, nameof(id));

        expires ??= TimeSpan.FromHours(24);
        var expiry = (int)DateTimeOffset.Now.Add(expires.Value).ToUnixTimeSeconds();
        var nbf = (int)DateTimeOffset.Now.AddHours(-1).ToUnixTimeSeconds();
        return new TokenRequest
        {
            Id = id,
            Downloadable = downloadable,
            Expiry = expiry,
            Nbf = nbf
        };
    }

}