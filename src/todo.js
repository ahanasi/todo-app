export default class Todo {
  constructor(title, desc, priority, dueDate, isComplete) {
    this._title = title;
    this._desc = desc;
    this._priority = priority || 0;
    this._dueDate = dueDate || null;
    this._isComplete = isComplete || false;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get desc() {
    return this._desc;
  }

  set desc(newDesc) {
    this._desc = newDesc;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(newDate) {
    this._dueDate = newDate;
  }

  get priority() {
    return this._priority;
  }

  set priority(newPriority) {
    this._priority = newPriority;
  }

  get isComplete() {
    return this._isComplete;
  }

  set isComplete(newComplete) {
    this._isComplete = newComplete;
  }

  modify(newTitle, newDesc, newPriority, newDueDate) {
    this.title = newTitle;
    this.desc = newDesc;
    this.priority = newPriority;
    this.dueDate = newDueDate;
  }
}
