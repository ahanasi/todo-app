import PubSub from "./pubsub";

const displayProjects = ([allProjects, currentProject]) => {

  const aside = document.querySelector(".sidebar");
  while (aside.firstChild) aside.removeChild(aside.firstChild);

  const list = document.createElement("ul");
  list.classList.add("sidebar-nav");

  allProjects.forEach((project,i) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#">${project.getName()}</a>`;
    listItem.setAttribute("data-index", i);
    if (project.getName() == currentProject.getName()) {
      listItem.classList.add("active");
    }
    listItem.addEventListener('click', () => {
      PubSub.publish("changeCurrentProject", i);
    });
    list.appendChild(listItem);
  });
  aside.appendChild(list);
};

const displayTasks = (allTasks) => {
  const todoWrapper = document.querySelector(".task-wrapper");
  while (todoWrapper.firstChild) todoWrapper.removeChild(todoWrapper.firstChild);

  allTasks.forEach((task,i) => {
    PubSub.publish("displayTask", [task,i]);
  });
};

const updateProjectsSub = PubSub.subscribe("refreshProjects", displayProjects);
const updateTasksSub = PubSub.subscribe("refreshTasks", displayTasks);

export default { updateProjectsSub, updateTasksSub };
