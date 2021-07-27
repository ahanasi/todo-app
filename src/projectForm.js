import Project from './project';
import DomStuff from './domStuff';
import PubSub from './pubsub';

const projectForm = () => {
  const projectFormWrapper = document.createElement('section');
  projectFormWrapper.classList.add('project-form-wrapper', 'dismiss');

  // Create a form dynamically
  const form = document.createElement('form');
  form.setAttribute('name', 'newProjectForm');
  form.setAttribute('autocomplete', 'off');
  form.classList.add('flex-col');

  // Create an input element for task name
  const projectName = document.createElement('input');
  projectName.classList.add('ghost-input');
  projectName.setAttribute('type', 'text');
  projectName.setAttribute('name', 'projectName');
  projectName.setAttribute('id', 'projectName');
  projectName.setAttribute('placeholder', 'Project Name');
  projectName.required = true;

  // Create Submit Button
  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Add Project');
  submitBtn.classList.add('visually-hidden');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const params = [...formData.values()];

    if (params[0] !== '') {
      const project = new Project(params[0]);
      PubSub.publish('addProjectToModel', project);
      form.reset();

      DomStuff.hideProjectForm(projectFormWrapper);
    }
  });

  form.append(projectName, submitBtn);

  projectFormWrapper.append(form);

  return projectFormWrapper;
};

export default projectForm;
