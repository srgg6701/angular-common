/**
Чтобы использовать rootScope - убрать назначение контроллера для scope в index.html
var app = angular.module('App',[]);
app.run(function($rootScope){
    $rootScope.message="Root Scope has revealed!";
});*/
var app=angular.module('App',['ui.router', 'ngSanitize']);

app.config(function( $urlRouterProvider, $stateProvider, $locationProvider){

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
            })
            .state('digest',{
                url:'/digest',
                controller:'digestController',
                templateUrl:'templates/digest.html'
            })
            .state('directives',{
                url:'/directives',
                controller:'directivesController',
                templateUrl:'templates/directives.html'
            })
           .state('services',{
               url:'/services',
               controller:'servicesController',
               templateUrl:'templates/services.html'
           })
            .state('promise_and_q',{
                url:'/promise_and_q',
                controller:'promisesController',
                templateUrl:'templates/promises_and_q.html'
            })
            .state('http_fruits',{
                url:'/fruits',
                controller:'fruitsController',
                templateUrl:'templates/fruits.html'
            })
            .state('services_types',{
                url:'/services_types',
                controller:'servicesTypesController',
                templateUrl:'templates/services_types.html'
            })
            .state('services_types_all',{
                url:'/services_types_all',
                controller:'servicesAllController',
                templateUrl:'templates/services_types2.html'
            })
            .state('services_types_all2',{
                url:'/services_types_all2',
                controller:'servicesAllControllerNext',
                templateUrl:'templates/services_types2.html'
            });

        $locationProvider.html5Mode(true);
    });