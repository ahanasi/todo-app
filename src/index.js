import PubSub from "./pubsub";
import DomStuff from "./domStuff";
import "./projectView";
import "./todoView";
import ProjectController from "./projectController";
import Todo from "./todo";
import todoForm from "./todoForm";
import projectForm from "./projectForm";
import Project from "./project";
import "./style.sass";

const skeletonLoad = (() => {
  const mainContentDiv = document.createElement("main");
  const taskSection = document.createElement("section");
  const todoWrapper = document.createElement("div");
  const header = document.createElement("header");
  const aside = document.createElement("aside");
  const newProjectWrapper = document.createElement("div");
  const newProjectBtn = document.createElement("button");
  const projectFormWrapper = projectForm();

  header.classList.add("page-header", "flex");
  newProjectBtn.classList.add("new-project-btn", "ghost-button");
  mainContentDiv.classList.add("flex");
  taskSection.classList.add("task-section", "flex-col");
  todoWrapper.classList.add("task-wrapper", "flex-col");
  aside.classList.add("sidebar");
  newProjectWrapper.classList.add("new-project-wrapper", "flex");

  newProjectBtn.textContent = "New Project";
  newProjectBtn.addEventListener("click", (e) => {
    if (projectFormWrapper.classList.contains("dismiss")) {
      DomStuff.showProjectForm(projectFormWrapper);
    } else {
      DomStuff.hideProjectForm(projectFormWrapper);
    }
    e.preventDefault();
  });

  newProjectWrapper.append(newProjectBtn, projectFormWrapper);

  header.append(newProjectWrapper);
  taskSection.append(todoForm(), todoWrapper);

  mainContentDiv.append(aside, taskSection);

  document.body.append(header, mainContentDiv);
})();

const defaultProject = new Project("Default");
PubSub.publish("addProjectToModel", defaultProject);

const secondProject = new Project("Second");
PubSub.publish("addProjectToModel", secondProject);

let testProjects = ["Inbox", "Today", "Important"];
testProjects.forEach((p) => {
  const newProject = new Project(p);
  PubSub.publish("addProjectToModel", newProject);
});

const newTodo1 = new Todo("Title", "Desc", 2, new Date());
const newTodo2 = new Todo("Title", "Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc ", 2, new Date());
const newTodo3 = new Todo("Title", "Desc", 2, new Date());

PubSub.publish("changeCurrentProject", 0);

defaultProject.addToProject(newTodo1);
defaultProject.addToProject(newTodo2);
defaultProject.addToProject(newTodo3);
