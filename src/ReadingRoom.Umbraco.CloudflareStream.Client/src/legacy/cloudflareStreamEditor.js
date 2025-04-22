// noinspection JSUnresolvedReference

angular.module("umbraco").controller("Umbraco.Editors.CloudflareStream",
    function ($scope, $element, angularHelper) {
        const vm = this;
        vm.model = $scope.model;
        const root = $element[0];
        const saveButton = document.querySelectorAll('umb-button[alias="save"] button')[0];

        root.addEventListener('cf-stream-editor-uploading', function (event) {
            console.log('cf-stream-editor-uploading', event.detail); // eslint-disable-line no-console
            saveButton.setAttribute('disabled', 'disabled');
        });

        root.addEventListener('cf-stream-editor-uploaded', function (event) {
            console.log('cf-stream-editor-uploaded', event.detail); // eslint-disable-line no-console
            saveButton.removeAttribute('disabled');
        });

        root.addEventListener('cf-stream-editor-removed', function (event) {
            vm.model.value = {};
        });

        root.addEventListener('cf-stream-editor-updated', function (event) {
            if (!event.detail) {
                vm.model.value = {};
                return;
            }
            vm.model.value = event.detail;
        });

        $scope.$watch('vm.model.value', function (newVal, oldVal) {
            const oldId = oldVal ? oldVal.id : null;
            const newId = newVal ? newVal.id : null;
            if (oldId === newId) {
                return;
            }

            const contentForm = angularHelper.getCurrentForm($scope);
            contentForm.$dirty = true;
            contentForm.$pristine = false;
            contentForm.$setDirty();
        });
    }
);
