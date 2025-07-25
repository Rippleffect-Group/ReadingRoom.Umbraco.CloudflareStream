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
            const mediaTypeHelper = $injector.get("mediaTypeHelper");
            const mediaTypeResource = $injector.get("mediaTypeResource");
            const $q = $injector.get("$q");
            const ogGetTypeAcceptingFileExtensions = mediaTypeHelper.getTypeAcceptingFileExtensions;
            mediaTypeHelper.getTypeAcceptingFileExtensions = function (mediaTypes, fileExtensions) {
                mediaTypes = mediaTypes.filter(mediaType => {
                    return !settings.mediaTypes.map(x => x.alias).includes(mediaType.alias);
                });
                return ogGetTypeAcceptingFileExtensions(mediaTypes, fileExtensions);
            }

            mediaTypeHelper.getAllowedImagetypes = function (nodeId) {
                return mediaTypeResource.getAllowedTypes(nodeId)
                    .then(function (types) {

                        var allowedQ = types.map(function (type) {
                            return mediaTypeResource.getById(type.id);
                        });

                        // Get full list
                        return $q.all(allowedQ).then(function (fullTypes) {
                            // Find all the media types with an Image Cropper or Upload Field property editor
                            return mediaTypeHelper.getTypeWithEditor(fullTypes, ['Umbraco.ImageCropper', 'Umbraco.UploadField', settings.propertyEditorAlias]);
                        });
                    });
            };
        }
    }
);

