import { model } from "./Model/model";
import { view } from "./View/view";

export const controller = (function(){


    const init = () =>{
        const user = {
            name: "Benjamin Camili"
        }

        const projects = model.getAllProjects();
        view.renderUI(user, projects, model.getDefaultProject().getAllTodos());
    }

    return {init};

})();