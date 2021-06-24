/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgcHJpb3JpdHksIGR1ZURhdGUsIGlzQ29tcGxldGUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuX2Rlc2MgPSBkZXNjO1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5fZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpIHx8IG51bGw7XG4gICAgdGhpcy5faXNDb21wbGV0ZSA9IGlzQ29tcGxldGUgfHwgZmFsc2U7XG5cbiAgICB0aGlzLmdldFRpdGxlID0gKCkgPT4gdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5zZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gKHRoaXMuX3RpdGxlID0gbmV3VGl0bGUpO1xuXG4gICAgdGhpcy5nZXREZXNjID0gKCkgPT4gdGhpcy5fZGVzYztcbiAgICB0aGlzLnNldERlc2MgPSAobmV3RGVzYykgPT4gKHRoaXMuX2Rlc2MgPSBuZXdEZXNjKTtcblxuICAgIHRoaXMuZ2V0RGF0ZSA9ICgpID0+IHRoaXMuX2R1ZURhdGU7XG4gICAgdGhpcy5zZXREYXRlID0gKG5ld0RhdGUpID0+ICh0aGlzLl9kdWVEYXRlID0gbmV3IERhdGUobmV3RGF0ZSkpO1xuXG4gICAgdGhpcy5nZXRQcmlvcml0eSA9ICgpID0+IHRoaXMuX3ByaW9yaXR5O1xuICAgIHRoaXMuc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+ICh0aGlzLl9wcmlvcml0eSA9IG5ld1ByaW9yaXR5KTtcblxuICAgIHRoaXMuZ2V0Q29tcGxldGUgPSAoKSA9PiB0aGlzLl9pc0NvbXBsZXRlO1xuICAgIHRoaXMuc2V0Q29tcGxldGUgPSAobmV3Q29tcGxldGUpID0+ICh0aGlzLl9pc0NvbXBsZXRlID0gbmV3Q29tcGxldGUpO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCk7XG4gIH1cblxuICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRUaXRsZShuZXdUaXRsZSk7XG4gIH1cblxuICBnZXQgZGVzYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREZXNjKCk7XG4gIH1cblxuICBzZXQgZGVzYyhuZXdEZXNjKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0RGVzYyhuZXdEZXNjKTtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldERhdGUoKTtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKG5ld0RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zZXREYXRlKG5ld0RhdGUpO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFByaW9yaXR5KCk7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRQcmlvcml0eShuZXdQcmlvcml0eSk7XG4gIH1cblxuICBnZXQgaXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wbGV0ZSgpO1xuICB9XG5cbiAgc2V0IGlzQ29tcGxldGUobmV3Q29tcGxldGUpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRDb21wbGV0ZShuZXdDb21wbGV0ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=