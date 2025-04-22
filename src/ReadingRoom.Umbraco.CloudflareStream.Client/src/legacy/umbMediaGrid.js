// noinspection JSUnresolvedReference

angular.module('umbraco.directives').directive('umbMediaGrid', function () {
    return {
        priority: 0,
        link: function (scope, element, attrs) {
            const onlyImages = scope.onlyImages;
            if (!onlyImages) {
                return;
            }

            const settings = Umbraco.Sys.ServerVariables.CloudflareStream;
            scope.images = scope.images.filter(function (image) {
                return !settings.mediaTypes.map(x => x.alias).includes(image.metaData.ContentTypeAlias);
            });
        }
    };
});