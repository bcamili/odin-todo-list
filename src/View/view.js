import { projectRenderer } from "./projectRenderer";
import { getHeaderDiv, getSidebarDiv, getContentDiv} from "./UIELements";

export const view =(function () {

    const appDiv = document.getElementById("app");

    const headerDiv = document.createElement("div");
    headerDiv.id = "headerDiv";
    appDiv.appendChild(headerDiv);
    const sideBarDiv = document.createElement("div");
    sideBarDiv.id = "sideBarDiv";
    appDiv.appendChild(sideBarDiv);
    const contentDiv = document.createElement("div");
    contentDiv.id = "contentDiv";
    appDiv.appendChild(contentDiv);


    const renderUI = (user, projects, projectHandler, defaultTodos) => {
        headerDiv.appendChild(getHeaderDiv(user));
        sideBarDiv.appendChild(getSidebarDiv(projects, projectHandler));
        contentDiv.appendChild(getContentDiv(defaultTodos));
    }

    const renderTodos = (todos) =>{
        contentDiv.innerHTML = ""
        contentDiv.appendChild(getContentDiv(todos));
        console.log("works?");
    }

    const showAllTodosInAllProjects = () => {
        const projectListDiv = document.createElement("div");
        projectListDiv.id = "projectListDiv";
        const allProjects= projectHandler.getAllProjects();

        allProjects.forEach(project => {
            projectListDiv.appendChild(projectRenderer().renderProjectWithTodos(project));
        });

        return projectListDiv;
    }

    const showAllProjects = () => {
        const projectListDiv = document.createElement("div");
        projectListDiv.id = "projectListDiv";
        const allProjects= projectHandler.getAllProjects();
        allProjects.forEach(project => {
            projectListDiv.appendChild(projectRenderer().renderProject(project));
        });

        return projectListDiv;
    }

    return {renderUI, showAllTodosInAllProjects, showAllProjects, renderTodos};

})();