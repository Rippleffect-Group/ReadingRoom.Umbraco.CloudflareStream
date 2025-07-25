using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using NUnit.Framework;
using ReadingRoom.CloudflareStream.Models.Api.Details;
using RichardSzalay.MockHttp;
using Shouldly;
using System.Net;

namespace ReadingRoom.CloudflareStream.Tests.ApiClient;

public class GetDetailsTests
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
    public async Task GetDetails_ReturnsNull_WhenResultIsNull()
    {
        var id = "404notfound";
        var url = $"{_options.Value.BaseAddress}{id}";
        _mockHttp.When(url).Respond(HttpStatusCode.NotFound);

        var httpClient = _mockHttp.ToHttpClient();
        httpClient.BaseAddress = _options.Value.BaseAddress;
        var client = new CloudflareStreamApiClient(httpClient, _options, _mockLogger.Object);

        var result = await client.GetDetails(id);

        _mockLogger.ShouldLogSingleWarning();
        result.ShouldBeNull();
    }

    [Test]
    public async Task GetDetails_ReturnsDetailsResponse_WhenResultIsValid()
    {
        var id = "ea95132c15732412d22c1476fa83f27a";
        var details = new DetailsResponse
        {
            Errors =
            [
                new()
                {
                    Code = 1000,
                    Message = "message"
                }
            ],
            Messages =
            [
                new()
                {
                    Code = 1000,
                    Message = "message"
                }
            ],
            Success = true,
            Result = new DetailsResponse.DetailsResult
            {
                AllowedOrigins = ["example.com"],
                Created = DateTime.Parse("2014-01-02T02:20:00Z"),
                Creator = "creator-id_abcde12345",
                Duration = 0,
                Input = new DetailsResponse.Input
                {
                    Height = 0,
                    Width = 0
                },
                LiveInput = "fc0a8dc887b16759bfd9ad922230a014",
                MaxDurationSeconds = 1,
                Meta = new DetailsResponse.Meta
                {
                    Name = "video12345.mp4"
                },
                Modified = DateTime.Parse("2014-01-02T02:20:00Z"),
                Playback = new DetailsResponse.Playback
                {
                    Dash = $"https://{CustomerSubdomain}/{id}/manifest/video.mpd",
                    Hls = $"https://{CustomerSubdomain}/{id}/manifest/video.m3u8",
                    Frame = $"https://{CustomerSubdomain}/{id}/iframe"
                },
                Preview = $"https://{CustomerSubdomain}/{id}/watch",
                ReadyToStream = true,
                ReadyToStreamAt = DateTime.Parse("2014-01-02T02:20:00Z"),
                RequireSignedUrls = true,
                ScheduledDeletion = DateTime.Parse("2014-01-02T02:20:00Z"),
                Size = 4190963,
                Status = new DetailsResponse.Status
                {
                    ErrorReasonCode = "ERR_NON_VIDEO",
                    ErrorReasonText = "The file was not recognized as a valid video file.",
                    PctComplete = "pctComplete",
                    State = "pendingupload"
                },
                Thumbnail = $"https://{CustomerSubdomain}/{id}/thumbnails/thumbnail.jpg",
                ThumbnailTimestampPct = 0.529241,
                Uid = id,
                Uploaded = DateTime.Parse("2014-01-02T02:20:00Z"),
                UploadExpiry = DateTime.Parse("2014-01-02T02:20:00Z"),
                Watermark = new DetailsResponse.Watermark
                {
                    Created = DateTime.Parse("2014-01-02T02:20:00Z"),
                    DownloadedFrom = "https://company.com/logo.png",
                    Height = 0,
                    Name = "Marketing Videos",
                    Opacity = 0.75,
                    Padding = 0.1,
                    Position = "center",
                    Scale = 0.1,
                    Size = 29472,
                    Uid = id,
                    Width = 0
                }
            }
        };

        var json = $$"""
                     {
                       "errors": [
                         {
                           "code": 1000,
                           "message": "message"
                         }
                       ],
                       "messages": [
                         {
                           "code": 1000,
                           "message": "message"
                         }
                       ],
                       "success": true,
                       "result": {
                         "allowedOrigins": [
                           "example.com"
                         ],
                         "created": "2014-01-02T02:20:00Z",
                         "creator": "creator-id_abcde12345",
                         "duration": 0,
                         "input": {
                           "height": 0,
                           "width": 0
                         },
                         "liveInput": "fc0a8dc887b16759bfd9ad922230a014",
                         "maxDurationSeconds": 1,
                         "meta": {
                           "name": "video12345.mp4"
                         },
                         "modified": "2014-01-02T02:20:00Z",
                         "playback": {
                           "dash": "https://{{CustomerSubdomain}}/{{id}}/manifest/video.mpd",
                           "hls": "https://{{CustomerSubdomain}}/{{id}}/manifest/video.m3u8"
                         },
                         "preview": "https://{{CustomerSubdomain}}/{{id}}/watch",
                         "readyToStream": true,
                         "readyToStreamAt": "2014-01-02T02:20:00Z",
                         "requireSignedURLs": true,
                         "scheduledDeletion": "2014-01-02T02:20:00Z",
                         "size": 4190963,
                         "status": {
                           "errorReasonCode": "ERR_NON_VIDEO",
                           "errorReasonText": "The file was not recognized as a valid video file.",
                           "pctComplete": "pctComplete",
                           "state": "pendingupload"
                         },
                         "thumbnail": "https://{{CustomerSubdomain}}/{{id}}/thumbnails/thumbnail.jpg",
                         "thumbnailTimestampPct": 0.529241,
                         "uid": "{{id}}",
                         "uploaded": "2014-01-02T02:20:00Z",
                         "uploadExpiry": "2014-01-02T02:20:00Z",
                         "watermark": {
                           "created": "2014-01-02T02:20:00Z",
                           "downloadedFrom": "https://company.com/logo.png",
                           "height": 0,
                           "name": "Marketing Videos",
                           "opacity": 0.75,
                           "padding": 0.1,
                           "position": "center",
                           "scale": 0.1,
                           "size": 29472,
                           "uid": "{{id}}",
                           "width": 0
                         }
                       }
                     }
                     """;

        var httpClient = _mockHttp.ToHttpClient();
        httpClient.BaseAddress = _options.Value.BaseAddress;

        var url = $"{_options.Value.BaseAddress}{id}";
        _mockHttp.When(url).Respond("application/json", json);
        var client = new CloudflareStreamApiClient(httpClient, _options, _mockLogger.Object);

        var result = await client.GetDetails(id);

        result.ShouldBeEquivalentTo(details);
    }

    [Test]
    public async Task GetDetails_ThrowsException_WhenRequestFails()
    {
        var id = "ea95132c157";

        var url = $"{_options.Value.BaseAddress}{id}";

        _mockHttp.When(url).Respond(HttpStatusCode.InternalServerError);

        var httpClient = _mockHttp.ToHttpClient();
        httpClient.BaseAddress = _options.Value.BaseAddress;

        var client = new CloudflareStreamApiClient(httpClient, _options, _mockLogger.Object);

        var action = new Func<Task>(() => client.GetDetails(id));

        await action.ShouldThrowAsync<HttpRequestException>();
        _mockLogger.ShouldLogSingleError();
    }

    [Test]
    public async Task GetDetails_ThrowsException_WhenCustomDomainIsNull()
    {
        var id = "ea95132c157";
        var url = $"{_options.Value.BaseAddress}{id}";

        _mockHttp.When(url).Respond(HttpStatusCode.OK);
        var httpClient = _mockHttp.ToHttpClient();
        httpClient.BaseAddress = _options.Value.BaseAddress;

        var options = Options.Create(new CloudflareStreamOptions
        {
            CustomerSubdomain = string.Empty,
            AccountId = string.Empty,
            ApiToken = string.Empty,
        });

        var client = new CloudflareStreamApiClient(httpClient, options, _mockLogger.Object);

        var action = new Func<Task>(() => client.GetDetails(id));

        await action.ShouldThrowAsync<NullReferenceException>();
        _mockLogger.ShouldLogSingleError();
    }

    [Test]
    public async Task GetDetails_ThrowsException_WhenCustomDomainIsNotWellFormed()
    {
        var id = "ea95132c157";
        var url = $"{_options.Value.BaseAddress}{id}";

        _mockHttp.When(url).Respond(HttpStatusCode.OK);
        var httpClient = _mockHttp.ToHttpClient();
        httpClient.BaseAddress = _options.Value.BaseAddress;

        var options = Options.Create(new CloudflareStreamOptions
        {
            AccountId = string.Empty,
            ApiToken = string.Empty,
            CustomerSubdomain = "brokendomain",

        });

        var client = new CloudflareStreamApiClient(httpClient, options, _mockLogger.Object);

        var action = new Func<Task>(() => client.GetDetails(id));

        await action.ShouldThrowAsync<InvalidOperationException>();
        _mockLogger.ShouldLogSingleError();
    }
}