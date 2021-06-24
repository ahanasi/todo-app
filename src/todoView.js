import Todo from "./todo";
import { format } from "date-fns";

const todoDisplay = (todo) => {
  const todoBox = document.createElement("div");
  todoBox.classList.add("box", "flex", "todo-item");

  const todoTitle = document.createElement("p");
  const todoDate = document.createElement("p");

  todoTitle.textContent = todo.title;
  todoDate.textContent = format(new Date(), "MMM dd");

  todoBox.append(todoTitle, todoDate);

  return todoBox;
};

export default todoDisplay;
