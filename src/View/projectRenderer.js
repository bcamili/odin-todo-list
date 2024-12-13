import { renderTodo } from "./todoRenderer";

export const projectRenderer = () => {
    
    const projectDiv = document.createElement("div");
    projectDiv.classList = "projectDiv";

    const renderProject = (project) =>{
        const projectTitleDiv = document.createElement("div");
        projectTitleDiv.classList = "projectTitleDiv";
        const projectTitle = document.createElement("p");
        projectTitle.classList = "projectTitle";
        projectTitle.textContent = project.getTitle();
        projectTitleDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectTitleDiv);

        return projectDiv
    }

    const renderProjectWithTodos = (project)=>{
        renderProject(project);
        const todoListDiv = document.createElement("div");
        todoListDiv.classList = "todoListDiv";
        const todoList = project.getAllTodos();
        todoList.forEach(todo => {
            todoListDiv.appendChild(renderTodo(todo));
        });
    
        projectDiv.appendChild(todoListDiv);
        return projectDiv;
    }



    return {renderProject, renderProjectWithTodos};
}