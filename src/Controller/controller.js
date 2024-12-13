import { model } from "../Model/model";
import { view } from "../View/view";
import { handlerFunctionsFactory } from "./handlerFunctions";
import { storage } from "./storage.js";

export const controller = (function(){

    const init = () =>{
        
        const user = {
            name: "Benjamin Camili"
        }
        
        storage.init(model);
        
        /* model.getAllProjects().forEach(project =>{
            project.printProject();
            }); */
            
        const handlerFunctions = handlerFunctionsFactory(model, view, storage);
        
        const projects = model.getAllProjects();
        const defaultProjectID = model.getDefaultProject().getID();
        view.renderUI(user, projects, defaultProjectID, handlerFunctions);
    }


    return {init};

})();