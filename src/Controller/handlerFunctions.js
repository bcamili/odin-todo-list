export const handlerFunctionsFactory = (function (model, view, storage){
    
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
                storage.update(model);
                updateSideBar();
            }

            return returnHandler;
        }

        const checkboxHandler = () =>{ 

            const returnHandler = (todo) => {
                todo.toggleDone();
                storage.update(model);
            }

            return returnHandler;
        }

        const todoTitleEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                todo.editTodo.title(input);
                storage.update(model);
            }

            return returnHandler;
        }

        const todoDescriptionEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                todo.editTodo.description(input);
                storage.update(model);
            }

            return returnHandler;
        }

        const todoNotesEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                todo.editTodo.notes(input);
                storage.update(model);
            }

            return returnHandler;
        }

        const todoDueDateEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                const date = new Date(input);
                todo.editTodo.dueDate(date);
                storage.update(model);
            }

            return returnHandler;
        }

        const todoPriorityEditHandler = (todo, input) =>{
            const returnHandler = (todo, input) => {
                todo.editTodo.priority(input);
                storage.update(model);
            }

            return returnHandler;
        }

        
        const addTodoToProject = (projectID, title, description, dueDate, priority, notes) =>{
            model.addTodoToProject(projectID, title, description, dueDate, priority, notes);
            storage.update(model);
            const project = model.getProjectByID(projectID);
            if(project === model.getDefaultProject()){
                sideBarHandlers().allTodosHandler();
            }else{
                sideBarHandlers().projectHandler(project);
            }
        }

        const deleteTodoHandler = (projectID, todoID) =>{+
            model.deleteTodoInProject(projectID, todoID);
            storage.update(model);
            const project = model.getProjectByID(projectID);
            if(project === model.getDefaultProject()){
                sideBarHandlers().allTodosHandler();
            }else{
                sideBarHandlers().projectHandler(project);
            }
        }

        const deleteProjectHandler = (projectID) => {
            model.deleteProject(projectID);
            storage.update(model);
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