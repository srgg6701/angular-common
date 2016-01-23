"use strict";

app.directive('repeatX', function(){
    return {
        link: function (scope, el, attributes, controller){
            console.info('scope, el, attributes, controller', {
                scope:scope, el:el, attributes:attributes, controller:controller
            });
            for( var el_cloned,
                     i= 0,
                 j=Number(attributes.repeatX)-1; i<j;
                 //i < Number(attributes.repeatX)-1;
                 i++){ // todo: разобраться. См. 13. Using Compile to Transform the DOM

                el_cloned = el.clone();

                console.log('i, j, el_cloned, repeat-x', {i:i, j:j, el_cloned:el_cloned, attr:el_cloned.attr('repeat-x')});

                el.after(el_cloned
                    .attr('repeat-x', 0) /*, false*/ // устанавливает значение параметра в 0
                );
            }
        }
    }
});
app.directive('repeatY', function(){
    return {
        link: function (scope, el, attributes, controller){
            for( var el_cloned,
                     i= 0,
                     j=Number(attributes.repeatY)-1; i<j;
                i++){

                el_cloned = el.clone();

                el.after(el_cloned.attr('repeat-y', 0));
            }
        }
    }
});