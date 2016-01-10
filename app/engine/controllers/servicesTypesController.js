//This substitution does work:
app.controller('servicesTypesController',
    function( $scope,
              serviceExample, factoryExample, providerExample,
              factoryOne, serviceOne, factoryTwo, serviceTwo ){
        /*  $scope.service  = "service ==[" + serviceExample  + "]";
            $scope.factory  = "factory ==[" + factoryExample  + "]";
            $scope.provider = "provider==[" + providerExample + "]"; */
        console.group();
                console.log('%cserviceExample:', 'background-color: lightyellow', serviceExample);
                console.log('%cfactoryExample:', 'background-color: lightskyblue', factoryExample);
                console.log('%cproviderExample:', 'background-color: lightgreen', providerExample);
        console.groupEnd();
        //------------------------------------------------------
        console.group();
        console.log('%cfactoryOne', 'color: orangered', factoryOne);
        console.log('%cserviceOne', 'color: orange', serviceOne);
        console.groupEnd();
        //------------------------------------------------------
        console.group();
        console.log('%cfactoryTwo (UserService, this)', 'color: brown', factoryTwo);
        console.log('%cserviceTwo (UserService, this)', 'color: darkred', serviceTwo);
        console.groupEnd();
        factoryTwo[0].sayHello();
        serviceTwo[0].sayHello();
        //factoryOne.serviceMethod();
        //factoryOne.getOne();
        //factoryOne.getTwo();
        /*$scope.mess =*/ //serviceOne.methodOne('pass some message to the serviceOne');
        //console.log('$scope.mess now: %c'+$scope.mess, 'color:blue');
    });