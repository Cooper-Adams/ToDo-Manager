/**
 * Factory for todo creation
 * 
 * @param {*} title The title of the todo
 * @param {*} description The details of the todo
 * @param {*} dueDate The date of the todo
 * @param {*} priority The priority of the todo
 * @param {*} project The project the todo belongs to
 * @returns object
 */
export function todoItemFactory(title, description, dueDate, priority, project)
{
    return { title: title, description: description, dueDate: dueDate, priority: priority, project: project };
}

/**
 * Factory for note creation
 * 
 * @param {*} header The title of the note
 * @param {*} description The details of the note
 * @returns object
 */
export function noteFactory(header, description)
{
    return { header: header, description: description };
}