import PubSub from "./pubsub";

const projects = [];
let currentProject;

const getAllProjects = PubSub.subscribe("getAllProjects", () => {
  return projects;
});

const getCurrentProject = () => {
  return currentProject;
};

const addProject = PubSub.subscribe("addProjectToModel", (newProject) => {
  currentProject = newProject;
  projects.push(newProject);
  PubSub.publish("refreshProjects", [projects, currentProject]);
  PubSub.publish("refreshTasks", currentProject.getTodos());
});

const removeProject = PubSub.subscribe("removeProjectFromModel", (index) => {
  projects.splice(index, 1);
});

const removeTodo = PubSub.subscribe("removeTodoFromProject", (index) => {
  currentProject.removeFromProject(index);
  PubSub.publish("refreshTasks", currentProject.getTodos());
});

const changeCurrentProject = PubSub.subscribe("changeCurrentProject", (index) => {
  currentProject = projects[index];
  PubSub.publish("refreshProjects", [projects, currentProject]);
  PubSub.publish("refreshTasks", currentProject.getTodos());
});

export default { addProject, removeProject, getAllProjects, changeCurrentProject, removeTodo, getCurrentProject };
