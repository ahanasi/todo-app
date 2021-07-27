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
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


class Project {
  constructor(name, todos = []) {
    this._name = name;
    this._todos = todos;

    this.getName = () => this._name;
    this.setName = (newName) => (this._name = newName);

    this.getTodos = () => this._todos;
    this.setTodos = (newTodos) => (this._todos = newTodos);
  }

  addToProject(newTodo) {
    const todos = this.getTodos();
    todos.push(newTodo);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("refreshTasks", todos);
  }

  editTodo(index){
    const todos = this.getTodos();
    const todo = todos[index];
    todo.modify();
  }

  removeFromProject(index) {
    const i = index;
    const todos = this.getTodos();

    todos.splice(i, 1);
  }

  changeName(name) {
    const projectName = this.getName();
    projectName.setName(name);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLENBQUMscUJBQXFCLEVBQUM7Ozs7Ozs7VUMzQnRDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUVmO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InByb2plY3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuLy9QdWJsaXNoZXJcbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XG4gIGlmICghc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkgcmV0dXJuO1xuXG4gIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICBjYWxsYmFjayhkYXRhKTtcbiAgfSk7XG59O1xuXG4vL1N1YnNjcmliZXJcbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGNhbGxiYWNrKSA9PiB7XG4gIGlmICghc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkge1xuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuXG4gIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG5cbiAgcmV0dXJuIHtcbiAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZpbmRJbmRleCgoc2F2ZWRDYWxsYmFjaykgPT4gc2F2ZWRDYWxsYmFjayA9PT0gY2FsbGJhY2spO1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IHB1Ymxpc2gsIHN1YnNjcmliZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHViU3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdG9kb3MgPSBbXSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX3RvZG9zID0gdG9kb3M7XG5cbiAgICB0aGlzLmdldE5hbWUgPSAoKSA9PiB0aGlzLl9uYW1lO1xuICAgIHRoaXMuc2V0TmFtZSA9IChuZXdOYW1lKSA9PiAodGhpcy5fbmFtZSA9IG5ld05hbWUpO1xuXG4gICAgdGhpcy5nZXRUb2RvcyA9ICgpID0+IHRoaXMuX3RvZG9zO1xuICAgIHRoaXMuc2V0VG9kb3MgPSAobmV3VG9kb3MpID0+ICh0aGlzLl90b2RvcyA9IG5ld1RvZG9zKTtcbiAgfVxuXG4gIGFkZFRvUHJvamVjdChuZXdUb2RvKSB7XG4gICAgY29uc3QgdG9kb3MgPSB0aGlzLmdldFRvZG9zKCk7XG4gICAgdG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICBQdWJTdWIucHVibGlzaChcInJlZnJlc2hUYXNrc1wiLCB0b2Rvcyk7XG4gIH1cblxuICBlZGl0VG9kbyhpbmRleCl7XG4gICAgY29uc3QgdG9kb3MgPSB0aGlzLmdldFRvZG9zKCk7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9zW2luZGV4XTtcbiAgICB0b2RvLm1vZGlmeSgpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbVByb2plY3QoaW5kZXgpIHtcbiAgICBjb25zdCBpID0gaW5kZXg7XG4gICAgY29uc3QgdG9kb3MgPSB0aGlzLmdldFRvZG9zKCk7XG5cbiAgICB0b2Rvcy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuICAgIHByb2plY3ROYW1lLnNldE5hbWUobmFtZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=