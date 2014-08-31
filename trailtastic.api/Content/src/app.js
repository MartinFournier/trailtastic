define([
    'jquery',
    'marionette',
    'backbone',
    'semantic',
    'views/map',
    'entities/mapModel'
], function ($, Marionette, Backbone, Semantic, MapView, MapModel) {
    var app = new Marionette.Application();
    window.app = app;

    app.map = new MapModel();
    app.mapView = new MapView({
        el: '#main-content',
        model: app.map
    });

    app.addInitializer(function () {
        app.map.initialize();
        app.mapView.render();
    });

    return app;
});