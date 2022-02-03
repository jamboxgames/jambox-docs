---
sidebar_position: 9

---

# Realtime Visual System For Tournaments

Arena SDK provide widget to show real time leaderboard updation for the tournament. As the player keep on adding the score, user will climb the leaderboard rank. Widget will show the current rank of the player. 

Widget comes with customisations to suits the game UI. Developer can initialize the widget with these customization variable

### Variation 1 - Developer can show a full leaderboard 

![image](../../static/img/lbWidget.png)

### Variation 2 - Notification widget

![image](../../static/img/lbWidget2.png)

Game can initialize the realtime leaderboard for tournaments when it gets the match object in OnPlay event. Wodget will be initialised based on all the parameters passed as arguments to the function.

``` cpp
    //leaderboardData - pass Leaderboard field from Match object passed in OnPlay event
    //scrollable - if the widget list needs to be scrollable
    //NoOfRecordsToShow - number of user data to show in widget
    //disappearingLB - make it true if you want the widget to come only on rank change. If set false, widget will always be shown on ui
    //fullLeaderboard - if set false, widget will a one line notification showing the player rank
    public void InitializeRealtimeLeaderboard(List<leaderBoardData> leaderboardData, bool scrollable, int NoOfRecordsToShow, bool disappearingLB, bool fullLeaderboard)
        {
            //function body
        }

```

``` cpp
private void OnPlayHit(Match matchData)
    {
        // code before

        if((matchData.matchType == EMatchType.EMatchTypeTourney || matchData.matchType == EMatchType.EMatchTypeFriendly) && matchData.Leaderboard != null)
        {
            ArenaSDKEvent.Instance.InitializeRealtimeLeaderboard(matchData.Leaderboard, false, 4, false, true);
        }
        
        // code after
    }
```

As the tournament game starts and user starts scoring, game needs to pass the score to the SDK system so that it updates the score on widget and also rank if there is any change in it. 

``` cpp
        public void UpdatePlayerScoreOnRealtimeLB(long _score)
        {
            //function body            
        }
```


``` cpp
        //Call UpdatePlayerScoreOnRealtimeLB in Score Manager class of Game
        ArenaSDKEvent.Instance.UpdatePlayerScoreOnRealtimeLB(Score);
```