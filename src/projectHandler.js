import { createProject } from "./projects";

export const projectHandler = (function () {
    const projects = [];

    const defaultProject = createProject("default");
    projects.push(defaultProject);

    const getAllProjects = () => projects;

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

    return {getAllProjects, printAllProjects, addProject, getProjectByID, deleteTodoInProject, addTodoToProject};
})();