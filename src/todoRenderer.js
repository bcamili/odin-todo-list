export const renderTodo = (todo) => {
    const todoDiv = document.createElement("div");
    const todoTitleDiv = document.createElement("div");
    const todoTitle = document.createElement("p");
    todoTitle.textContent = todo.getTitle();
    todoTitleDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoTitleDiv);

    return todoDiv;
}