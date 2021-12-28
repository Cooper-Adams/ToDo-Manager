const { default: loadPage } = require("./pageLoad");
import loadNotes from './notes';
import loadProjects from './projects';
import loadToday from './today';
import loadUpcoming from './upcoming';
import './style.css';

//Loads the "barebones" of the page: the Header, the Menu, and the colors.
loadPage();

//Default page is Today
var currentPage = "Today";

//On click, pull up corresponding tab/action for the menu item
const today = document.querySelector('.today');
today.addEventListener('click', loadToday);

const upcoming = document.querySelector('.upcoming');
upcoming.addEventListener('click', loadUpcoming);

const projects = document.querySelector('.projects');
projects.addEventListener('click', loadProjects);

const notes = document.querySelector('.notes');
notes.addEventListener('click', loadNotes);

const button = document.querySelector('.addButton');
button.addEventListener('click', addNew);

/**
 * Presents a pop up form to the user where they can create a new To-Do
 * item, project, or note. If the user adds a To-Do item, it will be placed
 * within the current section on the page (i.e. Today, Upcoming, or a user
 * created Project section).
 * 
 * @returns {void};
 */
function addNew()
{
    console.log('This is the add button');
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