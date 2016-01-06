"use strict";
app.factory('apiTokenFactory', ['$http', function ($http) {
    var tokens = {};
    tokens.getToken = function(){
        return 69;
    };
    return tokens;
}]);
