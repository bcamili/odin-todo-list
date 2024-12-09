import { projectRenderer } from "./projectRenderer";
import { renderTodo } from "./todoRenderer";

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

export const getContentDiv = (todos, handlerFunctions) => {
    const todoList = document.createElement("div");
    todoList.id = "todoList";
    todos.forEach(todo => {
        todoList.appendChild(renderTodo(todo, handlerFunctions));
    });

    return todoList;
}