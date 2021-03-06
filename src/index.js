import loadPage from './pageLoad';
import loadNotes from './notes';
import loadToDoItems from './toDo';
import {processToDoForm, processProjectForm, processNoteForm, projectDisplay} from './forms';
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

/*0 is the index for today's items, then 1 for upcoming, then 
afterwards the indexes will represent user created projects*/
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
projects.addEventListener('click', () => 
{    
    projectDisplay(projectNames);
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
        //Add to list
        projectList[0].push(newItem);

        //Sort list based on priority
        sortItems(projectList[0]);

        let idValue;

        for (let i = 0; i < projectList[0].length; ++i)
        {
            if (projectList[0][i].title == newItem.title)
            {
                idValue = i;
                break;
            }
        }

        //Update the item's ids and save them locally
        setLocalIDs(projectList[0], 'today');

        //Load the today tab of items
        loadToDoItems(projectList[0]);
    }

    //Identifies if the Item belongs in the upcoming tab
    else if (project == 'upcoming')
    {
        //Add to list
        projectList[1].push(newItem);

        //Sort list based on priority
        sortItems(projectList[1]);

        //Update the item's ids and save them locally
        setLocalIDs(projectList[1], 'upcoming');

        //Load the upcoming tab of items
        loadToDoItems(projectList[1]);
    }

    //Append the note to the front of the notesList, loads the notes page,
    //and saves the note locally
    else if (project == 'notes')
    {
        //Add note to front of list
        notesList.unshift(newItem);

        //Save the note
        localStorage.setItem('noteTitle' + (notesList.length - 1), newItem.header);
        localStorage.setItem('noteDescription' + (notesList.length - 1), newItem.description);

        //Load the notes tab of notes
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
                //Add to the list
                projectList[i + 2].push(newItem);

                //Sort the list based on priority
                sortItems(projectList[i + 2]);

                //Update the item's ids and save them locally
                setLocalIDs(projectList[i + 2], project);

                //Load the user created tabs items
                loadToDoItems(projectList[i + 2]);

                //Give the project option in the menu clickability
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

        let position = projectNames.length - 1;

        //Add the new project to the sub-menu
        const subMenu = document.querySelector('.projectSubMenu')
    
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectContainer');

        const projectDeleteBtn = document.createElement('span');
        projectDeleteBtn.textContent = '-';
        projectDeleteBtn.classList.add('projectDeleteBtn');
        projectDeleteBtn.setAttribute('id', position);
        projectDeleteBtn.addEventListener('click', removeProjects);

        const subMenuOption = document.createElement('span');
        subMenuOption.setAttribute('id', project);
        subMenuOption.textContent = project;
        subMenuOption.addEventListener('click', loadToDoItems(projectList[position + 2]));
    
        projectDiv.appendChild(projectDeleteBtn);
        projectDiv.appendChild(subMenuOption);

        subMenu.appendChild(projectDiv);
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

        for (let i = 0; i < projectNames.length; ++i)
        {
            //Create new list and add it to the project list
            let newList = [];
            projectList.push(newList);

            //Identify the project options in the ToDo form
            let projects = document.getElementById('projectField');
        
            //Create the new option
            let newOption = document.createElement('option');
            newOption.textContent = projectNames[i];
            newOption.value = projectNames[i];

            //Add the new option to the form
            projects.appendChild(newOption);

            //Add the new project to the sub-menu
            const subMenu = document.querySelector('.projectSubMenu')
        
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('projectContainer');

            const projectDeleteBtn = document.createElement('span');
            projectDeleteBtn.textContent = '-';
            projectDeleteBtn.classList.add('projectDeleteBtn');
            projectDeleteBtn.setAttribute('id', i);
            projectDeleteBtn.addEventListener('click', removeProjects); 

            //Create the menu option
            const subMenuOption = document.createElement('span');
            subMenuOption.setAttribute('id', projectNames[i]);
            subMenuOption.textContent = projectNames[i];
        
            projectDiv.appendChild(projectDeleteBtn);
            projectDiv.appendChild(subMenuOption);

            subMenu.appendChild(projectDiv);
        
            //Give functionality to the menu option
            subMenuOption.addEventListener('click', function() {
                loadToDoItems(projectList[i + 2]);
            });
        }
    }

    //Checks if there are user created todos or notes in local storage
    for (let i = 0; i < localStorage.length; ++i)
    {
        if (localStorage.getItem('todayTitle' + i))
        {
            let title = localStorage.getItem('todayTitle' + i);
            let description = localStorage.getItem('todayDescription' + i);
            let date = localStorage.getItem('todayDate' + i).split(",");
            let priority = localStorage.getItem('todayPriority' + i);

            let newToDo = todoItemFactory(title, description, date, priority, 'today');

            todaysItems.push(newToDo);
        }

        if (localStorage.getItem('upcomingTitle' + i))
        {
            let title = localStorage.getItem('upcomingTitle' + i);
            let description = localStorage.getItem('upcomingDescription' + i);
            let date = localStorage.getItem('upcomingDate' + i).split(",");
            let priority = localStorage.getItem('upcomingPriority' + i);

            let newToDo = todoItemFactory(title, description, date, priority, 'upcoming');

            upcomingItems.push(newToDo);
        }

        for (let j = 0; j < projectNames.length; ++j)
        {
            if (localStorage.getItem(projectNames[j] + 'Title' + i))
            {
                let title = localStorage.getItem(projectNames[j] + 'Title' + i);
                let description = localStorage.getItem(projectNames[j] + 'Description' + i);
                let date = localStorage.getItem(projectNames[j] + 'Date' + i).split(",");
                let priority = localStorage.getItem(projectNames[j] + 'Priority' + i);
                let project = localStorage.getItem(projectNames[j] + 'Project' + i);

                let newToDo = todoItemFactory(title, description, date, priority, project);

                projectList[j + 2].push(newToDo);
            }
        }

        if (localStorage.getItem('noteTitle' + i))
        {
            let title = localStorage.getItem('noteTitle' + i);
            let description = localStorage.getItem('noteDescription' + i);

            let newNote = noteFactory(title, description);

            notesList.unshift(newNote);
        }

        for (let i = 0; i < projectList.length; ++i)
        {
            sortItems(projectList[i]);
        }
    }
}


