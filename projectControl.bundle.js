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
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


let projects = [];
let currentProject;
let currentIndex = 0;

const getCurrentProject = () => {
  return currentProject;
};

const getProjectCount = () => {
  return projects.length;
};

const importProjects = (newProjects) => {
  return (projects = newProjects);
};

const addProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("addProjectToModel", (newProject) => {
  currentProject = newProject;
  projects.push(newProject);
  currentIndex = projects.length - 1;
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("saveProjectsToStorage", projects);
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("refreshProjects", [projects, currentProject]);
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("refreshTasks", currentProject.getTodos());
});

const removeProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("removeProjectFromModel", () => {
  if (projects.length > 1) {
    projects.splice(currentIndex, 1);
    debugger;
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("saveProjectsToStorage", projects);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("changeCurrentProject", 0);
  }
});

const addTodo = _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("addTodoToProject", (todo) => {
  currentProject.addToProject(todo);
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("saveProjectsToStorage", projects);
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("refreshTasks", currentProject.getTodos());
});

const removeTodo = _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("removeTodoFromProject", (index) => {
  currentProject.removeFromProject(index);
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("saveProjectsToStorage", projects);
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("refreshTasks", currentProject.getTodos());
});

const changeCurrentProject = _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("changeCurrentProject", (index) => {
  currentProject = projects[index];
  currentIndex = index;
  debugger;
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("saveIndexToStorage", currentIndex);
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("refreshProjects", [projects, currentProject]);
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("refreshTasks", currentProject.getTodos());
});

