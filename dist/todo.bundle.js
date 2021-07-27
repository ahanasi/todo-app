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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRvZG8uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIHByaW9yaXR5LCBkdWVEYXRlLCBpc0NvbXBsZXRlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLl9kZXNjID0gZGVzYztcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG4gICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGUgfHwgbnVsbDtcbiAgICB0aGlzLl9pc0NvbXBsZXRlID0gaXNDb21wbGV0ZSB8fCBmYWxzZTtcblxuICAgIHRoaXMuZ2V0VGl0bGUgPSAoKSA9PiB0aGlzLl90aXRsZTtcbiAgICB0aGlzLnNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiAodGhpcy5fdGl0bGUgPSBuZXdUaXRsZSk7XG5cbiAgICB0aGlzLmdldERlc2MgPSAoKSA9PiB0aGlzLl9kZXNjO1xuICAgIHRoaXMuc2V0RGVzYyA9IChuZXdEZXNjKSA9PiAodGhpcy5fZGVzYyA9IG5ld0Rlc2MpO1xuXG4gICAgdGhpcy5nZXREYXRlID0gKCkgPT4gdGhpcy5fZHVlRGF0ZTtcbiAgICB0aGlzLnNldERhdGUgPSAobmV3RGF0ZSkgPT4gKHRoaXMuX2R1ZURhdGUgPSBuZXdEYXRlKTtcblxuICAgIHRoaXMuZ2V0UHJpb3JpdHkgPSAoKSA9PiB0aGlzLl9wcmlvcml0eTtcbiAgICB0aGlzLnNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiAodGhpcy5fcHJpb3JpdHkgPSBuZXdQcmlvcml0eSk7XG5cbiAgICB0aGlzLmdldENvbXBsZXRlID0gKCkgPT4gdGhpcy5faXNDb21wbGV0ZTtcbiAgICB0aGlzLnNldENvbXBsZXRlID0gKG5ld0NvbXBsZXRlKSA9PiAodGhpcy5faXNDb21wbGV0ZSA9IG5ld0NvbXBsZXRlKTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0VGl0bGUobmV3VGl0bGUpO1xuICB9XG5cbiAgZ2V0IGRlc2MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGVzYygpO1xuICB9XG5cbiAgc2V0IGRlc2MobmV3RGVzYykge1xuICAgIHJldHVybiB0aGlzLnNldERlc2MobmV3RGVzYyk7XG4gIH1cblxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRlKCk7XG4gIH1cblxuICBzZXQgZHVlRGF0ZShuZXdEYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0RGF0ZShuZXdEYXRlKTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcmlvcml0eSgpO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpO1xuICB9XG5cbiAgZ2V0IGlzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcGxldGUoKTtcbiAgfVxuXG4gIHNldCBpc0NvbXBsZXRlKG5ld0NvbXBsZXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29tcGxldGUobmV3Q29tcGxldGUpO1xuICB9XG5cbiAgbW9kaWZ5KG5ld1RpdGxlLG5ld0Rlc2MsbmV3UHJpb3JpdHksbmV3RHVlRGF0ZSl7XG4gICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgIHRoaXMuZGVzYyA9IG5ld0Rlc2M7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=