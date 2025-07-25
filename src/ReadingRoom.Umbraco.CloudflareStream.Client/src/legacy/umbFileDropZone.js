// noinspection JSUnresolvedReference

angular.module("umbraco.directives")
    .config(function ($provide) {
        $provide.decorator('umbFileDropzoneDirective', function ($delegate, editorService, $routeParams) {
            const directive = $delegate[0];
            const originalLink = directive.link;
            const originalCompile = directive.compile;

            const settings = Umbraco.Sys.ServerVariables.CloudflareStream;

            delete directive.template;
            directive.templateUrl = settings.fileDropZoneView;

            const link = function (scope, element, attrs) {
                originalLink.apply(directive, [scope, element, attrs]);

                const reloadView = function (parentId) {
                    const listViewElement = document.querySelector('[ng-controller="Umbraco.PropertyEditors.ListViewController"]');
                    if (listViewElement) {
                        scope.$parent.vm.onUploadComplete();
                    } else {
                        const mediaPickerElement = document.querySelector('[ng-controller="Umbraco.Editors.MediaPickerController as vm"]');
                        if (mediaPickerElement) {
                            const vm = angular.element(mediaPickerElement);
                            vm.controller().onUploadComplete()
                        }
                    }
                }
                
                const onModalClose = function (reload, parentId) {
                    if (reload && parentId) {
                        reloadView(parentId);
                    }
                    editorService.close();
                    delete $routeParams.doctype;
                }
                const upload = function (mediaType) {
                    const id = scope.parentId;
                    $routeParams.doctype = mediaType.alias;

                    const modal = {
                        id: id,
                        parentId: id,
                        create: true,
                        contentTypeAlias: mediaType.alias,
                        submit: function (model) {
                            onModalClose(true, id);
                        }, close: function () {
                            onModalClose();
                        }
                    }

                    editorService.mediaEditor(modal);
                }

                const init = function () {
                    scope.showUpload = scope.hideDropzone !== 'true';

                    const allowedTypeAliases = scope.acceptedMediatypes.map(e => e.alias);
                    const cloudflareStreamMediaTypes = settings.mediaTypes.filter(e => allowedTypeAliases.includes(e.alias));
                    const hasCloudflareStreamMediaTypes = cloudflareStreamMediaTypes.length > 0;
                    const onlyCloudflareStreamMediaTypes = cloudflareStreamMediaTypes.length === allowedTypeAliases.length && hasCloudflareStreamMediaTypes;
                    scope.cloudflareStream = {
                        showUpload: hasCloudflareStreamMediaTypes,
                        mediaTypes: cloudflareStreamMediaTypes, 
                        upload: upload
                    }

                    if (onlyCloudflareStreamMediaTypes) {
                        scope.showUpload = false;
                    }
                }

                scope.$watch('acceptedMediatypes', init);
            }

            directive.compile = function () {
                originalCompile.apply(directive, arguments);
                return link;
            };

            return $delegate;
        });
    });