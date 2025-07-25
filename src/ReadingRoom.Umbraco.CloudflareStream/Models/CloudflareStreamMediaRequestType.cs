namespace ReadingRoom.Umbraco.CloudflareStream.Models;

public enum CloudflareStreamMediaRequestType
{
    Unknown = 0,
    MediaPath = 1,
    Thumbnail = 2,
    Frame = 3,
    Hls = 4,
    Dash = 5
}