export const createToDo = (title, description, dueDate, priority, notes) => {
    
    const getTitle = () =>  title;
    const getDescription = () =>  description;
    const getDueDate = () =>  dueDate;
    const getPriority = () =>  priority;
    const getNotes = () =>  notes;

    const printToDo = () => {
        console.log({title, description, dueDate, priority, notes});
    }

    return {getTitle, getDescription, getDueDate, getPriority, getNotes, printToDo};
}