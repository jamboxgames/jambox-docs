---
sidebar_position: 4
---

# SDK Initialization

## Step 1 
Add `Assets/JamboxPackage/JamboxCommon/Prefabs/JamboxCanvas.prefab` in your Main UI Scene. Once done, click the PanelController object under JamboxCanvas Object in the Unity Editor and set the `App Secret` and `Game ID`.

You can create your developer account at https://app.jambox.games/, or you can contact your publishing manager for these values.

Call the `InitializeArenaSdk` function of the ArenaSDKCommunicatior to initialize the SDK. This will authenticate the user and create a user session. 

You should provide a unique `userID` if available. If there is no userID provided, Arena SDK will generate its own identifier.

Games can also provide a username/display name. The SDK will use the same name for the user within its screens. If no username is provided, SDK will ask for a username when initialized for the first time.

Games can also set a user as test user. While creating events, developer can enable them initialy to testers only before publishing to all users.

```cpp
    using Jambox.Tourney.Connector;

    void Initialize()
    {
        ArenaSDKEvent.Instance.InitializeArenaSdk("GameUserName","game-user-id",true);        
    }
```

## Step 2
Once the Arena SDK is initialized, You can open the prebuilt UI for various SDK features. You should typically provide a button on your main UI screen to initialize the Arena SDK multiplayer UI.

Games need to share their currency details to the Arena SDK while opening SDK UI. Arena SDK will be using the currency values provided by you to decide whether the user has enough currency to play tournaments or not.

```cpp
    using Jambox.Tourney.Connector;

    public void OpenUI() {
        Dictionary<string, long> MoneyDetail = new Dictionary<string, long>();
        //Pass the user game currency value here
        MoneyDetail.Add("key_gems", 1000);

        ArenaSDKEvent.Instance.OpenArenaUI(MoneyDetail);

        //disable Game UI
        DisableGameUI();
    }
```

## Step 3
The Arena SDK allows you to control certain behaviors of the SDK using parameters attached with the PanelController.

![image](../../static/img/BaseImageChange.png)
### Is Production
Enable this flag once you can ready to upload your build to App Store or Play Store.
### Background Image
The background image of Arena SDK UI is configurable and can be changed by the developer. You should be providing a BG such that the Arena SDK UI matches the theme of the Game. You can set the desired image in the `BG Sprite` field of ArenaSDKParams script attached to JamboxCanvas Object.
### Log enabled
Flag to enable/disable Arena SDK logs

### Card BG
You can set the background image of tournaments and duels card background images here.
### Coin BG
You can change the currency image in ARENA SDK UI and set it to your game currency image. Image set in this variable will be reflected on all the Arean UI and animations
