using System.Text;

namespace ReadingRoom.Umbraco.CloudflareStream.Extensions;

internal static class StringExtensions
{
    public static bool IsNotNullOrWhitespace(this string value) => !string.IsNullOrWhiteSpace(value);

    public static string DecodeFrom64(this string encodedData)
    {
        var encodedDataAsBytes = Convert.FromBase64String(encodedData);
        var returnValue = Encoding.ASCII.GetString(encodedDataAsBytes);
        return returnValue;
    }

    public static string EncodeTo64(this string toEncode)
    {
        var toEncodeAsBytes = Encoding.ASCII.GetBytes(toEncode);
        var returnValue = Convert.ToBase64String(toEncodeAsBytes);
        return returnValue;
    }
}