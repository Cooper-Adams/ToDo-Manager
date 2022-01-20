function loadNotes(notesList)
{
    const todoContent = document.querySelector('.todoContent');

    if (notesList.length == 0)
    {
        //Removes previous tab's content
        while (todoContent.children.length >= 1)
        {
            todoContent.children[0].remove();
        }

        const messageDiv = document.createElement('div');

        messageDiv.textContent = "There's nothing here! Click the plus symbol in the menu to add a new note.";
    
        todoContent.appendChild(messageDiv);
    }

    else
    {
        //Removes previous tab's content
        while (todoContent.children.length >= 1)
        {
            todoContent.children[0].remove();
        }

        //Create the content div for the notes
        let noteDiv = document.createElement('div');
        noteDiv.classList.add('noteDiv');

        //Creates columns to append the notes to
        let column1 = document.createElement('div');
        column1.classList.add('column');
        column1.classList.add('column1');
        
        let column2 = document.createElement('div');
        column2.classList.add('column');
        column2.classList.add('column2');

        let column3 = document.createElement('div');
        column3.classList.add('column');
        column3.classList.add('column3');

        let count = 1;

        //Loop through the notes and place in the columns
        for (let i = 0; i < notesList.length; ++i)
        {
            let noteBox = document.createElement('div');
            noteBox.classList.add('noteBox');

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('button');
            deleteButton.textContent = 'X';
            deleteButton.setAttribute('id', i);
            deleteButton.addEventListener('click', function(e) 
            {
                //Remove item from list
                notesList.splice(e.target.id, 1);

                //If list is empty, remove content from ToDo display
                if (notesList.length == 0)
                {
                    while (todoContent.children.length >= 1)
                    {
                        todoContent.children[0].remove();
                    }
                }

                //Reload the today tab
                loadNotes(notesList);
            });

            let noteHeader = document.createElement('h3');
            noteHeader.classList.add('noteHeader');
            noteHeader.textContent = notesList[i].header;

            let noteText = document.createElement('span');
            noteText.classList.add('noteText');
            noteText.textContent = notesList[i].description;

            noteBox.appendChild(deleteButton);
            noteBox.appendChild(noteHeader);
            noteBox.appendChild(noteText);

            //Identify if the note should go in column 1, 2, or 3
            if (count == 1)
            {
                column1.appendChild(noteBox);
                count++;
            }

            else if (count == 2)
            {
                column2.appendChild(noteBox);
                count++;
            }

            else
            {
                column3.appendChild(noteBox);
                count = 1;
            }
        }

        //Add the columns to the note div
        noteDiv.appendChild(column1);
        noteDiv.appendChild(column2);
        noteDiv.appendChild(column3);

        //Add the note div to the page
        todoContent.appendChild(noteDiv);
    }
}

export default loadNotes;