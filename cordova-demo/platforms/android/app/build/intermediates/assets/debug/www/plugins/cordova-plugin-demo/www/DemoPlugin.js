cordova.define("cordova-plugin-demo.DemoPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'DemoPlugin', 'coolMethod', [arg0]);
};

});
