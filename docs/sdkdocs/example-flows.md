---
sidebar_position: 12

---

# Example Advance Flows

## Level based tournaments

**Usecase** - Get all your players to participate in a weekly tournament, segmented by Levels where the person with the highest cumulative score wins.

**Note**: This usercase will require deep integration and your own UI.

- Create Weekly Recurring events for each of your segments. You can pass segment data in the meta data of the event for client side segmentation. Depending on your requirements you can put a high number of attempts (eg 100) and vary the bucket size for optimal competitivenes for your players. An example segmentation can be every 10 levels, which means you will need to create an event for every batch of 10 levels in your game.
- On the client-side, whenever a player opens the game, fetch the list of events, and auto-join your player into the event they fit. From there on, everytime your player plays a level, you can submit a score.
- You will need to fetch the leaderboard for the player and showcase it in the UI
- When the event ends, reward the players and auto-join them again into an appropriate event.

You can always show the players what rewards they will get when they graduate from their current segment. 

## Universal Duel Button

**Usecase** adding a Duel button where players can compete with other players instantly. 

**Note**, in this usecase we are assuming matchmaking won’t be required.

- Create a long term Duel on the Jambox Arena Dashboard 
- Fetch the List of events using the `GetEventList` method, you should have only a single duel. 
- Play a Join Duel or a VS button on your home screen, when the player presses the button, call `JoinDuel`, and then call `SubmitDuelScore` once the attempt is complete. `IAPIDuelResult` will have the result of the duel which you can then show to your players with your UI

## Auto Join a Weekly Tournament

**Usecase**: Have your players auto join a weekly tournament, which is accessible through both the single-player game and the Base Arena UI. 

- Create a weekly recurring tournament, in the meta data for the event, pass a key Value pair “autojoin”:true, this will help the client know that it needs to auto join the event (make sure you only have 1 event of such kind)
- When the game launches, use GetEventList , to search for the event which has autojoin set to true, have your player auto join the event using the `JoinTourney` method. 
- Whenever your player plays the single player game, submit the score to the leaderboard the player is a part of using the `SubmitTournamentScore` method. For a good user experience, you can fetch the leaderboard status after the submission and show it to your user at the end of every level. 
- Make sure you also handle the play button within the Arena UI properly, in this case, the level to be loaded for the player is not passed in the event meta data, but is rather the current level the player is on.
- When the event is complete, reward your players using the `GetCompletedTourneyData` and the `ClaimReward` ​​methods, and auto-join your players into the next instance of the event.