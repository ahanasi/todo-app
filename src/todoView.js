import { format } from "date-fns";
import "@fortawesome/fontawesome-free/js/fontawesome";
import { faFontAwesomeFlag } from "@fortawesome/fontawesome-free/js/brands";
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

  todoCheckbox.type = "checkbox";
  todoCheckbox.id = `todo_${index}`;

  todoTitle.setAttribute("for", `todo_${index}`);
  todoTitle.setAttribute("data-content", todo.title);

  todoBox.classList.add("flex-col", "todo-item");
  todoDate.classList.add("todo-date");
  todoHeader.classList.add("flex");
  todoDesc.classList.add("todo-desc");

  todoTitle.textContent = todo.title;
  if (todo.dueDate) {
    const dt = new Date(todo.dueDate);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    todoDate.innerHTML = `<i class="fab fa-font-awesome-flag"></i> <strong>${format(dtDateOnly, "MMM dd")}</strong>`;
  }

  todoDesc.textContent = todo.desc;

  todoHeader.append(todoCheckbox, todoTitle, checkmark, todoDate);
  todoBox.append(todoHeader, todoDesc);

  todoBox.addEventListener("dblclick", () => {
    expandCard(todoBox);
  });

  todoBox.setAttribute("data-index", index);

  todoWrapper.append(todoBox);
};

const expandCard = (card) => {
  card.classList.toggle("todo-expanded");
  card.classList.toggle("box");

  // If card is not expanded after toggle, add 'unexpanded' class
  if (!card.classList.contains("todo-expanded")) {
    card.classList.toggle("todo-unexpanded");
    card.classList.remove("box");
  }

  // Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
  else if (card.classList.contains("todo-expanded") && card.classList.contains("todo-unexpanded")) {
    card.classList.toggle("todo-unexpanded");
  }
};

const todoDisplaysSub = PubSub.subscribe("displayTask", todoDisplay);

export default todoDisplaysSub;
