---
sidebar_position: 2
---

# How It Works

The Arena SDKs is largely self sufficient and does most of the heavy lifting for you. It takes care of listing all available events, showing leaderboards, match making etc. 

It is a score based competitive system. As long as your game as any mechanism of scoring, you can use the service.  

When you create a tournament you define how the leader board will be scored. Once a player decides to play in a tournament the SDK calls on the game to start a round, and once the round is complete the game can submit a score to the Arena service. 

You can also pass information to the SDK at various points, like the name of the player, of the amount of currency the player holds. Please check the SDK docs for a complete list. 