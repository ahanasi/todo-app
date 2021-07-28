export default class TodoPublic {
  constructor(title, desc, priority, dueDate, isComplete) {
    this.title = title;
    this.desc = desc;
    this.priority = priority || 0;
    this.dueDate = dueDate || null;
    this.isComplete = isComplete || false;
  }
}
