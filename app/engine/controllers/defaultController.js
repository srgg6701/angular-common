"use strict";
// defaultController
app.controller('defaultController', function($scope){
    $scope.content="Hello, Dudes!";
    $scope.submitForm = function(event){
        if(prompt('Input message pls')){
            var form = event.currentTarget;
            console.log('form', form);
            form.action = '/digest';
            form.submit();
        }else{
            console.log('Form submitting is canceled');
        }
    };
});