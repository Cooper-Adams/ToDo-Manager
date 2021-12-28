function loadUpcoming(upcomingItems)
{
    const todoContent = document.querySelector('.todoContent');

    if (upcomingItems.length == 0)
    {
        todoContent.textContent = "There's nothing here! Click the plus symbol in the menu to add a new item.";
    }

}

export default loadUpcoming;