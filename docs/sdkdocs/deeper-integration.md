---
sidebar_position: 11

---

# Deeper API Integration

:::info
If you are planning to use the Jambox Arena UI, you don't need to go though the details provided below.
:::

## Initialization 

Remember to initialize the SDK by following step 1 [here](https://docs.jambox.games/docs/sdkdocs/initialization)

## GetEventList

```cpp
GetEventList(Action<IApiTourneyList> OnReceived, Action<String> OnError)
```

This method returns the list of available events for the players

**Parameters**

- OnReceived: Call back for List of event 
- OnError: Details of the error that occurred.
       
## JoinTourney

```cpp
JoinTourney( String tourneyId, Action<IAPIJoinTourney> OnReceived, Action<String> OnError)
```
JoinTourny allows you to enter your player into a tournament identified by tourneyId

**Parameters**

- tourneyId: The Unique Id of tournament held responsible for getting detail of any tournament

**Callbacks**

- OnReceived:
- OnError: Details of the error that occurred.

## PlayTourney

```cpp
PlayTourney( string tourneyId, string attemptType, Action<IApiPlayTourney> OnReceived, Action<String> OnError)
```

This tells ArenaSDK that the player has started an attempt for the event indemnified by `tourneyId` . Calling PlayTourney when the attempt starts allows you to make sure that the player can’t cheat by closing the game and starting a fresh attempt. 

**Parameters**
- tourneyId: The Unique Id of tournament held responsible for getting detail of any tournament
- attemptType: The Type of attempt 

**Callbacks**
- OnReceived
- OnError

## SubmitTournamentScore

```cpp
SubmitTournamentScore( string LeaderboardID, long score, string displayScore, Action<IApiSubmitScore> OnReceived, Action<String> OnError, ReplayData replayData = null)
```
This method is used to submit the score for a given leaderboardID. 

**Parameters** 

- LeaderboardID: LeaderboardID, you will receive a LeaderboardID when you join a tournament. 
- Score: This is the score of the player
- displayScore: this is the display score, formatted based on how you want to show it. For example score can be 70, and display score can be 1:10 m ( assuming 70 is seconds)
 
**Callbacks**
- OnReceived
- OnError
  
## JoinDuel
```cpp
JoinDuel( String tourneyId, Action<IAPIJoinDuel> OnReceived, Action<String> OnError)
```

Use this method to enter your player into the duel identified by `tourneyId` 

**Parameters**
- tourneyId: The Unique Id of tournament held responsible for getting detail of any tournament

**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.
  
## SubmitDuelScore

```cpp
SubmitDuelScore( string matchID, long score, string displayScore, Action<IApiSubmitDuelScore> OnReceived, Action<String> OnError, ReplayData replayData = null)
```

Use this method to submit the Duel score for a given `matchID`

**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.
  
## GetLeaderBoard

```cpp
GetLeaderBoard(String LeaderboardID, Action<IApiLeaderRecordList> OnReceived, Action<String> OnError)
```

Fetch the leaderboard for the given `LeaderboardID`

**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.
  
## GetCompletedTourneyData
```cpp
GetCompletedTourneyData( string Category, Action<IAPICompTourneyList> OnReceived, Action<String> OnError)
```

Fetch the list of all completed events for your current user for a given Category. 

**Categories** 1: Tournament, 2: Duel, 3: Friendly

**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.
   
## ClaimReward
```cpp
ClaimReward( String LeaderboardID, Action<IAPIClaimData> OnReceived, Action<String> OnError)
```

Claim the Reward for the current player for the given LeaderboardID.

**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.
  
## UnclaimedRewards
```cpp
UnclaimedRewards( Action<IAPIUnclaimedRewards> OnReceived, Action<String> OnError)
```

Get a list of all unclaimed rewards for your player.

**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.

## CreateFriendly
```cpp
CreateFriendly(String tourneyName, int attempts, int duration, Action<IAPICreateFriendly> OnReceived, Action<String> OnError)
```

Create a friendly event with the given parameters 
- TourneyName: Name of the event, usually provided by the player
- attempts: The number of attempts for the event
- duration: The duration of the event, in hours.

**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.
## JoinFriendly
```cpp
JoinFriendly( String code, Action<IAPIJoinFriendly> OnReceived, Action<String> OnError)
```

This allows your player to join a friendly event identified by the code. 

**Parameters**

- Code: A string code for the friendly tournament 
  
**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.
## GetFriendlyDetails
```cpp
GetFriendlyDetails( Action<IAPIFriendlyTourneyList> OnReceived, Action<String> OnError)
```
**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.
## PlayFriendlyTourney
```cpp
PlayFriendlyTourney( string tourneyId, Action<IApiPlayFriendlyTourney> OnReceived, Action<String> OnError)
```

**Parameters**
- tourneyId: The Unique Id of tournament held responsible for getting detail of any tournament

**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.
## GetCurrencyData
```cpp
GetCurrencyData( Action<IAPICurrencyList> OnReceived, Action<String> OnError)
```

**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.

## UpdateUserDetails
```cpp
public async Task UpdateUserDetails(String name, string avatar, Action<IAPIUpdateUserData> OnReceived, Action<string> OnError)
```

Update the user details for the given user. The information will be passed back to you in the leaderboard. 

**Parameters**
- name: Name of the player
- avatar: The avatar data for the player, you can pass your avatar identifiers (URL, ID etc) here.
  
**Callbacks**

- onRecieved: 
- OnError: Details of the error that occurred.