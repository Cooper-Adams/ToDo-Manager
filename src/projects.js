function loadProjects()
{
    const todoContent = document.querySelector('.todoContent');

    const subMenuOptions = document.querySelectorAll('.projectOption');
    subMenuOptions.forEach(option =>
        option.style.display = 'block');
}

export default loadProjects;