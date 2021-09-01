---
sidebar_position: 4
---

# SDK - Initialization

Call the function of the ArenaSDKCommunicatior to Initialize the SDK. This will authenticate the user and create a user session. 

Game should provide the user id if it is using any to identify the user. If there is no user id provided, Arena SDK will use a platform based unique system identifier as user identification

Games can also provide a username for the user. If no username is provided, SDK will ask for a username when initialized for the first time.

```cpp
    public void InitializeArenaSdk(string userName = null, string userID=null)
    {

    }
```

Once Arena SDK is initialized, You can open the prebuilt multiplayer UI for various SDK features. You should typically provide a button on your main UI screen to initialize the Arena SDK multiplayer UI.

```cpp
    public void OpenArenaUI(Dictionary<string, long> currencyMap = null)
    {

    }
```

Games need to share their currency details to the Arena SDK while opening SDK UI. 

Arena SDK will be using the currency values provided by you to decide whether the user has enough money to play tournaments or not.

```cpp
    // Open Tournament Panel by providing money details
    Dictionary<String, long> MoneyDetail = new Dictionary<string, long>();
    MoneyDetail.Add("coin", UserMoney);
    ArenaSDKEvent.Instance.OpenTournamentPanel(MoneyDetail);
```
