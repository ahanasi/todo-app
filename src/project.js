import PubSub from "./pubsub";

export default class Project {
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
    PubSub.publish("refreshTasks", todos);
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
