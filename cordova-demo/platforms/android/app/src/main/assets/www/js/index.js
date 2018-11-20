/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //当cordova完全加载，可以调用cordova API接口          支持平台：Amazon、Fire OS、Android、BlackBerry 10、iOS、Tizen、Windows Phone 8、Windows 8
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    onOnline:function() { // 在线
         alert('online')
    },
    onOffline:function() { // 离线
        alert('onOffline')
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // 自定义事件
        cordova.plugins.demo.coolMethod("iloveyou", function () {
           console.log('js call native plugin callback success')
        },function () {
           console.log('js call native plugin callback fail')
        })
        navigator.splashscreen.hide();// 关闭启动图
        app.checkConnection(); // 检查网络状况
        app.checkDevice();// 获得设备信息
        app.receivedEvent('deviceready');
        //以下是测试
        // 3s后震动设备3s 必须是真机测试才有效
        setTimeout(function(){
            navigator.vibrate(3000) // navigator.vibrate([3000]);//navigator.vibrate(0)取消所有震动
        },3000)

        //（可视化消息提醒）不同于js的alert()、confirm()和prompt()方法是同步的。Cordova的alert()、confirm()和prompt()方法是异步的，并且对显示内容有更大的控制权限。

        function alertDismissed() {
            // do something
        }
        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }

        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']     // buttonLabels
        );

        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }

        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
        //重复播放提示音二次的次数。
        // onSuccess Callback cordova plugin add cordova-plugin-geolocation
        // 下面原生定位支持ios，android由于墙的问题，

//       ios 定位处理
//        var onSuccess = function(position) {
//            alert('纬度: '  + position.coords.latitude          + '\n' +
//                    '经度: '         + position.coords.longitude         + '\n' +
//                    '海拔: '          + position.coords.altitude          + '\n' +
//                    '水平精度: '          + position.coords.accuracy          + '\n' +
//                    '垂直精度: ' + position.coords.altitudeAccuracy  + '\n' +
//                    '方向: '           + position.coords.heading           + '\n' +
//                    '速度: '             + position.coords.speed             + '\n' +
//                    '时间戳: '         + position.timestamp                + '\n');
//        };
//
//        // onError Callback receives a PositionError object
//        //
//        function onError(error) {
//            alert('code: '    + error.code    + '\n' +
//                  'message: ' + error.message + '\n');
//        }
//
//        navigator.geolocation.getCurrentPosition(onSuccess, onError);

//      android定位处理（百度定位）cordova plugin add https://github.com/mrwutong/cordova-qdc-baidu-location --variable API_KEY="hkxZdsR6lhCPfdXjdxvxWo0nAMVMXoT5"
//      移除cordova plugin rm com.qdc.plugins.baidu.location

        baidu_location.getCurrentPosition(function(info) {
            alert(info)
        }, function(error) {
            alert(error)
        });



//        function onSuccess(imageURI) {
//            var image = document.getElementById('myImage');
//            image.src = imageURI;
//        }
//
//        function onFail(message) {
//            alert('Failed because: ' + message);
//        }
//        //照片选择
//        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
//            destinationType: Camera.DestinationType.FILE_URI });



        /** base64
         * Warning: Using DATA_URL is not recommended! The DATA_URL destination
         * type is very memory intensive, even with a low quality setting. Using it
         * can result in out of memory errors and application crashes. Use FILE_URI
         * or NATIVE_URI instead.
         */
//        navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
//            destinationType: Camera.DestinationType.DATA_URL
//        });
//
//        function onSuccess(imageData) {
//            var image = document.getElementById('myImage');
//            image.src = "data:image/jpeg;base64," + imageData;
//        }
//
//        function onFail(message) {
//            alert('Failed because: ' + message);
//        }

           // 创建联系人
