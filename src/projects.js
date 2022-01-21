/**
 * This functions makes the projects visible when they are added to the
 * projects list.
 * 
 * @returns {void}
 */
function loadProjects()
{
    const todoContent = document.querySelector('.todoContent');

    const subMenuOptions = document.querySelectorAll('.projectOption');
    subMenuOptions.forEach(option =>
        option.style.display = 'block');
}

/**
 * This function loads and displays the projects of the category specified
 * by "name".
 * 
 * @param {*} projectList, The list of all current user created projects
 * @param {*} name, The name of the project to be loaded
 * 
 * @returns {void} 
 */
function loadProjectToDo(projectList, name)
{

}

export { loadProjects, loadProjectToDo } ;