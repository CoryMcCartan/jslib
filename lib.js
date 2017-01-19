/*
 * JS LIBRARY
 * CORY McCARTAN
 * JANUARY 2017
 */

(function() {
    "use strict";

    // call main()
    document.addEventListener("readystatechange", function() {
        if (document.readyState !== "complete") return;
        main();
    });

    // DOM getters
    window.$ = (s) => document.querySelector(s);
    window.$$ = (s) => document.querySelectorAll(s);

    // utility functions
    window.NULLF = () => {};
    window.LOGF = (l) => console.log(l);

    // Promise wrapper
    window.Pr = function(func) {
        // return a function that wraps a promise
        return function(...args) {
            // create the promise
            return new Promise(function(resolve, reject) {
                // pass through resolve/reject, plus additional args
                func(resolve, reject, ...args);
            }); 
        };
    };

    window.Mediator = function(glue) {
        var self = {};

        self.trigger = function(name, ...data) {   
            var functionName = "on" + name;

            if (glue.hasOwnProperty(functionName) 
                && typeof glue[functionName] === "function") {
                    glue[functionName](...data);
                }
        };

        return self;
    };
})();
