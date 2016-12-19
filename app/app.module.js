/**
 * Created by kchaudha on 12/18/16.
 */
(function(app) {
    app.AppModule =
        ng.core.NgModule({
                imports: [ ng.platformBrowser.BrowserModule ],
                declarations: [ app.AppComponent ],
                bootstrap: [ app.AppComponent ]
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));
