import { createToDo } from "./todos";

const todo = createToDo("Test", "test", new Date(), 4, "-needs testing");
const todo2 = createToDo("Test2", "test2", new Date(), 4, "-needs testing2");

todo.printToDo();
todo2.printToDo();