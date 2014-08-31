define([
    "jquery",
    "marionette",
    "hbs!../../templates/map"
], function ($, Marionette, mapTemplate) {
    var MapView = Marionette.ItemView.extend({
        template: mapTemplate,

        events: {
            'click': 'log',
        },

        log: function () {
            console.log('Click');
        },

        onRender: function() {
            var height = $(window).height() - 43;
            $(this.model.getCanvasId()).css('height', height + 'px');

            this.model.createMap();
        }
    });
    return MapView;
});