import "./style.css";
import { controller } from "./controller";
import { model } from "./Model/model";


//Getting all Projects and Todos
model.printAllProjects();

//Adding new Project
const project1ID = model.addProject("My First Project");
model.printAllProjects();

//Adding new Todo
const toEditID = model.addTodoToProject(project1ID,"Test", "test", new Date(), 4, "-needs testing");
model.printAllProjects();
model.addTodoToProject(project1ID,"Test2", "test2", new Date(), 4, "-needs testing2");
model.printAllProjects();

const project2ID = model.addProject("My Second Project");
model.printAllProjects();
const {newTodoID} = model.addTodoToProject(project2ID,"Test3", "test3", new Date(), 4, "-needs testing3");
model.printAllProjects();
model.addTodoToProject(project2ID, "Test4", "test4", new Date(), 4, "-needs testing4");
model.printAllProjects();

//Delete a Todo
//projectHandler.deleteTodoInProject(project2ID, newTodoID);
//projectHandler.printAllProjects();

//Edit a Todo
model.editTodoInProject(toEditID.projectID, toEditID.newTodoID, {description: "Edited", title: "Edited Title", notes: "does it?"});
model.printAllProjects();

//Edit a Project
model.editProject(project2ID,"My Edited Project");
model.printAllProjects();

//Delete a Project
//projectHandler.deleteProject(project1ID);
//projectHandler.printAllProjects();

//todoApp.showAllProjects();
//todoApp.showAllTodosInAllProjects();

controller.init();
