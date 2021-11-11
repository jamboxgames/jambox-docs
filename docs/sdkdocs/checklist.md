---
sidebar_position: 8

---

# SDK - Going Live with Arena

Before going live with Arena SDK, Developers should use this as a check list to make sure all the features/flow are implmented

- Display Tournament, Duels and Friendly list
- Join and Play Tournaments and Duels
- Create and join Friendly Tournament
- Tournament Realtime leaderboard visualization
- Async multiplay Visualization for Duels
- Play after purchase flow in case user doesn't have currency to join tournament. User should come back to Tournament screen after making purchase in the game for currency
- Play after watch Ad flow in case attempts are exhausted for user to play in a tournament. After watching a rewarded video Ad, user should be able to play the attempted tournament.


## Moving to Production

Before making the build for Google / Apple store deployment, developer should switch their game enviroment from staging to production.
Enable the IsProduction flag in ArenaSDKParams attached to panelcontroller in JamboxCanvas prefab.

![image](../../static/img/toproduction.png)
