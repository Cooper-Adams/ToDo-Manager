const { default: loadPage } = require("./pageLoad");
import loadNotes from './notes';
import loadProjects from './projects';
import loadToday from './today';
import loadUpcoming from './upcoming';
import { todoItemFactory, noteFactory, projectFactory } from './items';
import './style.css';

//Loads the "barebones" of the page: the Header, the Menu, and the colors.
loadPage();

//Default page is Today
var currentPage = "Today";

let todaysItems = [];
let upcomingItems = [];
let projectList = [];
let notesList = [];

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

/**
 * Presents a pop up form to the user where they can create a new To-Do
 * item, project, or note. If the user adds a To-Do item, it will be placed
 * within the current section on the page (i.e. Today, Upcoming, or a user
 * created Project section). If the user closes the form, it will be wiped
 * and hidden away.
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