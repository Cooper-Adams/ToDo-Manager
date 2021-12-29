export const todoItemFactory = (title, description, dueDate, priority, time) =>
{
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.time = time;

    return {title, description, dueDate, priority, time};
}

export const projectFactory = (title) =>
{
    this.title = title;

    return title;
}

export const noteFactory = (header, description) =>
{
    this.header = header;
    this.description = description;

    return {header, description};
}