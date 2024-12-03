import { projectHandler } from "../Model/projectHandler";
import { projectRenderer } from "./projectRenderer";

export const domHandler =(function () {
    
    const renderUI = () => {
        const headerDiv = document.createElement("div");
        headerDiv.id = "headerDiv";
        const sideBarDiv = document.createElement("div");
        sideBarDiv.id = "sideBarDiv";
        const contentDiv = document.createElement("div");
        contentDiv.id = "contentDiv";
        return {headerDiv,sideBarDiv,contentDiv};
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

    return {renderUI, showAllTodosInAllProjects, showAllProjects};

})();