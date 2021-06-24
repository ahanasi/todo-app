import Project from "./project";

const projects = [];

const getAllProjects = () => {
  return projects;
};

const addProject = (newProject) => {
  projects.push(newProject);
};

const removeProject = (index) => {
  projects.splice(index, 1);
};

const getProject = (index) => {
  return projects[index];
};

export default { getAllProjects, getProject, addProject };
