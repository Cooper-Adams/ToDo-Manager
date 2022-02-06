import { todoItemFactory, noteFactory } from './items';
import { placeNewItem, isNameValid } from './index';

/**
 * Processes the data from the ToDo item form. Contains Date comparison
 * and validation, as well as matching the Date with the correct Project
 * tab.
 * 
 * @param {Event} e The ToDo form submission event
 */
function processToDoForm(e)
{
    e.preventDefault();

    //Defines the current date
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
 
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
    let newToDo = todoItemFactory(title, description, date, priority, project);
 
    //Place the to do item in the correct tab
    placeNewItem(newToDo, project);
}


/**
 * Processes the data of the Project form. Takes the title and creates
 * a new option in the ToDo form, then adds a new option to the projects
 * submenu.
 * 
 * @param {Event} e The form submission event
 */
function processProjectForm(e)
{
    e.preventDefault();
 
    //Get the title from form submission
    let title = document.querySelector('.projectForm').elements[1].value;

    if (!isNameValid(title))
    {
        alert("Project names must be different.");
        return;
    }

    //Identify the project options in the ToDo form
    let projects = document.getElementById('projectField');
 
    //Create the new option
    let newOption = document.createElement('option');
    newOption.textContent = title;
    newOption.value = title;

    //Add the new option to the form
    projects.appendChild(newOption);

    //Reset the form and hide it
    document.querySelector('.projectForm').reset();
    document.getElementById("popupForm").style.display = "none";

    //Places the new project in the projects list
    placeNewItem(title, title);
}


/**
 * Processes the data of the Project form. Takes the title and creates
 * a new option in the ToDo form, then adds a new option to the projects
 * submenu.
 * 
 * @param {Event} e The form submission event
 */
function processNoteForm(e)
{
    e.preventDefault();
  
    //Get the note header from form submission
    let header = document.querySelector('.noteForm').elements[1].value;
  
    //Get the note description from form submission
    let description = document.querySelector('.noteForm').elements[2].value;

    //Create new note
    let newNote = noteFactory(header, description);

    //Add the new note to the list
    placeNewItem(newNote, 'notes');
 
    //Reset the form and hide it
    document.querySelector('.noteForm').reset();
    document.getElementById("popupForm").style.display = "none";
}

/**
 * This function updates the display to list all projects and gives
 * the option to delete the project and all of its items.
 * 
 * @param {String array} projectList Contains the names of the projects
 */
function projectDisplay(projectList)
{
    const todoContent = document.querySelector('.todoContent');

    //Removes previous tab's content
    while (todoContent.children.length >= 1)
    {
        todoContent.children[0].remove();
    }

    //If the list is empty
    if (projectList.length == 0)
    {
        const messageDiv = document.createElement('div');

        messageDiv.textContent = "There are no projects! Click the plus symbol in the menu to create a new project.";
        
        todoContent.appendChild(messageDiv);
    }

    else
    {
        const messageDiv = document.createElement('div');

        messageDiv.textContent = "Select a project in the menu to see its tasks!";
        
        todoContent.appendChild(messageDiv);
    }
}

export {processToDoForm, processProjectForm, processNoteForm, projectDisplay};