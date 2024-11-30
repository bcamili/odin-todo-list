import { createProject } from "./projects";

const project = createProject("My First Project");
project.addToDo("Test", "test", new Date(), 4, "-needs testing");
project.addToDo("Test2", "test2", new Date(), 4, "-needs testing2");

const project2 = createProject("My Second Project");
project2.addToDo("Test3", "test3", new Date(), 4, "-needs testing3");
project2.addToDo("Test4", "test4", new Date(), 4, "-needs testing4");

project.printProject();
project2.printProject();

