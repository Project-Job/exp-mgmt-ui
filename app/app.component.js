/**
 * Created by kchaudha on 12/18/16.
 */
(function(app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'my-app',
                templateUrl: 'app/views/login.html'
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));