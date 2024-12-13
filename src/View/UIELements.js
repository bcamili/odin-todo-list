import { projectRenderer } from "./projectRenderer";
import { renderTodo } from "./todoRenderer";
import editIcon from "../assets/img/pencil.svg";
import checkIcon from"../assets/img/check-bold.svg";
import trashIcon from "../assets/img/trash-can.svg";


export const getHeaderDiv = (user) => {
    const header = document.createElement("div");
    header.id = "header";
    const logoDiv = document.createElement("div");
    logoDiv.id = "logoDiv";
    logoDiv.textContent="TodoApp";
    header.appendChild(logoDiv);
    const usernameDiv = document.createElement("div");
    usernameDiv.id = "usernameDiv";
    header.appendChild(usernameDiv);
    const username = document.createElement("p");
    username.id = "username";
    username.textContent = "by " + user.name;
    usernameDiv.appendChild(username);

    return header;
}

export const getSidebarDiv = (projects, defaultProjectID, sideBarHandlers) => {
    const sideBarWrapper = document.createElement("div");
    sideBarWrapper.id = "sideBarWrapper";

    const sideBarAllTodos = document.createElement("div");
    sideBarAllTodos.id = "sideBarAllTodos";
    sideBarAllTodos.textContent="All Todos";
    sideBarAllTodos.addEventListener("click", sideBarHandlers.allTodosHandler);
    sideBarWrapper.appendChild(sideBarAllTodos);

    const sideBarProjectsTitle = document.createElement("div");
    sideBarProjectsTitle.id = "sideBarProjectsTitle";
    sideBarProjectsTitle.textContent="Projects"
    sideBarWrapper.appendChild(sideBarProjectsTitle);

    const sideBarButton = document.createElement("div");
    sideBarButton.id = "sideBarButton";
    sideBarButton.textContent = ">"
    sideBarButton.addEventListener("click", () =>{
        sideBarButton.textContent = sideBarButton.textContent == ">" ? sideBarButton.textContent = "<" : sideBarButton.textContent = ">";
        document.getElementById("sideBarDiv").classList.toggle("open");
    });
    sideBarProjectsTitle.appendChild(sideBarButton);

    const projectList = document.createElement("div");
    projectList.id = "projectList";
    projects.forEach(project => {
        if(project.getID() != defaultProjectID){
            const projectDiv = projectRenderer().renderProject(project);
            projectDiv.addEventListener("click", () =>{
                sideBarHandlers.projectHandler(project);
            })
            projectList.appendChild(projectDiv);
        }
    });
    sideBarWrapper.appendChild(projectList);

    const addNewProjectButton = document.createElement("div");
    addNewProjectButton.id = "addNewProjectButton";
    addNewProjectButton.textContent = "+ New Project";
    sideBarWrapper.appendChild(addNewProjectButton);
    addNewProjectButton.addEventListener("click", ()=>{
        const contentDiv = document.getElementById("contentDiv");
        contentDiv.innerHTML = "";

        const title = document.createElement("div");            
        const projectTitleEditInput = document.createElement("span");
        projectTitleEditInput.role = "textbox";
        projectTitleEditInput.style.minWidth = "100px";
        projectTitleEditInput.contentEditable = true;
        projectTitleEditInput.className = "newProjectTitleEditInput";
        projectTitleEditInput.textContent = "";
        projectTitleEditInput.autofocus = true;       

        const checkIconImg = document.createElement("img");
        checkIconImg.classList = "projectTitleEditIconImg";
        checkIconImg.src = checkIcon;
        checkIconImg.addEventListener("click", () =>{
            const input = projectTitleEditInput.textContent;
            if(input.length != 0){
                const handler = sideBarHandlers.createNewProjectHandler;
                handler(input);
            }
        });
        
        title.appendChild(projectTitleEditInput);
        title.appendChild(checkIconImg);
        contentDiv.appendChild(title);
    });
    
    return sideBarWrapper;
}

