define([
    'backbone',
    'localstorage',
    'gmaps',
    'geo',
    'debug'
], function (Backbone, LocalStorage, gmaps, geo, debug) {
    var MapModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("Map"),

        defaults: {
            id: 1,
            canvas: 'map-canvas',
            lat: -34.397,
            lng: 150.644,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        },

        getOptions: function() {
            return {
                center: new google.maps.LatLng(this.get('lat'), this.get('lng')),
                zoom: this.get('zoom'),
                mapTypeId: this.get('mapTypeId')
            }
        },

        getCanvasId: function () {
            return "#" + this.get('canvas');
        },

        getCanvas: function () {
            return document.getElementById(this.get('canvas'));
        },

        initialize: function () {
            this.fetch();
            this.save();
        },

        setCoords: function(lat, lng, zoom) {
            this.set('zoom', zoom);
            this.set('lat', lat);
            this.set('lng', lng);
            this.save();
        },

        createMap: function () {
            var model = this;
            var map = new google.maps.Map(this.getCanvas(), this.getOptions());
            this.map = map;
            
            this.bindMapEvents(map, this)
            debug.things(map);
        },

        locate: function () {
            var map = this.map;
            geo.getBrowserLocation(function() {
                var pos = new google.maps.LatLng(
                    position.coords.latitude,
                    position.coords.longitude
                );
                map.panTo(pos);
            });
        },

        bindMapEvents: function(map, model) {
            google.maps.event.addListener(map, "bounds_changed", function () {
                var zoom = map.getZoom();
                var center = map.getBounds().getCenter();
                var lat = center.lat();
                var lng = center.lng();
                model.setCoords(lat, lng, zoom);
            });
        }
    });

    return MapModel;
});