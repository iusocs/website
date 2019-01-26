/////<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['@angular/platform-browser-dynamic', './app.cmp', './app.routes', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_cmp_1, app_routes_1, http_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_cmp_1_1) {
                app_cmp_1 = app_cmp_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_cmp_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.appRouterProviders]);
        }
    }
});
//# sourceMappingURL=boot.js.map