const changeTodoStatus = _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("changeTodoStatus", () => {
  _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("saveProjectsToStorage", projects);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ addProject, removeProject, changeCurrentProject, removeTodo, addTodo, changeTodoStatus, getCurrentProject, importProjects, getProjectCount });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxDQUFDLHFCQUFxQixFQUFDOzs7Ozs7O1VDM0J0QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixzREFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBYztBQUNoQixFQUFFLG9EQUFjO0FBQ2hCLEVBQUUsb0RBQWM7QUFDaEIsQ0FBQzs7QUFFRCxzQkFBc0Isc0RBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWM7QUFDbEIsSUFBSSxvREFBYztBQUNsQjtBQUNBLENBQUM7O0FBRUQsZ0JBQWdCLHNEQUFnQjtBQUNoQztBQUNBLEVBQUUsb0RBQWM7QUFDaEIsRUFBRSxvREFBYztBQUNoQixDQUFDOztBQUVELG1CQUFtQixzREFBZ0I7QUFDbkM7QUFDQSxFQUFFLG9EQUFjO0FBQ2hCLEVBQUUsb0RBQWM7QUFDaEIsQ0FBQzs7QUFFRCw2QkFBNkIsc0RBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQWM7QUFDaEIsRUFBRSxvREFBYztBQUNoQixFQUFFLG9EQUFjO0FBQ2hCLENBQUM7O0FBRUQseUJBQXlCLHNEQUFnQjtBQUN6QyxFQUFFLG9EQUFjO0FBQ2hCLENBQUM7O0FBRUQsaUVBQWUsQ0FBQyw2SUFBNkksRUFBQyIsImZpbGUiOiJwcm9qZWN0Q29udHJvbC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdWJzY3JpYmVycyA9IHt9O1xuXG4vL1B1Ymxpc2hlclxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgaWYgKCFzdWJzY3JpYmVyc1tldmVudE5hbWVdKSByZXR1cm47XG5cbiAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgIGNhbGxiYWNrKGRhdGEpO1xuICB9KTtcbn07XG5cbi8vU3Vic2NyaWJlclxuY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZSwgY2FsbGJhY2spID0+IHtcbiAgaWYgKCFzdWJzY3JpYmVyc1tldmVudE5hbWVdKSB7XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG5cbiAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcblxuICByZXR1cm4ge1xuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25JbmRleCA9IHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZmluZEluZGV4KChzYXZlZENhbGxiYWNrKSA9PiBzYXZlZENhbGxiYWNrID09PSBjYWxsYmFjayk7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShzdWJzY3JpcHRpb25JbmRleCwgMSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgcHVibGlzaCwgc3Vic2NyaWJlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQdWJTdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xubGV0IGN1cnJlbnRQcm9qZWN0O1xubGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbmNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge1xuICByZXR1cm4gY3VycmVudFByb2plY3Q7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0Q291bnQgPSAoKSA9PiB7XG4gIHJldHVybiBwcm9qZWN0cy5sZW5ndGg7XG59O1xuXG5jb25zdCBpbXBvcnRQcm9qZWN0cyA9IChuZXdQcm9qZWN0cykgPT4ge1xuICByZXR1cm4gKHByb2plY3RzID0gbmV3UHJvamVjdHMpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdCA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJhZGRQcm9qZWN0VG9Nb2RlbFwiLCAobmV3UHJvamVjdCkgPT4ge1xuICBjdXJyZW50UHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIGN1cnJlbnRJbmRleCA9IHByb2plY3RzLmxlbmd0aCAtIDE7XG4gIFB1YlN1Yi5wdWJsaXNoKFwic2F2ZVByb2plY3RzVG9TdG9yYWdlXCIsIHByb2plY3RzKTtcbiAgUHViU3ViLnB1Ymxpc2goXCJyZWZyZXNoUHJvamVjdHNcIiwgW3Byb2plY3RzLCBjdXJyZW50UHJvamVjdF0pO1xuICBQdWJTdWIucHVibGlzaChcInJlZnJlc2hUYXNrc1wiLCBjdXJyZW50UHJvamVjdC5nZXRUb2RvcygpKTtcbn0pO1xuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShcInJlbW92ZVByb2plY3RGcm9tTW9kZWxcIiwgKCkgPT4ge1xuICBpZiAocHJvamVjdHMubGVuZ3RoID4gMSkge1xuICAgIHByb2plY3RzLnNwbGljZShjdXJyZW50SW5kZXgsIDEpO1xuICAgIGRlYnVnZ2VyO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFwic2F2ZVByb2plY3RzVG9TdG9yYWdlXCIsIHByb2plY3RzKTtcbiAgICBQdWJTdWIucHVibGlzaChcImNoYW5nZUN1cnJlbnRQcm9qZWN0XCIsIDApO1xuICB9XG59KTtcblxuY29uc3QgYWRkVG9kbyA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJhZGRUb2RvVG9Qcm9qZWN0XCIsICh0b2RvKSA9PiB7XG4gIGN1cnJlbnRQcm9qZWN0LmFkZFRvUHJvamVjdCh0b2RvKTtcbiAgUHViU3ViLnB1Ymxpc2goXCJzYXZlUHJvamVjdHNUb1N0b3JhZ2VcIiwgcHJvamVjdHMpO1xuICBQdWJTdWIucHVibGlzaChcInJlZnJlc2hUYXNrc1wiLCBjdXJyZW50UHJvamVjdC5nZXRUb2RvcygpKTtcbn0pO1xuXG5jb25zdCByZW1vdmVUb2RvID0gUHViU3ViLnN1YnNjcmliZShcInJlbW92ZVRvZG9Gcm9tUHJvamVjdFwiLCAoaW5kZXgpID0+IHtcbiAgY3VycmVudFByb2plY3QucmVtb3ZlRnJvbVByb2plY3QoaW5kZXgpO1xuICBQdWJTdWIucHVibGlzaChcInNhdmVQcm9qZWN0c1RvU3RvcmFnZVwiLCBwcm9qZWN0cyk7XG4gIFB1YlN1Yi5wdWJsaXNoKFwicmVmcmVzaFRhc2tzXCIsIGN1cnJlbnRQcm9qZWN0LmdldFRvZG9zKCkpO1xufSk7XG5cbmNvbnN0IGNoYW5nZUN1cnJlbnRQcm9qZWN0ID0gUHViU3ViLnN1YnNjcmliZShcImNoYW5nZUN1cnJlbnRQcm9qZWN0XCIsIChpbmRleCkgPT4ge1xuICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2luZGV4XTtcbiAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gIGRlYnVnZ2VyO1xuICBQdWJTdWIucHVibGlzaChcInNhdmVJbmRleFRvU3RvcmFnZVwiLCBjdXJyZW50SW5kZXgpO1xuICBQdWJTdWIucHVibGlzaChcInJlZnJlc2hQcm9qZWN0c1wiLCBbcHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0XSk7XG4gIFB1YlN1Yi5wdWJsaXNoKFwicmVmcmVzaFRhc2tzXCIsIGN1cnJlbnRQcm9qZWN0LmdldFRvZG9zKCkpO1xufSk7XG5cbmNvbnN0IGNoYW5nZVRvZG9TdGF0dXMgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hhbmdlVG9kb1N0YXR1c1wiLCAoKSA9PiB7XG4gIFB1YlN1Yi5wdWJsaXNoKFwic2F2ZVByb2plY3RzVG9TdG9yYWdlXCIsIHByb2plY3RzKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGNoYW5nZUN1cnJlbnRQcm9qZWN0LCByZW1vdmVUb2RvLCBhZGRUb2RvLCBjaGFuZ2VUb2RvU3RhdHVzLCBnZXRDdXJyZW50UHJvamVjdCwgaW1wb3J0UHJvamVjdHMsIGdldFByb2plY3RDb3VudCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==