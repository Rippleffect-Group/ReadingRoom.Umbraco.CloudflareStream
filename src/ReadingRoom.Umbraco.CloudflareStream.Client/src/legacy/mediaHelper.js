// noinspection JSUnresolvedReference

angular.module("umbraco.services").run(function ($injector, $rootScope) {
    const $scope = $rootScope.$new();
    $scope.$watch(function () {
        return Umbraco.Sys.ServerVariables;
    }, function (newVal, oldVal) {
        if (newVal === oldVal) {
            return;
        }

        const settings = Umbraco.Sys.ServerVariables.CloudflareStream;
        if (!settings) {
            return;
        }
        init(settings);
    });

    function init(settings) {
        const mediaHelper = $injector.get("mediaHelper");
        const ogResolveFileFromEntity = mediaHelper.resolveFileFromEntity;

        mediaHelper.resolveFileFromEntity = function () {
            const contentType = arguments[0].metaData.ContentTypeAlias;
            if (!settings.mediaTypes.map(x => x.alias).includes(contentType)) {
                return ogResolveFileFromEntity.apply(this, arguments);
            }

            const id = arguments[0].metaData.MediaPath;
            if (id === settings.baseMediaPath) {
                return settings.placeHolderImageUrl;
            }

            return `${id}/${settings.thumbnailPath}`;
        };

        mediaHelper.registerFileResolver(settings.propertyEditorAlias, function (property, entity, thumbnail) {
            if (!thumbnail) {
                return null;
            }

            if (!property.value.id) {
                return settings.placeHolderImageUrl;
            }

            return `${settings.baseMediaPath}/${property.value.id}/${settings.thumbnailPath}`;
        });
    }
});

