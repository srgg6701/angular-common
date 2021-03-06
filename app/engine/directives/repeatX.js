"use strict";
/**
 * Испльзование $compile/
 * Причина: выражения никогда не компилируются
 */
app.directive('repeatX', function(){
    return {
        link: function (scope, el, attributes, controller){
            /*console.info('scope, el, attributes, controller', {
                scope:scope, el:el, attributes:attributes, controller:controller
            });*/
            for( var el_cloned,
                     i= 0,
                 j=Number(attributes.repeatX)-1; i<j;
                 i++){
                /**
                 * todo: разобраться. См. 13. Using Compile to Transform the DOM
                 * бесполезно здесь, необходимо в следующей директиве */
                el_cloned = el.clone();

                //console.log('i, j, el_cloned, repeat-x', {i:i, j:j, el_cloned:el_cloned, attr:el_cloned.attr('repeat-x')});

                el.after(el_cloned
                    .attr('repeat-x', 0) // устанавливает значение параметра в 0
                );
            }
        }
    }
});
app.directive('repeatY', function($compile){
    return {
        link: function (scope, el, attributes, controller){
            for( var el_cloned,
                     i= 0,
                     j=Number(attributes.repeatY)-1; i<j;
                i++){
                el_cloned = el.clone();
                el.after($compile(el_cloned.attr('repeat-y', 0))(scope));
            }
        }
    }
});


app.directive('colorSet', function() {
    return {
        restrict: 'E',
        scope: {
            color: '='
        },
        link : function($scope, elem, attrs){
            elem.html('new content: '+$scope.color);
        }
    // the rest of the configurations
    };
});

app.directive('repeatZ', function($compile){
    return {
        compile: function (el, attributes){
            return function($scope,el,attributes) {
                //linking function here
                for( var el_cloned,
                         i= 0,
                         j=Number(attributes.repeatZ)-1; i<j;
                     i++){
                    el_cloned = el.clone();
                    el.after($compile(el_cloned.attr('repeat-z', 0))($scope));
                }
            };
        }
    }
});
app.directive('repeatL', function(){
    return {
        compile: function (el, attributes){
            for( var el_cloned,
                     i= 0,
                     j=Number(attributes.repeatL)-1; i<j;
                 i++){
                el_cloned = el.clone();
                el.after(el_cloned.attr('repeat-l', 0));
            }
            return function (scope, el, attributes, controller){
                attributes.$observe('text', function(newValue){
                    if(newValue=='hello'){
                        el.css('color', 'red');
                    }
                });
            }
        }
    }
});