// ==UserScript==
// @name         MangaFire Auto-Scroll (Draggable UI)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Auto-scroll Mangafire pages with draggable control panel UI 🖱️
// @match        *://mangafire.to/read/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let interval;

    // Create draggable panel
    const panel = document.createElement('div');
    Object.assign(panel.style, {
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: '#222',
        color: '#fff',
        padding: '8px',
        borderRadius: '6px',
        zIndex: 9999,
        fontFamily: 'Arial',
        cursor: 'move',
        userSelect: 'none'
    });
    panel.innerHTML = `
        <div style="margin-bottom: 6px; font-weight: bold; cursor: move;">🖱️ Auto Scroll</div>
        Speed: <input id="msSpeed" type="number" value="2" style="width:40px;"><br>
        <button id="msStart">▶️ Start</button>
        <button id="msStop">⏹️ Stop</button>
    `;
    document.body.appendChild(panel);

    // Scroll logic
    function startScrolling() {
        stopScrolling();
        const speed = parseInt(document.getElementById('msSpeed').value) || 2;

        const targets = [
            document.querySelector('#page-wrapper'),
            document.querySelector('.longstrip'),
            document.querySelector('main'),
            document.scrollingElement || document.documentElement
        ].filter(el => el != null);

        if (targets.length === 0) {
            alert('⚠ Couldn’t find scroll container.');
            return;
        }

        const container = targets[0];
        interval = setInterval(() => container.scrollBy(0, speed), 20);
    }

    function stopScrolling() {
        if (interval) clearInterval(interval);
    }

    document.getElementById('msStart').onclick = startScrolling;
    document.getElementById('msStop').onclick = stopScrolling;

    // 🖱️ Make panel draggable
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    panel.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - panel.getBoundingClientRect().left;
        offsetY = e.clientY - panel.getBoundingClientRect().top;
        document.body.style.userSelect = 'none'; // prevent text selection
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            panel.style.left = (e.clientX - offsetX) + 'px';
            panel.style.top = (e.clientY - offsetY) + 'px';
            panel.style.right = 'auto'; // unset right so it can move freely
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        document.body.style.userSelect = ''; // restore selection
    });
})();
