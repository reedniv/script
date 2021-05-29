// ==UserScript==
// @name        Auto Dice
// @namespace   XCODE TEAM Scripts
// @match       https://stake.games/casino/games/dice
// @match       https://primedice.games/ 
// @grant       none
// @version     1.0
// @author      Mr. Alliance
// @description dice bot for stake and primedice  | *Use violentmonkey for the script
// @downloadURL https://github.com/reedniv/script/blob/main/dice/javascript/dice.js
// @updateURL https://github.com/reedniv/script/blob/main/dice/javascript/dice.js
// ==/UserScript==

var count_min = 1;
window.onload = function loadpage(){

setInterval(function(){
console.log("Status: Elapsed time " + count_min + " minutes");
count_min = count_min + 1;
}, 60000);
    
setInterval(function(){
document.getElementsByClassName("Button__StyledButton-sc-8bd3dp-0 fbjzSA")[0].click();
}, random(2000,4000));

setTimeout(function(){
document.getElementsByClassName("Button__StyledButton-sc-8bd3dp-0 fbjzSA")[0].click();
}, random(2000,3000));
}

function random(min,max){
	return min + (max - min) * Math.random();
}
