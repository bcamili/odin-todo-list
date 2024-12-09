import { projectRenderer } from "./projectRenderer";
import { getHeaderDiv, getSidebarDiv, getContentDiv} from "./UIELements";

export const view =(function () {

    const appDiv = document.getElementById("app");

    const headerDiv = document.createElement("div");
    headerDiv.id = "headerDiv";
    appDiv.appendChild(headerDiv);

    const contentDiv = document.createElement("div");
    contentDiv.id = "contentDiv";
    contentDiv.classList = "contentDiv";
    appDiv.appendChild(contentDiv);

    const sideBarDiv = document.createElement("div");
    sideBarDiv.id = "sideBarDiv";
    sideBarDiv.classList = "sideBarDiv";

    const sideBarTitle = document.createElement("div");
    sideBarTitle.id = "sideBarTitle";
    sideBarTitle.textContent="Projects"
    sideBarDiv.appendChild(sideBarTitle);

    const sideBarButton = document.createElement("div");
    sideBarButton.id = "sideBarButton";
    sideBarButton.textContent = ">"
    sideBarButton.addEventListener("click", () =>{
        sideBarButton.textContent = sideBarButton.textContent == ">" ? sideBarButton.textContent = "<" : sideBarButton.textContent = ">";
        sideBarDiv.classList.toggle("open");
    });
    sideBarTitle.appendChild(sideBarButton);

    const SBCWrapper = document.createElement("div");
    SBCWrapper.id = "SBCWrapper";
    SBCWrapper.appendChild(sideBarDiv);
    SBCWrapper.appendChild(contentDiv);
    appDiv.appendChild(SBCWrapper);


    

    headerDiv.classList += " redBox"
    sideBarDiv.classList += " redBox"
    contentDiv.classList += " redBox"


    const renderUI = (user, projects, defaultTodos, handlerFunctions) => {
        headerDiv.appendChild(getHeaderDiv(user));
        sideBarDiv.appendChild(getSidebarDiv(projects, handlerFunctions.projectHandler()));
        const contentHandlers = handlerFunctions.contentHandlers();
        contentDiv.appendChild(getContentDiv(defaultTodos, contentHandlers));
    }

    const renderTodos = (projectTitle, todos, handlerFunctions) =>{
        contentDiv.innerHTML = "";
        const title = document.createElement("div");
        title.id = "projectTitle";
        title.textContent = projectTitle;
        contentDiv.appendChild(title);
        contentDiv.appendChild(getContentDiv(todos, handlerFunctions));
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