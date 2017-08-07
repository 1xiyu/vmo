(function () {
    var ua = navigator.userAgent;
    var android = ua.match(/Android \d\.\d/);
    var ios = ua.match(/iPhone OS \d.\d.\d/);
    var androidVersion = android && android[0].match(/\d.\d/) && parseFloat(android && android[0].match(/\d.\d/)[0]);
    var baseWidth = 375;
    var nowWidth = baseWidth;//window.screen.width > 600 ? window.screen.width / 3 : window.screen.width;
    var basicFontSize = 32;

    if(nowWidth < 375){
        nowWidth = 375;
    }
    basicFontSize = nowWidth / baseWidth * basicFontSize;

    if (!isScale()) {
        rootFontSize(16);
        _scale(1);
    } else {
    _scale(0.5);
    rootFontSize(basicFontSize);
    }
    function rootFontSize(size) {
        document.write('<style>html,body{font-size:' + size + 'px !important;}</style>')
    }

    function _scale(zoom) {
        document.write('<meta name="viewport" content="width=device-width, initial-scale=' + zoom + ', minimum-scale=' + zoom + ', maximum-scale=' + zoom + '"/>');
    }

    function isScale(){
        var result = true;
        if(/KTU84P/.test(ua)){
            result = false;
        }
        if(android){
            if(androidVersion <= 4.3){
                result = false;
            }else if(androidVersion <= 4.4){
                var type = [/A31/, /R8207/, /R8170/, /R8270/, /R7c/];
                for(var i = 0; i < type.length; i++){
                    if(type[i].test(ua)){
                        result = false;
                    }
                }
            }
        }
        return result;
    }
}());