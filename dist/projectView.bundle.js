/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
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


/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const projectController = () => {
  
  const projects = [];
  let chosenProject;

  const addProject = (newProject) => {
    projects.push(newProject);
  };

  const removeProject = (index) => {
    projects.splice(index, 1);
  };

  const changeChosenProject = (index) => {
    chosenProject = projects[index];
  };

  return {projects, chosenProject, addProject}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectController);


/***/ }),

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
/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController */ "./src/projectController.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");




const projectView = () => {

    console.log(_projectController__WEBPACK_IMPORTED_MODULE_0__.default);
    const currentProject = _projectController__WEBPACK_IMPORTED_MODULE_0__.default.chosenProject;
    const allProjects = _projectController__WEBPACK_IMPORTED_MODULE_0__.default.projects;

    const aside = document.createElement("aside");
    const list = document.createElement("ul");

    aside.classList.add("sidebar");
    list.classList.add("sidebar-nav");
    
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3RWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCZ0M7O0FBRWhDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDdEJoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsQ0FBQyxxQkFBcUIsRUFBQzs7Ozs7OztVQzNCdEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ0xvRDtBQUNqQjs7QUFFbkM7O0FBRUEsZ0JBQWdCLHVEQUFpQjtBQUNqQywyQkFBMkIscUVBQStCO0FBQzFELHdCQUF3QixnRUFBMEI7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDIiwiZmlsZSI6InByb2plY3RWaWV3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0b2RvcyA9IFtdKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fdG9kb3MgPSB0b2RvcztcblxuICAgIHRoaXMuZ2V0TmFtZSA9ICgpID0+IHRoaXMuX25hbWU7XG4gICAgdGhpcy5zZXROYW1lID0gKG5ld05hbWUpID0+ICh0aGlzLl9uYW1lID0gbmV3TmFtZSk7XG5cbiAgICB0aGlzLmdldFRvZG9zID0gKCkgPT4gdGhpcy5fdG9kb3M7XG4gICAgdGhpcy5zZXRUb2RvcyA9IChuZXdUb2RvcykgPT4gKHRoaXMuX3RvZG9zID0gbmV3VG9kb3MpO1xuICB9XG5cbiAgYWRkVG9Qcm9qZWN0KG5ld1RvZG8pIHtcbiAgICBjb25zdCB0b2RvcyA9IHRoaXMuZ2V0VG9kb3MoKTtcbiAgICB0b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICB9XG5cbiAgcmVtb3ZlRnJvbVByb2plY3QoaW5kZXgpIHtcbiAgICBjb25zdCBpID0gaW5kZXg7XG4gICAgY29uc3QgdG9kb3MgPSB0aGlzLmdldFRvZG9zKCk7XG5cbiAgICB0b2Rvcy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuICAgIHByb2plY3ROYW1lLnNldE5hbWUobmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICBsZXQgY2hvc2VuUHJvamVjdDtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNob3NlblByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBjaG9zZW5Qcm9qZWN0ID0gcHJvamVjdHNbaW5kZXhdO1xuICB9O1xuXG4gIHJldHVybiB7cHJvamVjdHMsIGNob3NlblByb2plY3QsIGFkZFByb2plY3R9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Q29udHJvbGxlclxuIiwiY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuLy9QdWJsaXNoZXJcbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XG4gIGlmICghc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkgcmV0dXJuO1xuXG4gIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICBjYWxsYmFjayhkYXRhKTtcbiAgfSk7XG59O1xuXG4vL1N1YnNjcmliZXJcbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGNhbGxiYWNrKSA9PiB7XG4gIGlmICghc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkge1xuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuXG4gIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG5cbiAgcmV0dXJuIHtcbiAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZpbmRJbmRleCgoc2F2ZWRDYWxsYmFjaykgPT4gc2F2ZWRDYWxsYmFjayA9PT0gY2FsbGJhY2spO1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IHB1Ymxpc2gsIHN1YnNjcmliZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCBQcm9qZWN0Q29udHJvbGxlciBmcm9tIFwiLi9wcm9qZWN0Q29udHJvbGxlclwiO1xuaW1wb3J0ICogYXMgUHViU3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG5jb25zdCBwcm9qZWN0VmlldyA9ICgpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKFByb2plY3RDb250cm9sbGVyKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IFByb2plY3RDb250cm9sbGVyLmNob3NlblByb2plY3Q7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBQcm9qZWN0Q29udHJvbGxlci5wcm9qZWN0cztcblxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLW5hdlwiKTtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9