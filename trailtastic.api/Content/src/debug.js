define(['gmaps'], function (gmaps) {
    var debug = {};
    debug.trailPoints = [
        new google.maps.LatLng(48.89020121920382, -66.63778781890869),
        new google.maps.LatLng(48.890060133928394, -66.63950443267822),
        new google.maps.LatLng(48.88862104137925, -66.64259433746338),
        new google.maps.LatLng(48.88743587523872, -66.64349555969238),
        new google.maps.LatLng(48.88613780390151, -66.64439678192139),
        new google.maps.LatLng(48.88540409650129, -66.6441822052002),
        new google.maps.LatLng(48.88498079887362, -66.64263725280762),
        new google.maps.LatLng(48.88517833821243, -66.64100646972656),
        new google.maps.LatLng(48.88565807335806, -66.63946151733398),
        new google.maps.LatLng(48.88616602320194, -66.63787364959717),
        new google.maps.LatLng(48.886617529842795, -66.63662910461426),
        new google.maps.LatLng(48.88670218688412, -66.63486957550049)
    ];

    debug.trail = new google.maps.Polyline({
        path: debug.trailPoints,
        geodesic: true,
        strokeColor: '#55FF33',
        strokeOpacity: 0.9,
        strokeWeight: 2
    });

    debug.setTrail = function (map) {
        debug.trail.setMap(map);
    };

    debug.drawable = function (map) {
        var drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [
                  google.maps.drawing.OverlayType.MARKER,
                  google.maps.drawing.OverlayType.CIRCLE,
                  google.maps.drawing.OverlayType.POLYGON,
                  google.maps.drawing.OverlayType.POLYLINE,
                  google.maps.drawing.OverlayType.RECTANGLE
                ]
            },
            markerOptions: {
                //icon: 'images/beachflag.png'
            },
            circleOptions: {
                fillColor: '#ffff00',
                fillOpacity: 1,
                strokeWeight: 5,
                clickable: false,
                editable: true,
                zIndex: 1
            }
        });
        drawingManager.setMap(map);
    };

    debug.logMapClick = function (map) {
        google.maps.event.addListener(map, "click", function (event) {
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            console.log('(' + lat + ',' + lng + ')');
        });
    };

    debug.infoWindow = function (map) {
        var infowindow = new google.maps.InfoWindow({
            content: 'abc blab blalblalbla <br />YAY SHELTER!'
        });
        var myLatlng = new google.maps.LatLng(48.89370000667393, -66.60328388214111);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Uluru (Ayers Rock)'
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    };

    debug.things = function (map) {
        //debug.drawable(map);
        debug.setTrail(map);
        debug.logMapClick(map);
        debug.infoWindow(map);
    }

    return debug;
});