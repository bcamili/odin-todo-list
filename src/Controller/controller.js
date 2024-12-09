import { model } from "../Model/model";
import { view } from "../View/view";
import { handlerFunctionsFactory } from "./handlerFunctions";

export const controller = (function(){

    const handlerFunctions = handlerFunctionsFactory(model,view);
    const init = () =>{
        const user = {
            name: "Benjamin Camili"
        }

        const projects = model.getAllProjects();
        const defaultTodos = model.getDefaultProject().getAllTodos();
        view.renderUI(user, projects, defaultTodos, handlerFunctions);
    }


    return {init};

})();