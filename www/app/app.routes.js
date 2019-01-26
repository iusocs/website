System.register(['@angular/router', './home.cmp', './events.cmp', './research.cmp', './about.cmp'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_cmp_1, events_cmp_1, research_cmp_1, about_cmp_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_cmp_1_1) {
                home_cmp_1 = home_cmp_1_1;
            },
            function (events_cmp_1_1) {
                events_cmp_1 = events_cmp_1_1;
            },
            function (research_cmp_1_1) {
                research_cmp_1 = research_cmp_1_1;
            },
            function (about_cmp_1_1) {
                about_cmp_1 = about_cmp_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', component: home_cmp_1.HomeCmp },
                { path: 'research', component: research_cmp_1.ResearchCmp },
                { path: 'about', component: about_cmp_1.AboutCmp },
                { path: 'events', component: events_cmp_1.EventsCmp },
                { path: '**', component: home_cmp_1.HomeCmp },
            ];
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map