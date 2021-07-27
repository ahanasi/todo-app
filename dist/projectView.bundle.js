/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const subscribers = {};

//Publisher
const publish = (eventName, data) => {
  if (!subscribers[eventName]) return;

  subscribers[eventName].forEach((callback) => {
    callback(data);
  });
};

//Subscriber
const subscribe = (eventName, callback) => {
  if (!subscribers[eventName]) {
    subscribers[eventName] = [];
  }

  subscribers[eventName].push(callback);

  return {
    unsubscribe: () => {
      const subscriptionIndex = subscribers[eventName].findIndex((savedCallback) => savedCallback === callback);
      subscribers[eventName].splice(subscriptionIndex, 1);
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ publish, subscribe });


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/projectView.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


const displayProjects = ([allProjects, currentProject]) => {

  const aside = document.querySelector(".sidebar");
  while (aside.firstChild) aside.removeChild(aside.firstChild);

  const list = document.createElement("ul");
  list.classList.add("sidebar-nav");

  allProjects.forEach((project,i) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#">${project.getName()}</a>`;
    listItem.setAttribute("data-index", i);
    if (project.getName() == currentProject.getName()) {
      listItem.classList.add("active");
    }
    listItem.addEventListener('click', () => {
      _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("changeCurrentProject", i);
    });
    list.appendChild(listItem);
  });
  aside.appendChild(list);
};

const displayTasks = (allTasks) => {
  const todoWrapper = document.querySelector(".task-wrapper");
  while (todoWrapper.firstChild) todoWrapper.removeChild(todoWrapper.firstChild);

  allTasks.forEach((task,i) => {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("displayTask", [task,i]);
  });
};

const updateProjectsSub = _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("refreshProjects", displayProjects);
const updateTasksSub = _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("refreshTasks", displayTasks);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ updateProjectsSub, updateTasksSub });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0Vmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxDQUFDLHFCQUFxQixFQUFDOzs7Ozs7O1VDM0J0QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0Msa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFjO0FBQ3BCLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQWM7QUFDbEIsR0FBRztBQUNIOztBQUVBLDBCQUEwQixzREFBZ0I7QUFDMUMsdUJBQXVCLHNEQUFnQjs7QUFFdkMsaUVBQWUsQ0FBQyxvQ0FBb0MsRUFBQyIsImZpbGUiOiJwcm9qZWN0Vmlldy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4vL1B1Ymxpc2hlclxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgaWYgKCFzdWJzY3JpYmVyc1tldmVudE5hbWVdKSByZXR1cm47XG5cbiAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgIGNhbGxiYWNrKGRhdGEpO1xuICB9KTtcbn07XG5cbi8vU3Vic2NyaWJlclxuY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZSwgY2FsbGJhY2spID0+IHtcbiAgaWYgKCFzdWJzY3JpYmVyc1tldmVudE5hbWVdKSB7XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG5cbiAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcblxuICByZXR1cm4ge1xuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25JbmRleCA9IHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZmluZEluZGV4KChzYXZlZENhbGxiYWNrKSA9PiBzYXZlZENhbGxiYWNrID09PSBjYWxsYmFjayk7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShzdWJzY3JpcHRpb25JbmRleCwgMSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgcHVibGlzaCwgc3Vic2NyaWJlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQdWJTdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChbYWxsUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0XSkgPT4ge1xuXG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICB3aGlsZSAoYXNpZGUuZmlyc3RDaGlsZCkgYXNpZGUucmVtb3ZlQ2hpbGQoYXNpZGUuZmlyc3RDaGlsZCk7XG5cbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGlzdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1uYXZcIik7XG5cbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCxpKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+JHtwcm9qZWN0LmdldE5hbWUoKX08L2E+YDtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpO1xuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PSBjdXJyZW50UHJvamVjdC5nZXROYW1lKCkpIHtcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgUHViU3ViLnB1Ymxpc2goXCJjaGFuZ2VDdXJyZW50UHJvamVjdFwiLCBpKTtcbiAgICB9KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKGxpc3QpO1xufTtcblxuY29uc3QgZGlzcGxheVRhc2tzID0gKGFsbFRhc2tzKSA9PiB7XG4gIGNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXdyYXBwZXJcIik7XG4gIHdoaWxlICh0b2RvV3JhcHBlci5maXJzdENoaWxkKSB0b2RvV3JhcHBlci5yZW1vdmVDaGlsZCh0b2RvV3JhcHBlci5maXJzdENoaWxkKTtcblxuICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrLGkpID0+IHtcbiAgICBQdWJTdWIucHVibGlzaChcImRpc3BsYXlUYXNrXCIsIFt0YXNrLGldKTtcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVQcm9qZWN0c1N1YiA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJyZWZyZXNoUHJvamVjdHNcIiwgZGlzcGxheVByb2plY3RzKTtcbmNvbnN0IHVwZGF0ZVRhc2tzU3ViID0gUHViU3ViLnN1YnNjcmliZShcInJlZnJlc2hUYXNrc1wiLCBkaXNwbGF5VGFza3MpO1xuXG5leHBvcnQgZGVmYXVsdCB7IHVwZGF0ZVByb2plY3RzU3ViLCB1cGRhdGVUYXNrc1N1YiB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==