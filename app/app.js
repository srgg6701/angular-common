var app = angular.module('App',[]);
app.run(function($rootScope){
    $rootScope.message="Root Scope has revealed!";
});
/*var app=angular.module('App',['ui.router'])
   .config(function($urlRouterProvider,$stateProvider,$locationProvider){
        $urlRouterProvider
            .otherwise("/home");
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'templates/default.html'
            })
            .state('one',{
                url:'/one',
                templateUrl:'templates/one.html'
            })
            .state('two',{
                url:'/two',
                templateUrl:'templates/two.html'
            })
            .state('tree',{
                url:'/tree',
                templateUrl:'templates/tree.html'
            })
            .state('four',{
                url:'/four',
                templateUrl:'templates/four.html'
            });
        $locationProvider.html5Mode(true);
    });*/