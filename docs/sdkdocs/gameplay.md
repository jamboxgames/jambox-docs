---
sidebar_position: 5
---

# SDK - Game Play Setup

The Arena SDk plugin fires several events to inform you about the gameplay events. Add the following code to register to the events

```cpp
private void Start()
    {
            UIPanelCommunicator.Instance.OnPlay += OnPlayHit;
            UIPanelCommunicator.Instance.OnBackToLobby += OnBackToLobbyHit;
            UIPanelCommunicator.Instance.OnPurchaseRequired += OnPurchaseRequired;
            UIPanelCommunicator.Instance.UserMoneyUpdate += OnUpdateMoney;
    }
```

## Game Launch and Exit 

When Arena SDK multiplayer UI will open. It will show all the gameplay options like Tournaments, Duels and Friendly. User will select the particular option to play a match.Once that happens, Arena SDK will notify the game about the match, user wants to play. The control will now be given to Gameplay UI and Arena multiplayer UI will be closed.

In the example below you can place your gameplay start code or scene switching code.

```cpp
    /// This event is called when a user plays a tournament. 
    /// You should load your game scene here.
    /// Use metadata to initialize your gameplay with custom settings
 	
    private void OnPlayHit(Dictionary<string, string> metadata)
    {
	    //Start Gameplay here
    }
```



When the user wants to exit from the Arena Multiplayer UI, Arena SDK will notify the game to open its own Main UI.

```cpp
    /// This event will be called when the user exits from Arena SDK UI. 
    ///Activate your Main UI panel here.
    
    private void OnBackToLobbyHit()
    {

    }
```

## Currency Checks 

When User wants to join a match, Arena SDK will check for the currency required to join that match. If User currency amount is less than the entry fee required for match, a Purchase required event will be called with required amount and currency as argument.

Game Should open its Store UI for User to purchase the required currency.

Once the user makes a purchase then the game should call the OpenArenaUI to give control back to Arena SDK to join / play the match.

```cpp
    //This event will be called if user currency is less than the currency required by user to play tournament
    //You need to start the SDK UI again after currency purchase
    private void OnPurchaseRequired(long amountRequired, string currencyKey)
    {

    }
```

## Reward Consumption

Whenever users join / play a game or win reward, Arena SDK will notify the game for the change in currency. Games should handle the change in currency due to Multiplayer Gameplay here.

```cpp
    //This event is called on every currency transaction happened on Arena Server.
    //Your code for increment and decrement of currency should come here. 
    private void OnUpdateMoney(long amount, string currencyKey, bool isIncrease)
    {
        // Call you game update currency code here
    }
```

## Watching Ads to Play

Developers can set the matches to be played even if the chances expired for users by watching Ads. This can be set from the Developer Dashboard by setting Play With Ads property as true. Arena SDK will notify for a watch ad event for the game to show user rewarded videos. Game should notify the Arena SDK of watch ad completion or success.

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

## Game Score Submission

Once a game is complete you should submit your score. SubmitScore API will submit the score to the server. Arena SDK UI will get initialized once you submit the score.

```cpp
public void SubmitScore(int Score, int subScore)
{
           
}

```
