import { renderTodo } from "./todoRenderer";

export const renderProject = (project) => {
    const projectDiv = document.createElement("div");
    const projectTitleDiv = document.createElement("div");
    const projectTitle = document.createElement("p");
    projectTitle.textContent = project.getTitle();
    projectTitleDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectTitleDiv);

    const todoListDiv = document.createElement("div");

    const todoList = project.getAllTodos();

    todoList.forEach(todo => {
        todoListDiv.appendChild(renderTodo(todo));
    });

    projectDiv.appendChild(todoListDiv);

    return projectDiv;
}