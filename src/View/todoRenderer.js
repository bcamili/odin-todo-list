export const renderTodo = (todo, handlerFunctions) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList = "todoDiv";

    const todoHeader = document.createElement("div");
    todoHeader.classList = "todoHeader";

    const doneToggle = document.createElement("input")
    doneToggle.setAttribute("type", "checkbox");
    doneToggle.checked = todo.getDone();
    doneToggle.addEventListener("click", () => {
        const handler = handlerFunctions.checkboxHandler()
        handler(todo);
    });

    doneToggle.classList = "doneToggle";

    const todoTitleDiv = document.createElement("div");
    todoTitleDiv.addEventListener("click", ()=>{
        todoContentDiv.classList.toggle("open");
    });
    todoTitleDiv.classList = "todoTitleDiv";
    todoTitleDiv.textContent = todo.getTitle();
    
    todoHeader.appendChild(doneToggle);
    todoHeader.appendChild(todoTitleDiv);
    todoDiv.appendChild(todoHeader);

    const todoContentDiv = document.createElement("div");
    todoContentDiv.classList = "todoContentDiv"

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList = "descriptionDiv"
    descriptionDiv.innerHTML = `<span>Description: </span> ${todo.getDescription()}`;

    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList = "dueDateDiv"
    dueDateDiv.innerHTML = `<span>Due on: </span> ${todo.getDueDate()}`;

    const priorityDiv = document.createElement("div");
    priorityDiv.classList = "priorityDiv"
    priorityDiv.innerHTML = `<span>Priority: </span>`;
    
    for(let i = 0; i<todo.getPriority(); i++){
        const priorityPoint = document.createElement("div");
        priorityPoint.classList = "priorityPoint";
        priorityPoint.textContent = i+1;
        priorityDiv.appendChild(priorityPoint);
    }

    const notesDiv = document.createElement("div");
    notesDiv.classList = "notesDiv"
    notesDiv.innerHTML = `<span>Notes: </span> ${todo.getNotes()}`;

    todoContentDiv.appendChild(descriptionDiv);
    todoContentDiv.appendChild(dueDateDiv);
    todoContentDiv.appendChild(priorityDiv);
    todoContentDiv.appendChild(notesDiv);

    todoDiv.appendChild(todoContentDiv);
    

    return todoDiv;
}