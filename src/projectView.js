import ProjectController from "./projectController";

const projectView = () => {
  const allProjects = ProjectController.getAllProjects();
  const currentProject = ProjectController.getProject(0);

  const aside = document.createElement("aside");
  const list = document.createElement("ul");

  aside.classList.add("sidebar");
  list.classList.add("sidebar-nav");

  allProjects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#">${project.getName()}</a>`;
    if (project.getName() == currentProject.getName()) {
      listItem.classList.add("active");
    }
    list.appendChild(listItem);
  });

  aside.appendChild(list);

  return aside;
};

export default projectView;
