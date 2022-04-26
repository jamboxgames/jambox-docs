---
sidebar_position: 5
---

# Game Play Setup

The Arena SDK plugin fires several events to inform you about the gameplay events. Add the following code to register to the events. There is also a sample class provided at the end of this page to help you get started.

```cpp
using Jambox.Connector;

private void RegisterEvents()
    {
            ArenaSDKEvent.Instance.OnPlay += OnPlayHit;
            ArenaSDKEvent.Instance.OnBackToLobby += OnBackToLobbyHit;
            ArenaSDKEvent.Instance.OnPurchaseRequired += OnStoreClick;
            ArenaSDKEvent.Instance.UserMoneyUpdate += OnUpdateMoney;
            ArenaSDKEvent.Instance.OnWatchAdRequired += WatchVideoClicked;
    }
```

## Game Launch

When Arena SDK multiplayer UI will open. It will show all the gameplay options like Tournaments, Duels, and Friendly. The user will select the particular option to play a match. Once that happens, Arena SDK will notify the game about the match a user wants to play. The control will now be given to Gameplay UI and Arena multiplayer UI will be closed.
 
In the example below, you can place your gameplay start code or scene switching code.

```cpp
    using Jambox;
    /// This event is called when a user plays a tournament. 
    /// You should load your game scene here.
    /// Use metadata to initialize your gameplay with custom settings
 	
    private void OnPlayHit(Match matchData)
    {
	    //Start Gameplay here
    }
```

Developer can add key/value pairs in tournament metadata while creating on dashboard. These key/values are received in the Match object in the `OnPlay` callback. Game can use these keys to control the gameplay initialisation.

```cpp
    private void OnPlayHit(Match matchData)
    {
	    string ballType = matchData.metadata["ball_type"];
	    string tileType = matchData.metadata["tile_type"];

        //use ball type and tile type in the gameplay
	    StartGameplay(ballType,tileType);
    }
```

## SDK UI Exit

When the user wants to exit from the Arena Multiplayer UI, Arena SDK will notify the game to open its Main UI.

```cpp
    /// This event will be called when the user exits from Arena SDK UI.     
    private void OnBackToLobbyHit()
    {
        ///Activate your Main UI panel here.
    }
```
## Game Score Submission

Once a game is complete you should submit your score. SubmitScore API will submit the score to the server. Arena SDK UI will get initialized once you submit the score. You can use submit score to set any display format for your score. If set, this score will be visible to all users in the leaderbaord.

e.g. if the score is time (134) taken in seconds to finish the game, then display string can be a format like "00:02:14"

```cpp
    public void SubmitScore(int score, int subScore, string displayScore = "")
    {
            
    }
```

## Currency Updation

The Arena SDK does not store the user currency and works on the currency details provided by the Game. SDK will notify the game for every transaction made on the server. The game should increase/decrease that currency from the user’s account here

```cpp
    private void OnUpdateMoney(int UserMoney, string Currency, bool isIncrease)
    {
        //Call Game Currency updation code here
    }
```

## Currency Checks 

When the user wants to join a match, Arena SDK will check for the currency required to join that match. If the user balance is lower than the entry fee required for the match, the `OnPurchaseRequired` event will be called with the required amount and currency.
 
The game Should open its Store UI and allow the user to purchase the balance amount.
 
Once the user makes a purchase then the game should call the PlayAfterPurchase to give control back to Arena SDK to join/play the match.

```cpp
    //This event will be called if user currency is less than the currency required by the user to play the tournament
    //You need to start the SDK UI again after currency purchase
    private void OnStoreClick(long amountRequired, string currencyKey)
    {

    }

    //This function will check for the tournament for which purchase request has been made and open the corresponding panel 
    //to join the tournament or duel
    public void PlayAfterPurchase (bool PurchaseSuccess = true, Dictionary<string, long> currencyMap = null)
    {

    }
```

## Watching Ads to Play

Developers can set the matches to be played even if the chances expired for users by watching Ads. This can be set from the Arena Dashboard by setting the `Play With Ads` property to true. Arena SDK will notify the game to show a rewarded videos ad so that the player may get an additional chance, post which the game should notify the SDK of completion or success.

```cpp  
    private void WatchVideoClicked()
    {
        
    }
```

Once the user has watched the Ads required to play, the Game should call SDK API PlayAfterWatchAd to resume the match flow. This API will start the Match for the user.

```cpp
    public void PlayAfterWatchAd()
    {
        
    }
```

## Sample Class

You can use this sample class with events setup                                 

```csharp
using System.Collections;
using System.Collections.Generic;
using Jambox;
using Jambox.Tourney.Connector;
using UnityEngine;

public class TourneyManager : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        ArenaSDKEvent.Instance.InitializeArenaSdk();
        RegisterEvents();
    }

    void RegisterEvents()
    {
        ArenaSDKEvent.Instance.OnPlay += OnPlayHit;
        ArenaSDKEvent.Instance.OnBackToLobby += OnBackToLobbyHit;
        ArenaSDKEvent.Instance.OnPurchaseRequired += OnStoreClick;
        ArenaSDKEvent.Instance.UserMoneyUpdate += OnUpdateMoney;
        ArenaSDKEvent.Instance.OnWatchAdRequired += WatchVideoClicked;

    }

    public void OpenUI()
    {
        Dictionary<string, long> MoneyDetail = new Dictionary<string, long>();
        //Pass the user game currency value here
        MoneyDetail.Add("key_gems", 1000);

        ArenaSDKEvent.Instance.OpenArenaUI(MoneyDetail);

        //disable Game UI
        DisableGameUI();

    }

    void DisableGameUI()
    {
        gameObject.SetActive(false);
    }

    private void OnPlayHit(Match matchData)
    {

    }

    private void OnBackToLobbyHit()
    {

    }

    private void OnStoreClick(int coinsRequired, string currency)
    {

    }

    private void OnUpdateMoney(int userMoney, string currency, bool isIncrease)
    {

    }

    private void WatchVideoClicked()
    {

    }

}

```