import "./projectView";
import TodoForm from "./todoForm";
import Project from "./project";
import ProjectController from "./projectController";
import "./style.sass";

const skeletonLoad = (() => {
  const mainContentDiv = document.createElement("main");
  const taskSection = document.createElement("section");
  const todoWrapper = document.createElement("div");
  const header = document.createElement("header");
  const pageTitle = document.createElement("h1");
  const aside = document.createElement("aside");

  mainContentDiv.classList.add("flex");
  taskSection.classList.add("task-section", "flex-col", "all-center");
  todoWrapper.classList.add("task-wrapper", "flex-col");
  aside.classList.add("sidebar");

  pageTitle.classList.add("text-center");
  pageTitle.textContent = "Task List";

  header.append(pageTitle);
  taskSection.append(TodoForm(), todoWrapper);

  mainContentDiv.append(aside, taskSection);

  document.body.append(header, mainContentDiv);
})();

const defaultProject = new Project("Default");
ProjectController.addProject(defaultProject);

// let testProjects = ["Inbox", "Today", "Important"];
// testProjects.forEach((p) => {
//   const newProject = new Project(p);
//   ProjectController.addProject(newProject);
// });

// const defaultProject = ProjectController.getProject(0);
// const newTodo = new Todo("Title", "Desc", 2, new Date());
// defaultProject.addToProject(newTodo);
