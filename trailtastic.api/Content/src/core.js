require.config({
    shim: {
        'backbone': {
            deps: ['jquery' ,'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'semantic': {
            deps: ['jquery']
        }
    },
    paths: {
        'jquery': '../3rd/jquery/dist/jquery',
        'underscore': '../3rd/underscore/underscore',
        'backbone': '../3rd/backbone/backbone',
        'marionette': '../3rd/marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../3rd/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../3rd/backbone.babysitter/lib/backbone.babysitter',
        'handlebars': '../3rd/handlebars/handlebars',
        'hbs': '../3rd/require-handlebars-plugin/hbs',
        'localstorage': '../3rd/backbone.localStorage/backbone.localStorage',
        'semantic': '../3rd/semantic/build/packaged/javascript/semantic',
        'async': '../3rd/requirejs-plugins/src/async'
    }
})

//http://blog.millermedeiros.com/requirejs-2-0-delayed-module-evaluation-and-google-maps/
define('gmaps', ['async!https://maps.google.com/maps/api/js?key=AIzaSyD8iN9aVd62aN4-YnX0hhxpEjXfNR2-1B4&libraries=drawing'],
    function () {
        return window.google.maps;
});

require(['app'], function (app) {
    app.start();
});