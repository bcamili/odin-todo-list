import { projectHandler } from "./projectHandler";


projectHandler.printAllProjects();

const project1ID = projectHandler.addProject("My First Project");
projectHandler.printAllProjects();
projectHandler.addTodoToProject(project1ID,"Test", "test", new Date(), 4, "-needs testing");
projectHandler.printAllProjects();
projectHandler.addTodoToProject(project1ID,"Test2", "test2", new Date(), 4, "-needs testing2");
projectHandler.printAllProjects();


const project2ID = projectHandler.addProject("My Second Project");
projectHandler.printAllProjects();
const {newTodoID} = projectHandler.addTodoToProject(project2ID,"Test3", "test3", new Date(), 4, "-needs testing3");
projectHandler.printAllProjects();
projectHandler.addTodoToProject(project2ID, "Test4", "test4", new Date(), 4, "-needs testing4");
projectHandler.printAllProjects();

projectHandler.deleteTodoInProject(project2ID, newTodoID);
projectHandler.printAllProjects();


const button = document.createElement("button");
document.getElementById("content").appendChild(button);
button.addEventListener("click", function (e) {
    const projectID = prompt();

    const todoID = prompt();

    projectHandler.getProjectByID(projectID).getTodoByID(todoID).printTodo();
});
