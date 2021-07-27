import PubSub from './pubsub';

let projects = [];
let currentProject;
let currentIndex = 0;

const getCurrentProject = () => currentProject;

const getProjectCount = () => projects.length;

const importProjects = (newProjects) => {
  projects = newProjects;
};

const addProject = PubSub.subscribe('addProjectToModel', (newProject) => {
  currentProject = newProject;
  projects.push(newProject);
  currentIndex = projects.length - 1;
  PubSub.publish('saveProjectsToStorage', projects);
  PubSub.publish('refreshProjects', [projects, currentProject]);
  PubSub.publish('refreshTasks', currentProject.todos);
});

const removeProject = PubSub.subscribe('removeProjectFromModel', () => {
  if (projects.length > 1) {
    projects.splice(currentIndex, 1);
    PubSub.publish('saveProjectsToStorage', projects);
    PubSub.publish('changeCurrentProject', 0);
  }
});

const addTodo = PubSub.subscribe('addTodoToProject', (todo) => {
  currentProject.addToProject(todo);
  PubSub.publish('saveProjectsToStorage', projects);
  PubSub.publish('refreshTasks', currentProject.todos);
});

const removeTodo = PubSub.subscribe('removeTodoFromProject', (index) => {
  currentProject.removeFromProject(index);
  PubSub.publish('saveProjectsToStorage', projects);
  PubSub.publish('refreshTasks', currentProject.todos);
});

const changeCurrentProject = PubSub.subscribe('changeCurrentProject', (index) => {
  currentProject = projects[index];
  currentIndex = index;
  PubSub.publish('saveIndexToStorage', currentIndex);
  PubSub.publish('refreshProjects', [projects, currentProject]);
  PubSub.publish('refreshTasks', currentProject.todos);
});

const changeTodoStatus = PubSub.subscribe('changeTodoStatus', () => {
  PubSub.publish('saveProjectsToStorage', projects);
});

const editTodo = PubSub.subscribe('editTodo', () => {
  PubSub.publish('saveProjectsToStorage', projects);
  PubSub.publish('refreshTasks', currentProject.todos);
});

export default {
  addProject,
  removeProject,
  changeCurrentProject,
  removeTodo,
  addTodo,
  changeTodoStatus,
  editTodo,
  getCurrentProject,
  importProjects,
  getProjectCount,
};
