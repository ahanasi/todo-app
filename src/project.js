import PubSub from './pubsub';

export default class Project {
  constructor(name, todos = []) {
    this._name = name;
    this._todos = todos;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get todos() {
    return this._todos;
  }

  set todos(newTodos) {
    this._todos = newTodos;
  }

  addToProject(newTodo) {
    const { todos } = this;
    todos.push(newTodo);
    PubSub.publish('refreshTasks', todos);
  }

  editTodo(index) {
    const { todos } = this;
    const todo = todos[index];
    todo.modify();
  }

  removeFromProject(index) {
    const i = index;
    const { todos } = this;

    todos.splice(i, 1);
  }

  changeName(newName) {
    const projectName = this.name;
    projectName.name(newName);
  }
}
