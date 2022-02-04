---
sidebar_position: 7

---

# Async Multiplay System Recording

Async Multiplay System helps the game to provide users with real-time player vs player experience. The system will help in showing the opponent gameplay and real-time score change on the User gameplay screen.
 
The Async Multiplay System helps in recording the user gameplay and providing the data back to render it again on the screen. Gameplay data is recorded as key-based interval data. This key can be a time interval from the gameplay start or any other value which defines a game incremental interval key.

### Start Recording
You can start recording the gameplay of the user by calling API `StartRecording`. The game should call this API when the gameplay starts for the user. The game should pass all the game data required for the initialization of the gameplay from this Record Data. For example, If a racing game has multiple levels and cars then it should pass the selected car and level when calling the API.

```cpp
    Dictionary<string, string> _gameData = new Dictionary<string, string>();
    _gameData.Add("level", "paris");
    _gameData.Add("car", "ferrari");
    ArenaSDKEvent.Instance.StartRecording(_gameData);
```

### Add Record Data
For each interval data, you need to pass the user/gameplay events which can later be used to recreate the simulation.

```cpp
    public bool AddReplayIntervalData(string _data, string _keyValue = null)
    {

    }
```

Example 1: For a Game like Subway Surfer, the User has four actions Up, Down, Right, Left. We can record these actions and pass them as data to Interval Data.

```cpp
    InputData intervalData = new InputData();
    intervalData.action = "Up";
    string json = JsonUtility.ToJson(_data);
    ArenaSDKEvent.Instance.AddReplayIntervalData(json);
```
If the data you are pushing is Time-based then you need not pass the time key variable. SDK will start the timer once you have called the API `StartRecording`.

Example 2: For a Game like Cricket, the User has actions to select as shot Type, tap time, and some other gameplay variables.These need to be recorded ball by ball.

```cpp
    InputData intervalData = new InputData();
    intervalData.shotDirection = UserShotType;
    intervalData.tapTime = UserInputTime;
    string json = JsonUtility.ToJson(_data);
    ArenaSDKEvent.Instance.AddReplayIntervalData(json,GetCurrentBallNumber());
```

### Stop Recording

Once the game is over, the recording can be stopped by calling the `StopRecording` API. This API will add 1 last interval of data that defines the end of the gameplay event.

```cpp
    public bool StopRecording(string _data = null, string _keyValue = null)
    {
        //You can pass any data if you want but it is not mandatory
    }
```

### Replay submit

The game only needs to start, add data and stop the recording, the SDK will automatically submit the replay data against the user gameplay entry. Once you call `SubmitScore` API, SDK will check if there is any recording associated with it and send it with the score submission.