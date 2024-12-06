export const renderTodo = (todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList = "todoDiv";

    const todoTitleDiv = document.createElement("div");
    todoTitleDiv.classList = "todoTitleDiv";
    todoTitleDiv.textContent = todo.getTitle();

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList = "descriptionDiv"
    descriptionDiv.textContent = todo.getDescription();

    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList = "dueDateDiv"
    dueDateDiv.textContent = todo.getDueDate();

    const priorityDiv = document.createElement("div");
    priorityDiv.classList = "priorityDiv"
    priorityDiv.textContent = todo.getPriority();

    const notesDiv = document.createElement("div");
    notesDiv.classList = "notesDiv"
    notesDiv.textContent = todo.getNotes();

    todoDiv.appendChild(todoTitleDiv);
    todoDiv.appendChild(descriptionDiv);
    todoDiv.appendChild(dueDateDiv);
    todoDiv.appendChild(priorityDiv);
    todoDiv.appendChild(notesDiv);
    

    return todoDiv;
}