//           addresses: 包括联系人所有不同地址的数组。
//           birthday: 联系人的生日。
//           categories: 包括所有与联系人相关的用户定义的分类的数组。
//           displayName: 联系人的显示名。
//           emails: 包括联系人所有邮件地址的数组。
//           id: 联系人的全局唯一标识符。
//           ims: 包括联系人所有的即时消息地址的数组。
//           nickname: 联系人的昵称。
//           note: 和联系人相关的记录。
//           organizations: 包括和联系人相关的所有的组织的数组。
//           phoneNumbers: 包括所有与联系人相关的所有电话号码的数组。
//           photos: 包括所有与联系人相关的图像的数组。
//           urls: 包括所有与联系人相关的网页的数组。
//            function createContact() {
//               var myContact = navigator.contacts.create({"displayName": "Test User"});
////               var fullName = "Zhang San";
////               myContact.displayName = fullName;
////               myContact.nickName = "GouSheng";
////
////               var tmpName = new ContactName();
////               tmpName.givenName = "San";
////               tmpName.familyName = "Zhang";
////               tmpName.formatted = fullName;
////
////               myContact.name = tmpName;
//               myContact.save(contactSuccess, contactError);
//
//               function contactSuccess() {
//                  alert("Contact is saved!")
//               }
//
//               function contactError(message) {
//                  alert('Failed because: ' + message);
//               }
//
//          }
//             // 查找联系人
//            function findContacts() {
//
//           var options = new ContactFindOptions();
//           options.filter = "";
//           options.multiple = true;
//
//           var fields = ["displayName", "name", "phoneNumbers", "emails", "address"];
//           navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
//
//           function contactfindSuccess(contacts) {
//              for (var i = 0; i < contacts.length; i++) {
//                 alert("Display Name = " + contacts[i].displayName);
//              }
//           }
//
//           function contactfindError(message) {
//              alert('Failed because: ' + message);
//           }
//
//        }
//            //删除联系人
//            function deleteContact() {
//
//           var options = new ContactFindOptions();
//           options.filter = "Test User";
//           options.multiple = false;
//           fields = ["displayName"];
//
//           navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
//
//           function contactfindSuccess(contacts) {
//
//              var contact = contacts[0];
//              contact.remove(contactRemoveSuccess, contactRemoveError);
//
//              function contactRemoveSuccess(contact) {
//                 alert("Contact Deleted");
//              }
//
//              function contactRemoveError(message) {
//                 alert('Failed because: ' + message);
//              }
//           }
//
//           function contactfindError(message) {
//              alert('Failed because: ' + message);
//           }
//
//        }
//        var obj = {name: "NativeStorage", author: "GillesCallebaut"};
//        window.NativeStorage.setItem("reference",obj,app.setSuccess,app.setError);
            navigator.notification.confirm('是否调用自定义插件', function(){
             if( button==1 ) {
                    ExtraInfo.getExtra(function(message) {
                         alert(message);
                    }, function(message) {
                        alert(message);
                    },{funcNo:'000001',packageClass:'com.wecloud.MyActivity'});
             }

            }, '新开百度页面', '确定,取消');
         //自定义插件


         app.checkAppUpdate();
         if (window.cordova && StatusBar) {
//              StatusBar.styleDefault 状态栏默认样式，也就是电池信号黑色；
//              StatusBar.styleLightContent 状态栏内容浅色，貌似就是白色，适合深色背景；
//              StatusBar.styleBlackTranslucent 状态栏黑色半透明，我测了下，跟上面一样的效果，电池时间都是白色的，适合深色背景；
//              StatusBar.styleBlackOpaque 状态栏黑色不透明。我测了下，还是白色的，跟上面一样，适合深色背景；
//              StatusBar.hide 状态栏隐藏；
//              StatusBar.show 状态栏显示；
             //隐藏状态栏，QQ游戏
             //StatusBar.hide()
             StatusBar.overlaysWebView(true);
             StatusBar.backgroundColorByHexString('#455b95');
             StatusBar.styleBlackOpaque();
             //StatusBar.backgroundColorByHexString("#455b95");
         }
         app.socialShare();
         function successFunction()
         {
             console.info("It worked!");
         }

         function errorFunction(error)
         {
             console.error(error);
         }
         function trace(value)
         {
             console.log(value);
         }
         //全屏插件
          //AndroidFullScreen.immersiveMode(successFunction, errorFunction);//和StatusBar.hide()效果一样
          AndroidFullScreen.showUnderSystemUI(successFunction, errorFunction);//状态栏透明但是内容全部顶上去了，必须要input聚焦后才透明状态栏
 //         AndroidFullScreen.showUnderStatusBar(successFunction, errorFunction);//和AndroidFullScreen.showUnderSystemUI(successFunction, errorFunction)一致
        //  AndroidFullScreen.leanMode(successFunction, errorFunction); //无效果

            // Show system UI
        // AndroidFullScreen.showSystemUI(successFunction, errorFunction);//聚焦输入框会闪现
        // Is this plugin supported?
        // AndroidFullScreen.isSupported(supportedFunction, errorFunction);

 //       // Is immersive mode supported?
