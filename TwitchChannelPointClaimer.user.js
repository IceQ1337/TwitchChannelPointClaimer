// ==UserScript==
// @name         Twitch Channel Point Claimer
// @namespace    https://github.com/IceQ1337/TwitchChannelPointClaimer
// @version      1.1
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
        var bonusChests = document.getElementsByClassName('claimable-bonus__icon');
        if (bonusChests.length > 0) bonusChests[0].click();
        setTimeout(claimChest, 10000);
    }
    claimChest();
})();
