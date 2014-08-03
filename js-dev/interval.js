var pause = function(){
    console.log('i='+i);
    i++;
    if(i>10) {
        console.log('clear Timeout: '+tm);
        clearInterval(tm);
    }else
        var tm=setTimeout(pause,1000);
};
var i=0;
pause();