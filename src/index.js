import Todo from "./todo";
import todoForm from "./todoForm";
import Project from "./project";
import ProjectController from "./projectController";
import Sidebar from "./projectView";
import "./style.sass";

const initialLoad = () => {
  const mainContentDiv = document.createElement("main");
  const taskSection = document.createElement("section");
  const header = document.createElement("header");
  const pageTitle = document.createElement("h1");

  mainContentDiv.classList.add("flex");
  taskSection.classList.add("task-section","flex","all-center");

  pageTitle.classList.add("text-center");
  pageTitle.textContent = "Task List";

  header.append(pageTitle);
  taskSection.append(todoForm());

  document.body.appendChild(header);
  mainContentDiv.append(Sidebar());
  mainContentDiv.append(taskSection);
  return mainContentDiv;
};

let testProjects = ["Inbox", "Today", "Important"];
testProjects.forEach((p) => {
  const newProject = new Project(p);
  ProjectController.addProject(newProject);
});

const defaultProject = ProjectController.getProject(0);
const newTodo = new Todo("Title", "Desc", 2, new Date());
defaultProject.addToProject(newTodo);

document.body.appendChild(initialLoad());