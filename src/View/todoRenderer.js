export const renderTodo = (todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList = "todoDiv";
    const todoTitleDiv = document.createElement("div");
    todoTitleDiv.classList = "todoTitleDiv";
    const todoTitle = document.createElement("p");
    todoTitle.classList = "todoTitle";
    todoTitle.textContent = todo.getTitle();
    todoTitleDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoTitleDiv);

    return todoDiv;
}