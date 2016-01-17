"use strict";
// defaultController
app.controller('defaultController', function($scope){
    $scope.content="Hello, Dudes!";
    $scope.greets = [
        {name:'Hello', surname: 'Yo'},
        {name:'hola', surname: 'XYZ'},
        {name:'hi', surname: 'xxx'},
        {name:'Salut!', surname: 'Ola-Ola'},
        {name:'Здорова!', surname: 'как корова'},
        {name:'chiao', surname: 'Italiano fero'},
        {name:'bye-bye', surname: 'Pure English'}
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

app.filter('common', function(){
    return function(input){
        console.log('input', input);
        if(input.indexOf('h')!=-1){
            return 'hi';
        }
        if(input.indexOf('o')!=-1){
            return 'chiao';
        }
    }
});