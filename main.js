/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const goblinIcon = document.createElement("img");
  goblinIcon.src = goblin_namespaceObject;
  goblinIcon.alt = "goblin";
  let currentIndex = 0;
  function showEnemy() {
    cells.forEach(el => {
      el.classList.remove("active");
    });
    const icon = document.querySelector("img");
    if (icon) {
      icon.remove();
    }
    const randomIndex = Math.floor(Math.random() * cells.length);
    if (currentIndex !== randomIndex) {
      cells[randomIndex].insertAdjacentElement("afterbegin", goblinIcon);
      cells[randomIndex].classList.add("active");
      return currentIndex = randomIndex;
    } else showEnemy();
  }
  setInterval(showEnemy, 1000);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;