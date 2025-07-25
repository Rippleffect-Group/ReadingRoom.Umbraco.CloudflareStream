using Microsoft.Extensions.Logging;
using Moq;
using Shouldly;

namespace ReadingRoom.CloudflareStream.Tests;

public static class TestExtensions
{
    public static void ShouldInvoke<T>(this Mock<T> mock, string method, int times = 1) where T : class =>
        mock.Invocations
            .ShouldContain(x => x.Method.Name == method, times);

    public static void ShouldLog<T>(this Mock<ILogger<T>> logger, LogLevel level, int count) =>
        logger.Invocations
            .ShouldContain(x => x.Method.Name == nameof(ILogger.Log) && x.Arguments[0].Equals(level), count);

    public static void ShouldLogSingleError<T>(this Mock<ILogger<T>> logger) => ShouldLogSingle(logger, LogLevel.Error);

    public static void ShouldLogSingleWarning<T>(this Mock<ILogger<T>> logger) => ShouldLogSingle(logger, LogLevel.Warning);

    public static void ShouldLogSingle<T>(this Mock<ILogger<T>> logger, LogLevel level) => ShouldLog(logger, level, 1);
}