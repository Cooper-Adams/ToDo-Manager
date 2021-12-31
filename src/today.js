function loadToday(todaysItems)
{
    const todoContent = document.querySelector('.todoContent');

    if (todaysItems.length == 0)
    {
        todoContent.textContent = "There's nothing here! Click the plus symbol in the menu to add a new item.";
    }

    else
    {
        //First, clear todoContent
        while (todoContent.firstChild)
        {
            todoContent.removeChild(firstChild);
        }

        for (let i = 0; i < todaysItems.length(); ++i)
        {
            const displayItem = document.createElement('div');
        }
    }
}

export default loadToday;