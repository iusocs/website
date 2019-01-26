System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyValids;
    return {
        setters:[],
        execute: function() {
            MyValids = (function () {
                function MyValids() {
                }
                MyValids.realEmail = function (control) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = re.test(control.value);
                    if (valid) {
                        return null;
                    }
                    else {
                        return { realEmail: true };
                    }
                };
                return MyValids;
            }());
            exports_1("MyValids", MyValids);
        }
    }
});
//# sourceMappingURL=myvalids.js.map