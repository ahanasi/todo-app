import PubSub from "./pubsub";
import DomStuff from "./domStuff";
import "./localStorage";
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
  const overlay = document.createElement("div");

  header.classList.add("page-header", "flex");
  newProjectBtn.classList.add("new-project-btn", "ghost-button");
  mainContentDiv.classList.add("flex");
  taskSection.classList.add("task-section", "flex-col");
  todoWrapper.classList.add("task-wrapper", "flex-col");
  aside.classList.add("sidebar");
  newProjectWrapper.classList.add("new-project-wrapper", "flex");
  overlay.classList.add("overlay");

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
  taskSection.append(overlay, todoForm(), todoWrapper);

  mainContentDiv.append(aside, taskSection);

  document.body.append(header, mainContentDiv);
})();

const populateStorage = () => {
  // Add default projects and dummy todos here
  let testProjects = ["Inbox", "Today", "Important"];
  testProjects.forEach((p) => {
    const newProject = new Project(p);
    PubSub.publish("addProjectToModel", newProject);
  });

  const fakeDate = new Date();

  const newTodo1 = new Todo("Title", "Desc", 2, fakeDate.toISOString().slice(0, 10));

  PubSub.publish("changeCurrentProject", 0);
  PubSub.publish("addTodoToProject", newTodo1);
};

if (!localStorage.getItem("allProjects")) {
  populateStorage();
} else {
  JSON.parse(localStorage.getItem("allProjects")).forEach((project) => {
    const newProject = new Project(project._name);
    console.log(newProject);
    PubSub.publish("addProjectToModel", newProject);
    if (project._todos) {
      project._todos.forEach((todo, i) => {
        const newTodo = new Todo(todo._title, todo._desc, todo._priority, todo._dueDate, todo._isComplete);
        PubSub.publish("addTodoToProject", newTodo);
      });
    }
  });
}
