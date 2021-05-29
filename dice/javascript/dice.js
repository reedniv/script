/*
Use at your own risk.

Donations are appreciated;

BTC		3Hxc36WZJxc2N5B7Ubm9ERSvfBqRNnjqEt
ETH		0x09b36c0e38f010b7eef1598ef7d64b679ab9a1dd
LTC		MMjsJGjWFNRWvJY5r1qp5pcTw2QFV9aM4a
DOGE	DLPdoenUq6LGdEXbnb87kxDoMDoCjMA98B
BCH		bitcoincash:qp3eqmdl8duv4mxr0yydhz4qs3mss3yvls49k6yx6u
XRP		rNFugeoj3ZN8Wv6xhuLegUBBPXKCyWLRkB - tag : 1883124941
TRX		TTebdfLXtVhUThLazpm3PBPcmKTLfXnEzk
EOS		kucoindoteos - memo : 1874820691

README:
*Use tampermonkey for the script
*Start script at page "https://stake.com/casino/games/dice"

*/
// @name         Auto Dice
// @description  dice bot for stake
// @author       Mr. Alliance - XCODE TEAM
// @namespace    https://greasyfork.org/en/users/777292-coindropers
// @version      1.0
// @match        https://stake.games/casino/games/dice
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==
var count_min = 1;
(function() {
console.log(document.readyState);
          setTimeout(function(){
       document.getElementsByClassName("Button__StyledButton-sc-8bd3dp-0 fbjzSA styles__Button-fc7ea4-0 mGJpP")[0].click();
         }, random(2000,4000));

      setTimeout(function(){
       document.getElementsByClassName("Button__StyledButton-sc-8bd3dp-0 fbjzSA")[0].click();
         }, random(2000,4000));

    setInterval(function(){
        console.log("Status: Elapsed time " + count_min + " minutes");
        count_min = count_min + 1;
    }, 60000);


    setInterval(function(){
               document.getElementsByClassName("Button__StyledButton-sc-8bd3dp-0 fbjzSA")[0].click()
       }, random(622000,625000));
})();

function random(min,max){
   return min + (max - min) * Math.random();
};
