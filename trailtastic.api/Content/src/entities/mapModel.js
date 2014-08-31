define([
    'underscore',
    'backbone',
    'localstorage',
    'gmaps'
], function (_, Backbone, LocalStorage, gmaps) {
    var MapModel = Backbone.Model.extend({
        defaults: {
            id: 1,
            canvas: 'map-canvas'
        },
        options: {
            center: new google.maps.LatLng(-34.397, 150.644),
            zoom: 8
        },
        localStorage: new Backbone.LocalStorage("Map"),

        initialize: function () {
            this.fetch();
            this.save();
        },

        getCanvasId: function () {
            return "#" + this.get('canvas');
        },

        getCanvas: function () {
            return document.getElementById(this.get('canvas'));
        },

        createMap: function () {
            this.map = new google.maps.Map(this.getCanvas(), this.options);
            this.initializePosition(this.map);
        },

        initializePosition: function (map) {
            //from: http://www.rockylhc.com/blog/2012/05/17/using-gmap-requirejs-backbone
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        var pos = new google.maps.LatLng(
                            position.coords.latitude,
                            position.coords.longitude
                        );
                        map.setCenter(pos);
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
        }
    });

    return MapModel;
});