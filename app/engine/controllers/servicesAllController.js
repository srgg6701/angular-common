"use strict";
app.controller('servicesAllController',
[   '$scope',
    'servicesAllFactory',
    'servicesAllService',
    'servicesAllProvider',
    function($scope, servicesAllFactory, servicesAllService, servicesAllProvider){
        console.log('servicesAllProvider', servicesAllProvider);
        servicesAllProvider.setName('Alexis');
        console.log('get name: ', servicesAllProvider.getName());

        // servicesAllFactory
        console.groupCollapsed('servicesAllFactory');
            servicesAllFactory.someName = 'Unknown name in factory';
            console.log('servicesAllFactory', servicesAllFactory);
            console.log('someName in factory', servicesAllFactory.someName);
        console.groupEnd();
        // servicesAllService
        console.groupCollapsed('servicesAllService');
            servicesAllService.someName = 'Unknown name in service';
            console.log('servicesAllService', servicesAllService);
            console.log('someName in service', servicesAllService.someName);
        console.groupEnd();
        // servicesAllProvider
        console.groupCollapsed('servicesAllProvider');
            console.log('servicesAllProvider', servicesAllProvider);
        console.groupEnd();
        //$scope.thingFromConfig = servicesAllProvider.providerConfig;
    }
]);
app.controller('servicesAllControllerNext',
[   '$scope',
    'servicesAllFactory',
    'servicesAllService',
    'servicesAllProvider',
    function($scope, servicesAllFactory, servicesAllServiceNext, servicesAllProvider){
        console.log('Next: servicesAllFactory', servicesAllFactory);
        console.log('Next: servicesAllServiceNext', servicesAllServiceNext);
    }
]);