const hideProjectForm = (formWrapper) => {
  formWrapper.classList.remove("selected");
  formWrapper.classList.add("dismiss");
  setTimeout(() => {
    formWrapper.style.display = "none";
  }, 200);
};

const showProjectForm = (formWrapper) => {
  formWrapper.classList.remove("dismiss");
  formWrapper.classList.add("selected");
  formWrapper.style.display = "block";
  document.getElementById("projectName").focus();
};

export default { hideProjectForm, showProjectForm };
