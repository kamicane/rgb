#!/usr/bin/env node
var color = require('../');

var firstArg = function(fn, context) {
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return fn.call(context, args.length ? args[0] : null);
    };
}

process.argv.slice(2).map(firstArg(color)).forEach(firstArg(console.log));
