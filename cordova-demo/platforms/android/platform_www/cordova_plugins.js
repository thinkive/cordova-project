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
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "com.qdc.plugins.baidu.location.baidu_location",
    "file": "plugins/com.qdc.plugins.baidu.location/www/baidu_location.js",
    "pluginId": "com.qdc.plugins.baidu.location",
    "clobbers": [
      "baidu_location"
    ]
  },
  {
    "id": "cordova-plugin-facebook.CordovaFacebook",
    "file": "plugins/cordova-plugin-facebook/www/CordovaFacebook.js",
    "pluginId": "cordova-plugin-facebook",
    "clobbers": [
      "CordovaFacebook"
    ]
  },
  {
    "id": "cordova-plugin-facebookads.FacebookAds",
    "file": "plugins/cordova-plugin-facebookads/www/FacebookAds.js",
    "pluginId": "cordova-plugin-facebookads",
    "clobbers": [
      "window.FacebookAds"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-demo": "1.0.0",
  "cordova-plugin-network-information": "2.0.1",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-vibration": "3.1.0",
  "cordova-plugin-dialogs": "2.0.1",
  "com.qdc.plugins.baidu.location": "2.0.0",
  "cordova-plugin-facebook": "0.2.2",
  "cordova-plugin-extension": "1.5.4",
  "cordova-facebook-audnet-sdk": "4.26.2",
  "cordova-plugin-facebookads": "4.23.2"
};
// BOTTOM OF METADATA
});