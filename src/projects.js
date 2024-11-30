import { createTodo } from "./todos";

export const createProject = (projectTitle) => {
    const id = String(Math.floor(Math.random()*1000000000))
    let todoList = [];

    
    const getID = () => id;

    const getTitle = () => projectTitle;

    const getAllTodos = () => todoList;

    const addTodo = (title, description, dueDate, priority, notes) => {
        const newTodo = createTodo(title, description, dueDate, priority, notes);
        todoList.push(newTodo);
        return newTodo.getID();
    }

    const printProject = () => {
        console.log(`
            Title: ${projectTitle}
            ID: ${id}
            \n
            `);
        todoList.forEach(todo => {
            todo.printTodo();
        });
    }

    const getTodoByID = (id) =>{
        return todoList.find(todo => todo.getID() == id);
    }

    const deleteTodo = (id) => {
        const toDelete = getTodoByID(id);
        if(toDelete){
            todoList.splice(todoList.indexOf(toDelete),1);
        }
    }

    return {getID, getTitle, getAllTodos, addTodo, printProject, getTodoByID, deleteTodo};
}