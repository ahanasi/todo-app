/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    this._priority = priority;
    this._dueDate = new Date(dueDate) || null;
    this._isComplete = isComplete || false;

    this.getTitle = () => this._title;
    this.setTitle = (newTitle) => (this._title = newTitle);

    this.getDesc = () => this._desc;
    this.setDesc = (newDesc) => (this._desc = newDesc);

    this.getDate = () => this._dueDate;
    this.setDate = (newDate) => (this._dueDate = new Date(newDate));

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
  form.classList.add("flex-col");

  // Create an input element for task name
  const taskName = document.createElement("input");
  taskName.classList.add("ghost-input");
  taskName.setAttribute("type", "text");
  taskName.setAttribute("name", "taskName");
  taskName.setAttribute("placeholder", "New To-Do");

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
  const radioHeader = document.createElement("div");

  //Create Submit Button
  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "New Task");
  submitBtn.classList.add("ghost-button", "text-center");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const params = [...formData.values()];
    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default(params[0], params[1], params[2], params[3]);
    console.log(todo);
  });

  dateWrapper.classList.add("input-group");
  radioWrapper.classList.add("input-group");
  radioHeader.textContent = "Priority";
  radioHeader.classList.add("radio-header");

  radioWrapper.append(radioHeader, radioField1, radioField2, radioField3);
  dateWrapper.append(dateLabel, taskDate);
  inputGroup.append(radioWrapper, dateWrapper);
  inputGroup.classList.add("ghost-input", "input-group", "flex");

  form.append(taskName, taskDesc, inputGroup, submitBtn);

  todoFormWrapper.append(form);

  return todoFormWrapper;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoForm);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kb0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBSTtBQUN6QjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJmaWxlIjoidG9kb0Zvcm0uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBwcmlvcml0eSwgZHVlRGF0ZSwgaXNDb21wbGV0ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5fZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLl9kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSkgfHwgbnVsbDtcbiAgICB0aGlzLl9pc0NvbXBsZXRlID0gaXNDb21wbGV0ZSB8fCBmYWxzZTtcblxuICAgIHRoaXMuZ2V0VGl0bGUgPSAoKSA9PiB0aGlzLl90aXRsZTtcbiAgICB0aGlzLnNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiAodGhpcy5fdGl0bGUgPSBuZXdUaXRsZSk7XG5cbiAgICB0aGlzLmdldERlc2MgPSAoKSA9PiB0aGlzLl9kZXNjO1xuICAgIHRoaXMuc2V0RGVzYyA9IChuZXdEZXNjKSA9PiAodGhpcy5fZGVzYyA9IG5ld0Rlc2MpO1xuXG4gICAgdGhpcy5nZXREYXRlID0gKCkgPT4gdGhpcy5fZHVlRGF0ZTtcbiAgICB0aGlzLnNldERhdGUgPSAobmV3RGF0ZSkgPT4gKHRoaXMuX2R1ZURhdGUgPSBuZXcgRGF0ZShuZXdEYXRlKSk7XG5cbiAgICB0aGlzLmdldFByaW9yaXR5ID0gKCkgPT4gdGhpcy5fcHJpb3JpdHk7XG4gICAgdGhpcy5zZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4gKHRoaXMuX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHkpO1xuXG4gICAgdGhpcy5nZXRDb21wbGV0ZSA9ICgpID0+IHRoaXMuX2lzQ29tcGxldGU7XG4gICAgdGhpcy5zZXRDb21wbGV0ZSA9IChuZXdDb21wbGV0ZSkgPT4gKHRoaXMuX2lzQ29tcGxldGUgPSBuZXdDb21wbGV0ZSk7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKTtcbiAgfVxuXG4gIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgIHJldHVybiB0aGlzLnNldFRpdGxlKG5ld1RpdGxlKTtcbiAgfVxuXG4gIGdldCBkZXNjKCkge1xuICAgIHJldHVybiB0aGlzLmdldERlc2MoKTtcbiAgfVxuXG4gIHNldCBkZXNjKG5ld0Rlc2MpIHtcbiAgICByZXR1cm4gdGhpcy5zZXREZXNjKG5ld0Rlc2MpO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnNldERhdGUobmV3RGF0ZSk7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJpb3JpdHkoKTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgIHJldHVybiB0aGlzLnNldFByaW9yaXR5KG5ld1ByaW9yaXR5KTtcbiAgfVxuXG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBsZXRlKCk7XG4gIH1cblxuICBzZXQgaXNDb21wbGV0ZShuZXdDb21wbGV0ZSkge1xuICAgIHJldHVybiB0aGlzLnNldENvbXBsZXRlKG5ld0NvbXBsZXRlKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IHRvZG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCB0b2RvRm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdG9kb0Zvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG5cbiAgY29uc3QgY3JlYXRlUmFkaW9FbGVtZW50ID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICByYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICByYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrUHJpb3JpdHlcIik7XG4gICAgcmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XG5cbiAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIG5hbWUpO1xuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgcmFkaW9GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmFkaW9GaWVsZC5jbGFzc0xpc3QuYWRkKFwicmFkaW8tZmllbGRcIiwgXCJmbGV4XCIpO1xuXG4gICAgcmFkaW9GaWVsZC5hcHBlbmQocmFkaW9JbnB1dCwgcmFkaW9MYWJlbCk7XG5cbiAgICByZXR1cm4gcmFkaW9GaWVsZDtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBmb3JtIGR5bmFtaWNhbGx5XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3VGFza0Zvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImZsZXgtY29sXCIpO1xuXG4gIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0YXNrIG5hbWVcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1pbnB1dFwiKTtcbiAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrTmFtZVwiKTtcbiAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgVG8tRG9cIik7XG5cbiAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRhc2sgZGVzY3JpcHRpb25cbiAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1pbnB1dFwiKTtcbiAgdGFza0Rlc2Muc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2tEZXNjXCIpO1xuICB0YXNrRGVzYy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5vdGVzXCIpO1xuXG4gIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0YXNrIGR1ZSBkYXRlXG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZ2hvc3QtaW5wdXRcIiwgXCJpbnB1dC1ncm91cFwiKTtcbiAgdGFza0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIHRhc2tEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrRGF0ZVwiKTtcblxuICAvL0NyZWF0ZSBsYWJlbCBmb3IgdGFzayBkYXRlXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1oZWFkZXJcIik7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblxuICAvLyBDcmVhdGUgYW4gaW5wdXQgZWxlbWVudCBmb3IgdGFzayBwcmlvcml0eVxuICBjb25zdCByYWRpb0ZpZWxkMSA9IGNyZWF0ZVJhZGlvRWxlbWVudChcIkxvd1wiLCAxKTtcbiAgY29uc3QgcmFkaW9GaWVsZDIgPSBjcmVhdGVSYWRpb0VsZW1lbnQoXCJNZWRpdW1cIiwgMik7XG4gIGNvbnN0IHJhZGlvRmllbGQzID0gY3JlYXRlUmFkaW9FbGVtZW50KFwiSGlnaFwiLCAzKTtcblxuICAvL0NyZWF0ZSBpbnB1dCBncm91cHMgZm9yIHJhZGlvIGJ1dHRvbnMgYW5kIGRhdGUgaW5wdXRcblxuICBjb25zdCBpbnB1dEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcmFkaW9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByYWRpb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy9DcmVhdGUgU3VibWl0IEJ1dHRvblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJOZXcgVGFza1wiKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1idXR0b25cIiwgXCJ0ZXh0LWNlbnRlclwiKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCBwYXJhbXMgPSBbLi4uZm9ybURhdGEudmFsdWVzKCldO1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhwYXJhbXNbMF0sIHBhcmFtc1sxXSwgcGFyYW1zWzJdLCBwYXJhbXNbM10pO1xuICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICB9KTtcblxuICBkYXRlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZ3JvdXBcIik7XG4gIHJhZGlvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZ3JvdXBcIik7XG4gIHJhZGlvSGVhZGVyLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICByYWRpb0hlYWRlci5jbGFzc0xpc3QuYWRkKFwicmFkaW8taGVhZGVyXCIpO1xuXG4gIHJhZGlvV3JhcHBlci5hcHBlbmQocmFkaW9IZWFkZXIsIHJhZGlvRmllbGQxLCByYWRpb0ZpZWxkMiwgcmFkaW9GaWVsZDMpO1xuICBkYXRlV3JhcHBlci5hcHBlbmQoZGF0ZUxhYmVsLCB0YXNrRGF0ZSk7XG4gIGlucHV0R3JvdXAuYXBwZW5kKHJhZGlvV3JhcHBlciwgZGF0ZVdyYXBwZXIpO1xuICBpbnB1dEdyb3VwLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1pbnB1dFwiLCBcImlucHV0LWdyb3VwXCIsIFwiZmxleFwiKTtcblxuICBmb3JtLmFwcGVuZCh0YXNrTmFtZSwgdGFza0Rlc2MsIGlucHV0R3JvdXAsIHN1Ym1pdEJ0bik7XG5cbiAgdG9kb0Zvcm1XcmFwcGVyLmFwcGVuZChmb3JtKTtcblxuICByZXR1cm4gdG9kb0Zvcm1XcmFwcGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0Zvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9