export const handlerFunctionsFactory = (function (model, view){
    
    const projectHandler = () =>{ 

        const returnHandler = (projectID) => {
            const project = model.getProjectByID(projectID);
            const todos = project.getAllTodos();
            view.renderTodos(project.getTitle(),todos,contentHandlers());
        }

        return returnHandler;
    }

    const contentHandlers = () =>{

        const checkboxHandler = () =>{ 

            const returnHandler = (todo) => {
                /* const project = model.getProjectByID(projectID);
                const todo = project.getTodoByID(todoID); */
                todo.toggleDone();
            }

            return returnHandler;
        }

        return {checkboxHandler};
    }


    return {projectHandler, contentHandlers};
});