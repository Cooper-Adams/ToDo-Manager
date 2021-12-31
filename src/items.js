export function todoItemFactory(title, description, dueDate, priority)
{
    return { title: title, description: description, dueDate: dueDate, priority: priority };
}

/*export const projectFactory = (title) =>
{
    return { title: title }
}*/

export const noteFactory = (header, description) =>
{
    return { header: header, description: description };
}