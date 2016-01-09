"use strict";
/**
 * см. links.md
 * Для GET можно (и нужно!) использовать вариант с использованием cache (см. по ссылке в файле выше)
 */
app.factory('dataFactory', ['$http', function ($http) {
    return {
        getData : function(){
            var promise = $http.get('data/data.json')
                .then(function (response) {
                    // The then function here is an opportunity to modify the response
                    //console.log('response:',response);
                    //response: { data: { token: 69 },  status: 200, config: {[headers, method, transformRequest, transformResponse, url]}, statusText: "OK" }
                    return response.data;
                });
            // Return the promise to the controller
            return promise;
        }
    };
}]);