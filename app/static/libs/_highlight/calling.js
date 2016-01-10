$(function(){
    $('pre code').each(function(index,element){
        var content = $(element).parent().prev().html();
        console.log(content);
        $(element).html(content);
        hljs.highlightBlock(element);
    });
});
