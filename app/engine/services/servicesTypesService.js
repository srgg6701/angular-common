"use strict";
// https://www.youtube.com/watch?v=J6qr6Wx3VPs
// http://pastebin.com/aPeha6mt
// http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory
var fun = function(){
    this.name = "SomeName"; // returns by factory
    this.$get = function(){
        this.name = "New Name";
        return this.name;
    };
    return this/*.name*/;
};

// Returns the actual function:
app.service('serviceExample', fun);

// Returns the output of the function's $get function:
app.provider('providerExample', fun);

// Returns the function's return value:
app.factory('factoryExample', fun);

//-----------------------------------
// provider
/*app.provider('providerOne', function(){

 });*/

/**
 * service ─ опционально возвращает объект со всеми его свойствами,
 *  которые могут быть обработаны как обычные поля в контроллере
 */
app.service('serviceOne', function(){
    this.initMessage = 'However, hello from serviceOne!';
    this.serviceMethod = function (mess){
        console.log('%cServiceOne.serviceMethod, %cthis', 'color:orange', 'color:green',this);
        //return mess;
    };
});
// factory -- returns object
app.factory('factoryOne', function(){
    this.initMessage = 'However, hello from factoryOne!';
    this.serviceMethod = function (){
        console.log('%cfactoryOne.serviceMethod, %cthis', 'color:rebeccapurple', 'color:green',this);
        //console.log('May it work like a closure?', mess);
        //return mess;
    };
    //console.log('factory value, this: %c'+this.someValue, 'color:violet', this);
    //this.factoryMethodOne();
    return this;
    /*return {
        getOne : function(){
            console.log('factoryOne.getOne run');
        },
        getTwo : function(){
            console.log('factoryOne.getTwo run');
        }
    }*/
});
// factory 2
app.factory('factoryTwo', function(){
    var UserService = {};
    function greeting (name) {
        return 'Hello there ' + name;
    }
    var valueFirst = 'here first value';
    UserService.sayHello = function (name) {
        console.log('valueFirst: ', valueFirst);
        return greeting(name);
    };
    return [UserService, this];
});
// factory 2
app.service('serviceTwo', function(){
    var UserService = {};
    function greeting (name) {
        return 'Hello there ' + name;
    }
    var valueFirst = 'here first value';
    UserService.sayHello = function (name) {
        console.log('valueFirst: ', valueFirst);
        return greeting(name);
    };
    return [UserService, this];
});