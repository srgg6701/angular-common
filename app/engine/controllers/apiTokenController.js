"use strict";
// apiTokenController
/**
 * Ахтунг!
 * • Не будет работать после минификации/обфускации:
 * app.controller('apiTokenController', function apiTokenController($scope, apiTokenFactory) {});
 * • Будет работать всегда:
 * app.controller('apiTokenController', ['$scope', 'apiTokenFactory', function apiTokenController($scope, apiTokenFactory) {}]);
 */
/* // гарантированный, наиболее распространённый способ определения контроллера и зависимостей
app.controller('apiTokenController', ['$scope', 'apiTokenFactory', function apiTokenController($scope, apiTokenFactory) {
    $scope.token = apiTokenFactory.getToken();
}]);*/
// рекомендуемый документацией способ определения контроллера и зависимостей
var apiTokenController = function($scope, dataFactory) {
    dataFactory.getData()
        .then(function(data) {
            $scope.token = data.token;
        });
};
apiTokenController.$inject = ['$scope', 'dataFactory'];