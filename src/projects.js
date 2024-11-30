import { createToDo } from "./todos";

export const createProject = (projectTitle) => {
    const id = String(Math.floor(Math.random()*1000000000))
    let todoList = [];

    
    const getID = () => id;

    const getTitle = () => projectTitle;

    const getToDoList = () => todoList;

    const addToDo = (title, description, dueDate, priority, notes) => {
        const toDo = createToDo(title, description, dueDate, priority, notes);
        todoList.push(toDo);
    }

    const printProject = () => {
        console.log(`
            Title: ${projectTitle}
            ID: ${id}
            \n
            `);
        todoList.forEach(toDo => {
            toDo.printToDo();
        });
    }

    return {getID, getTitle, getToDoList, addToDo, printProject};
}