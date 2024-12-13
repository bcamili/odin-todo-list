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
        const defaultProjectID = model.getDefaultProject().getID();
        view.renderUI(user, projects, defaultProjectID, handlerFunctions);
    }


    return {init};

})();