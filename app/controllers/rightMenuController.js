"use strict";
// rightMenuController
app.controller('rightMenuController', function($scope, $http){
    $http.get('data/right_menu.json').
        success( function(data, status, headers, config) {
        $scope.menus = data;
    }).
    error(function(data, status, headers, config) {       // log error
    });

    // $scope.menus=
    /*$scope.menus=[
        { digest:'digest' },
        { watch:'watch' },
        { directives: 'directives'}
    ];*/
});