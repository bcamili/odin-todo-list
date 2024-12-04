import { model } from "./Model/model";
import { view } from "./View/view";

export const controller = (function(){


    const init = () =>{
        const user = {
            name: "Benjamin Camili"
        }

        const projects = model.getAllProjects();
        const defaultTodos = model.getDefaultProject().getAllTodos();
        view.renderUI(user, projects, projectHandler, defaultTodos);
    }

    const projectHandler = (projectID) =>{
        const project = model.getProjectByID(projectID);
        const todos = project.getAllTodos();
        view.renderTodos(todos);
    }

    return {init};

})();