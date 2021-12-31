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


//Defines the current date
var currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

//On click, pull up corresponding tab/action for the menu item
const today = document.querySelector('.today');
today.addEventListener('click', function() { loadToday(todaysItems) });

const upcoming = document.querySelector('.upcoming');
upcoming.addEventListener('click', function() { loadUpcoming(upcomingItems) });

const projects = document.querySelector('.projects');
projects.addEventListener('click', function() { 
    loadProjects(projectList) 
});

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


//Adds handlers for submission of the forms
var formToDo = document.querySelector('.toDo-Form');
var formProject = document.querySelector('.projectForm');
var formNote = document.querySelector('.noteForm');

formToDo.addEventListener('submit', processToDoForm);
formProject.addEventListener('submit', processProjectForm);
/*formNote.addEventListener('submit', processNoteForm);*/

/**
 * 
 * @param {event} e The form submission
 */
function processToDoForm(e)
{
    e.preventDefault();

    //Get the title from the form
    let title = document.querySelector('.toDo-Form').elements[1].value;

    //Get the date from the form
    let date = document.querySelector('.toDo-Form').elements[2].value.split('-');

    //Convert the date to a Date object
    let d = new Date(date[0], date[1] - 1, date[2]);

    //Check if submitted date is prior to today's date
    if (d.getTime() < currentDate.getTime())
    {
        //Do not accept if so
        alert("Please enter a current or upcoming date.");
        return;
    }

    //Get the description from the form
    let description = document.querySelector('.toDo-Form').elements[3].value;
    
    //Get the priority from the form
    let priority = document.querySelector('.toDo-Form').elements[4].value;
    
    //Get the project from the form
    let project = document.querySelector('.toDo-Form').elements[5].value;

    //Check if the date entered is for today if the selected tab is today
    if (project == 'today')
    {
        if (d.getTime() !== currentDate.getTime())
        {
            //Don't accept if not
            alert("For a To-Do to be in the today tab, it must have today's date.")
            return;
        }
    }

    //Clear the form of data and hide it
    document.querySelector('.toDo-Form').reset();
    document.getElementById("popupForm").style.display = "none";

    //Create a new ToDo item
    let newToDo = todoItemFactory(title, description, date, priority);

    //Place the to do item in the correct tab
    placeNewItem(newToDo, project);
}


function processProjectForm(e)
{
    e.preventDefault();

    //Get the title from form submission
    let title = document.querySelector('.projectForm').elements[1].value;

    //Identify the project options in the ToDo form
    let projects = document.getElementById('projectOptions');

    //Create the new option
    let newOption = document.createElement('option');
    newOption.textContent = title;
    newOption.value = title;

    //Add the new option to the form
    projects.appendChild(newOption);

    //Add the new project to the sub-menu
    const subMenu = document.querySelector('.projectSubMenu')

    const subMenuOption = document.createElement('li');
    subMenuOption.classList.add('projectOption');
    subMenuOption.textContent = title;

    subMenu.appendChild(subMenuOption);

    //Reset the form and hide it
    document.querySelector('.projectForm').reset();
    document.getElementById("popupForm").style.display = "none";
}


/**
 * 
 * @param {Object} newToDo The newly created ToDo Item
 * @param {string} project Identifier for which tab the Item belongs in
 */
function placeNewItem(newToDo, project)
{
    //Identifies if the Item belongs in the Today tab
    if (project == 'today')
    {
        //If empty, just display it
        if (todaysItems.length == 0)
        {
            todaysItems.push(newToDo);
            loadToday(todaysItems);
        }

        //Else, add it and sort the list by decreasing priority, then display
        else
        {

        }
    }

    //Identifies if the Item belongs in the upcoming tab
    else if (project == 'upcoming')
    {
        //If empty, just display it
        if (upcomingItems.length == 0)
        {
            upcomingItems.push(newToDo);
            loadUpcoming(upcomingItems);
        }

        //Else, add it and sort the list by decreasing priority, then display
        else
        {

        }
    }

    //If not today or upcoming, place in the appropriate user created project tab
    else
    {
        //Determine what the project is


        //If empty, just display it
        if (something.length == 0)
        {
            something.push(newToDo);
            loadSomething(something);
        }

        //Else, add it and sort the list by decreasing priority, then display
        else
        {

        }
    }
}


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