---
sidebar_position: 5
---

# SDK - Game Play Setup

The Arena SDK plugin fires several events to inform you about the gameplay events. Add the following code to register to the events

```cpp
using Jambox.Connector;

private void Start()
    {
            ArenaSDKEvent.Instance.OnPlay += OnPlayHit;
            ArenaSDKEvent.Instance.OnBackToLobby += OnBackToLobbyHit;
            ArenaSDKEvent.Instance.OnPurchaseRequired += OnStoreClick;
            ArenaSDKEvent.Instance.UserMoneyUpdate += OnUpdateMoney;
            ArenaSDKEvent.Instance.OnWatchAdRequired += WatchVideoClicked;
    }
```

## Game Launch and Exit 

When Arena SDK multiplayer UI will open. It will show all the gameplay options like Tournaments, Duels, and Friendly. The user will select the particular option to play a match. Once that happens, Arena SDK will notify the game about the match a user wants to play. The control will now be given to Gameplay UI and Arena multiplayer UI will be closed.
 
In the example below, you can place your gameplay start code or scene switching code.

```cpp
    using Jambox;
    /// This event is called when a user plays a tournament. 
    /// You should load your game scene here.
    /// Use metadata to initialize your gameplay with custom settings
 	
    private void OnPlayHit(Match metadata)
    {
	    //Start Gameplay here
    }
```

When the user wants to exit from the Arena Multiplayer UI, Arena SDK will notify the game to open its Main UI.

```cpp
    /// This event will be called when the user exits from Arena SDK UI.     
    private void OnBackToLobbyHit()
    {
        ///Activate your Main UI panel here.
    }
```

## Game Score Submission

Once a game is complete you should submit your score. SubmitScore API will submit the score to the server. Arena SDK UI will get initialized once you submit the score.

```cpp
    public void SubmitScore(int Score, int subScore)
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
 
Once the user makes a purchase then the game should call the OpenArenaUI to give control back to Arena SDK to join/play the match.

```cpp
    //This event will be called if user currency is less than the currency required by user to play tournament
    //You need to start the SDK UI again after currency purchase
    private void OnPurchaseRequired(long amountRequired, string currencyKey)
    {

    }
```

## Reward Consumption

Whenever users joins/play a game or wins a reward, Arena SDK will notify the game of the change in the users balance. Games should handle the change in balance here.

```cpp
    //This event is called on every currency transaction happened on Arena Server.
    //Your code for increment and decrement of currency should come here. 
    private void OnUpdateMoney(long amount, string currencyKey, bool isIncrease)
    {
        // Call you game update currency code here
    }
```

## Watching Ads to Play

Developers can set the matches to be played even if the chances expired for users by watching Ads. This can be set from the Arena Dashboard by setting the `Play With Ads` property to true. Arena SDK will notify the game to show a rewarded videos ad so that the player may get an additional chance, post which the game should notify the SDK of completion or success.

```cpp  
    private void OnWatchAdRequired()
    {
        
    }
```

Once User has watched the Ads required to play, Game should call SDK api PlayAfterWatchAd to resume the match flow. This API will start the Match for user.

```cpp
    public void PlayAfterWatchAd()
    {
        
    }
```
