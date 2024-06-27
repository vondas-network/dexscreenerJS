<h3 align="center">
  <img height="40%" width="40%" src="https://github.com/vondas-network/dexscreenerJS/blob/main/img/dexscreenerjs-logo.png?raw=true"/>
</h3>

<p align="center"><em>An API for dexscreener.com pair data</em></p> 

# Installation
```bash
npm i
```

# Overview
## cURL
  
``` bash
localhost:8888/dexscreenerjs?chainId=bsc&pairAddresses=0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae
```

## Javascript

### Parameters

- ```chainId ``` | (string) blockchain ID from dexscreener.com
- ```pairAddresses ``` | (string) Contract address for trading pair


### Usage
```
var chainId = req.query.chainId;
var pairAddresses = req.query.pairAddresses;

let obj = {
    chainId: chainId,
    pairAddresses: pairAddresses
}
    
var gg = dexscreener.getDexScreenerData(obj);

gg.then(function(data) {
	res.send(data);
}).catch(err => {
	console.log(err);
});
```

### Real-world Example
```
# LIBRARIES
const axios = require('axios');
const qs = require('qs');

# REQUEST DATA
let data = qs.stringify({
  'chainId': 'bsc',
  'pairAddresses': '0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae' 
});

# REQUEST CONFIGURATION
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'localhost:8888/dexscreenerjs?chainId=bsc&pairAddresses=0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae',
  headers: { 
    'accept': 'application/json', 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

# REQUEST
axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```


## Response

```
{
    "schemaVersion": "1.0.0",
    "pairs": [
        {
            "chainId": "bsc",
            "dexId": "pancakeswap",
            "url": "https://dexscreener.com/bsc/0x7213a321f1855cf1779f42c0cd85d3d95291d34c",
            "pairAddress": "0x7213a321F1855CF1779f42c0CD85d3D95291D34C",
            "labels": [
                "v2"
            ],
            "baseToken": {
                "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
                "name": "Ethereum Token",
                "symbol": "ETH"
            },
            "quoteToken": {
                "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                "name": "BUSD Token",
                "symbol": "BUSD"
            },
            "priceNative": "3375.3107",
            "priceUsd": "3375.31",
            "txns": {
                "m5": {
                    "buys": 1,
                    "sells": 0
                },
                "h1": {
                    "buys": 1,
                    "sells": 0
                },
                "h6": {
                    "buys": 5,
                    "sells": 7
                },
                "h24": {
                    "buys": 94,
                    "sells": 59
                }
            },
            "volume": {
                "h24": 400.75,
                "h6": 30.11,
                "h1": 0.74,
                "m5": 0.74
            },
            "priceChange": {
                "m5": 0.02,
                "h1": 0.02,
                "h6": -0.43,
                "h24": -1.07
            },
            "liquidity": {
                "usd": 16180.08,
                "base": 2.3968,
                "quote": 8090.04417
            },
            "fdv": 2042009092,
            "pairCreatedAt": 1619248666000
        },
        {
            "chainId": "bsc",
            "dexId": "pancakeswap",
            "url": "https://dexscreener.com/bsc/0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae",
            "pairAddress": "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE",
            "labels": [
                "v2"
            ],
            "baseToken": {
                "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                "name": "Wrapped BNB",
                "symbol": "WBNB"
            },
            "quoteToken": {
                "address": "0x55d398326f99059fF775485246999027B3197955",
                "name": "Tether USD",
                "symbol": "USDT"
            },
            "priceNative": "573.3907",
            "priceUsd": "573.39",
            "txns": {
                "m5": {
                    "buys": 69,
                    "sells": 94
                },
                "h1": {
                    "buys": 731,
                    "sells": 979
                },
                "h6": {
                    "buys": 3528,
                    "sells": 3748
                },
                "h24": {
                    "buys": 18817,
                    "sells": 16020
                }
            },
            "volume": {
                "h24": 2535355.73,
                "h6": 467033.08,
                "h1": 121055.85,
                "m5": 12007.35
            },
            "priceChange": {
                "m5": -0.06,
                "h1": 0.07,
                "h6": -0.32,
                "h24": -1.43
            },
            "liquidity": {
                "usd": 14289077.21,
                "base": 12460,
                "quote": 7144538
            },
            "fdv": 828053942
        }
    ],
    "pair": null
}
```