//          AndroidFullScreen.isImmersiveModeSupported(successFunction, errorFunction);
 //
 //       // The width of the screen in immersive mode
 //        AndroidFullScreen.immersiveWidth(trace, errorFunction);
 //
 //       // The height of the screen in immersive mode
 //         AndroidFullScreen.immersiveHeight(trace, errorFunction);
            // cordova.plugins.Keyboard.show();
             window.addEventListener('native.keyboardshow', keyboardShowHandler);
             window.addEventListener('native.keyboardhide', keyboardHideHandler);

             function keyboardHideHandler(e){
                 //alert('Goodnight, sweet prince');
             }

             function keyboardShowHandler(e){
                 //alert('Keyboard height is: ' + e.keyboardHeight);
             }
            // app.getAppVersion();

//             window.plugins.toast.showWithOptions(
//             {
//                   message: "hey there",
//                   duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
//                   position: "center",
//                   addPixelsY: -40, // added a negative value to move it up a bit (default 0)
//                   styling: {
//                     opacity: 0.75, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
//                     backgroundColor: '#FF0000', // make sure you use #RRGGBB. Default #333333
//                     textColor: '#FFFF00', // Ditto. Default #FFFFFF
//                     textSize: 20.5, // Default is approx. 13.
//                     cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
//                     horizontalPadding: 20, // iOS default 16, Android default 50
//                     verticalPadding: 16 // iOS default 12, Android default 30
//                    }
//                 },
//                 successFunction, // optional
//                 errorFunction    // optional
//             );
             //window.plugins.toast.hide();
 //            app.localSingleNotification();
 //          app.actionsheet();
 //            app.lockOrientation();
//            app.datepicker()
             // app.qrcode()
              //app.calendar(); //失败
              //app.secureStorage();//失败
            //app.keyboard()//失败
            //app.sim();
            //app.pinDialog();
            //app.nativepagetransitions();
