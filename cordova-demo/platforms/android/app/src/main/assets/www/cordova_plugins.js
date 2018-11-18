cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-demo.DemoPlugin",
    "file": "plugins/cordova-plugin-demo/www/DemoPlugin.js",
    "pluginId": "cordova-plugin-demo",
    "clobbers": [
      "cordova.plugins.demo"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-demo": "1.0.0"
};
// BOTTOM OF METADATA
});