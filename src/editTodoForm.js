import PubSub from './pubsub';
import projectController from './projectController';

const removeChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const isSelected = () => {
  const rbs = document.querySelectorAll('input[name="editTaskPriority"]');
  for (let i = 0; i < rbs.length; i++) {
    if (rbs[i].checked) {
      return true;
    }
  }
  return false;
};

const editForm = (todo, index) => {
  const overlay = document.querySelector('.overlay');
  const todoFormWrapper = document.createElement('section');
  todoFormWrapper.classList.add('box', 'edit-form');

  const createRadioElement = (name, value) => {
    const radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'editTaskPriority');
    radioInput.setAttribute('value', value);

    if (todo.priority && todo.priority === radioInput.value) {
      radioInput.setAttribute('checked', true);
    }

    const radioLabel = document.createElement('label');
    radioLabel.setAttribute('for', name);
    radioLabel.textContent = name;

    const radioField = document.createElement('div');
    radioField.classList.add('radio-field', 'flex');

    radioField.append(radioInput, radioLabel);

    return radioField;
  };

  // Create a form dynamically
  const form = document.createElement('form');
  form.setAttribute('name', 'editTaskForm');
  form.setAttribute('autocomplete', 'off');
  form.classList.add('flex-col');

  // Create label for task name
  const taskNameLabel = document.createElement('label');
  taskNameLabel.setAttribute('for', 'taskName');
  taskNameLabel.textContent = 'Task Name';
  taskNameLabel.classList.add('visually-hidden');

  // Create an input element for task name
  const taskName = document.createElement('input');
  taskName.classList.add('ghost-input');
  taskName.setAttribute('type', 'text');
  taskName.setAttribute('name', 'taskName');
  taskName.setAttribute('placeholder', 'Edit To-Do');
  taskName.setAttribute('value', todo.title);

  // Create label for task description
  const taskDescLabel = document.createElement('label');
  taskDescLabel.setAttribute('for', 'taskDesc');
  taskDescLabel.textContent = 'Task Description';
  taskDescLabel.classList.add('visually-hidden');

  // Create an input element for task description
  const taskDesc = document.createElement('textarea');
  taskDesc.classList.add('ghost-input');
  taskDesc.setAttribute('name', 'taskDesc');
  taskDesc.setAttribute('placeholder', 'Notes');
  taskDesc.value = todo.desc;

  // Create an input element for task due date
  const taskDate = document.createElement('input');
  taskDate.classList.add('ghost-input', 'input-group');
  taskDate.setAttribute('type', 'date');
  taskDate.setAttribute('name', 'taskDate');
  taskDate.value = todo.dueDate;

  // Create label for task date
  const dateLabel = document.createElement('label');
  dateLabel.classList.add('radio-header');
  dateLabel.textContent = 'Due Date';

  // Create an input element for task priority
  const radioField1 = createRadioElement('Low', 1);
  const radioField2 = createRadioElement('Medium', 2);
  const radioField3 = createRadioElement('High', 3);

  // Create input groups for radio buttons and date input

  const inputGroup = document.createElement('div');
  const radioWrapper = document.createElement('div');
  const dateWrapper = document.createElement('div');
  const radioHeader = document.createElement('label');
  radioHeader.setAttribute('for', 'editTaskPriority');

  // Create Submit Button
  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Edit Task');
  submitBtn.classList.add('ghost-button', 'text-center');
  submitBtn.addEventListener('click', (e) => {
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    e.preventDefault();
    const formData = new FormData(form);
    const params = [...formData.values()];
    if (!isSelected()) {
      params.splice(2, 0, 0);
    }
    const allTasks = projectController.getCurrentProject().todos;
    allTasks[index].modify(params[0], params[1], params[2], params[3]);
    PubSub.publish('editTodo');
    removeChildNodes(overlay);
    overlay.style.display = 'none';
    form.reset();
  });

  dateWrapper.classList.add('input-group');
  radioWrapper.classList.add('input-group');
  radioHeader.textContent = 'Priority';
  radioHeader.classList.add('radio-header');

  radioWrapper.append(radioHeader, radioField1, radioField2, radioField3);
  dateWrapper.append(dateLabel, taskDate);
  inputGroup.append(radioWrapper, dateWrapper);
  inputGroup.classList.add('form-control', 'ghost-input', 'input-group');

  form.append(taskNameLabel, taskName, taskDescLabel, taskDesc, inputGroup, submitBtn);

  todoFormWrapper.append(form);

  return todoFormWrapper;
};

export default editForm;
