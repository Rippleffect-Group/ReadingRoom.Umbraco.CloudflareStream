using ReadingRoom.CloudflareStream.Models.Api.Details;
using ReadingRoom.Umbraco.CloudflareStream.Models;
using Umbraco.Cms.Core.Mapping;

namespace ReadingRoom.Umbraco.CloudflareStream.Mappers;

public class DetailsResponseMapDefinition : IMapDefinition
{
    public void DefineMaps(IUmbracoMapper mapper)
    {
        mapper.Define<DetailsResponse, CloudflareStreamMediaDetails>(MapDetails);
        mapper.Define<DetailsResponse.DetailsResult, CloudflareStreamMediaDetails.DetailsResult>(MapResult);
        mapper.Define<DetailsResponse.Input, CloudflareStreamMediaDetails.Input>(MapInput);
        mapper.Define<DetailsResponse.Meta, CloudflareStreamMediaDetails.Meta>(MapMeta);
        mapper.Define<DetailsResponse.Playback, CloudflareStreamMediaDetails.Playback>(MapPlayback);
        mapper.Define<DetailsResponse.Status, CloudflareStreamMediaDetails.Status>(MapStatus);
        mapper.Define<DetailsResponse.Watermark, CloudflareStreamMediaDetails.Watermark>(MapWatermark);
        mapper.Define<DetailsResponse.MessageDetail, CloudflareStreamMediaDetails.MessageDetail>(MapMessageDetail);
    }

    private CloudflareStreamMediaDetails.MessageDetail MapMessageDetail(DetailsResponse.MessageDetail input, MapperContext context)
    {
        var output = new CloudflareStreamMediaDetails.MessageDetail(input.Code, input.Message);

        return output;
    }

    private CloudflareStreamMediaDetails.Watermark MapWatermark(DetailsResponse.Watermark input, MapperContext context)
    {
        var output = new CloudflareStreamMediaDetails.Watermark(
            input.Created,
            input.DownloadedFrom,
            input.Height,
            input.Name,
            input.Opacity,
            input.Padding,
            input.Position,
            input.Scale,
            input.Size,
            input.Uid,
            input.Width);

        return output;
    }

    private CloudflareStreamMediaDetails.Status MapStatus(DetailsResponse.Status input, MapperContext context)
    {
        var output = new CloudflareStreamMediaDetails.Status(input.ErrorReasonCode, input.ErrorReasonText, input.PctComplete, input.State);

        return output;
    }

    private CloudflareStreamMediaDetails.Playback MapPlayback(DetailsResponse.Playback input, MapperContext context)
    {
        var output = new CloudflareStreamMediaDetails.Playback(input.Dash, input.Hls, input.Frame);

        return output;
    }

    private CloudflareStreamMediaDetails.Meta MapMeta(DetailsResponse.Meta input, MapperContext context)
    {
        var output = new CloudflareStreamMediaDetails.Meta(
            input.Name,
            input.Filename,
            input.Filetype,
            input.RelativePath,
            input.Type);

        return output;
    }

    private CloudflareStreamMediaDetails.Input MapInput(DetailsResponse.Input input, MapperContext context)
    {
        var output = new CloudflareStreamMediaDetails.Input(input.Height, input.Width);
        return output;
    }

    private CloudflareStreamMediaDetails.DetailsResult MapResult(DetailsResponse.DetailsResult input, MapperContext context)
    {
        var inputModel = context.Map<CloudflareStreamMediaDetails.Input>(input.Input) ?? throw new ArgumentNullException(nameof(input.Input));
        var meta = context.Map<CloudflareStreamMediaDetails.Meta>(input.Meta) ?? throw new ArgumentNullException(nameof(input.Meta));
        var playback = context.Map<CloudflareStreamMediaDetails.Playback>(input.Playback) ?? throw new ArgumentNullException(nameof(input.Playback));
        var status = context.Map<CloudflareStreamMediaDetails.Status>(input.Status) ?? throw new ArgumentNullException(nameof(input.Status));
        var watermark = context.Map<CloudflareStreamMediaDetails.Watermark>(input.Watermark);

        var output = new CloudflareStreamMediaDetails.DetailsResult(
            input.AllowedOrigins, 
            input.Created, 
            input.Creator, 
            input.Duration, 
            inputModel,
            input.LiveInput, 
            input.MaxDurationSeconds, 
            meta, 
            input.Modified, 
            playback, 
            input.Preview, 
            input.ReadyToStream,
            input.ReadyToStreamAt, 
            input.RequireSignedUrls, 
            input.ScheduledDeletion, 
            input.Size, 
            status, 
            input.Thumbnail,
            input.ThumbnailTimestampPct,
            input.Uid, 
            input.UploadExpiry, 
            input.Uploaded, 
            watermark);

        return output;
    }

    private CloudflareStreamMediaDetails MapDetails(DetailsResponse input, MapperContext context)
    {
        var result = context.Map<CloudflareStreamMediaDetails.DetailsResult>(input.Result) ?? throw new ArgumentNullException(nameof(input.Result));
        var errors = context.MapEnumerable<DetailsResponse.MessageDetail, CloudflareStreamMediaDetails.MessageDetail>(input.Errors);
        var messages = context.MapEnumerable<DetailsResponse.MessageDetail, CloudflareStreamMediaDetails.MessageDetail>(input.Messages);

        var output = new CloudflareStreamMediaDetails(result, input.Success, messages, errors);

        return output;
    }
}