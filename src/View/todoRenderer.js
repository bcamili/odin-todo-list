import editIcon from "../assets/img/pencil.svg";
import checkIcon from"../assets/img/check-bold.svg";

export const renderTodo = (todo, contentHandler) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList = "todoDiv";

    const todoHeader = document.createElement("div");
    todoHeader.classList = "todoHeader";

    const doneToggle = document.createElement("input")
    doneToggle.setAttribute("type", "checkbox");
    doneToggle.checked = todo.getDone();
    doneToggle.addEventListener("click", () => {
        const handler = contentHandler.checkboxHandler()
        handler(todo);
    });

    doneToggle.classList = "doneToggle";

    const todoTitleDiv = document.createElement("div");
    todoTitleDiv.classList = "todoTitleDiv";

    const toggleOpen = () =>{
        todoContentDiv.classList.toggle("open");
    }

    todoTitleDiv.addEventListener("click", toggleOpen);
    
    
    const editIconImg = document.createElement("img");
    editIconImg.classList = "editIconImg";
    editIconImg.src = editIcon;
    editIconImg.addEventListener("click", () =>{
        todoTitleDiv.innerHTML = "";
        console.log();
        if(!todoContentDiv.classList.contains("open")){
            toggleOpen();
        }
        todoTitleDiv.removeEventListener("click", toggleOpen);
        const titleEditInput = document.createElement("span");
        titleEditInput.role = "textbox";
        titleEditInput.contentEditable = true;
        titleEditInput.className = "titleEditInput";
        titleEditInput.textContent = todo.getTitle();

        const checkIconImg = document.createElement("img");
        checkIconImg.classList = "editIconImg";
        checkIconImg.src = checkIcon;
        checkIconImg.style.zIndex = 2;
        checkIconImg.addEventListener("click", () =>{
            const input = titleEditInput.textContent;
            console.log(input);

            const handler = contentHandler.todoTitleEditHandler()
            handler(todo, input);

            todoTitleDiv.innerHTML = "";
            todoTitleDiv.style.display = "block";
            todoTitleDiv.textContent = todo.getTitle();
            todoTitleDiv.addEventListener("click", toggleOpen);
            toggleOpen();
            todoTitleDiv.appendChild(editIconImg);
        });
        
        todoTitleDiv.appendChild(titleEditInput);
        todoTitleDiv.appendChild(checkIconImg);

    });
    todoTitleDiv.textContent = todo.getTitle();

    todoTitleDiv.appendChild(editIconImg);
    
    
    todoHeader.appendChild(doneToggle);
    todoHeader.appendChild(todoTitleDiv);
    todoDiv.appendChild(todoHeader);

    const todoContentDiv = document.createElement("div");
    todoContentDiv.classList = "todoContentDiv"

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList = "descriptionDiv"
    descriptionDiv.innerHTML = `<span>Description: </span><br> ${todo.getDescription()}`;

    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList = "dueDateDiv"
    dueDateDiv.innerHTML = `<span>Due on: </span><br> ${todo.getDueDate()}`;

    const priorityDiv = document.createElement("div");
    priorityDiv.classList = "priorityDiv"
    priorityDiv.innerHTML = `<span>Priority: </span>`;
    
    const priorityPoints = document.createElement("div");
    priorityPoints.classList = "priorityPoints"
    for(let i = 0; i<todo.getPriority(); i++){
        const priorityPoint = document.createElement("div");
        priorityPoint.classList = "priorityPoint";
        priorityPoint.textContent = i+1;
        priorityPoints.appendChild(priorityPoint);
    }

    priorityDiv.appendChild(priorityPoints);

    const notesDiv = document.createElement("div");
    notesDiv.classList = "notesDiv"
    notesDiv.innerHTML = `<span>Notes: </span><br>${todo.getNotes()}`;

    todoContentDiv.appendChild(descriptionDiv);
    todoContentDiv.appendChild(dueDateDiv);
    todoContentDiv.appendChild(priorityDiv);
    todoContentDiv.appendChild(notesDiv);

    todoDiv.appendChild(todoContentDiv);
    

    return todoDiv;
}