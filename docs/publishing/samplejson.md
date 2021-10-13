---
sidebar_position: 3
---

# SDK - Setup


Once you have added the SDK, you should create a build and run on a device so that all the SDK data start coming in to the system.

### Sample JSON config file
This is the json file which needs to be downloaded from the Jambox Publishing portal and imported in the Unity Project. SDKs will be initialised based on the keys present in the json file. If keys are not present for a SDK, it will not get initialised.

```json
    {
        "adjust": {
            "apptoken": "sampleapptoken",
            "environment": "production"
        },
        "ironsource": {
            "appkey": "sampleappkey"
        },
        "facebook": {
            "appid": "sampleappid",
            "apptoken": "sampleapptoken"
        },
        "firebase": {
            "isactive": "True"
        }
    }
```