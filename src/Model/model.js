import { createProject } from "./projects";

export const model = (function(){
    const projects = [];

    let defaultProject = createProject("default");
    projects.push(defaultProject);
    
    
    /* const todoID = defaultProject.addTodo("Test3Test3Test3Test3Test3Test3Test3Test3Test3Test3Test3Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 3, "-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 2, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 1, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 5, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 3, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 5, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 2, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 1, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 6, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.toggleTodo(todoID);
    */
    const getAllProjects = () => projects;

    const getDefaultProject = () => defaultProject;
    const printAllProjects = () => {
        projects.forEach(project => {
            project.printProject();
        });
    }

    const addProject = (projectTitle) => {
        const newProject = createProject(projectTitle);
        projects.push(newProject);
        return newProject.getID();
    }

    const getProjectByID = (id) =>{
        return projects.find(project => project.getID() == id);
    }

    const addTodoToProject =  (projectID, title, description, dueDate, priority, notes) => {
        const project = getProjectByID(projectID);
        const newTodoID = project.addTodo(title, description, dueDate, priority, notes);
        return {projectID, newTodoID};
    }

    const deleteTodoInProject = (projectID, todoID) => {
        const project = getProjectByID(projectID);

        getProjectByID(projectID).deleteTodo(todoID);
    }

    const editProject = (projectID,newTitle)=>{
        getProjectByID(projectID).setTitle(newTitle);
    }

    const editTodoInProject = (projectID, todoID, edits)=>{
        const todo = getProjectByID(projectID).getTodoByID(todoID);
        for(const edit in edits){
            todo.editTodo[edit](edits[edit]);
        }
    }

    const toggleTodoInProject = (projectID, todoId) => {
        const project = getProjectByID(projectID);
        project.toggleTodo(todoID);
    }

    const deleteProject = (projectID) =>{
        const toDelete = getProjectByID(projectID);
        if(toDelete){
            projects.splice(projects.indexOf(toDelete),1);
        }
    }

    const getModelJSON = () => {

        const projectsArray = [];
        projects.forEach(project => {
            projectsArray.push(project.getProjectJSON());
        });

        const modelJSON = {
            projects: projectsArray
        }


        return JSON.stringify(modelJSON);
    }

    const loadModelfromJSON = (modelJSON) => {

        projects.length = 0;
        const projectsFromJSON = JSON.parse(modelJSON);

        projectsFromJSON.projects.forEach(projectJSON => {
            const projectFromJSON = JSON.parse(projectJSON);
            const project = createProject(projectFromJSON.title);
            project.loadFromJSON(projectFromJSON.todoList);
            if(projects.length == 0){
                defaultProject = project;
            }
            projects.push(project);
        });
    }

    return {
        getAllProjects, 
        getDefaultProject, 
        printAllProjects, 
        getProjectByID, 
        addProject, 
        editProject, 
        deleteProject,
        addTodoToProject, 
        toggleTodoInProject, 
        editTodoInProject, 
        deleteTodoInProject,
        getModelJSON,
        loadModelfromJSON
    };
})();