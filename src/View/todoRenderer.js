import editIcon from "../assets/img/pencil.svg";
import checkIcon from "../assets/img/check-bold.svg";
import trashIcon from "../assets/img/trash-can.svg";

export const renderTodo = (todo, projectID, contentHandlers) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList = "todoDiv";

    const todoHeader = document.createElement("div");
    todoHeader.classList = "todoHeader";

    const doneToggle = document.createElement("input")
    doneToggle.setAttribute("type", "checkbox");
    doneToggle.checked = todo.getDone();
    doneToggle.addEventListener("click", () => {
        const handler = contentHandlers.checkboxHandler()
        handler(todo);
    });

    doneToggle.classList = "doneToggle";

    const todoTitleDiv = document.createElement("div");
    todoTitleDiv.classList = "todoTitleDiv";

    const toggleOpen = () =>{
        todoContentDiv.classList.toggle("open");
    }

    todoTitleDiv.addEventListener("click", toggleOpen);
    
    
    const TitleEditIconImg = document.createElement("img");
    TitleEditIconImg.classList = "editIconImg";
    TitleEditIconImg.src = editIcon;
    TitleEditIconImg.addEventListener("click", () =>{
        todoTitleDiv.innerHTML = "";
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
        checkIconImg.addEventListener("click", () =>{
            const input = titleEditInput.textContent;

            const handler = contentHandlers.todoTitleEditHandler()
            handler(todo, input);

            todoTitleDiv.innerHTML = "";
            todoTitleDiv.style.display = "block";
            todoTitleDiv.textContent = todo.getTitle();
            todoTitleDiv.addEventListener("click", toggleOpen);
            toggleOpen();
            todoTitleDiv.appendChild(TitleEditIconImg);
        });
        
        todoTitleDiv.appendChild(titleEditInput);
        todoTitleDiv.appendChild(checkIconImg);

    });
    todoTitleDiv.textContent = todo.getTitle();

    todoTitleDiv.appendChild(TitleEditIconImg);
    
    
    todoHeader.appendChild(doneToggle);
    todoHeader.appendChild(todoTitleDiv);
    todoDiv.appendChild(todoHeader);

    const todoContentDiv = document.createElement("div");
    todoContentDiv.classList = "todoContentDiv"

    
    //______________________________________________
    const descriptionWrapper = document.createElement("div");
    descriptionWrapper.className = "contentDataWrapper";
    todoContentDiv.appendChild(descriptionWrapper);

    const descriptionTag = document.createElement("div");
    descriptionTag.className = "contentDataTag";
    descriptionTag.textContent = "Description:";
    descriptionWrapper.appendChild(descriptionTag);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList = "descriptionDiv"
    descriptionWrapper.appendChild(descriptionDiv);
    
    const descriptionEditIconImg = document.createElement("img");
    descriptionEditIconImg.classList = "editIconImg";
    descriptionEditIconImg.src = editIcon;
    descriptionEditIconImg.addEventListener("click", () =>{
        descriptionDiv.innerHTML = "";
        
        if(!todoContentDiv.classList.contains("open")){
            toggleOpen();
        }
        todoTitleDiv.removeEventListener("click", toggleOpen);

        const descriptionEditInput = document.createElement("span");
        descriptionEditInput.role = "textbox";
        descriptionEditInput.style.minWidth = "100px";
        descriptionEditInput.contentEditable = true;
        descriptionEditInput.className = "contentEditInput";
        descriptionEditInput.textContent = todo.getDescription();            

        const checkIconImg = document.createElement("img");
        checkIconImg.classList = "editIconImg";
        checkIconImg.src = checkIcon;
        checkIconImg.addEventListener("click", () =>{
            const input = descriptionEditInput.textContent;
            const handler = contentHandlers.todoDescriptionEditHandler()
            handler(todo, input);

            descriptionDiv.textContent = todo.getDescription();
            todoTitleDiv.addEventListener("click", toggleOpen);
            descriptionDiv.appendChild(descriptionEditIconImg);
        });
        
        descriptionDiv.appendChild(descriptionEditInput);
        descriptionDiv.appendChild(checkIconImg);

    });
    descriptionDiv.textContent = todo.getDescription();

    descriptionDiv.appendChild(descriptionEditIconImg);


    //______________________________________________
    const dueDateWrapper = document.createElement("div");
    dueDateWrapper.className = "contentDataWrapper";
    todoContentDiv.appendChild(dueDateWrapper);

    const dueDateTag = document.createElement("div");
    dueDateTag.className = "contentDataTag";
    dueDateTag.textContent = "Due on:";
    dueDateWrapper.appendChild(dueDateTag);

    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList = "dueDateDiv";
    dueDateWrapper.appendChild(dueDateDiv);

    const dueDateEditIconImg = document.createElement("img");
    dueDateEditIconImg.classList = "editIconImg";
    dueDateEditIconImg.src = editIcon;
    dueDateEditIconImg.addEventListener("click", () =>{
        dueDateDiv.innerHTML = "";
        todoTitleDiv.removeEventListener("click", toggleOpen);
        
        const dueDateEditInput = document.createElement("input");
        dueDateEditInput.type = "date";
        dueDateEditInput.className = "contentEditInput";
        let date = todo.getDueDate();
        dueDateEditInput.value = `${date.year}-${date.month}-${date.dayOfMonth}`;            

        const checkIconImg = document.createElement("img");
        checkIconImg.classList = "editIconImg";
        checkIconImg.src = checkIcon;
        checkIconImg.addEventListener("click", () =>{
            const input = dueDateEditInput.value;
            const handler = contentHandlers.todoDueDateEditHandler()
            handler(todo, input);

            let date = todo.getDueDate();
            dueDateDiv.textContent = `${date.day} ${date.nameOfMonth} ${date.dayOfMonth} ${date.year}`;
            todoTitleDiv.addEventListener("click", toggleOpen);
            dueDateDiv.appendChild(dueDateEditIconImg);
        });
        
        dueDateDiv.appendChild(dueDateEditInput);
        dueDateDiv.appendChild(checkIconImg);
    });

    const date = todo.getDueDate();
    dueDateDiv.textContent = `${date.day} ${date.nameOfMonth} ${date.dayOfMonth} ${date.year}`;

    dueDateDiv.appendChild(dueDateEditIconImg);


    //______________________________________________
    const priorityWrapper = document.createElement("div");
    priorityWrapper.className = "contentDataWrapper";
    todoContentDiv.appendChild(priorityWrapper);

    const priorityTag = document.createElement("div");
    priorityTag.className = "contentDataTag";
    priorityTag.textContent = "Priority:";
    priorityWrapper.appendChild(priorityTag);

    const priorityDiv = document.createElement("div");
    priorityDiv.classList = "priorityDiv";
    priorityWrapper.appendChild(priorityDiv);

    const renderPriorities = (num) => {
        priorityDiv.innerHTML ="";
        const priorityPoints = document.createElement("div");
        priorityPoints.classList = "priorityPoints"
        for(let i = 0; i<num; i++){
            const priorityPoint = document.createElement("div");
            priorityPoint.classList = "priorityPoint";
            priorityPoint.textContent = i+1;
            priorityPoints.appendChild(priorityPoint);
        }

        priorityDiv.appendChild(priorityPoints);
    }

    const priorityEditIconImg = document.createElement("img");
    priorityEditIconImg.classList = "editIconImg";
    priorityEditIconImg.src = editIcon;
    priorityEditIconImg.addEventListener("click", () =>{
        todoTitleDiv.removeEventListener("click", toggleOpen);

        let priorityLevel = todo.getPriority();
        renderPriorities(priorityLevel);

        const minusButton = document.createElement("div");
        minusButton.className = "priorityButtons";
        minusButton.textContent= "-";
        priorityDiv.insertBefore(minusButton, priorityDiv.firstChild);

        const plusButton = document.createElement("div");
        plusButton.className = "priorityButtons";
        plusButton.textContent= "+";
        priorityDiv.appendChild(plusButton);

        minusButton.addEventListener("click", () =>{
            if (priorityLevel>1){
                priorityLevel -= 1;
            }
            renderPriorities(priorityLevel);
            priorityDiv.insertBefore(minusButton, priorityDiv.firstChild);
            priorityDiv.appendChild(plusButton);
            priorityDiv.appendChild(checkIconImg);
        });

        plusButton.addEventListener("click", () =>{
            if (priorityLevel<5){
                priorityLevel += 1;
            }
            renderPriorities(priorityLevel);
            priorityDiv.insertBefore(minusButton, priorityDiv.firstChild);
            priorityDiv.appendChild(plusButton);
            priorityDiv.appendChild(checkIconImg);
        });

        const checkIconImg = document.createElement("img");
        checkIconImg.classList = "editIconImg";
        checkIconImg.src = checkIcon;
        checkIconImg.addEventListener("click", () =>{
            todoTitleDiv.addEventListener("click", toggleOpen);

            const handler = contentHandlers.todoPriorityEditHandler()
            handler(todo, priorityLevel);

            renderPriorities(todo.getPriority());
            priorityDiv.appendChild(priorityEditIconImg);
        });
        
        priorityDiv.appendChild(checkIconImg);
    });

    
    renderPriorities(todo.getPriority());
    priorityDiv.appendChild(priorityEditIconImg);
    


    //______________________________________________
    const notesWrapper = document.createElement("div");
    notesWrapper.className = "contentDataWrapper";
    todoContentDiv.appendChild(notesWrapper);

    const notesTag = document.createElement("div");
    notesTag.className = "contentDataTag";
    notesTag.textContent = "Notes:";
    notesWrapper.appendChild(notesTag);

    const notesDiv = document.createElement("div");
    notesDiv.classList = "notesDiv";
    notesWrapper.appendChild(notesDiv);
    
    const notesEditIconImg = document.createElement("img");
    notesEditIconImg.classList = "editIconImg";
    notesEditIconImg.src = editIcon;
    notesEditIconImg.addEventListener("click", () =>{
        notesDiv.innerHTML = "";
        todoTitleDiv.removeEventListener("click", toggleOpen);
        const notesEditInput = document.createElement("span");
        notesEditInput.role = "textbox";
        notesEditInput.contentEditable = true;
        notesEditInput.className = "contentEditInput";
        notesEditInput.textContent = todo.getNotes();            

        const checkIconImg = document.createElement("img");
        checkIconImg.classList = "editIconImg";
        checkIconImg.src = checkIcon;
        checkIconImg.addEventListener("click", () =>{
            const input = notesEditInput.textContent;
            const handler = contentHandlers.todoNotesEditHandler()
            handler(todo, input);

            notesDiv.textContent = todo.getNotes();
            todoTitleDiv.addEventListener("click", toggleOpen);
            notesDiv.appendChild(notesEditIconImg);
        });
        
        notesDiv.appendChild(notesEditInput);
        notesDiv.appendChild(checkIconImg);

    });
    notesDiv.textContent = todo.getNotes();

    notesDiv.appendChild(notesEditIconImg);
    //______________________________________________

    todoContentDiv.appendChild(descriptionWrapper);
    todoContentDiv.appendChild(dueDateWrapper);
    todoContentDiv.appendChild(priorityWrapper);
    todoContentDiv.appendChild(notesWrapper);

    const deleteTodoButton = document.createElement("div");
    deleteTodoButton.className = "deleteTodoButton";
    deleteTodoButton.textContent = "Delete";
    const deleteButtonImg = document.createElement("div");
    deleteButtonImg.classList = "editIconImg";
    deleteButtonImg.classList += " deleteButtonImg"
    //deleteButtonImg.src = trashIcon;
    deleteTodoButton.appendChild(deleteButtonImg);

    todoContentDiv.appendChild(deleteTodoButton);

    deleteTodoButton.addEventListener("click", ()=>{
        deleteTodoButton.remove();
        const deleteChoicesWrapper = document.createElement("div");
        deleteChoicesWrapper.className = "deleteChoicesWrapper";
        const yesButton = document.createElement("div");
        yesButton.textContent = "Yes";
        yesButton.classList = "deleteTodoButton";
        const noButton = document.createElement("div");
        noButton.textContent = "No";
        noButton.classList = "deleteTodoButton";

        const confirmDelete = document.createElement("div");
        confirmDelete.className = "confirmDeleteTodo";
        confirmDelete.textContent = "Really?";

        deleteChoicesWrapper.appendChild(noButton);
        deleteChoicesWrapper.appendChild(confirmDelete);
        deleteChoicesWrapper.appendChild(yesButton);
        todoContentDiv.appendChild(deleteChoicesWrapper);

        noButton.addEventListener("click", () =>{
            deleteChoicesWrapper.remove();
            todoContentDiv.appendChild(deleteTodoButton);
        });

        yesButton.addEventListener("click", ()=>{
            const handler = contentHandlers.deleteTodoHandler;
            handler(projectID, todo.getID());
        });
    });

    todoDiv.appendChild(todoContentDiv);
    

    return todoDiv;
}