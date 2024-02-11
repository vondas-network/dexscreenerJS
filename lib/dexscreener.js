/**
 * @name dexscreener.js
 * @author Christopher Konopka 
 * @version v0.0.1
 * @summary Unofficial Coinglass API for Node.js
 */

/**
 * Libraries
 */
const fs = require("fs");
const axios = require('axios');
const ohta = require("ohta");

/**
 * getDexScreenerData
 */
function getDexScreenerData(obj) {
    ohta.askOhtaAbout('info', 'dexscreenerJS', 'dexscreener - getDexScreenerData', "START");   
    ohta.askOhtaAbout('info', 'dexscreenerJS', 'dexscreener - getDexScreenerData', obj);   
    var output = new Promise(async(resolve, reject) => {
        try {
            ohta.askOhtaAbout('info', 'dexscreenerJS', 'dexscreener - getDexScreenerData', "https://api.dexscreener.io/latest/dex/pairs/" + obj.chainId + "/" + obj.pairAddresses);
            response = await axios.get("https://api.dexscreener.io/latest/dex/pairs/" + obj.chainId + "/" + obj.pairAddresses, {
                params: obj
            });
        } catch (ex) {
            response = null;
            ohta.askOhtaAbout('error', 'dexscreenerJS', 'dexscreener - getDexScreenerData', ex);   
            reject(ex);
        }
        if (response) {
            const json = response.data;
            resolve(json);
        }
    });
    ohta.askOhtaAbout('info', 'dexscreenerJS', 'dexscreener - getDexScreenerData', "END");   
    return output
}

module.exports = { getDexScreenerData }