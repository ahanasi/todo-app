import ProjectPublic from './projectPublic';
import TodoPublic from './todoPublic';
import PubSub from './pubsub';

const saveProjectsToStorage = (projects) => {
  const publicProjects = projects.map(
    (project) =>
      new ProjectPublic(
        project.name,
        project.todos.map(
          (todo) =>
            new TodoPublic(todo.title, todo.desc, todo.priority, todo.dueDate, todo.isComplete)
        )
      )
  );
  localStorage.setItem('allProjects', JSON.stringify(publicProjects));
};

const saveIndexToStorage = (index) => {
  localStorage.setItem('currentProjectIndex', index);
};

PubSub.subscribe('saveProjectsToStorage', saveProjectsToStorage);
PubSub.subscribe('saveIndexToStorage', saveIndexToStorage);
