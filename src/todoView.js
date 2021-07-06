import { format } from "date-fns";
import "@fortawesome/fontawesome-free/js/fontawesome";
import { faFontAwesomeFlag } from "@fortawesome/fontawesome-free/js/brands";
import PubSub from "./pubsub";

const todoDisplay = ([todo, index]) => {
  const todoWrapper = document.querySelector(".task-wrapper");
  const todoBox = document.createElement("div");
  todoBox.classList.add("box", "flex", "todo-item");

  const todoTitle = document.createElement("p");
  const todoDate = document.createElement("p");

  todoTitle.textContent = todo.title;
  if (todo.dueDate) {
    const dt = new Date(todo.dueDate);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    todoDate.innerHTML = `<i class="fab fa-font-awesome-flag"></i> <strong>${format(dtDateOnly, "MMM dd")}</strong>`;
  }
  todoBox.append(todoTitle, todoDate);
  todoBox.setAttribute("data-index", index);

  todoWrapper.append(todoBox);
};

const todoDisplaysSub = PubSub.subscribe("displayTask", todoDisplay);

export default todoDisplaysSub;
