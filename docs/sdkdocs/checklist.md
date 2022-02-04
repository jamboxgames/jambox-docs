---
sidebar_position: 10

---

# Going Live with Arena

Before going live with Arena SDK, Developers should use this checklist to make sure all the features/flow are implemented
 
- Display Tournament, Duels and Friendly list
- Join and Play Tournaments and Duels
- Create and join Friendly Tournament
- Tournament Real-time leaderboard visualization
- Async Multiplay Visualization for Duels
- Play after purchase flow in case the user doesn't have currency to join the tournament. Users should come back to the Tournament screen after making a purchase in the game for currency
- Test after “Watching Ad flow” in case attempts are exhausted for the user in tournaments. After watching a Rewarded video ad, the user should be able to play the attempted tournament.


## Moving to Production

Before making the build for Google / Apple store deployment, the developer should switch their game environment from staging to production.
Enable the `IsProduction` flag in ArenaSDKParams attached to the panel controller in JamboxCanvas prefab.

![image](../../static/img/toproduction.png)