"use strict";
// fruitsController
// see getDataService
app.controller('fruitsController', ['$scope', '$http', function($scope, $http){
    //$scope.fruits = getData.getFruits();
    $http.get('data/fruits.json')
        .success(function(data){
            console.log('data', data);
            $scope.fruits = data;
        });
    $http.get('data/fruits.json')
        .then(function(response){
            console.log('response', response);
            //$scope.fruits = data;
        });
}]);