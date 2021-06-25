import PubSub from "./pubsub";

const projects = [];

const getAllProjects = () => {
  return projects;
};

const addProject = (newProject) => {
  projects.push(newProject);
  PubSub.publish("refreshProjects", projects);
};

const removeProject = (index) => {
  projects.splice(index, 1);
};

const getProject = (index) => {
  return projects[index];
};

export default { getAllProjects, getProject, addProject, removeProject, projects };
