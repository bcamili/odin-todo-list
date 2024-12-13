export const handlerFunctionsFactory = (function (model, view){
    
    const sideBarHandlers = () =>{ 

        const projectHandler = (project) =>{
            view.renderTodos(project, model.getDefaultProject().getID(), contentHandlers());
        }

        
        const allTodosHandler = () =>{
            const allProjects = model.getAllProjects();
            view.renderAll(allProjects, model.getDefaultProject().getID() ,contentHandlers());
        }

        const createNewProjectHandler = (projectTitle) =>{
            const newProjectID = model.addProject(projectTitle);
            projectHandler(model.getProjectByID(newProjectID));
            updateSideBar();
        }
        
        return {projectHandler, allTodosHandler, createNewProjectHandler};
    }

    const contentHandlers = () =>{

        const projectTitleEditHandler = (project, input) =>{
            const returnHandler = (project, input) => {
                model.editProject(project.getID(), input);
                updateSideBar();
            }

            return returnHandler;
        }

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

        
        const addTodoToProject = (projectID, title, description, dueDate, priority, notes) =>{
            console.log("works")
            model.addTodoToProject(projectID, title, description, dueDate, priority, notes);
            const project = model.getProjectByID(projectID);
            if(project === model.getDefaultProject()){
                sideBarHandlers().allTodosHandler();
            }else{
                sideBarHandlers().projectHandler(project);
            }
        }

        const deleteTodoHandler = (projectID, todoID) =>{+
            model.deleteTodoInProject(projectID, todoID);
            const project = model.getProjectByID(projectID);
            if(project === model.getDefaultProject()){
                sideBarHandlers().allTodosHandler();
            }else{
                sideBarHandlers().projectHandler(project);
            }
        }

        const deleteProjectHandler = (projectID) => {
            model.deleteProject(projectID);
            updateSideBar();
            sideBarHandlers().allTodosHandler();
        }

        return {
            checkboxHandler, 
            todoTitleEditHandler,
            todoDescriptionEditHandler, 
            todoNotesEditHandler,
            todoDueDateEditHandler,
            todoPriorityEditHandler,
            projectTitleEditHandler,
            addTodoToProject,
            deleteTodoHandler,
            deleteProjectHandler
        };
    }

    const updateSideBar = () => {
        view.updateSideBar(model.getAllProjects(), model.getDefaultProject().getID(), sideBarHandlers());
    }


    return {sideBarHandlers, contentHandlers};
});