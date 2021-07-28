import PubSub from './pubsub';
import DomStuff from './domStuff';
import './localStorage';
import './projectView';
import './todoView';
import './projectController';
import Todo from './todo';
import TodoPublic from './todoPublic';
import todoForm from './todoForm';
import projectForm from './projectForm';
import Project from './project';
import ProjectPublic from './projectPublic';
import './style.sass';

(() => {
  const mainContentDiv = document.createElement('main');
  const taskSection = document.createElement('section');
  const todoWrapper = document.createElement('div');
  const header = document.createElement('header');
  const aside = document.createElement('aside');
  const newProjectWrapper = document.createElement('div');
  const newProjectBtn = document.createElement('button');
  const projectFormWrapper = projectForm();
  const deleteProjectWrapper = document.createElement('div');
  const overlay = document.createElement('div');

  header.classList.add('page-header', 'flex');
  newProjectBtn.classList.add('new-project-btn', 'ghost-button');
  mainContentDiv.classList.add('flex');
  taskSection.classList.add('task-section', 'flex-col');
  todoWrapper.classList.add('task-wrapper', 'flex-col');
  aside.classList.add('sidebar');
  newProjectWrapper.classList.add('new-project-wrapper', 'flex');
  overlay.classList.add('overlay');
  deleteProjectWrapper.classList.add('del-project-wrapper', 'flex');

  newProjectBtn.textContent = 'New Project';
  newProjectBtn.addEventListener('click', (e) => {
    if (projectFormWrapper.classList.contains('dismiss')) {
      DomStuff.showProjectForm(projectFormWrapper);
    } else {
      DomStuff.hideProjectForm(projectFormWrapper);
    }
    e.preventDefault();
  });

  deleteProjectWrapper.innerHTML = '<a href="#">Delete Project?</a>';
  deleteProjectWrapper.addEventListener('click', () => {
    PubSub.publish('removeProjectFromModel');
  });

  newProjectWrapper.append(newProjectBtn, projectFormWrapper);
  header.append(newProjectWrapper, deleteProjectWrapper);
  taskSection.append(overlay, todoForm(), todoWrapper);

  mainContentDiv.append(aside, taskSection);

  document.body.append(header, mainContentDiv);
})();

const populateStorage = () => {
  // Add default projects and dummy todos here
  const testProjects = ['Inbox', 'Today', 'Important'];
  testProjects.forEach((p) => {
    const newProject = new Project(p);
    PubSub.publish('addProjectToModel', newProject);
  });

  const fakeDate = new Date();

  const newTodo1 = new Todo('Title', 'Desc', 2, fakeDate.toISOString().slice(0, 10));

  PubSub.publish('changeCurrentProject', 0);
  PubSub.publish('addTodoToProject', newTodo1);
};

if (!localStorage.getItem('allProjects')) {
  populateStorage();
} else {
  JSON.parse(localStorage.getItem('allProjects')).forEach((project) => {
    const newProject = new Project(project.name);
    PubSub.publish('addProjectToModel', newProject);
    if (project.todos) {
      project.todos.forEach((todo) => {
        const newTodo = new Todo(
          todo.title,
          todo.desc,
          todo.priority,
          todo.dueDate,
          todo.isComplete
        );
        PubSub.publish('addTodoToProject', newTodo);
      });
    }
  });
}
