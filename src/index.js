const { default: loadPage } = require("./pageLoad");
import loadNotes from './notes';
import loadProjects from './projects';
import loadToday from './today';
import loadUpcoming from './upcoming';
import {processToDoForm, processProjectForm, processNoteForm} from './forms';
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


//On click, pull up corresponding tab/action for the menu item
const today = document.querySelector('.today');
today.addEventListener('click', function() { 
    loadToday(todaysItems) 
});

const upcoming = document.querySelector('.upcoming');
upcoming.addEventListener('click', function() { 
    loadUpcoming(upcomingItems) 
});

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
document.querySelector('.toDo').addEventListener('click', displayToDo);

document.querySelector('.project').addEventListener('click', displayProject);

document.querySelector('.note').addEventListener('click', displayNote);


//Adds handlers for submission of the forms
document.querySelector('.toDo-Form').addEventListener('submit', processToDoForm);
document.querySelector('.projectForm').addEventListener('submit', processProjectForm);
document.querySelector('.noteForm').addEventListener('submit', processNoteForm);


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
            todaysItems.push(newToDo);

            todaysItems.sort(function (a, b) {
                return b.priority - a.priority;
            });

            loadToday(todaysItems);
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
            upcomingItems.push(newToDo);

            upcomingItems.sort(function (a, b) {
                return b.priority - a.priority;
            });

            loadUpcoming(upcomingItems);
        }
    }

    else if (project == 'notes')
    {
        notesList.unshift(newToDo);

        loadNotes(notesList);
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
    const projectForm = document.querySelector('.project');
    const noteForm = document.querySelector('.note');

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

    document.getElementById('datePicker').valueAsDate = new Date();
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
    const toDoForm = document.querySelector('.toDo2');
    const noteForm = document.querySelector('.note2');

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
    const toDoForm = document.querySelector('.toDo3');
    const projectForm = document.querySelector('.project3');

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
 * item, project, or note, with To-Do being the default tab. The user may
 * choose the tab that their ToDo item resides in (Today, Upcoming, etc). 
 * If the user closes the form, it will be wiped and hidden away.
 * 
 * @returns {void};
 */
function addNew()
{
    const close = document.querySelector('.closeButton');
    close.style.display = "block";
    close.addEventListener('click', function() 
    {
        document.querySelector('.toDo-Form').reset();
        document.getElementById("popupForm").style.display = "none";
    });

    document.getElementById('datePicker').valueAsDate = new Date();
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("formTypes").style.display = "flex";
}

export default placeNewItem;