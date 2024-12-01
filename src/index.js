import "./style.css";
import { projectHandler } from "./projectHandler";
import { renderProject } from "./projectRenderer";
//Getting all Projects and Todos
projectHandler.printAllProjects();

//Adding new Project
const project1ID = projectHandler.addProject("My First Project");
projectHandler.printAllProjects();

//Adding new Todo
const toEditID = projectHandler.addTodoToProject(project1ID,"Test", "test", new Date(), 4, "-needs testing");
projectHandler.printAllProjects();
projectHandler.addTodoToProject(project1ID,"Test2", "test2", new Date(), 4, "-needs testing2");
projectHandler.printAllProjects();

const project2ID = projectHandler.addProject("My Second Project");
projectHandler.printAllProjects();
const {newTodoID} = projectHandler.addTodoToProject(project2ID,"Test3", "test3", new Date(), 4, "-needs testing3");
projectHandler.printAllProjects();
projectHandler.addTodoToProject(project2ID, "Test4", "test4", new Date(), 4, "-needs testing4");
projectHandler.printAllProjects();

//Delete a Todo
//projectHandler.deleteTodoInProject(project2ID, newTodoID);
//projectHandler.printAllProjects();

//Edit a Todo
projectHandler.editTodoInProject(toEditID.projectID, toEditID.newTodoID, {description: "Edited", title: "Edited Title", notes: "does it?"});
projectHandler.printAllProjects();

//Edit a Project
projectHandler.editProject(project2ID,"My Edited Project");
projectHandler.printAllProjects();

//Delete a Project
//projectHandler.deleteProject(project1ID);
//projectHandler.printAllProjects();

const contentDiv = document.getElementById("content");

const projectList = projectHandler.getAllProjects();

const projectListDiv = document.createElement("div");


projectList.forEach(project => {
    projectListDiv.appendChild(renderProject(project));
});

contentDiv.appendChild(projectListDiv);
