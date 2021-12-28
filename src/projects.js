function loadProjects(projectList)
{
    const todoContent = document.querySelector('.todoContent');

    if (projectList.length == 0)
    {
        todoContent.textContent = "There's nothing here! Click the plus symbol in the menu to add a new project.";
    }
}

export default loadProjects;