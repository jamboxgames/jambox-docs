---
sidebar_position: 8

---

# Multiplay Visual System Replay

Async Multiplay System also helps in replay back the recording gameplay. Replay data will be obtained when you are matchmaked agains an opponent and a match is created. Match object will have the information of Opponent data and Replay recording.

``` cpp
    public event Action<Match> OnPlay;

    public class Match
    {

        /////
        // other class members
        /////

        /// <summary>
        /// Following these two variables are Current user's name
        /// and their Avatar ID URL as per our Tourney Screen.
        /// </summary>
        public readonly string UserImage;
        public readonly string UserName;

        /// <summary>
        /// Following these two variables are used in case of Duel match.
        /// Here OpponentImage will contain URL of opponent Image.
        /// while OpponentName is name of opponent.
        /// </summary>
        public readonly string OpponentImage;
        public readonly string OpponentName;

        /// <summary>
        /// Opponent Replay data to be shown in case of Showing opponent play data in duel play UI.
        /// </summary>
        public IAPIReplayData replayData;
    }
```

IAPIReplayData holds the gamedata along with all the frame data that were set earlier during the recording of the user gameplay.

```cpp
    public interface IAPIReplayData
    {
        IDictionary<string, string> GameData { get; }

        IEnumerable<IAPIIntervalData> IntervalData { get; }
    }
```

Arena SDK provide a class 'TimeReplayPlayer' for replaying the replaydata if the interval key is time in sec. You can set the replaydata in to the class and register for the callback actions to get the replay data with time. In your Gameplay manager class where you have created your callbakc function for OnPlay action, you can set this below code.

```cpp
    private void OnPlayHit(Match matchData)
    {
        IAPIReplayData _replayData = null;
        //It means its duels
        if (matchData.matchType == EMatchType.EMatchTypeDuel && matchData.replayData != null)
        {
            _replayData = matchData.replayData;
            TimeReplayPlayer.Instance.SetOpponentReplayData(_replayData);
        }
    }
```


```cpp
    TimeReplayPlayer.Instance.ExecuteDataString += OnPerfomFunction;
    TimeReplayPlayer.Instance.OnReplayStopped += OnReplayStoppedPlaying;

    private void OnPerfomFunction(string obj)
    {
        // You can convert your string data in to your required format and use them to 
        // pass to your gamplay classes to display the replay
 
    }

    private void OnReplayStoppedPlaying()
    {
        Debug.Log("REPLAY STOPPED EVENT");
        ReplayScoreManager.Instance.GameOver();
    }
```

Once your callbacks are set, You can Start and Stop the Replay calling following functions. Once you call this method you will start getting the 'ExecuteDataString' callbacks.

```cpp
//call this to start replay playing. 
TimeReplayPlayer.Instance.PlayOpponentReplay();

//call this to stop replay playing. 
TimeReplayPlayer.Instance.StopPlayingReplay();

```