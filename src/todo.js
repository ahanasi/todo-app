export default class Todo {
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
