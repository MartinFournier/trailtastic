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
            var height = $(window).height() - 43; // magic 43
            $(this.model.getCanvasId()).css('height', height + 'px');

            var canvas = this.model.getCanvas();
            var options = this.model.options;
            map = new google.maps.Map(canvas, options);
        }
    });
    return MapView;
});