import { projectRenderer } from "./projectRenderer";
import { renderTodo } from "./todoRenderer";

export const getHeaderDiv = (user) => {
    const headerDiv = document.createElement("div");
    headerDiv.id = "headerDiv";
    const usernameDiv = document.createElement("div");
    usernameDiv.id = "usernameDiv";
    headerDiv.appendChild(usernameDiv);
    const username = document.createElement("p");
    username.id = "username";
    username.textContent = user.name;
    usernameDiv.appendChild(username);

    return headerDiv;
}

export const getSidebarDiv = (projects) => {
    const sideBarDiv = document.createElement("div");
    sideBarDiv.id = "sideBarDiv";
    const projectList = document.createElement("div");
    projectList.id = "projectList";
    projects.forEach(project => {
        projectList.appendChild(projectRenderer().renderProject(project));
    });
    sideBarDiv.appendChild(projectList);

    return sideBarDiv;
}

export const getContentDiv = (todos) => {
    const contentDiv = document.createElement("div");
    contentDiv.id = "contentDiv";
    const todoList = document.createElement("div");
    todoList.id = "todoList";
    todos.forEach(todo => {
        todoList.appendChild(renderTodo(todo));
    });
    contentDiv.appendChild(todoList);

    return contentDiv;
}