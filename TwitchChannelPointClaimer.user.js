// ==UserScript==
// @name         Twitch Channel Point Claimer
// @namespace    https://github.com/IceQ1337/TwitchChannelPointClaimer
// @version      1.2
// @description  Automatically claims the randomly appearing bonus chest on any open twitch stream.
// @author       IceQ1337
// @match        https://www.twitch.tv/*
// @grant        none
// @run-at       document-end
// @updateURL    https://github.com/IceQ1337/TwitchChannelPointClaimer/raw/master/TwitchChannelPointClaimer.user.js
// @downloadURL  https://github.com/IceQ1337/TwitchChannelPointClaimer/raw/master/TwitchChannelPointClaimer.user.js
// ==/UserScript==

(function() {
    'use strict';

    function claimChest() {
        // check if any bonus chests exist in the current document context
        var bonusChests = document.getElementsByClassName('claimable-bonus__icon');
        if (bonusChests.length > 0) {
            // click every bonus chest we found (there should only be one anyway)
            bonusChests.forEach(bonusChest => bonusChest.click());
        }

        /*
         * debug new button elements in case Twitch decides to change the class name again
         */

        // get all buttons within the community points section
        var cpSection = document.querySelector('.community-points-summary');
        var cpButtons = cpSection.querySelectorAll('button');

        // check if there is more than one button (first button shows your points, second should be a bonus chest)
        if (cpButtons.length > 1) {
            cpButtons.forEach((cpButton, cpButtonIndex) => {
                // if there is more than one button, print them to console
                if (cpButtonIndex != 0) {
                    console.log(cpButton);
                }
            });
        }

        setTimeout(claimChest, 15000);
    }

    claimChest();
})();
