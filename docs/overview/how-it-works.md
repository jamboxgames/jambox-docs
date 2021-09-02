---
sidebar_position: 2
---

# How It Works

The Arena SDK does most of the heavy lifting for you. It takes care of listing all available events, showing leaderboards, matchmaking, etc.
 
It provides a score-based competitive system. As long as your game has any mechanism of scoring, you can use the service. 
 
When you create a tournament you define how the leader board scoring works. Once a player decides to play in a tournament the SDK calls on the game to start a round, and once the round is completed the game can submit a score to the Arena service.
 
You can also pass information to the SDK at various points, like the name of the player, of the amount of currency the player holds. Please check the SDK docs for a complete list of interactions between the SDK and your Game.