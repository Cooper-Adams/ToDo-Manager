# ToDo-Manager

The ToDo-Manager is exactly what the title implies, a hub for your all of your To-Do tasks. 

Try it out here:

https://cooper-adams.github.io/ToDo-Manager/

The ToDo-Manager allows the user to create a To-Do item defined by a title, description, date, priority, and what section it belongs to. To create an item, the user will click the "+" button in the bottom left of the menu. User is able to edit, delete, and review their To-Dos after they are made. The user cannot create a To-Do that is dated before the current date. The To-Do items are sorted by decreasing priority.
    
Default categories include:

Today - To-Dos that match the current date

Upcoming - To-Dos that are not "due" until later dates

Projects - has subcategories of user created Projects, scrolls when there are more than 3. Has a "-" next to the name, allowing the user to delete the projects and their subsequent items.

Notes - a tab that contains "sticky notes" created by the user, just small, quick message boxes that only require a title (and the option of a description)

These categories are displayed on the left of the screen in a menu (25% width), with the actual To-Do items (or lack thereof) being displayed on the right.

All projects, notes, and To-Do items are saved locally so they persist between browser refreshes. If you want to clear all content at once, open the console and type "localStorage.clear()" and press enter, then refresh your page.

Potential Additions:

LoadData() does not verify the dates of the To-Do items, so potentially add a red overlay to items that are "out of date". Also, if an upcoming item is now matching today's date, add it to the today section.