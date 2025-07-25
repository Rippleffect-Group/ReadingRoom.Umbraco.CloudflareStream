using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Logging;
using ReadingRoom.Umbraco.CloudflareStream.Models;
using ReadingRoom.Umbraco.CloudflareStream.Services;
using Umbraco.Extensions;

namespace ReadingRoom.Umbraco.CloudflareStream.TagHelpers
{
    /// <summary>
    /// Tag helper for rendering a Cloudflare Stream video.
    /// </summary>
    /// <param name="logger"></param>
    [HtmlTargetElement("cf-stream")]
    public class CloudflareStreamVideoTagHelper(ILogger<CloudflareStreamVideoTagHelper> logger, ICloudflareStreamUrlHelper urlHelper, IHttpContextAccessor httpContextAccessor) : TagHelper
    {
        public CloudflareStreamMediaValue? Video { get; set; }
        public string? Src { get; set; }
        public string? PosterUrl { get; set; }
        public string? Style { get; set; }
        public bool Controls { get; set; } = true;
        public string? DefaultTextTrack { get; set; }
        public string? LetterBoxColor { get; set; }
        public bool Loop { get; set; }
        public bool Muted { get; set; }
        public PreloadMode Preload { get; set; }
        public string? PrimaryColor { get; set; }
        public TimeSpan? StartTime { get; set; }
        public string? AdUrl { get; set; }
        public bool Autoplay { get; set; }
        public string? Class { get; set; }
        public bool AllowPictureInPicture { get; set; } = true;
        public bool AllowFullscreen { get; set; } = true;
        public bool AllowAccelerometer { get; set; } = true;
        public bool AllowGyroscope { get; set; } = true;

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            var src = GetSrcUrl();
            if (src.IsNullOrWhiteSpace())
            {
                logger.LogWarning("No src found for Cloudflare Stream video tag helper.");
                return;
            }

            var allow = GetAllowAttribute();

            output.TagName = "iframe";
            output.TagMode = TagMode.StartTagAndEndTag;
            output.Attributes.SetAttribute("src", src);
            output.Attributes.SetAttribute("allow", allow);

            if (AllowFullscreen)
            {
                output.Attributes.SetAttribute("allowfullscreen", "true");
            }

            var styles = Style.IsNullOrWhiteSpace() ? "border: none;" : Style;
            output.Attributes.SetAttribute("style", styles);

            var classes = Class;
            if (!classes.IsNullOrWhiteSpace())
            {
                output.Attributes.SetAttribute("class", classes);
            }
        }

        private string GetAllowAttribute()
        {
            var list = new List<string>
            {
                "encrypted-media=*"
            };

            if (AllowAccelerometer)
            {
                list.Add("accelerometer=*");
            }

            if (AllowGyroscope)
            {
                list.Add("gyroscope=*");
            }

            if (Autoplay)
            {
                list.Add("autoplay=*");
            }

            if (AllowPictureInPicture)
            {
                list.Add("picture-in-picture=*");
            }

            if (AllowFullscreen)
            {
                list.Add("fullscreen=*");
            }

            return string.Join("; ", list);
        }

        private string? GetSrcUrl()
        {
            if (!Src.IsNullOrWhiteSpace())
            {
                if (urlHelper.IsValidUrl(Src))
                {
                    return Src;
                }

                logger.LogWarning("Invalid src URL provided for Cloudflare Stream video tag helper. Src URL: {Src}", Src);
                return null;
            }

            if (Video == null)
            {
                logger.LogWarning("No video provided for Cloudflare Stream video tag helper.");
                return null;
            }

            if (PosterUrl.IsNullOrWhiteSpace())
            {
                return Video.Playback.IFrameUrl;
            }

            var poster = "";
            if (PosterUrl.StartsWith("/"))
            {
                try
                {
                    var context = httpContextAccessor.GetRequiredHttpContext();
                    var builder = new UriBuilder(context.Request.GetDisplayUrl())
                    {
                        Path = PosterUrl
                    };
                    poster = builder.Uri.AbsoluteUri;
                }
                catch (Exception ex)
                {
                    logger.LogError(ex, "Failed to convert relative Poster Url to absolute {Url}", PosterUrl);
                }
            }
            else
            {
                if (!Uri.TryCreate(PosterUrl, UriKind.Absolute, out var posterUri))
                {
                    logger.LogWarning("Invalid poster URL provided for Cloudflare Stream video tag helper. Poster URL: {PosterUrl} Video ID: {VideoId}", PosterUrl, Video.VideoId);
                    return null;
                }

                poster = posterUri.AbsoluteUri;
            }

            return Video.Playback.CreateIFrameUrl(Autoplay, Controls, DefaultTextTrack, LetterBoxColor, Loop, Muted, Preload, poster, PrimaryColor, StartTime, AdUrl);
        }
    }
}