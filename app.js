/**
 * app.js
 * @author Christopher Konopka
 * @description Core server for facilitating API requests to Dex Screener API
*/

/**
 **************************
* DEPENDENCIES ***********
************************** 
*/
const fs = require("fs");
var express = require('express')
const cfonts = require('cfonts');
const dexscreener = require("./lib/dexscreener");
const ohta = require('ohta');
 
/**
 **************************
* EXPRESS ****************
************************** 
*/
 var app = express()
 var port = 8888;
 var HOST = '0.0.0.0';
 
/**
**************************
* DYNAMIC ****************
************************** 
*/

/**
 * /dexscreenerjs
 * @param chainId - Coinglass API key
 * @param pairAddresses - Primary data route
 * @description 
 * 
*/

app.get('/dexscreenerjs', function(req, res) {  
    ohta.askOhtaAbout('info', 'dexscreenerJS', 'app.js - /dexscreenerjs', "REQUEST");   
    var chainId = req.query.chainId;
    var pairAddresses = req.query.pairAddresses;

    let obj = {
        chainId: chainId,
        pairAddresses: pairAddresses
    }
    
    ohta.askOhtaAbout('info', 'dexscreenerJS', 'app.js - /dexscreenerjs', obj);   

    var gg = dexscreener.getDexScreenerData(obj);
    ohta.askOhtaAbout('info', 'dexscreenerJS', 'app.js - /dexscreenerjs', "FUNCTION - getDexScreenerData");
    gg.then(function(data) {
        ohta.askOhtaAbout('info', 'dexscreenerJS', 'app.js - /dexscreenerjs', data);
        res.send(data);
    }).catch(err => {
        ohta.askOhtaAbout('error', 'dexscreenerJS', 'app.js - /dexscreenerjs', err);
    });
})
 
/**
 **************************
* CFONT LOGO *************
************************** 
*/
cfonts.say('dexscreenerJS', {
    font: 'shade', // define the font face
    align: 'left', // define text alignment
    colors: ['green', 'blue'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0', // define how many character can be on one line
    gradient: false, // define your two gradient colors
    independentGradient: true, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    env: 'node' // define the environment cfonts is being executed in
});
 
/**
 **************************
* SERVER OP **************
************************** 
*/
app.listen(port, HOST, function() {
    ohta.askOhtaAbout('info', 'dexscreenerJS', 'app.js - init', "PORT - " + port);
})