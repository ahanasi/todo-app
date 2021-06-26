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
  todoDate.innerHTML = `<i class="fab fa-font-awesome-flag"></i> <strong>${format(new Date(todo.dueDate), "MMM dd")}</strong>`;

  todoBox.append(todoTitle, todoDate);
  todoBox.setAttribute("data-index", index);

  todoWrapper.append(todoBox);
};

const todoDisplaysSub = PubSub.subscribe("displayTask", todoDisplay);

export default todoDisplaysSub;
