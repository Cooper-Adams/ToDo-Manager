/**
 * If possible, displays the contents of the todaysItems list on the screen.
 * Each toDo item has a div with a checkbox, title, details button, and
 * a button to edit/delete the item. If the list is empty, a default message
 * is displayed telling the user to create an item.
 * 
 * @param {Array} todaysItems 
 */
function loadToday(todaysItems)
{
    const todoContent = document.querySelector('.todoContent');

    //console.log(todaysItems.length);

    if (todaysItems.length == 0)
    {
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

        for (let i = 0; i < todaysItems.length; ++i)
        {
            //Create div for toDo item
            const displayItem = document.createElement('div');
            displayItem.classList.add('toDoDiv');

            //Identify priority and give a colored border accordingly
            if (todaysItems[i].priority == 1)
            {
                displayItem.style.borderLeft = '5px solid green';
            }

            else if (todaysItems[i].priority == 2)
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

            const title = document.createElement('span');
            title.textContent = todaysItems[i].title;

            const date = document.createElement('span');
            date.textContent = todaysItems[i].dueDate[1] + '/' + todaysItems[i].dueDate[2] + '/' + todaysItems[i].dueDate[0];

            const details = document.createElement('button');
            details.textContent = 'Details';

            const edit = document.createElement('button');
            edit.textContent = '✎';

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.setAttribute('id', i);
            deleteButton.addEventListener('click', function(e) 
            {
                todaysItems.splice(e.target.id, 1);

                if (todaysItems.length == 0)
                {
                    while (todoContent.children.length >= 1)
                    {
                        todoContent.children[0].remove();
                    }
                }

                loadToday(todaysItems);
            });

            const leftSide = document.createElement('div');
            leftSide.classList.add('leftBox');
            leftSide.appendChild(checkBox);
            leftSide.appendChild(title);

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

export default loadToday;