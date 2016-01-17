"use strict";
// defaultController
app.controller('defaultController', function($scope){
    $scope.content="Hello, Dudes!";
    $scope.greets = [
        {name:'Hello'}, {name:'hola'}, {name:'hi'}, {name:'Salut!'}, {name:'Здорова!'}, {name:'chiao'}, {name:'bye-bye'}
    ];
    $scope.gname = '-name';
    $scope.submitForm = function(event){
        if(prompt('Input message plz')){
            var form = event.currentTarget;
            console.log('form', form);
            form.action = '/digest';
            form.submit();
        }else{
            console.log('Form submitting is canceled');
        }
    };
});