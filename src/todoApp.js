
import { domHandler } from "./View/domHandler";

export const todoApp = (function(){

    const appDiv = document.getElementById("app");
    const {headerDiv, sideBarDiv, contentDiv} = domHandler.renderUI()

    const init = () =>{
        console.log("hello");
        appDiv.appendChild(headerDiv);
        appDiv.appendChild(sideBarDiv);
        appDiv.appendChild(contentDiv);
        contentDiv.appendChild(domHandler.showAllProjects());
    }

    return {init};

})();