//            var unique_id_of_this_notification = 12;
//            notification.show(unique_id_of_this_notification, 'my title', 'my message');//和localSingleNotification一样
             //app.secureLocalStorage();//本地数据存储，非h5的数据
            //app.pDialog();
           // ActivityIndicator.show('加载中')//菊花ActivityIndicator.hide()
          // app.canvasSaveImg();
        //app.callPhone();
        // app.sendSms();

    },
    callPhone:function(){
        var number = '13926530028';
        var bypassAppChooser = false;
        function onSuccess(result){
          console.log("Success:"+result);
        }

        function onError(result) {
          console.log("Error:"+result);
        }
        window.plugins.CallNumber.callNumber(onSuccess, onError, number, bypassAppChooser);
    },
    sendSms:function(){
        var number = '13926530028';
        var message = '测试发送短信';
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    },
    canvasSaveImg:function(){
//        window.canvas2ImagePlugin.saveImageDataToLibrary(
//            function(msg){
//                console.log(msg);
//            },
//            function(err){
//                console.log(err);
//            },
//            document.getElementById('myCanvas')
//        );
    },
    pDialog:function(){
//        cordova.plugin.pDialog.init({
//            theme : 'HOLO_DARK',
//            progressStyle : 'SPINNER',
//            cancelable : true,
//            title : 'Please Wait...',
//            message : 'Contacting server ...'
//        });
        //cordova.plugin.pDialog.dismiss();
        //cordova.plugin.pDialog.init({progressStyle : 'HORIZONTAL', title: 'Please Wait...', message : 'Connecting to server...'});
        //cordova.plugin.pDialog.setProgress(25);
        var a = cordova.plugin.pDialog.init({progressStyle : 'HORIZONTAL', title: 'Please Wait...', message : 'Connecting to server...'});
        var i = 25;
        setInterval(function(){
         a.setProgress(i++)
        },1000);
        //a.setMessage('Connecting to server2...');
    },
    secureLocalStorage:function(){
        cordova.plugins.SecureLocalStorage.setItem("key" , "value");

        cordova.plugins.SecureLocalStorage.getItem("key").then(function (value){alert(value)})

//        cordova.plugins.SecureLocalStorage.removeItem("key");
//
//        cordova.plugins.SecureLocalStorage.clear();
    },
    nativepagetransitions:function(){
        var options = {
          "direction"        : "up", // 'left|right|up|down', default 'left' (which is like 'next')
          "duration"         :  500, // in milliseconds (ms), default 400
          "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
          "slidePixels"      :   20, // optional, works nice with slowdownfactor -1 to create a 'material design'-like effect. Default not set so it slides the entire page.
          "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
          "androiddelay"     :  150, // same as above but for Android, default 70
          "winphonedelay"    :  250, // same as above but for Windows Phone, default 200,
          "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
          "fixedPixelsBottom":   60  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
        };
        window.plugins.nativepagetransitions.slide(
          options,
          function (msg) {console.log("success: " + msg)}, // called when the animation has finished
          function (msg) {alert("error: " + msg)} // called in case you pass in weird values
        );
    },
    pinDialog:function(){
        function callback(results)
        {
            if(results.buttonIndex == 1)
            {
                // OK clicked, show input value
                alert(results.input1);
            }
            if(results.buttonIndex == 2)
            {
                // Cancel clicked
                alert("Cancel");
            }
        };
        window.plugins.pinDialog.prompt("message", callback, "title", ["OK","Cancel"]);
    },
    sim:function(){
        function successCallback(result) {
          alert(JSON.stringify(result));
        }

        function errorCallback(error) {
          console.log(error);
        }
        window.plugins.sim.getSimInfo(successCallback, errorCallback);
    },
    keyboard:function(){
         Keyboard.show();
         setTimeout(function(){
            Keyboard.hide();
         },5000);
    },
    secureStorage:function(){
        var ss = new cordova.plugins.SecureStorage(
            function () { alert('Success')},
            function (error) { alert('Error ' + error); },
            'my_app');
        ss.set( function (key) { alert('Set ' + key); },
                function (error) { alert('Error ' + error); },
                'mykey', 'myvalue');
        ss.get( function (value) { alert(value) },
                    function (error) { alert('Error ' + error); },
                    'mykey');
    },
    calendar:function(){
      var startDate = new Date(2015,2,15,18,30,0,0,0); // beware: month 0 = january, 11 = december
      var endDate = new Date(2015,2,15,19,30,0,0,0);
      var title = "My nice event";
      var eventLocation = "Home";
      var notes = "Some notes about this event.";
      var success = function(message) { alert("Success: " + JSON.stringify(message)); };
      var error = function(message) { alert("Error: " + message); };

      // create a calendar (iOS only for now)
      //window.plugins.calendar.createCalendar('我的日历',success,error);
       var createCalOptions = window.plugins.calendar.getCreateCalendarOptions();
        createCalOptions.calendarName = "My Cal Name";
        createCalOptions.calendarColor = "#FF0000"; // an optional hex color (with the # char), default is null, so the OS picks a color
        window.plugins.calendar.createCalendar(createCalOptions,success,error);
    },
    qrcode:function(){
//        QRScanner.prepare(onDone); // show the prompt
//
//        function onDone(err, status){
//          if (err) {
//           // here we can handle errors and clean up any loose ends.
//           console.error(err);
//          }
//          if (status.authorized) {
//            // W00t, you have camera access and the scanner is initialized.
//            // QRscanner.show() should feel very fast.
//          } else if (status.denied) {
//           // The video preview will remain black, and scanning is disabled. We can
//           // try to ask the user to change their mind, but we'll have to send them
//           // to their device settings with `QRScanner.openSettings()`.
//          } else {
//            // we didn't get permission, but we didn't get permanently denied. (On
//            // Android, a denial isn't permanent unless the user checks the "Don't
//            // ask again" box.) We can ask again at the next relevant opportunity.
//          }
//        }
//       QRScanner.scan(displayContents);
//
//        function displayContents(err, text){
//          if(err){
//            // an error occurred, or the scan was canceled (error code `6`)
//          } else {
//            // The scan completed, display the contents of the QR code:
//            alert(text);
//          }
//        }

        // Make the webview transparent so the video preview is visible behind it.
       // QRScanner.show();
        QRScanner.useBackCamera(function(err, status){
          err && console.error(err);
          console.log(status);
        });
    },
    datepicker:function(){
        var options = {
            date: new Date(),
            mode: 'date'
        };

        function onSuccess(date) {
            alert('Selected date: ' + date);
        }

        function onError(error) { // Android only
            alert('Error: ' + error);
        }

        datePicker.show(options, onSuccess, onError);
    },
    socialShare: function () {
        // this is the complete list of currently supported params you can pass to the plugin (all optional)
        var options = {
          message: '来自数据分析APP', // not supported on some apps (Facebook, Instagram)
          subject: 'the subject', // fi. for email
          files: ['', ''], // an array of filenames either locally or remotely
          url: 'http://www.wecloud.net.cn',
          chooserTitle: '选择一个并分享' // Android only, you can override the default share sheet title
        }

        var onSuccess = function(result) {
          console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
          console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
        }

        var onError = function(msg) {
          console.log("Sharing failed with message: " + msg);
        }
        //window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
//        window.plugins.socialsharing.shareViaEmail(
//          'Message', // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
//          'Subject',
//          ['to@person1.com', 'to@person2.com'], // TO: must be null or an array
//          ['cc@person1.com'], // CC: must be null or an array
//          null, // BCC: must be null or an array
//          ['https://www.google.nl/images/srpr/logo4w.png','www/localimage.png'], // FILES: can be null, a string, or an array
//          onSuccess, // called when sharing worked, but also when the user cancelled sharing via email. On iOS, the callbacks' boolean result parameter is true when sharing worked, false if cancelled. On Android, this parameter is always true so it can't be used). See section "Notes about the successCallback" below.
//          onError // called when sh*t hits the fan
//        );
//            window.plugins.socialsharing.share(null, null, 'www/img/logo.png', null);
              //直接分享到com.tencent.mm微信讨论组-android

             // 检查是否安装了QQ

//             window.YCQQ.checkClientInstalled(function(){
//               alert('安装了QQ')
//            },function(){
//                // if installed QQ Client version is not supported sso,also will get this error
//                alert('未安装了QQ')
//            });
             //QQ SSO 登录
//             var checkClientIsInstalled = 1;//默认值是 0,仅仅针对 iOS平台有效![]()
//             window.YCQQ.ssoLogin(function(args){
//                   alert("token is " + args.access_token);
//                   alert("userid is " +args.userid);
//                   alert("expires_time is "+ new Date(parseInt(args.expires_time)) + " TimeStamp is " +args.expires_time);
//                   },function(failReason){
//                      console.log(failReason);
//             },checkClientIsInstalled);

    },
    lockOrientation:function(){
     //screen.lockOrientation('landscape');//横屏了
    // allow user rotate
    //screen.unlockOrientation();

    },
    actionsheet:function(){
        var options = {
            androidTheme: window.plugins.actionsheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT, // default is THEME_TRADITIONAL
            title: 'What do you want with this image?',
            subtitle: 'Choose wisely, my friend', // supported on iOS only
            buttonLabels: ['Share via Facebook', 'Share via Twitter'],
            androidEnableCancelButton : true, // default false
            winphoneEnableCancelButton : true, // default false
            addCancelButtonWithLabel: 'Cancel',
            addDestructiveButtonWithLabel : 'Delete it',
            position: [20, 40], // for iPad pass in the [x, y] position of the popover
            destructiveButtonLast: true // you can choose where the destructive button is shown
        };
        var callback = function(){
        }
        // Depending on the buttonIndex, you can now call shareViaFacebook or shareViaTwitter
        // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
        window.plugins.actionsheet.show(options, callback);
//        window.plugins.actionsheet.hide();
    },
    localSingleNotification: function(){
//        在deviceready 设备准备好了调用插件的方法：
//        notification.local.add
//        notification.local.cancel
//        notification.local.cancelAll
//        notification.local.isScheduled
//        notification.local.getScheduledIds
//        notification.local.isTriggered
//        notification.local.getDefaults
//        notification.local.setDefaults
//        notification.local.onadd
//        notification.local.ontrigger
//        notification.local.onclick
//        notification.local.oncancel
        cordova.plugins.notification.local.schedule({
          id:1,
          title:'应用提醒1',
          text:'应用有新消息，快来查看吧',
          at: new Date(new Date().getTime() + 5  * 1000)
          },{
        id: 2,
          title: '应用提醒2',
          text:'应用又有新消息，快来查看吧',
          at: new Date(new Date().getTime() + 10 * 1000)
        });

//        //推迟提醒：
//        var now  =new Date().getTime();
//        var a5_sec_from_now = new Date(now +5*1000);
//
//        cordova.plugins.notification.local.schedule({
//            text:"Delayed Notification",
//            at: a5_sec_from_now,
//            sound:null
//        });
//        //重复提醒
//        cordova.plugins.notification.local.schedule({
//            text:"Repeatedly Notification",
//            every:"day",
//            icon:"www/img/logo.png"
//        }, function(){});

        //点击了通知
        cordova.plugins.notification.local.on("click", function (notification) {
           alert(1)
        });
    },
    getAppVersion:function(){
      cordova.getAppVersion.getVersionNumber(function(getVersionNumber){
       navigator.notification.alert(getVersionNumber)
      });
      cordova.getAppVersion.getAppName(function(getVersionNumber){
           navigator.notification.alert(getVersionNumber)
      });
      cordova.getAppVersion.getVersionCode(function(getVersionNumber){
           navigator.notification.alert(getVersionNumber)
      });
      cordova.getAppVersion.getPackageName(function(getVersionNumber){
          navigator.notification.alert(getVersionNumber)
      });
    },
    checkAppUpdate: function() {
       var versionCode = window.AppVersion.build;
       var updateUrl = 'http://192.168.155.3/data-analysis/version.xml';
       function onFail() {}
       function onSuccess() {

       }
       window.AppUpdate.checkAppUpdate(onSuccess, onFail, updateUrl);

    },
    setSuccess: function (obj) {
        console.log(obj.name);
        NativeStorage.getItem("reference", app.getSuccess, app.getError);
    },
    setError: function (error) {
        console.log(error.code);
        if (error.exception !== "") console.log(error.exception);
    },
    getSuccess: function (obj) {
        console.log(obj.name);
        NativeStorage.remove("reference", app.removeSuccess, app.removeError);
    },
    getError: function (error) {
        console.log(error.code);
        if (error.exception !== "") console.log(error.exception);
    },
    removeSuccess: function () {
        console.log("Removed");
    },
    removeError: function (error) {
        console.log(error.code);
        if (error.exception !== "") console.log(error.exception);
    },
    checkConnection: function() {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
        alert('网络类型: ' + states[networkState]);
    },
    checkDevice: function (){
//    device.cordova 返回cordova的版本
//    device.model 返回设备的模型或产品的名称
//    device.platform 返回手机的平台信息  (Android/iOS 等等)
//    device.uuid 返回手机 uuid
//    device.version 返回系统版本
//    device.manufacturer
//    device.isVirtual
//    device.serial
//    device.cordova
      alert(JSON.stringify(device))
      //alert('机型：'+model)
    },
    eventBackButton: function(){
         navigator.notification.confirm('确认退出？,再按返回直接退出', app.showConfirm, '退出软件', '确定,取消');
         document.removeEventListener("backbutton", app.eventBackButton, false); // 注销返回键
         document.addEventListener("backbutton",  app.exitApp, false);//绑定退出事件
         // 3秒后重新注册
         var intervalID = window.setInterval(function() {
             window.clearInterval(intervalID);
             document.removeEventListener("backbutton",  app.exitApp, false); // 注销返回键
             document.addEventListener("backbutton",  app.eventBackButton, false); // 返回键
         }, 3000);
     },
    showConfirm: function(button) {
        if( button==1 ) {
            app.exitApp();
            document.removeEventListener("backbutton", app.eventBackButton, false); //注销返回键
        }
     },
     exitApp: function() {
        navigator.app.exitApp();
     },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // 网络离线
        document.addEventListener("offline", this.onOffline, false);
       // 网络切换为在线
        document.addEventListener("online", this.onOnline, false);

        //app切换到后台运行时监听的事件，如打开其它应用。Amazon Fire OS、Android、BlackBerry 10、iOS、Windows Phone 8、Windows 8
        document.addEventListener("pause", function(){}, false);

        //app从后台运行时重新获取监听的事件，如打开其它应用。Amazon Fire OS、Android、BlackBerry 10、iOS、Windows Phone 8、Windows 8
        document.addEventListener("resume", function(){}, false);

         //按下手机返回按钮时监听的事件，支持平台：Amazon Fire OS、Android、BlackBerry 10、Windows Phone 8
        document.addEventListener("backbutton", this.eventBackButton, false);

        //a按下手机上菜单按钮时监听的事件。支持平台：Amazon Fire OS、Android、BlackBerry 10
        document.addEventListener("menubutton", function(){}, false);

        //a按下手机上搜索按钮时监听的事件。支持平台：Android
        document.addEventListener("searchbutton", function(){}, false);

        //p按下拨号按钮时监听的事件。支持平台：BlackBerry 10
        document.addEventListener("startcallbutton", function(){}, false);

        //按下结束通话键时监听的事件。支持平台：BlackBerry 10
        document.addEventListener("endcallbutton", function(){}, false);

        //a监听音量减键事件。支持平台：BlackBerry 10、Android
        document.addEventListener("volumedownbutton：", function(){}, false);

        //a监听音量加键事件。支持平台：BlackBerry 10、Android
        document.addEventListener("volumeupbutton", function(){}, false);

        //重新显示启动图
        document.getElementById('showSplashscreen').addEventListener('click', function() {
            navigator.splashscreen.show()
        });

    }
};
app.initialize();