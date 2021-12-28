function loadToday(todaysItems)
{
    const todoContent = document.querySelector('.todoContent');

    if (todaysItems.length == 0)
    {
        todoContent.textContent = "There's nothing here! Click the plus symbol in the menu to add a new item.";
    }

}

export default loadToday;