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


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(title, desc, priority, dueDate, isComplete) {
    this._title = title;
    this._desc = desc;
    this._priority = priority || 0;
    this._dueDate = dueDate || null;
    this._isComplete = isComplete || false;

    this.getTitle = () => this._title;
    this.setTitle = (newTitle) => (this._title = newTitle);

    this.getDesc = () => this._desc;
    this.setDesc = (newDesc) => (this._desc = newDesc);

    this.getDate = () => this._dueDate;
    this.setDate = (newDate) => (this._dueDate = newDate);

    this.getPriority = () => this._priority;
    this.setPriority = (newPriority) => (this._priority = newPriority);

    this.getComplete = () => this._isComplete;
    this.setComplete = (newComplete) => (this._isComplete = newComplete);
  }

  get title() {
    return this.getTitle();
  }

  set title(newTitle) {
    return this.setTitle(newTitle);
  }

  get desc() {
    return this.getDesc();
  }

  set desc(newDesc) {
    return this.setDesc(newDesc);
  }

  get dueDate() {
    return this.getDate();
  }

  set dueDate(newDate) {
    return this.setDate(newDate);
  }

  get priority() {
    return this.getPriority();
  }

  set priority(newPriority) {
    return this.setPriority(newPriority);
  }

  get isComplete() {
    return this.getComplete();
  }

  set isComplete(newComplete) {
    return this.setComplete(newComplete);
  }

  modify(newTitle,newDesc,newPriority,newDueDate){
    this.title = newTitle;
    this.desc = newDesc;
    this.priority = newPriority;
    this.dueDate = newDueDate;
  }
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
/*!*************************!*\
  !*** ./src/todoForm.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");



const todoForm = () => {
  const todoFormWrapper = document.createElement("section");
  todoFormWrapper.classList.add("box");

  const createRadioElement = (name, value) => {
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("name", "taskPriority");
    radioInput.setAttribute("value", value);

    const radioLabel = document.createElement("label");
    radioLabel.setAttribute("for", name);
    radioLabel.textContent = name;

    const radioField = document.createElement("div");
    radioField.classList.add("radio-field", "flex");

    radioField.append(radioInput, radioLabel);

    return radioField;
  };

  // Create a form dynamically
  const form = document.createElement("form");
  form.setAttribute("name", "newTaskForm");
  form.setAttribute("autocomplete", "off");
  form.classList.add("flex-col");

  //Create label for task name
  const taskNameLabel = document.createElement("label");
  taskNameLabel.setAttribute("for", "taskName");
  taskNameLabel.textContent = "Task Name";
  taskNameLabel.classList.add("visually-hidden");

  // Create an input element for task name
  const taskName = document.createElement("input");
  taskName.classList.add("ghost-input");
  taskName.setAttribute("type", "text");
  taskName.setAttribute("name", "taskName");
  taskName.setAttribute("placeholder", "New To-Do");

  //Create label for task description
  const taskDescLabel = document.createElement("label");
  taskDescLabel.setAttribute("for", "taskDesc");
  taskDescLabel.textContent = "Task Description";
  taskDescLabel.classList.add("visually-hidden");

  // Create an input element for task description
  const taskDesc = document.createElement("textarea");
  taskDesc.classList.add("ghost-input");
  taskDesc.setAttribute("name", "taskDesc");
  taskDesc.setAttribute("placeholder", "Notes");

  // Create an input element for task due date
  const taskDate = document.createElement("input");
  taskDate.classList.add("ghost-input", "input-group");
  taskDate.setAttribute("type", "date");
  taskDate.setAttribute("name", "taskDate");

  //Create label for task date
  const dateLabel = document.createElement("label");
  dateLabel.classList.add("radio-header");
  dateLabel.textContent = "Due Date";

  // Create an input element for task priority
  const radioField1 = createRadioElement("Low", 1);
  const radioField2 = createRadioElement("Medium", 2);
  const radioField3 = createRadioElement("High", 3);

  //Create input groups for radio buttons and date input

  const inputGroup = document.createElement("div");
  const radioWrapper = document.createElement("div");
  const dateWrapper = document.createElement("div");
  const radioHeader = document.createElement("label");
  radioHeader.setAttribute("for", "taskPriority");

  //Create Submit Button
  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "New Task");
  submitBtn.classList.add("ghost-button", "text-center");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const params = [...formData.values()];
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default(params[0], params[1], params[2], params[3]);
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.default.publish("addTodoToProject",newTodo);
    form.reset();
  });

  dateWrapper.classList.add("input-group");
  radioWrapper.classList.add("input-group");
  radioHeader.textContent = "Priority";
  radioHeader.classList.add("radio-header");

  radioWrapper.append(radioHeader, radioField1, radioField2, radioField3);
  dateWrapper.append(dateLabel, taskDate);
  inputGroup.append(radioWrapper, dateWrapper);
  inputGroup.classList.add("form-control","ghost-input", "input-group");

  form.append(taskNameLabel, taskName, taskDescLabel, taskDesc, inputGroup, submitBtn);

  todoFormWrapper.append(form);

  return todoFormWrapper;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoForm);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLENBQUMscUJBQXFCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNCdkI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNJOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMENBQUk7QUFDNUIsSUFBSSxvREFBYztBQUNsQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJmaWxlIjoidG9kb0Zvcm0uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuLy9QdWJsaXNoZXJcbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XG4gIGlmICghc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkgcmV0dXJuO1xuXG4gIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICBjYWxsYmFjayhkYXRhKTtcbiAgfSk7XG59O1xuXG4vL1N1YnNjcmliZXJcbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGNhbGxiYWNrKSA9PiB7XG4gIGlmICghc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkge1xuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuXG4gIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG5cbiAgcmV0dXJuIHtcbiAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uSW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZpbmRJbmRleCgoc2F2ZWRDYWxsYmFjaykgPT4gc2F2ZWRDYWxsYmFjayA9PT0gY2FsbGJhY2spO1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IHB1Ymxpc2gsIHN1YnNjcmliZSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBwcmlvcml0eSwgZHVlRGF0ZSwgaXNDb21wbGV0ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5fZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlIHx8IG51bGw7XG4gICAgdGhpcy5faXNDb21wbGV0ZSA9IGlzQ29tcGxldGUgfHwgZmFsc2U7XG5cbiAgICB0aGlzLmdldFRpdGxlID0gKCkgPT4gdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5zZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gKHRoaXMuX3RpdGxlID0gbmV3VGl0bGUpO1xuXG4gICAgdGhpcy5nZXREZXNjID0gKCkgPT4gdGhpcy5fZGVzYztcbiAgICB0aGlzLnNldERlc2MgPSAobmV3RGVzYykgPT4gKHRoaXMuX2Rlc2MgPSBuZXdEZXNjKTtcblxuICAgIHRoaXMuZ2V0RGF0ZSA9ICgpID0+IHRoaXMuX2R1ZURhdGU7XG4gICAgdGhpcy5zZXREYXRlID0gKG5ld0RhdGUpID0+ICh0aGlzLl9kdWVEYXRlID0gbmV3RGF0ZSk7XG5cbiAgICB0aGlzLmdldFByaW9yaXR5ID0gKCkgPT4gdGhpcy5fcHJpb3JpdHk7XG4gICAgdGhpcy5zZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4gKHRoaXMuX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHkpO1xuXG4gICAgdGhpcy5nZXRDb21wbGV0ZSA9ICgpID0+IHRoaXMuX2lzQ29tcGxldGU7XG4gICAgdGhpcy5zZXRDb21wbGV0ZSA9IChuZXdDb21wbGV0ZSkgPT4gKHRoaXMuX2lzQ29tcGxldGUgPSBuZXdDb21wbGV0ZSk7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKTtcbiAgfVxuXG4gIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgIHJldHVybiB0aGlzLnNldFRpdGxlKG5ld1RpdGxlKTtcbiAgfVxuXG4gIGdldCBkZXNjKCkge1xuICAgIHJldHVybiB0aGlzLmdldERlc2MoKTtcbiAgfVxuXG4gIHNldCBkZXNjKG5ld0Rlc2MpIHtcbiAgICByZXR1cm4gdGhpcy5zZXREZXNjKG5ld0Rlc2MpO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnNldERhdGUobmV3RGF0ZSk7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJpb3JpdHkoKTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgIHJldHVybiB0aGlzLnNldFByaW9yaXR5KG5ld1ByaW9yaXR5KTtcbiAgfVxuXG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBsZXRlKCk7XG4gIH1cblxuICBzZXQgaXNDb21wbGV0ZShuZXdDb21wbGV0ZSkge1xuICAgIHJldHVybiB0aGlzLnNldENvbXBsZXRlKG5ld0NvbXBsZXRlKTtcbiAgfVxuXG4gIG1vZGlmeShuZXdUaXRsZSxuZXdEZXNjLG5ld1ByaW9yaXR5LG5ld0R1ZURhdGUpe1xuICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB0aGlzLmRlc2MgPSBuZXdEZXNjO1xuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBQdWJTdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5cbmNvbnN0IHRvZG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCB0b2RvRm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdG9kb0Zvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG5cbiAgY29uc3QgY3JlYXRlUmFkaW9FbGVtZW50ID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICByYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICByYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrUHJpb3JpdHlcIik7XG4gICAgcmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XG5cbiAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIG5hbWUpO1xuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgcmFkaW9GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmFkaW9GaWVsZC5jbGFzc0xpc3QuYWRkKFwicmFkaW8tZmllbGRcIiwgXCJmbGV4XCIpO1xuXG4gICAgcmFkaW9GaWVsZC5hcHBlbmQocmFkaW9JbnB1dCwgcmFkaW9MYWJlbCk7XG5cbiAgICByZXR1cm4gcmFkaW9GaWVsZDtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBmb3JtIGR5bmFtaWNhbGx5XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3VGFza0Zvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmbGV4LWNvbFwiKTtcblxuICAvL0NyZWF0ZSBsYWJlbCBmb3IgdGFzayBuYW1lXG4gIGNvbnN0IHRhc2tOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRhc2tOYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFza05hbWVcIik7XG4gIHRhc2tOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgTmFtZVwiO1xuICB0YXNrTmFtZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ2aXN1YWxseS1oaWRkZW5cIik7XG5cbiAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRhc2sgbmFtZVxuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcImdob3N0LWlucHV0XCIpO1xuICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2tOYW1lXCIpO1xuICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBUby1Eb1wiKTtcblxuICAvL0NyZWF0ZSBsYWJlbCBmb3IgdGFzayBkZXNjcmlwdGlvblxuICBjb25zdCB0YXNrRGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0YXNrRGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2tEZXNjXCIpO1xuICB0YXNrRGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIERlc2NyaXB0aW9uXCI7XG4gIHRhc2tEZXNjTGFiZWwuY2xhc3NMaXN0LmFkZChcInZpc3VhbGx5LWhpZGRlblwiKTtcblxuICAvLyBDcmVhdGUgYW4gaW5wdXQgZWxlbWVudCBmb3IgdGFzayBkZXNjcmlwdGlvblxuICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZChcImdob3N0LWlucHV0XCIpO1xuICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza0Rlc2NcIik7XG4gIHRhc2tEZXNjLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTm90ZXNcIik7XG5cbiAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRhc2sgZHVlIGRhdGVcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1pbnB1dFwiLCBcImlucHV0LWdyb3VwXCIpO1xuICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgdGFza0RhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2tEYXRlXCIpO1xuXG4gIC8vQ3JlYXRlIGxhYmVsIGZvciB0YXNrIGRhdGVcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkYXRlTGFiZWwuY2xhc3NMaXN0LmFkZChcInJhZGlvLWhlYWRlclwiKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXG4gIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0YXNrIHByaW9yaXR5XG4gIGNvbnN0IHJhZGlvRmllbGQxID0gY3JlYXRlUmFkaW9FbGVtZW50KFwiTG93XCIsIDEpO1xuICBjb25zdCByYWRpb0ZpZWxkMiA9IGNyZWF0ZVJhZGlvRWxlbWVudChcIk1lZGl1bVwiLCAyKTtcbiAgY29uc3QgcmFkaW9GaWVsZDMgPSBjcmVhdGVSYWRpb0VsZW1lbnQoXCJIaWdoXCIsIDMpO1xuXG4gIC8vQ3JlYXRlIGlucHV0IGdyb3VwcyBmb3IgcmFkaW8gYnV0dG9ucyBhbmQgZGF0ZSBpbnB1dFxuXG4gIGNvbnN0IGlucHV0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByYWRpb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJhZGlvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICByYWRpb0hlYWRlci5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrUHJpb3JpdHlcIik7XG5cbiAgLy9DcmVhdGUgU3VibWl0IEJ1dHRvblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJOZXcgVGFza1wiKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1idXR0b25cIiwgXCJ0ZXh0LWNlbnRlclwiKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCBwYXJhbXMgPSBbLi4uZm9ybURhdGEudmFsdWVzKCldO1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhwYXJhbXNbMF0sIHBhcmFtc1sxXSwgcGFyYW1zWzJdLCBwYXJhbXNbM10pO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFwiYWRkVG9kb1RvUHJvamVjdFwiLG5ld1RvZG8pO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG5cbiAgZGF0ZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWdyb3VwXCIpO1xuICByYWRpb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWdyb3VwXCIpO1xuICByYWRpb0hlYWRlci50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgcmFkaW9IZWFkZXIuY2xhc3NMaXN0LmFkZChcInJhZGlvLWhlYWRlclwiKTtcblxuICByYWRpb1dyYXBwZXIuYXBwZW5kKHJhZGlvSGVhZGVyLCByYWRpb0ZpZWxkMSwgcmFkaW9GaWVsZDIsIHJhZGlvRmllbGQzKTtcbiAgZGF0ZVdyYXBwZXIuYXBwZW5kKGRhdGVMYWJlbCwgdGFza0RhdGUpO1xuICBpbnB1dEdyb3VwLmFwcGVuZChyYWRpb1dyYXBwZXIsIGRhdGVXcmFwcGVyKTtcbiAgaW5wdXRHcm91cC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIsXCJnaG9zdC1pbnB1dFwiLCBcImlucHV0LWdyb3VwXCIpO1xuXG4gIGZvcm0uYXBwZW5kKHRhc2tOYW1lTGFiZWwsIHRhc2tOYW1lLCB0YXNrRGVzY0xhYmVsLCB0YXNrRGVzYywgaW5wdXRHcm91cCwgc3VibWl0QnRuKTtcblxuICB0b2RvRm9ybVdyYXBwZXIuYXBwZW5kKGZvcm0pO1xuXG4gIHJldHVybiB0b2RvRm9ybVdyYXBwZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=