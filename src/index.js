const { default: loadPage } = require("./pageLoad");
import loadNotes from './notes';
import loadToDoItems from './toDo';
import {processToDoForm, processProjectForm, processNoteForm} from './forms';
import './style.css';
import { noteFactory, todoItemFactory } from './items';

//By default, the item arrays are empty, but logic should be added to save
//the user's items/projects/notes locally as well as logic to load them
//on page load.
let todaysItems = [];
let upcomingItems = [];
let projectList = [];
let notesList = [];
let projectNames = [];

//0 is the index for today's items, then 1 for upcoming, then afterwards
//the indexes will represent user created projects
projectList.push(todaysItems);
projectList.push(upcomingItems);


//Loads the "barebones" of the page: the Header, the Menu, and the colors.
loadPage();
loadData();


//Loads the Today tab by default
loadToDoItems(projectList[0]);


//On click, pull up corresponding tab/action for the menu item
const today = document.querySelector('.today');
today.addEventListener('click', function() { 
    loadToDoItems(projectList[0])
});

const upcoming = document.querySelector('.upcoming');
upcoming.addEventListener('click', function() { 
    loadToDoItems(projectList[1]) 
});

const notes = document.querySelector('.notes');
notes.addEventListener('click', function() { 
    loadNotes(notesList)
});

const button = document.querySelector('.addButton');
button.addEventListener('click', addNew);

const projects = document.querySelector('.projects');
projects.addEventListener('click', function() {
    
    const todoContent = document.querySelector('.todoContent');

    //Removes previous tab's content
    while (todoContent.children.length >= 1)
    {
        todoContent.children[0].remove();
    }
    
    if (projectNames.length == 0)
    {
        const messageDiv = document.createElement('div');

        messageDiv.textContent = "There are no projects! Click the plus symbol in the menu to create a new project.";
        
        todoContent.appendChild(messageDiv);
    }

    else
    {
        const messageDiv = document.createElement('div');

        messageDiv.textContent = "Choose a project in the menu to view its contents!";
            
        todoContent.appendChild(messageDiv);
    }
});


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
 * Places the new item or note in the correct data section, or creates
 * a new section to store data if a Project is being added.
 * 
 * @param {Object} newItem The newly created ToDo/note/project Item
 * @param {string} project Identifier for which tab the Item belongs in
 */
function placeNewItem(newItem, project)
{
    //Identifies if the Item belongs in the Today tab
    if (project == 'today')
    {
        //If empty, just display it
        if (projectList[0].length == 0)
        {
            projectList[0].push(newItem);
            loadToDoItems(projectList[0]);

            localStorage.setItem('todayTitle0', newItem.title);
            localStorage.setItem('todayDescription0', newItem.description);
            localStorage.setItem('todayDate0', newItem.dueDate);
            localStorage.setItem('todayPriority0', newItem.priority);
        }

        //Else, add it and sort the list by decreasing priority, then display
        else
        {
            projectList[0].push(newItem);

            projectList[0].sort(function (a, b) {
                return b.priority - a.priority;
            });

            loadToDoItems(projectList[0]);
        }
    }

    //Identifies if the Item belongs in the upcoming tab
    else if (project == 'upcoming')
    {
        //If empty, just display it
        if (projectList[1].length == 0)
        {
            projectList[1].push(newItem);
            loadToDoItems(projectList[1]);
        }

        //Else, add it and sort the list by decreasing priority, then display
        else
        {
            projectList[1].push(newItem);

            projectList[1].sort(function (a, b) {
                return b.priority - a.priority;
            });

            loadToDoItems(projectList[1]);
        }
    }

    //Append the note to the front of the noteslist and load the notes page
    else if (project == 'notes')
    {
        notesList.unshift(newItem);

        localStorage.setItem('noteTitle' + (notesList.length - 1));
        localStorage.setItem('noteDescription' + (notesList.length - 1));

        loadNotes(notesList);
    }

    else
    {
        //Checks if the project name exists, and if so adds the new item
        //to that project list
        for (let i = 0; i < projectNames.length; ++i)
        {
            if (project == projectNames[i])
            {
                if (projectList[i + 2].length == 0)
                {
                    projectList[i + 2].push(newItem);

                    loadToDoItems(projectList[i + 2]);
                }

                else
                {
                    projectList[i + 2].push(newItem);

                    projectList[i + 2].sort(function (a, b) {
                        return b.priority - a.priority;
                    });

                    loadToDoItems(projectList[i + 2]);
                }

                const projectOption = document.getElementById(project);
                projectOption.addEventListener('click', function() {
                    loadToDoItems(projectList[i + 2])
                });

                return;
            }
        }

        //If the project doesn't exist, create the array for it and add it
        //to the project list, saving the name as well for data preservation
        let newProject = [];

        projectNames.push(project);

        projectList.push(newProject);

        //Save the updated list of project names
        localStorage.setItem('projects', projectNames);
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

/**
 * Checks if the new project name has already been used by the user, returns
 * false if so, true if not.
 * 
 * @param {string} name The name of the new project to be compared
 * @returns Boolean, true if valid, false otherwise
 */
function isNameValid(name)
{
    for (let i = 0; i < projectNames.length; ++i)
    {
        if (name == projectNames[i])
        {
            return false;
        }
    }

    return true;
}


/**
 * This function retrieves data from the local storage. Data retrieval
 * includes user created to do items, notes, and projects.
 */
function loadData()
{
    //Checks if there are user created project names in storage
    if (localStorage.getItem('projects'))
    {
        //Loads in the user created project names
        projectNames = localStorage.getItem('projects').split(",");
    }

    //Checks if there are user creates todos or notes in storage
    for (let i = 0; i < localStorage.length; ++i)
    {
        if (localStorage.getItem('todayTitle' + i))
        {
            let title = localStorage.getItem('todayTitle' + i);
            let description = localStorage.getItem('todayDescription' + i);
            let date = localStorage.getItem('todayDate' + i).split(",");
            let priority = localStorage.getItem('todayPriority' + i);

            let newToDo = todoItemFactory(title, description, date, priority);

            todaysItems.push(newToDo);
        }

        if (localStorage.getItem('upcomingTitle' + i))
        {
            let title = localStorage.getItem('upcomingTitle' + i);
            let description = localStorage.getItem('upcomingDescription' + i);
            let date = localStorage.getItem('upcomingDate' + i).split(",");
            let priority = localStorage.getItem('upcomingPriority' + i);

            let newToDo = todoItemFactory(title, description, date, priority);

            upcomingItems.push(newToDo);
        }

        if (localStorage.getItem('noteTitle' + i))
        {
            let title = localStorage.getItem('noteTitle' + i);
            let description = localStorage.getItem('noteDescription' + i);

            let newNote = noteFactory(title, description);

            notesList.unshift(newNote);
        }

        if (localStorage.getItem('userTitle' + i))
        {
            console.log("User Item found");
        }
    }
}

export { placeNewItem, isNameValid };