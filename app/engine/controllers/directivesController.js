"use strict";

//
app.controller('directivesController', function($scope, $sce){
    $scope.preface = "Контент, полученный через ng-bind";
    $scope.preface2 = "Контент, полученный через ng-bind-template";
    $scope.fromTemplate1 = "Значение поля 1";
    $scope.fromTemplate2 = "значение поля 2";
    $scope.content=[
        { ngBind:['загружает поле $scope','<p ng-bind="preface"></p>'] },
        { ngBindTemplate:['позволяет указывать несколько полей', '<p ng-bind-template="{{preface2}}: {{fromTemplate1}}, {{fromTemplate2}}"></p>'] },
        { ngBindHtml:['загружает HTML в безопасном режиме', '<p ng-bind-html="smallHTML"></p>']},
        { ngBindHtmlUnsafe:['загружает "сырой" HTML', '<p ng-bind-html-unsafe="smallHTML2"></p>']}
    ];
    $scope.smallHTML = "<div>A very small part of HTML comes <b style='color:red;'>here</b></div>";
    // http://stackoverflow.com/questions/19415394/with-ng-bind-html-unsafe-removed-how-do-i-inject-html
    $scope.smallHTML2 = $sce.trustAsHtml("<div>A very small part of HTML comes <b style='color:red;'>red</b> here</div>");
});