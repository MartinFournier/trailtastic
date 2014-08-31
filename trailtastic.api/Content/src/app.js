define([
    'jquery',
    'marionette',
    'backbone',
    'semantic',
    'gmaps'
], function ($, Marionette, Backbone, Semantic, gmaps) {
    var app = new Marionette.Application();
    window.app = app;

    var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8
    };

    app.addInitializer(function () {
        var height = $(window).height() - 43;
        $("#map-canvas").css('height', height + 'px');
        
        app.map = new gmaps.Map(document.getElementById("map-canvas"), mapOptions);
    });

    return app;
});