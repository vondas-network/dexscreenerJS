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
    console.log("getDexScreenerData - Start");
    console.log("getDexScreenerData - chainId - " + obj.chainId);
    console.log("getDexScreenerData - pairAddresses - " + obj.pairAddresses);
    var output = new Promise(async(resolve, reject) => {
        try {
            response = await axios.get("https://api.dexscreener.io/latest/dex/pairs/" + obj.chainId + "/" + obj.pairAddresses, {
                params: obj
            });
        } catch (ex) {
            response = null;
            console.log(ex);
            reject(ex);
        }
        if (response) {
            const json = response.data;
            resolve(json);
        }
    });
    console.log("getDexScreenerData - End");
    return output
}

module.exports = { getDexScreenerData }