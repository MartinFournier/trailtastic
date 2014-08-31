define([], function () {
    var geo = {};
    //from: http://www.rockylhc.com/blog/2012/05/17/using-gmap-requirejs-backbone
    geo.getBrowserLocation = function (success) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    success();
                }, function (e) {
                    switch (e) {
                        case 1:
                            console.log('The user denied the request for location information.');
                            break;
                        case 2:
                            console.log('Your location information is unavailable.');
                            break;
                        case 3:
                            console.log('The request to get your location timed out.');
                            break;
                        default:
                            console.log('default');
                    }
                });
        }
    };
});