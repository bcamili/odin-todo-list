export const createToDo = (title, description, dueDate, priority, notes) => {
    
    const id = String(Math.floor(Math.random()*1000000000))
    
    const getID = () => id;
    const getTitle = () =>  title;
    const getDescription = () =>  description;
    const getDueDate = () =>  dueDate;
    const getPriority = () =>  priority;
    const getNotes = () =>  notes;

    const printToDo = () => {
        console.log(`
            ID: ${id}
            Title: ${title}
            Description: ${description}
            Due Date: ${dueDate}
            Priority: ${priority}
            Notes: ${notes}
            `);
    }

    return {getID, getTitle, getDescription, getDueDate, getPriority, getNotes, printToDo};
}