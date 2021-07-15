import { format } from "date-fns";
import editForm from "./editTodoForm";
import "@fortawesome/fontawesome-free/js/fontawesome";
import { faFontAwesomeFlag } from "@fortawesome/fontawesome-free/js/brands";
import { faFontAwesomeTrash, faFontAwesomeEdit } from "@fortawesome/fontawesome-free/js/solid";
import PubSub from "./pubsub";

const todoDisplay = ([todo, index]) => {
  const todoWrapper = document.querySelector(".task-wrapper");
  const todoBox = document.createElement("div");
  const todoHeader = document.createElement("header");
  const todoTitle = document.createElement("label");
  const todoDate = document.createElement("p");
  const todoDesc = document.createElement("p");
  const todoCheckbox = document.createElement("input");
  const checkmark = document.createElement("span");
  const todoFooter = document.createElement("footer");
  const deleteBtn = document.createElement("div");
  const editBtn = document.createElement("div");
  const overlay = document.querySelector(".overlay");

  deleteBtn.classList.add("todo-action");
  editBtn.classList.add("todo-action");
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>
  `;
  editBtn.innerHTML = `<i class="fas fa-edit"></i>
  `;

  deleteBtn.addEventListener("click", () => {
    PubSub.publish("removeTodoFromProject", index);
  });

  editBtn.addEventListener("click", () => {
    const editFormWrapper = editForm(todo, index);
    editFormWrapper.addEventListener("click", (e) => e.stopPropagation());
    on(overlay, editFormWrapper);
  });

  overlay.addEventListener("click", () => off(overlay));

  todoCheckbox.type = "checkbox";
  todoCheckbox.id = `todo_${index}`;
  if (todo._isComplete) {
    todoCheckbox.setAttribute("checked", true);
  }
  todoCheckbox.addEventListener("click", () => {
    handleCheck(todoCheckbox, todo);
  });
  debugger;

  todoTitle.setAttribute("for", `todo_${index}`);
  todoTitle.setAttribute("data-content", todo.title);

  todoBox.classList.add("flex-col", "todo-item");
  todoDate.classList.add("todo-date");
  todoHeader.classList.add("flex");
  todoFooter.classList.add("flex");
  todoDesc.classList.add("todo-desc");

  todoTitle.textContent = todo.title;
  if (todo.dueDate) {
    const dt = new Date(todo.dueDate);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    todoDate.innerHTML = `<i class="fab fa-font-awesome-flag"></i> <strong>${format(dtDateOnly, "MMM dd")}</strong>`;
  }

  todoDesc.textContent = todo.desc;

  todoHeader.append(todoCheckbox, todoTitle, checkmark, todoDate);
  todoFooter.append(editBtn, deleteBtn);
  todoBox.append(todoHeader, todoDesc, todoFooter);
  todoBox.addEventListener("dblclick", () => {
    expandCard(todoBox);
  });
  todoBox.setAttribute("data-index", index);

  todoWrapper.append(todoBox);
};

const expandCard = (card) => {
  card.classList.toggle("todo-expanded");
  card.classList.toggle("box");

  if (!card.classList.contains("todo-expanded")) {
    card.classList.toggle("todo-unexpanded");
    card.classList.remove("box");
  } else if (card.classList.contains("todo-expanded") && card.classList.contains("todo-unexpanded")) {
    card.classList.toggle("todo-unexpanded");
  }
};

const on = (overlay, editFormWrapper) => {
  overlay.append(editFormWrapper);
  overlay.style.display = "block";
};

const off = (overlay) => {
  removeChildNodes(overlay);
  overlay.style.display = "none";
};

const removeChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const handleCheck = (checkbox, todo) => {
  todo.setComplete(checkbox.checked);
  PubSub.publish("changeTodoStatus");
};

const todoDisplaysSub = PubSub.subscribe("displayTask", todoDisplay);

export default todoDisplaysSub;
