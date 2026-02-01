// ==UserScript==
// @name         Auto Fill CAPTCHA UIT
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Tự động điền captcha UIT
// @match        https://student.uit.edu.vn/*
// @match        https://daa.uit.edu.vn/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function autoFillCaptcha() {
        const label = document.querySelector('label[for="edit-english-captcha-answer"]');
        const input = document.getElementById('edit-english-captcha-answer');
      
        if (label && input) {
            const questionText = label.innerText;
            const match = questionText.match(/\(([^)]+)\)/);
          
            if (match && match[1]) {
                const answer = match[1].trim();
                input.value = answer;
                input.style.backgroundColor = "#d4edda";
            }
        }
    }
    window.addEventListener('load', autoFillCaptcha);
})();
