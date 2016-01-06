"use strict";
// rightMenuController
app.controller('rightMenuController', function($scope, $http, $rootScope){
    $http.get('data/right_menu.json').
        success(function(data, status, headers, config) {
            //$rootScope.mess = "Hello!";
            //console.log('$rootScope.mess, $scope.mess', [$rootScope.mess, $scope.mess]);
            $scope.menus = data;
        }).
        error(function(data, status, headers, config) {
            $rootScope.error_message = "Can't get .json";
            $rootScope.show_error = true;
            console.log('$rootScope.error_message, $scope.error_message', [$rootScope.error_message, $scope.error_message]);
        });
});