export const getContentDiv = (project, defaultID, contentHandlers) => {

    const contentDiv = document.createElement("div");
    const projectTitleWrapper = document.createElement("div");
    projectTitleWrapper.className = "projectTitleWrapper";
    contentDiv.appendChild(projectTitleWrapper);
    const title = document.createElement("div");
    if(project.getID() == defaultID){
        title.className = "contentAllTitle";
        title.textContent = "All Todos";
    }else{
        title.className = "contentProjectTitle";
        title.textContent = project.getTitle();

        const projectTitleEditIconImg = document.createElement("img");
        projectTitleEditIconImg.classList = "projectTitleEditIconImg";
        projectTitleEditIconImg.src = editIcon;
        projectTitleEditIconImg.addEventListener("click", () =>{
            title.innerHTML = "";
            
            const projectTitleEditInput = document.createElement("span");
            projectTitleEditInput.role = "textbox";
            projectTitleEditInput.style.minWidth = "100px";
            projectTitleEditInput.contentEditable = true;
            projectTitleEditInput.className = "projectTitleEditInput";
            projectTitleEditInput.textContent = project.getTitle();            

            const checkIconImg = document.createElement("img");
            checkIconImg.classList = "projectTitleEditIconImg";
            checkIconImg.src = checkIcon;
            checkIconImg.addEventListener("click", () =>{
                const input = projectTitleEditInput.textContent;
                const handler = contentHandlers.projectTitleEditHandler()
                handler(project, input);

                title.textContent = project.getTitle();
                title.appendChild(projectTitleEditIconImg);
            });
            
            title.appendChild(projectTitleEditInput);
            title.appendChild(checkIconImg);

        });
        title.appendChild(projectTitleEditIconImg);
        
    }
    projectTitleWrapper.appendChild(title);

    const addNewTodoButton = document.createElement("div");
    addNewTodoButton.className = "addNewTodoButton";
    addNewTodoButton.textContent = "+ New Todo";
    projectTitleWrapper.appendChild(addNewTodoButton);
    addNewTodoButton.addEventListener("click", ()=>{
        addNewTodoButton.remove();
        deleteProjectButton.remove();
        const saveNewTodoButton = document.createElement("div");
        saveNewTodoButton.className = "addNewTodoButton";
        saveNewTodoButton.textContent = "Save";
        projectTitleWrapper.appendChild(saveNewTodoButton);
        

        const newTodoDiv = document.createElement("div");
        newTodoDiv.className = "todoDiv";
        newTodoDiv.id = "newtodoDiv";
        const newTodoEditInput = document.createElement("span");
        newTodoEditInput.id = "newTodoEditInput";
        newTodoEditInput.role = "textbox";
        newTodoEditInput.style.minWidth = "100px";
        newTodoEditInput.contentEditable = true;
        newTodoEditInput.className = "newTodoTitleEditInput";
        newTodoEditInput.autofocus = true;
        newTodoDiv.appendChild(newTodoEditInput);
        projectTitleWrapper.appendChild(newTodoDiv);

        saveNewTodoButton.addEventListener("click", ()=>{
            const newTask = newTodoEditInput.textContent;
            if(newTask.length>0){
                const projectID = project.getID();
                const title = newTask;
                const description = "";
                const dueDate = "";
                const priority = "";
                const notes = "";
                const handler = contentHandlers.addTodoToProject;
                console.log(handler);
                handler(projectID, title, description, new Date(), 1, notes);
            }

            saveNewTodoButton.remove();
            newTodoDiv.remove();
            projectTitleWrapper.appendChild(addNewTodoButton);
            projectTitleWrapper.appendChild(deleteProjectButton);
        });
    });

    const deleteProjectButton = document.createElement("div");
    deleteProjectButton.className = "deleteProjectButton";
    deleteProjectButton.textContent = "Delete";
    const deleteButtonImg = document.createElement("img");
    deleteButtonImg.classList = "editIconImg";
    deleteButtonImg.classList += " deleteButtonImg"
    deleteButtonImg.src = trashIcon;
    deleteProjectButton.appendChild(deleteButtonImg);
    
    deleteProjectButton.addEventListener("click", () =>{
        deleteProjectButton.remove();
        addNewTodoButton.remove();
        const deleteChoicesWrapper = document.createElement("div");
        deleteChoicesWrapper.className = "deleteChoicesWrapper";

        const noButton = document.createElement("div");
        noButton.className = "deleteProjectButton";
        noButton.textContent = "No";

        const yesButton = document.createElement("div");
        yesButton.className = "deleteProjectButton";
        yesButton.textContent = "Yes";

        const confirmDelete = document.createElement("div");
        confirmDelete.id = "confirmDelete";
        confirmDelete.textContent = "Really?";

        deleteChoicesWrapper.appendChild(noButton);
        deleteChoicesWrapper.appendChild(confirmDelete);
        deleteChoicesWrapper.appendChild(yesButton);
        projectTitleWrapper.appendChild(deleteChoicesWrapper);

        noButton.addEventListener("click", () =>{
            deleteChoicesWrapper.remove();
            projectTitleWrapper.appendChild(addNewTodoButton);
            projectTitleWrapper.appendChild(deleteProjectButton);
        });

        yesButton.addEventListener("click", () =>{
            const handler = contentHandlers.deleteProjectHandler;
            handler(project.getID());
        });

    });

    if(project.getID()!=defaultID){
        projectTitleWrapper.appendChild(deleteProjectButton);
    }


    const todoList = document.createElement("div");
    todoList.className = "todoList";
    project.getAllTodos().forEach(todo => {
        todoList.appendChild(renderTodo(todo, project.getID(), contentHandlers));
    });

    contentDiv.appendChild(todoList);

    return contentDiv;
}