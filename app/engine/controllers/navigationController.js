app.controller('navigationController', function($scope){
    $scope.home = {
        link:'home',text:'Home'
    };
    $scope.menus=[
        {'modules':'Modules'},
        {'controllers':'Controllers'},
        {'directives':'Directives'},
        {'services':'Services'},
        {'filters':'Filters'}
    ];
});