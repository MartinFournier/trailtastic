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

    app.mapModel = new MapModel();
    app.mapView = new MapView({
        el: '#main-content',
        model: app.mapModel
    });

    app.addInitializer(function () {
        app.mapModel.initialize();
        app.mapView.render();

        $("#menu-locate").click(function () { app.mapModel.locate();});
    });

    return app;
});