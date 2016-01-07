window.onload=function() {
    var intv = setInterval(function() {
        var metabars = document.querySelectorAll('[src*="metabar.ru"]');
        if (metabars.length) {
            for (var el in metabars) {
                if (typeof metabars[el] == 'object') {
                    metabars[el].remove();
                }
            }
        } else
            clearInterval(intv);
    }, 1000);
};