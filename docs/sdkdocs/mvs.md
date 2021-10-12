---
sidebar_position: 6

---

# SDK - Async Multiplay System Recording

Async Multiplay System helps the game to provide users real time player vs player experience. The system will help in showing the opponenet gameplay and real time score change on the User gameplay screen.

The Async Multiplay System helps in recording the user gameplay and providing the data back to render it again on the sceen. Gameplay data is recorded as a key based interval data. This key can be time interval from the gameplay start or any other value which define a game incremental interval key.

### Start Recording
You can start recording the gameplay of user by calling API `StartRecording`. Game should call this API when the gameplay start for user. Game should pass all the gamedata required for the initialization of the gameplay from this Record Data. For an example, If a racing game has multiple levels and cars then it should pass the selected car and level when calling the API.

```cpp
    Dictionary<string, string> _gameData = new Dictionary<string, string>();
    _gameData.Add("level", "paris");
    _gameData.Add("car", "ferrari");
    ArenaSDKEvent.Instance.StartRecording(_gameData);
```

### Add Record Data
For each interval data you need to pass the user/gamplay events which can later be used to recreate the simulation. 

```cpp
    public bool AddReplayIntervalData(string _data, string _keyValue = null)
    {

    }
```

Example 1 : For a Game like Subway Surfer, User has four actions like Up, Down, Right, Left. We can record these actions and pass them as data to Interval Data.

```cpp
    InputData intervalData = new InputData();
    intervalData.action = "Up";
    string json = JsonUtility.ToJson(_data);
    ArenaSDKEvent.Instance.AddReplayIntervalData(json);
```
If the data you are pushing is Time based then you need not to pass the time key variable. SDK will start the timer once you have called the API `StartRecording`.

Example 2 : For a Game like cricket, User has action to select as shot Type, tap time and some other gameplay variables.These need to be recorded ball by ball. 

```cpp
    InputData intervalData = new InputData();
    intervalData.shotDirection = UserShotType;
    intervalData.tapTime = UserInputTime;
    string json = JsonUtility.ToJson(_data);
    ArenaSDKEvent.Instance.AddReplayIntervalData(json,GetCurrentBallNumber());
```

### Stop Recording

Once the Gameplay finish, Recording can be stopped by calling the API. `StopRecording`. This API will add 1 last interval data which define end of the gameplay event.

```cpp
    public bool StopRecording(string _data = null, string _keyValue = null)
    {
        //You can pass any data if you want but it is not mendatory
    }
```

### Replay submit

Game should Start, add data and Stop the recording. SDK will automatically submit the replay data against the user gameplay entry. Once you call `SubmitScore` API, SDK will check if there is any recording associated with it and send with the score submission.
