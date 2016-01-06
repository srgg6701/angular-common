app.controller('navigationController', function($scope){
    $scope.home = { link:'home',text:'Главная'};
    $scope.menus=[
        {'one':'Первая'},
        {'two':'Вторая'},
        {'tree':'Третья'},
        {'four':'Четвёртая'}
    ];
});