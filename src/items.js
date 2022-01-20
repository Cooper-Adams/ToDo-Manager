export function todoItemFactory(title, description, dueDate, priority)
{
    return { title: title, description: description, dueDate: dueDate, priority: priority };
}

export function noteFactory(header, description)
{
    return { header: header, description: description };
}