using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using NUnit.Framework;
using ReadingRoom.CloudflareStream.Models;
using RichardSzalay.MockHttp;
using Shouldly;
using System.Net;

namespace ReadingRoom.CloudflareStream.Tests.ApiClient;

public class InitialiseUploadAsyncTests
{
    private const string CustomerSubdomain = "customer-m123a1a00aa1aaaa.cloudflarestream.com";

    private MockHttpMessageHandler _mockHttp;
    private Mock<ILogger<CloudflareStreamApiClient>> _mockLogger;

    private readonly IOptions<CloudflareStreamOptions> _options = Options.Create(new CloudflareStreamOptions
    {
        CustomerSubdomain = $"https://{CustomerSubdomain}",
        AccountId = "accountId",
        ApiToken = string.Empty,
    });

    [SetUp]
    public void SetUp()
    {
        _mockHttp = new();
        _mockLogger = new Mock<ILogger<CloudflareStreamApiClient>>();
    }

    [Test]
    public async Task InitialiseUploadAsync_WithFailedRequest_ShouldReturnFailUploadResponse()
    {
        var url = $"{_options.Value.BaseAddress}?direct_user=true";
        _mockHttp.When(HttpMethod.Post, url).Respond(HttpStatusCode.InternalServerError);

        var httpClient = _mockHttp.ToHttpClient();
        httpClient.BaseAddress = _options.Value.BaseAddress;

        var client = new CloudflareStreamApiClient(httpClient, _options, _mockLogger.Object);

        var response = await client.InitialiseUploadAsync("length", "meta", "creator");

        var expected = UploadResponse.Fail();
        response.ShouldBeEquivalentTo(expected);

        _mockLogger.ShouldLogSingleError();
    }

    [Test]
    public async Task InitialiseUploadAsync_WithBadRequest_ShouldReturnFailUploadResponse()
    {
        var url = $"{_options.Value.BaseAddress}?direct_user=true";
        _mockHttp.When(HttpMethod.Post, url).Respond(HttpStatusCode.BadRequest);

        var httpClient = _mockHttp.ToHttpClient();
        httpClient.BaseAddress = _options.Value.BaseAddress;

        var client = new CloudflareStreamApiClient(httpClient, _options, _mockLogger.Object);

        var response = await client.InitialiseUploadAsync("length", "meta", "creator");

        var expected = UploadResponse.Fail();
        response.ShouldBeEquivalentTo(expected);

        _mockLogger.ShouldLog(LogLevel.Error, 2);
    }
}