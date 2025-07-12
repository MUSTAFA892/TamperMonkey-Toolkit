// ==UserScript==
// @name         YouTube Auto Skip Ads
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically skip YouTube ads when the skip button appears, including overlays and video ads.
// @author       ChatGPT
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const log = (msg) => console.log(`[YT-AutoSkip] ${msg}`);

    const observer = new MutationObserver(() => {
        // Skippable video ads
        const skipButton = document.querySelector('.ytp-ad-skip-button');
        if (skipButton) {
            log('⏩ Skip button found — clicking it.');
            skipButton.click();
        }

        // Overlay banner ads (the small ones at bottom)
        const overlayClose = document.querySelector('.ytp-ad-overlay-close-button');
        if (overlayClose) {
            log('❌ Overlay ad close button found — clicking it.');
            overlayClose.click();
        }
    });

    function waitForPlayer() {
        const player = document.querySelector('.html5-video-player');
        if (player) {
            log('🎬 Player found, starting ad observer.');
            observer.observe(player, { childList: true, subtree: true });
        } else {
            setTimeout(waitForPlayer, 1000);
        }
    }

    waitForPlayer();
})();
