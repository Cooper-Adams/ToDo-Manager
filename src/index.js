const { default: loadPage } = require("./pageLoad");
import loadNotes from './notes';
import loadProjects from './projects';
import loadToday from './today';
import loadUpcoming from './upcoming';
import { todoItemFactory, noteFactory, projectFactory } from './items';
import './style.css';

//By default, the item arrays are empty, but logic should be added to save
//the user's items/projects/notes locally as well as logic to load them
//on page load.
let todaysItems = [];
let upcomingItems = [];
let projectList = [];
let notesList = [];


//Loads the "barebones" of the page: the Header, the Menu, and the colors.
loadPage();


//Loads the Today tab by default
loadToday(todaysItems);


//Default page is Today
var currentPage = "Today";
var currentTab = "ToDo";


//On click, pull up corresponding tab/action for the menu item
const today = document.querySelector('.today');
today.addEventListener('click', function() { loadToday(todaysItems) });

const upcoming = document.querySelector('.upcoming');
upcoming.addEventListener('click', function() { loadUpcoming(upcomingItems) });

const projects = document.querySelector('.projects');
projects.addEventListener('click', function() { loadProjects(projectList) });

const notes = document.querySelector('.notes');
notes.addEventListener('click', function() { loadNotes(notesList) });

const button = document.querySelector('.addButton');
button.addEventListener('click', addNew);


//Adds handlers for the form buttons, so the user can switch types
//of forms
let toDoForm = document.querySelector('.toDo');
toDoForm.addEventListener('click', displayToDo);

let projectForm = document.querySelector('.project');
projectForm.addEventListener('click', displayProject);

let noteForm = document.querySelector('.note');
noteForm.addEventListener('click', displayNote);


/**
 * This function displays the To-Do item form. It is closable by clicking
 * the X in the top right of the form. The user must enter a title, date,
 * and a priority, with the description of the item being optional.
 * 
 * @returns {void}
 */
function displayToDo() 
{
    //Reinstate the X button in the top right of the form
    const close = document.querySelector('.closeButton');
    close.addEventListener('click', function() 
    {
        document.querySelector('.toDo-Form').reset();
        document.getElementById("popupForm").style.display = "none";
    });

    //Update current tab
    currentTab = 'ToDo';

    //Update the other two buttons to the current form's buttons
    projectForm = document.querySelector('.project');
    noteForm = document.querySelector('.note');

    //Update button event listeners
    projectForm.addEventListener('click', displayProject);
    noteForm.addEventListener('click', displayNote);

    //Reset all forms
    document.querySelector('.toDo-Form').reset();
    document.querySelector('.projectForm').reset();
    document.querySelector('.noteForm').reset();

    //Display the correct form
    document.querySelector('.toDo-Form').style.display = "flex";
    document.querySelector('.projectForm').style.display = "none";
    document.querySelector('.noteForm').style.display = "none";
}

/**
 * This function displays the project form. The user must enter a title
 * for the Project. The form can be closed by clicking the X button in
 * the top right of the form.
 * 
 * @returns {void}
 */
function displayProject() 
{
    //Reinstate the X button in the top right of the form
    const close = document.querySelector('.closeButton2');
    close.addEventListener('click', function() 
    {
        document.querySelector('.projectForm').reset();
        document.getElementById("popupForm").style.display = "none";
    });

    //Update the current tab
    currentTab = 'Project';

    //Update the other form buttons to the current form's buttons
    toDoForm = document.querySelector('.toDo2');
    noteForm = document.querySelector('.note2');

    //Update button event listeners
    toDoForm.addEventListener('click', displayToDo);
    noteForm.addEventListener('click', displayNote);

    //Reset all forms
    document.querySelector('.toDo-Form').reset();
    document.querySelector('.projectForm').reset();
    document.querySelector('.noteForm').reset();

    //Display the correct form
    document.querySelector('.toDo-Form').style.display = "none";
    document.querySelector('.projectForm').style.display = "flex";
    document.querySelector('.noteForm').style.display = "none";
}


/**
 * This function displays the Note form. The user can enter a title and a 
 * description for their note, but neither are required. The form can be
 * closed by clicking the X button in the top right of the form.
 * 
 * @returns {void}
 */
function displayNote() 
{
    //Reinstate the X button in the top right of the form
    const close = document.querySelector('.closeButton3');
    close.addEventListener('click', function() 
    {
        document.querySelector('.noteForm').reset();
        document.getElementById("popupForm").style.display = "none";
    });

    //Update the current tab
    currentTab = 'Note';

    //Update the form buttons to the current form's buttons
    toDoForm = document.querySelector('.toDo3');
    projectForm = document.querySelector('.project3');

    //Update button event listeners
    toDoForm.addEventListener('click', displayToDo);
    projectForm.addEventListener('click', displayProject);

    //Reset all forms
    document.querySelector('.toDo-Form').reset();
    document.querySelector('.projectForm').reset();
    document.querySelector('.noteForm').reset();

    //Display the correct form
    document.querySelector('.toDo-Form').style.display = "none";
    document.querySelector('.projectForm').style.display = "none";
    document.querySelector('.noteForm').style.display = "flex";
}


/**
 * Presents a pop up form to the user where they can create a new To-Do
 * item, project, or note, with To-Do being the default tab. If the user
 * adds a To-Do item, it will be placed within the current tab on the 
 * page (i.e. Today, Upcoming, or a user created Project section). 
 * If the user closes the form, it will be wiped and hidden away.
 * 
 * @returns {void};
 */
function addNew()
{
    const close = document.querySelector('.closeButton');
    close.addEventListener('click', function() 
    {
        document.querySelector('.toDo-Form').reset();
        document.getElementById("popupForm").style.display = "none";
    });

    document.getElementById("popupForm").style.display = "block";
}

/**
 * Takes in a string and updates the current page with it.
 * 
 * @param {string}} newPage The now current page
 */
function updatePage(newPage)
{
    currentPage = newPage;
}

export default updatePage;