import { projectRenderer } from "./projectRenderer";
import { getHeaderDiv, getSidebarDiv, getContentDiv} from "./UIELements";
import editIcon from "../assets/img/pencil.svg";
import checkIcon from"../assets/img/check-bold.svg";

export const view =(function () {

    const appDiv = document.getElementById("app");

    const headerDiv = document.createElement("div");
    headerDiv.id = "headerDiv";
    appDiv.appendChild(headerDiv);

    let contentDiv = document.createElement("div");
    contentDiv.id = "contentDiv";
    contentDiv.classList = "contentDiv";
    appDiv.appendChild(contentDiv);

    const sideBarDiv = document.createElement("div");
    sideBarDiv.id = "sideBarDiv";
    sideBarDiv.classList = "sideBarDiv";

    

    const SBCWrapper = document.createElement("div");
    SBCWrapper.id = "SBCWrapper";
    SBCWrapper.appendChild(sideBarDiv);
    SBCWrapper.appendChild(contentDiv);
    appDiv.appendChild(SBCWrapper);


    

    headerDiv.classList += " redBox"
    sideBarDiv.classList += " redBox"
    contentDiv.classList += " redBox"


    const renderUI = (user, projects, defaultProjectID, handlerFunctions) => {
        headerDiv.appendChild(getHeaderDiv(user));
        sideBarDiv.appendChild(getSidebarDiv(projects, defaultProjectID, handlerFunctions.sideBarHandlers()));
        const contentHandlers = handlerFunctions.contentHandlers();
        renderAll(projects, defaultProjectID, contentHandlers);
    }

    const renderTodos = (project, defaultID, handlerFunctions) =>{
        contentDiv.innerHTML = "";
        contentDiv.append(getContentDiv(project, defaultID, handlerFunctions));
    }

    const updateSideBar = (projects, defaultProjectID, sideBarHandlers) =>{
        sideBarDiv.innerHTML = "";
        sideBarDiv.appendChild(getSidebarDiv(projects, defaultProjectID, sideBarHandlers));
    }

    const renderAll = (projects, defaultID, contentHandlers)=>{
        contentDiv.innerHTML = "";
        projects.forEach(project =>{
            contentDiv.appendChild(getContentDiv(project, defaultID, contentHandlers));
        });

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

    return {
        renderUI, 
        showAllTodosInAllProjects, 
        showAllProjects, 
        renderTodos, 
        renderAll,
        updateSideBar
    };

})();