// noinspection JSUnresolvedReference

angular.module("umbraco.services").run(function ($injector) {
    const editorService = $injector.get("editorService");
    const originalMethod = editorService.mediaPicker;

    editorService.mediaPicker = function () {
        originalMethod.apply(this, arguments);
        const editor = arguments[0];
        const settings = Umbraco.Sys.ServerVariables.CloudflareStream;
        if (!settings) {
            return;
        }
        editor.view = settings.mediaPickerView;
    };
});

