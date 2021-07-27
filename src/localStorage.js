import PubSub from './pubsub';

const saveProjectsToStorage = (projects) => {
  localStorage.setItem('allProjects', JSON.stringify(projects));
};

const saveIndexToStorage = (index) => {
  localStorage.setItem('currentProjectIndex', index);
};

PubSub.subscribe('saveProjectsToStorage', saveProjectsToStorage);
PubSub.subscribe('saveIndexToStorage', saveIndexToStorage);
