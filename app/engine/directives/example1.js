app.directive('example1',function(){
    //console.log('Example1 goes here');
    return{
        restrict:'A',
        transclude: true,
        scope: {
            title: '@',             // заголовок использует связывание данных в родительской области
            onOk: '&',              // создаем представителя функции onOk
            onCancel: '&',          // создаем представителя функции onCancel
            visible: '='            // установка видимости для начала связывания данных
        },
        //restrict: 'E',
        replace: false
    }
});