import PubSub from "./pubsub";

let projects = [];
let currentProject;

const getCurrentProject = () => {
  return currentProject;
};

const importProjects = (newProjects) => {
  return (projects = newProjects);
};

const addProject = PubSub.subscribe("addProjectToModel", (newProject) => {
  currentProject = newProject;
  projects.push(newProject);
  PubSub.publish("saveProjectsToStorage", projects);
  PubSub.publish("refreshProjects", [projects, currentProject]);
  PubSub.publish("refreshTasks", currentProject.getTodos());
});

const removeProject = PubSub.subscribe("removeProjectFromModel", (index) => {
  projects.splice(index, 1);
  PubSub.publish("saveProjectsToStorage", projects);
});

const addTodo = PubSub.subscribe("addTodoToProject", (todo) => {
  currentProject.addToProject(todo);
  PubSub.publish("saveProjectsToStorage", projects);
  PubSub.publish("refreshTasks", currentProject.getTodos());
});

const removeTodo = PubSub.subscribe("removeTodoFromProject", (index) => {
  currentProject.removeFromProject(index);
  PubSub.publish("saveProjectsToStorage", projects);
  PubSub.publish("refreshTasks", currentProject.getTodos());
});

const changeCurrentProject = PubSub.subscribe("changeCurrentProject", (index) => {
  currentProject = projects[index];
  PubSub.publish("saveIndexToStorage", index);
  PubSub.publish("refreshProjects", [projects, currentProject]);
  PubSub.publish("refreshTasks", currentProject.getTodos());
});

const changeTodoStatus = PubSub.subscribe("changeTodoStatus", () => {
  
  PubSub.publish("saveProjectsToStorage", projects);
});

export default { addProject, removeProject, changeCurrentProject, removeTodo, addTodo, changeTodoStatus, getCurrentProject, importProjects };
