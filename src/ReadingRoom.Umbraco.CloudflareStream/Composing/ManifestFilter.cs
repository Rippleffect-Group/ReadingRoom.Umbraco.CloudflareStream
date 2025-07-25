using Umbraco.Cms.Core.Manifest;

namespace ReadingRoom.Umbraco.CloudflareStream.Composing;

internal class ManifestFilter : IManifestFilter
{
    public void Filter(List<PackageManifest> manifests)
    {
        manifests.Add(new PackageManifest
        {
            PackageName = Constants.PackageName,
            Version = GetType().Assembly.GetName().Version?.ToString(3) ?? "0.1.0",
            AllowPackageTelemetry = false,
            Scripts = new[]
            {
                $"{Constants.Paths.Root}/dist/backoffice.js"
            },
            Stylesheets = new[]
            {
                $"{Constants.Paths.Root}/MediaPicker/editor.css"
            },
            BundleOptions = BundleOptions.None
        });
    }
}