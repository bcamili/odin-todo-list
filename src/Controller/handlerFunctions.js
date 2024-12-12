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
                todo.editTodo.title(input);
            }

            return returnHandler;
        }

        const todoDescriptionEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                todo.editTodo.description(input);
            }

            return returnHandler;
        }

        const todoNotesEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                todo.editTodo.notes(input);
            }

            return returnHandler;
        }

        const todoDueDateEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                const date = new Date(input);
                console.log(input);
                console.log(date);
                todo.editTodo.dueDate(date);
            }

            return returnHandler;
        }

        const todoPriorityEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                todo.editTodo.priority(input);
            }

            return returnHandler;
        }


        return {
            checkboxHandler, 
            todoTitleEditHandler,
            todoDescriptionEditHandler, 
            todoNotesEditHandler,
            todoDueDateEditHandler,
            todoPriorityEditHandler
        };
    }


    return {projectHandler, contentHandlers};
});