/**
 * This function takes in a list of items and sorts it
 * by the item's priority level.
 * 
 * @param {Object array} itemList 
 */
function sortItems(itemList)
{
    itemList.sort(function (a, b) {
        return b.priority - a.priority;
    });
}

/**
 * This function sets the local storage ids of items in a sorted item list.
 * 
 * @param {Object array} itemList 
 */
function setLocalIDs(itemList, project)
{
    if (itemList.length > 0)
    {
        for (let i = 0; i < itemList.length; ++i)
        {
            //If its a note, fix the ids
            if (project == 'note')
            {
                localStorage.setItem(project + 'Title' + i, itemList[i].header);
                localStorage.setItem(project + 'Description' + i, itemList[i].description);
                continue;
            }

            //If the item is in a user created project, reset the id
            if (project != 'today' && project != 'upcoming')
            {
                localStorage.setItem(project + 'Project' + i, itemList[i].project);
            }

            //Save note data
            localStorage.setItem(project + 'Title' + i, itemList[i].title);
            localStorage.setItem(project + 'Description' + i, itemList[i].description);
            localStorage.setItem(project + 'Date' + i, itemList[i].dueDate);
            localStorage.setItem(project + 'Priority' + i, itemList[i].priority);
        }
    }

    //Remove the now duplicate and unreachable todo
    if (localStorage.getItem(project + 'Title' + itemList.length))
    {
        if (project == 'note')
        {
            localStorage.removeItem(project + 'Title' + itemList.length);
            localStorage.removeItem(project + 'Description' + itemList.length);
            return;
        }

        //Remove item from local storage
        localStorage.removeItem(project + 'Title' + itemList.length);
        localStorage.removeItem(project + 'Description' + itemList.length);
        localStorage.removeItem(project + 'Date' + itemList.length);
        localStorage.removeItem(project + 'Priority' + itemList.length);

        if (project != 'today' && project != 'upcoming')
        {
            localStorage.removeItem(project + 'Project' + itemList.length);
        }
    }
}

function removeProjects(e)
{
    let project = projectNames[e.target.id];

    projectNames.splice(e.target.id, 1);

    e.target.parentNode.parentNode.removeChild(e.target.parentNode);

    let position = 2 + parseInt(e.target.id);

    console.log(position);

    //Remove the Project's items if they exist
    for (let i = 0; i < projectList[position].length; ++i)
    {
        if (localStorage.getItem(project + 'Title' + i))
        {
            localStorage.removeItem(project + 'Title' + i);
            localStorage.removeItem(project + 'Description' + i);
            localStorage.removeItem(project + 'Date' + i);
            localStorage.removeItem(project + 'Priority' + i);
            localStorage.removeItem(project + 'Project' + i);
        }
    }

    //Remove from the project list
    projectList.splice(position, 1);

    console.log(projectList);

    //Identify the project options in the ToDo form
    let projects = document.getElementById('projectField');

    //Remove the obsolete form option
    projects.removeChild(projects.childNodes[position - 2 + 5]);

    //Reset event listeners to keep array indexes inbounds
    const deleteButtons = document.querySelectorAll('.projectDeleteBtn');

    if (deleteButtons !== null)
    {
        for (const button of deleteButtons)
        {
            button.setAttribute('id', position - 2);
            position++;
        }
    }

    if (projectNames.length == 0)
    {
        localStorage.removeItem('projects');
    }

    else
    {
        //Save the updated list of project names
        localStorage.setItem('projects', projectNames);   
    }

    //Load the default tab
    loadToDoItems(todaysItems);
}

export { placeNewItem, isNameValid, setLocalIDs };