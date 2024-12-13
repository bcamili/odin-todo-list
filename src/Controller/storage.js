
export const storage = (function (){
    
    const init = (model) =>{
        if(localStorage.todoApp){
            model.loadModelfromJSON(localStorage.todoApp);
        }else{
            localStorage.todoApp = model.getModelJSON();
        }
    }

    const load = (model) =>{
        model.loadModelfromJSON(localStorage.todoApp);
    }

    const update = (model) => {
        localStorage.todoApp = model.getModelJSON();
    }

    return {init, load, update};
})();