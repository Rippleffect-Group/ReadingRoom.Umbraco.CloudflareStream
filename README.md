# ReadingRoom.Umbraco.CloudflareStream
## About

Upload videos directly to Cloudflare Stream (CFS) within Umbraco CMS, and display these videos on your site. CFS allows you to display videos on your site, without needing to host the files directly on your server, often improving video load speed.

The package adds a Media Type and Media Picker to provide a seamless experience for content editors - no technical expertise needed to use the integration once installed and configured.

## Quick Start

### Install the package via NuGet

```bash
  dotnet add package ReadingRoom.Umbraco.CloudflareStream
```

### Configure `appsettings.json`

Add the following section to your `appsettings.json` file:

```json
{
  "CloudflareStream": {
    "AccountId": "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "ApiToken": "F-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "CustomerSubdomain": "customer-xxxxxxxxxxxxxx.cloudflarestream.com"
  }
}
```

### Upload a video

1. Go to the Media section in the Umbraco backoffice
2. Click on the `Create` button
3. Select the `Cloudflare Stream Video` Media Type
4. Upload a video file
5. Save and publish the Media 🚀

You can now select the video from the Media Picker in the Content section.

### Media Picker

Videos uploaded to Cloudflare Stream are displayed in the Media Picker alongside other media items.

Alternatively, you can use the `CloudflareStreamVideoPicker` Data Type to restrict the Media Picker to only show
Cloudflare Stream videos. This also tells Models Builder to return `CloudflareStreamMediaValue` instead
of `MediaWithCrops`

### Accessing Video URL

In your view, you can display the video by calling `Url()` on the property and outputting it in an `iframe`:

```csharp
<iframe src="@Model.Video.Url()"
        style="border: none;"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
        allowfullscreen="true">
</iframe>
```

If you want the underlying `CloudflareStreamMediaValue` object you can call the `GetCloudflareStreamMediaValue()`
extension method:

```csharp
var data = Model.Video.GetCloudflareStreamMediaValue();
if (data != null)
{
    <div>
        @data.Size
        @data.VideoId
        @data.Playback.Url
        @data.Playback.ThumbnailUrl
        @data.Playback.DashManifestUrl
        @data.Playback.HlsManifestUrl
        @data.Playback.IFrameUrl
    </div>
}
```

### Tag Helper

You can use the `cf-stream` tag helper to render the video in your view

- Add tag helper to your `_ViewImports.cshtml` file

```csharp
@addTagHelper *, ReadingRoom.Umbraco.CloudflareStream
```

- Use the `cf-stream` tag helper in your view

```html

<cf-stream video="@Model.Video"/>
```

#### Attributes

| Property         | Type                        | Description                                                   | Required |
|------------------|-----------------------------|---------------------------------------------------------------|----------|
| Video            | CloudflareStreamMediaValue? | Represents the video media value - used to get the IFrame URL | Yes      |
| Src              | string?                     | Source URL of the media - overrides Video property            | No       |
| PosterUrl        | string?                     | URL of the poster image                                       | No       |
| Style            | string?                     | CSS style for the media element.                              | No       |
| Controls         | bool                        | Indicates if media controls are shown. Default is true.       | No       |
| DefaultTextTrack | string?                     | Default text track for subtitles or captions.                 | No       |
| LetterBoxColor   | string?                     | Colour of the letterbox area.                                 | No       |
| Loop             | bool                        | Indicates if the media should loop.                           | No       |
| Muted            | bool                        | Indicates if the media is muted.                              | No       |
| Preload          | PreloadMode                 | Preload setting for the media.                                | No       |
| PrimaryColor     | string?                     | Primary colour for the media player.                          | No       |
| StartTime        | TimeSpan?                   | Start time for the media playback.                            | No       |
| AdUrl            | string?                     | URL for the advertisement.                                    | No       |
| Autoplay         | bool                        | Indicates if the media should autoplay.                       | No       |
| Class            | string?                     | CSS class for the media element.                              | No       |

## Limitations

- Authentication is not yet implemented

## Technical Notes

This package overrides/extends various parts of the CMS:

### Media Picker

- Adds a grey overlay to disabled/disallowed media items
- Extends the Drag & Drop upload area

### Media Editor

- Disable Save button during video upload

## Test Site

- Username: `admin@example.com`
- Password: `1234567890`

## Acknowledgments (thanks!)

- [jcdcdev](https://jcdc.dev) - [jcdcdev.Umbraco.PackageTemplate](https://jcdc.dev/umbraco-packages/package-template)