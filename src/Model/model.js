import { createProject } from "./projects";

export const model = (function(){
    const projects = [];

    const defaultProject = createProject("default");
    projects.push(defaultProject);
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");
    defaultProject.addTodo("Test3", "test3", new Date(), 4, "-needs testing3");

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

    const deleteProject = (projectID) =>{
        const toDelete = getProjectByID(projectID);
        if(toDelete){
            projects.splice(projects.indexOf(toDelete),1);
        }
    }

    return {getAllProjects, getDefaultProject, printAllProjects, addProject, getProjectByID, deleteTodoInProject, addTodoToProject, editProject, editTodoInProject, deleteProject};
})();