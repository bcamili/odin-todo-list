import "./style.css";
import { controller } from "./Controller/controller";
import { model } from "./Model/model";

/* 
//Getting all Projects and Todos

//Adding new Project
const project1ID = model.addProject("My First Project");

//Adding new Todo
const toEditID = model.addTodoToProject(project1ID,"Test", "test", new Date(), 4, "-needs testing");
model.addTodoToProject(project1ID,"Test2", "test2", new Date(), 4, "-needs testing2");

const project2ID = model.addProject("My Second Project");
const {newTodoID} = model.addTodoToProject(project2ID,"Test3", "test3", new Date(), 4, "-needs testing3");
model.addTodoToProject(project2ID, "Test4", "test4", new Date(), 4, "-needs testing4");

//Delete a Todo
//projectHandler.deleteTodoInProject(project2ID, newTodoID);
//projectHandler.printAllProjects();

//Edit a Todo
model.editTodoInProject(toEditID.projectID, toEditID.newTodoID, {description: "Edited", title: "Edited Title", notes: "does it?"});

//Edit a Project
model.editProject(project2ID,"My Edited Project");

//Delete a Project
//projectHandler.deleteProject(project1ID);
//projectHandler.printAllProjects();

//todoApp.showAllProjects();
//todoApp.showAllTodosInAllProjects();
 */
controller.init();
