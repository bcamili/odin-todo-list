import { projectRenderer } from "./projectRenderer";
import { renderTodo } from "./todoRenderer";

export const getHeaderDiv = (user) => {
    const header = document.createElement("div");
    header.id = "header";
    const usernameDiv = document.createElement("div");
    usernameDiv.id = "usernameDiv";
    header.appendChild(usernameDiv);
    const username = document.createElement("p");
    username.id = "username";
    username.textContent = user.name;
    usernameDiv.appendChild(username);

    return header;
}

export const getSidebarDiv = (projects, handler) => {
    const projectList = document.createElement("div");
    projectList.id = "projectList";
    projects.forEach(project => {
        const projectDiv = projectRenderer().renderProject(project);
        projectDiv.addEventListener("click", () =>{
            handler(project.getID());
        })
        projectList.appendChild(projectDiv);
    });

    return projectList;
}

export const getContentDiv = (todos) => {
    
    const todoList = document.createElement("div");
    todoList.id = "todoList";
    todos.forEach(todo => {
        todoList.appendChild(renderTodo(todo));
    });

    return todoList;
}