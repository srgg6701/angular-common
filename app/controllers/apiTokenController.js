"use strict";
// apiTokenController
app.controller('apiTokenController', ['$scope', 'apiTokenFactory', function apiTokenController($scope, apiTokenFactory) {
    console.log([apiTokenFactory]);
    $scope.token = apiTokenFactory.getToken();
    //this.token = apiTokenFactory().getToken();
}]);