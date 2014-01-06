Instructions

Install first
http://cordova.apache.org/docs/en/3.3.0/guide_cli_index.md.html#The%20Command-Line%20Interface

To add Android
-cordova platform add android
-cordova build android
-cordova serve android (browser's test)
-cordova emulate android

To Add IOS (Only Mac)
-cordova platform add ios
-cordova build ios
-cordova serve ios (browser's test)
-cordova emulate ios

The application was built using Yeoamn. The source code is in yeoman folder (yeoman/app). You can test the application using command 'grunt serve' inside yeoman folder.
To test mobile device, you must build yeoman app first. 
-cd yeoman
-grunt
-cordova emulate ios|android