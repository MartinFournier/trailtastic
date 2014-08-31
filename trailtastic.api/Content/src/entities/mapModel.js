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

        getCanvasId: function() {
            return "#" + this.get('canvas');
        },

        getCanvas: function() {
            return document.getElementById(this.get('canvas'));
        },
    });

    return MapModel;
});