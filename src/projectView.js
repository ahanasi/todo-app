import PubSub from "./pubsub";

const displayProjects = (allProjects) => {
  const aside = document.querySelector(".sidebar");
  const list = document.createElement("ul");
  list.classList.add("sidebar-nav");

  allProjects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#">${project.getName()}</a>`;
    // if (project.getName() == currentProject.getName()) {
    //   listItem.classList.add("active");
    // }
    list.appendChild(listItem);
  });
  aside.appendChild(list);
};

PubSub.subscribe("refreshProjects", displayProjects);
