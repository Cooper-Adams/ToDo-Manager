/**
 * If possible, displays the contents of the itemList list on the screen.
 * Each toDo item has a div with a checkbox, title, details button, and
 * a button to edit/delete the item. If the list is empty, a default message
 * is displayed telling the user to create an item.
 * 
 * @param {Array} itemList 
 */
function loadToDoItems(itemList)
{
    const todoContent = document.querySelector('.todoContent');

    if (itemList.length == 0)
    {
        //Removes previous tab's content
        while (todoContent.children.length >= 1)
        {
            todoContent.children[0].remove();
        }

        const messageDiv = document.createElement('div');

        messageDiv.textContent = "There's nothing here! Click the plus symbol in the menu to add a new item.";
    
        todoContent.appendChild(messageDiv);
    }

    else
    {
        //Removes previous tab's content
        while (todoContent.children.length >= 1)
        {
            todoContent.children[0].remove();
        }

        for (let i = 0; i < itemList.length; ++i)
        {
            //Create div for toDo item
            const displayItem = document.createElement('div');
            displayItem.classList.add('toDoDiv');


            //Identify priority and give a colored border accordingly
            if (itemList[i].priority == 1)
            {
                displayItem.style.borderLeft = '5px solid green';
            }

            else if (itemList[i].priority == 2)
            {
                displayItem.style.borderLeft = '5px solid yellow';
            }

            else
            {
                displayItem.style.borderLeft = '5px solid red';
            }


            //Add a checkbox that toggles the opacity of the div,
            //gives the "marked off" feeling
            const checkBox = document.createElement('input');
            checkBox.type = "checkBox";
            checkBox.addEventListener('click', function() {
                displayItem.classList.toggle('checkActive');
            });


            //Gets the title for the ToDo item
            const title = document.createElement('span');
            title.textContent = itemList[i].title;


            //Gets the date for the ToDo item
            const date = document.createElement('span');
            date.textContent = itemList[i].dueDate[1] + '/' + itemList[i].dueDate[2] + '/' + itemList[i].dueDate[0];


            //Gets the popup box for the details
            const detailDiv = document.querySelector('.loginPopup');

            //Creates a new box to display the details
            const detailDisplay = document.createElement('div');
            detailDisplay.classList.add('formPopup');

            const detailForm = document.createElement('div');
            detailForm.classList.add('displayForm');

            //Creates the box header and its text/button
            const detailHeader = document.createElement('div');
            detailHeader.classList.add('formHeader');

            const detailHeaderText = document.createElement('h2');
            detailHeaderText.textContent = 'Details';

            const detailCloseButton = document.createElement('button');
            detailCloseButton.textContent = 'X';
            detailCloseButton.addEventListener('click', function()
            {
                detailDisplay.style.display = 'none';
            })


            //Add the header text and the button to the header div
            detailHeader.appendChild(detailHeaderText);
            detailHeader.appendChild(detailCloseButton);


            //Create content div for the display details
            const detailContent = document.createElement('div');
            detailContent.classList.add('displayContent');


            //Gets the data for the current ToDo details
            const detailTitle = document.createElement('h1');
            detailTitle.textContent = 'Title: ' + itemList[i].title;

            const detailDate = document.createElement('span');
            detailDate.textContent = 'Date: ' + itemList[i].dueDate[1] + '/' + itemList[i].dueDate[2] + '/' + itemList[i].dueDate[0];

            const detailPriority = document.createElement('span');
            if (itemList[i].priority == 1) 
            { detailPriority.textContent = 'Priority: Low'; }
            
            else if (itemList[i].priority == 2) 
            { detailPriority.textContent = 'Priority: Medium'; }
            
            else
            { detailPriority.textContent = 'Priority: High'; }

            const detailDescrip = document.createElement('span');
            detailDescrip.textContent = 'Description: ' + itemList[i].description;


            //Adds the ToDo's details to the detail content box
            detailContent.appendChild(detailTitle);
            detailContent.appendChild(detailDate);
            detailContent.appendChild(detailPriority);
            detailContent.appendChild(detailDescrip);


            //Adds the header and content display to the wrapper
            detailForm.appendChild(detailHeader);
            detailForm.appendChild(detailContent);


            //Adds the wrapper to the detail display
            detailDisplay.appendChild(detailForm);


            //Add the box to the parent box
            detailDiv.appendChild(detailDisplay);


            //Button to display ToDo's full details
            const details = document.createElement('button');
            details.textContent = 'Details';
            details.addEventListener('click', function()
            {
                detailDisplay.style.display = 'block';
            });


            //Button that allows the user to edit a ToDo's details
            const edit = document.createElement('button');
            edit.textContent = '✎';
            edit.setAttribute('id', i);
            edit.addEventListener('click', function(e)
            {
                document.getElementById("popupForm").style.display = "block";
                document.getElementById("formTypes").style.display = "none";
                document.querySelector('.closeButton').style.display = "none";

                document.getElementById('titleField').value = itemList[e.target.id].title;

                document.getElementById('datePicker').valueAsDate = new Date(itemList[i].dueDate[0], itemList[i].dueDate[1] - 1, itemList[i].dueDate[2]);
                
                document.getElementById('descripField').value = itemList[e.target.id].description;
                document.getElementById('priorityField').value = itemList[e.target.id].priority;
                document.getElementById('projectField').value = 'today';

                itemList.splice(e.target.id, 1);
            });


            //Button that allows the user to delete a ToDo item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.setAttribute('id', i);
            deleteButton.addEventListener('click', function(e) 
            {
                //Remove item from list
                itemList.splice(e.target.id, 1);

                //If list is empty, remove content from ToDo display
                if (itemList.length == 0)
                {
                    while (todoContent.children.length >= 1)
                    {
                        todoContent.children[0].remove();
                    }
                }

                //Reload the today tab
                loadToDoItems(itemList);
            });


            //Groups the checkbox and title in the left of the item display
            const leftSide = document.createElement('div');
            leftSide.classList.add('leftBox');
            leftSide.appendChild(checkBox);
            leftSide.appendChild(title);


            //Groups the rest of the content in the right of the item display
            const rightSide = document.createElement('div');
            rightSide.classList.add('rightBox');
            rightSide.appendChild(date);
            rightSide.appendChild(details);
            rightSide.appendChild(edit);
            rightSide.appendChild(deleteButton);


            //Add the elements to the toDo div
            displayItem.appendChild(leftSide);
            displayItem.appendChild(rightSide);


            //Add the div to the screen
            todoContent.appendChild(displayItem);
        }
    }
}

export default loadToDoItems;