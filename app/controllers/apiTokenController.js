"use strict";
// apiTokenController
/**
 * Ахтунг! Не будет работать после минификации/обфускации:
 * app.controller('apiTokenController', function apiTokenController($scope, apiTokenFactory) {});
 */
app.controller('apiTokenController', ['$scope', 'apiTokenFactory', function apiTokenController($scope, apiTokenFactory) {
    console.log([apiTokenFactory]);
    $scope.token = apiTokenFactory.getToken();
    //this.token = apiTokenFactory().getToken();
}]);