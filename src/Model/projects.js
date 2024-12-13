import { createTodo } from "./todos";

export const createProject = (projectTitle) => {
    const id = String(Math.floor(Math.random()*1000000000))
    let todoList = [];

    
    const getID = () => id;

    const getTitle = () => projectTitle;

    const setTitle = (newTitle) => projectTitle = newTitle;

    const getAllTodos = () => todoList;

    const addTodo = (title, description, dueDate, priority, notes) => {
        const newTodo = createTodo(id, title, description, dueDate, priority, notes, false);
        todoList.push(newTodo);
        return newTodo.getID();
    }

    const toggleTodo = (todoID) => {
        getTodoByID(todoID).toggleDone();
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

    const getProjectJSON = () => {
        const todos = [];
        todoList.forEach(todo =>{
            todos.push(todo.getTodoJSON());
        });

        const project = {
            id: `${id}`,
            title: `${projectTitle}`,
            todoList: todos
        }

        return JSON.stringify(project);
    }

    const loadFromJSON = (todoListJSON) =>{
        todoListJSON.forEach(todoJSON => {
            const todoFromJSON = JSON.parse(todoJSON);
            const todo = createTodo(id, todoFromJSON.title, todoFromJSON.description, new Date(todoFromJSON.dueDate), todoFromJSON.priority, todoFromJSON.notes, JSON.parse(todoFromJSON.done));
            todoList.push(todo);
        });
    }

    return {
        getID, 
        getTitle, 
        setTitle, 
        getAllTodos, 
        addTodo, 
        toggleTodo, 
        printProject, 
        getTodoByID, 
        deleteTodo, 
        getProjectJSON,
        loadFromJSON
    };
}