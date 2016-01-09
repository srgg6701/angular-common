"use strict";
app.service('getData',['$http', function($http){
    var getFruits = function($http){
        $http.get('data/fruits.json')
            .success(function(data){
                console.log('data', data);
                return data;
            });
    }
}]);