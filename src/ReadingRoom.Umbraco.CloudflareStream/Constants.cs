namespace ReadingRoom.Umbraco.CloudflareStream;

public static class Constants
{
    public static string PackageName => "ReadingRoom.Umbraco.CloudflareStream";

    public static class MediaType
    {
        public const string Alias = "cloudflareStreamVideo";
    }

    public static class PropertyEditors
    {
        public static class Names
        {
            public const string CloudflareStreamMedia = "Cloudflare Stream Media";
            public const string CloudflareStreamMediaPicker = "Cloudflare Stream Media Picker";
        }

        public static class Aliases
        {
            public const string CloudflareStreamMedia = "CloudflareStreamMedia";
            public const string CloudflareStreamMediaPicker = "CloudflareStreamMediaPicker";
        }

        public static class Groups
        {
            public const string CloudflareStream = "Cloudflare Stream";
        }

        public static class Views
        {
            public const string CloudflareStream = $"~{Paths.PropertyEditor}/editor.html";
        }
    }

    public static class Paths
    {
        public const string Root = "/App_Plugins/ReadingRoom.Umbraco.CloudflareStream";
        public const string PropertyEditor = $"{Root}/PropertyEditor";
        public const string MediaPicker = $"{Root}/MediaPicker/editor.html";
        public const string FileDropZone = $"{Root}/umbFileDropZone/editor.html";
    }
}