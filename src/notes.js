function loadNotes(notesList)
{
    const todoContent = document.querySelector('.todoContent');

    if (notesList.length == 0)
    {
        todoContent.textContent = "There's nothing here! Click the plus symbol in the menu to add a new note.";
    }
}

export default loadNotes;