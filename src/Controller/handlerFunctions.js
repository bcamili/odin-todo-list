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
                todo.toggleDone();
            }

            return returnHandler;
        }

        const todoTitleEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                console.log(input);
                todo.editTodo.title(input);
                todo.printTodo();
            }

            return returnHandler;
        }

        return {checkboxHandler, todoTitleEditHandler};
    }


    return {projectHandler, contentHandlers};
});