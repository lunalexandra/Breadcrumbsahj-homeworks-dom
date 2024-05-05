/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 821:
/***/ (() => {

const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.insertAdjacentElement("afterbegin", container);
let i = 0;
while (i < 16) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  container.insertAdjacentElement("afterbegin", cell);
  i++;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/cell.js
var cell = __webpack_require__(821);
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
})();

/******/ })()
;