---
sidebar_position: 2
---

# Installation

- Download the Jambox SDK package from the links provided to you by your publishing partner.
- Double click on the downloaded Arena SDK Package and import it into your Unity package. A dialog will pop up where you can choose the assets from the package to import. Click the 'All' button to make sure everything is checked. Next, click the 'OK' button.
- The Jambox Arena SDK is now installed in your Unity project. You should see an Assets/JamboxPublishing/ folder in your project tab.
- Add `JamboxPublishing.prefab` in your Main UI Scene.
- Create an account on the Jambox Dashboard and add your game. 
- Download the metaSdk.json file from our developer portal under the games section and save it inside asset/JamboxPublishing Folder. Reference it inside JamboxPublishing Prefab to that all the SDK will be initialised.
![image](../../static/img/game-json.png)

## Setting up Services 
### Firebase
- For firebase, download goole-services.json file from the Firebase console and add it to the asset folder.  
### Facebook
- Edit the Facebook setting of your App with our Facebook AppID.
### Ironsource and network adapters

- You can add AdMob, Facebook Audience network, AppLovin and other adapters through Ironsource Integration manager which is available inside Ironsource Menu in Unity.

#### Admob
- For AdMob do provide Admob Android AppId under the  Admob settings ( IronSource > Developer Setting > Mediated Network Settings). Please make sure you add the AdMob Adapter.
- In addition you need to change the path of android manifest file inside `IronSourceManifestProcessor` class the variable manifestPath as shown below

```
   string manifestPath = Path.Combine( Application.dataPath, "JamboxPublishingSDK/IronSource/Plugins/Android/IronSource.plugin/AndroidManifest.xml");
```
   - You have to enable minify > release option inside Unity build setting > publishing setting and update proguard-user.txt file with the following  keep statements: 

```xml
   
   -keepattributes *Annotation*
   -keepattributes SourceFile,LineNumberTable
   -keep public class * extends java.lang.Exception
   -keep class com.crashlytics.** { *; }
   -dontwarn com.crashlytics.**
​
   -keep class com.adjust.sdk.** { *; }
   -keep class com.google.android.gms.common.ConnectionResult {
       int SUCCESS;
   }
   -keep class com.google.android.gms.ads.identifier.AdvertisingIdClient {
       com.google.android.gms.ads.identifier.AdvertisingIdClient$Info getAdvertisingIdInfo(android.content.Context);
   }
   -keep class com.google.android.gms.ads.identifier.AdvertisingIdClient$Info {
       java.lang.String getId();
       boolean isLimitAdTrackingEnabled();
   }
   -keep public class com.android.installreferrer.** { *; }
```
   - Make sure min SDK version is 21 and Target SDK Version is 30 (at minimum) inside build settings.