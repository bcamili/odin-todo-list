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
        contentDiv.classList.toggle("open");
    });
    sideBarTitle.appendChild(sideBarButton);

    appDiv.appendChild(sideBarDiv);


    

    headerDiv.classList += " redBox"
    sideBarDiv.classList += " redBox"
    contentDiv.classList += " redBox"


    const renderUI = (user, projects, projectHandler, defaultTodos) => {
        headerDiv.appendChild(getHeaderDiv(user));
        sideBarDiv.appendChild(getSidebarDiv(projects, projectHandler));
        contentDiv.appendChild(getContentDiv(defaultTodos));
    }

    const renderTodos = (projectTitle, todos) =>{
        contentDiv.innerHTML = "";
        const title = document.createElement("div");
        title.id = "projectTitle";
        title.textContent = projectTitle;
        contentDiv.appendChild(title);
        contentDiv.appendChild(getContentDiv(todos));
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