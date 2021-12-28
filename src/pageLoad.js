/**
 * Creates the display elements of the page, including the Header, the Menu,
 * and the To-Do/Notes section.
 */
function loadPage()
{
    //Identify the page body
    const body = document.querySelector('.content');

    //Create the header
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = "To-Do Manager";

    //Create the content div
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    //Create the menu div
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //Unorder list for menu items
    const ul = document.createElement('ul');
    
    //Creates the "options" to go within the menus
    const today = document.createElement('span');
    today.classList.add('today');
    today.textContent = "Today";
    ul.appendChild(today);

    const upcoming = document.createElement('span');
    upcoming.classList.add('upcoming');
    upcoming.textContent = "Upcoming";
    ul.appendChild(upcoming);

    const projects = document.createElement('span');
    projects.classList.add('projects');
    projects.textContent = "Projects";
    ul.appendChild(projects);

    const notes = document.createElement('span');
    notes.classList.add('notes');
    notes.textContent = "Notes";
    ul.appendChild(notes);

    const add = document.createElement('button');
    add.classList.add('addButton');
    add.textContent = "+";
    ul.appendChild(add);

    //Create the todo items/notes div
    const todoContent = document.createElement('div');
    todoContent.classList.add('todoContent');

    //Adds the "options to the menu"
    menu.appendChild(ul);

    //Add the menu and todo div to the content div
    mainContent.appendChild(menu);
    mainContent.appendChild(todoContent);

    //Add the header and the content div to the page
    body.appendChild(header);
    body.appendChild(mainContent);
}

export default loadPage;