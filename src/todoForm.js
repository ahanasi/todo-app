import Todo from "./todo";

const todoForm = () => {
  const todoFormWrapper = document.createElement("section");
  todoFormWrapper.classList.add("box");

  const createRadioElement = (name, value) => {
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("name", "taskPriority");
    radioInput.setAttribute("value", value);

    const radioLabel = document.createElement("label");
    radioLabel.setAttribute("for", name);
    radioLabel.textContent = name;

    const radioField = document.createElement("div");
    radioField.classList.add("radio-field", "flex");

    radioField.append(radioInput, radioLabel);

    return radioField;
  };

  // Create a form dynamically
  const form = document.createElement("form");
  form.setAttribute("name", "newTaskForm");
  form.classList.add("flex-col");

  // Create an input element for task name
  const taskName = document.createElement("input");
  taskName.classList.add("ghost-input");
  taskName.setAttribute("type", "text");
  taskName.setAttribute("name", "taskName");
  taskName.setAttribute("placeholder", "New To-Do");

  // Create an input element for task description
  const taskDesc = document.createElement("textarea");
  taskDesc.classList.add("ghost-input");
  taskDesc.setAttribute("name", "taskDesc");
  taskDesc.setAttribute("placeholder", "Notes");

  // Create an input element for task due date
  const taskDate = document.createElement("input");
  taskDate.classList.add("ghost-input", "input-group");
  taskDate.setAttribute("type", "date");
  taskDate.setAttribute("name", "taskDate");

  //Create label for task date
  const dateLabel = document.createElement("label");
  dateLabel.classList.add("radio-header");
  dateLabel.textContent = "Due Date";

  // Create an input element for task priority
  const radioField1 = createRadioElement("Low", 1);
  const radioField2 = createRadioElement("Medium", 2);
  const radioField3 = createRadioElement("High", 3);

  //Create input groups for radio buttons and date input

  const inputGroup = document.createElement("div");
  const radioWrapper = document.createElement("div");
  const dateWrapper = document.createElement("div");
  const radioHeader = document.createElement("div");

  //Create Submit Button
  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "New Task");
  submitBtn.classList.add("ghost-button", "text-center");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const params = [...formData.values()];
    const todo = new Todo(params[0], params[1], params[2], params[3]);
    console.log(todo);
  });

  dateWrapper.classList.add("input-group");
  radioWrapper.classList.add("input-group");
  radioHeader.textContent = "Priority";
  radioHeader.classList.add("radio-header");

  radioWrapper.append(radioHeader, radioField1, radioField2, radioField3);
  dateWrapper.append(dateLabel, taskDate);
  inputGroup.append(radioWrapper, dateWrapper);
  inputGroup.classList.add("ghost-input", "input-group", "flex");

  form.append(taskName, taskDesc, inputGroup, submitBtn);

  todoFormWrapper.append(form);

  return todoFormWrapper;
};

export default todoForm;