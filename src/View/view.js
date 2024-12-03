import { projectRenderer } from "./projectRenderer";
import { getHeaderDiv, getSidebarDiv, getContentDiv} from "./UIELements";

export const view =(function () {

    const appDiv = document.getElementById("app");


    const renderUI = (user, projects, todos) => {
        const headerDiv = getHeaderDiv(user);
        const sideBarDiv = getSidebarDiv(projects);
        const contentDiv = getContentDiv(todos);

        appDiv.appendChild(headerDiv);
        appDiv.appendChild(sideBarDiv);
        appDiv.appendChild(contentDiv);
    }
    /*
    const renderUI = () => {
        const headerDiv = getHeaderDiv();
        const sideBarDiv = getSidebarDiv(projectHandler.getAllProjects());
        const contentDiv = document.createElement("div");
        contentDiv.id = "contentDiv";
        return {headerDiv,sideBarDiv,contentDiv};
    }
    */

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