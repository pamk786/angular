System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Registration;
    return {
        setters:[],
        execute: function() {
            Registration = (function () {
                function Registration(email, uname) {
                    this.email = email;
                    this.uname = uname;
                }
                return Registration;
            }());
            exports_1("Registration", Registration);
        }
    }
});
//# sourceMappingURL=registration.js.map