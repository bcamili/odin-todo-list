export const createTodo = (projectID, title, description, dueDate, priority, notes) => {
    
    const id = String(Math.floor(Math.random()*1000000000))
    
    const getID = () => id;
    const getProjectID = () => projectID;
    const getTitle = () =>  title;
    const getDescription = () =>  description;
    const getDueDate = () =>  dueDate;
    const getPriority = () =>  priority;
    const getNotes = () =>  notes;
    const editTodo = {
        title: function (edit){title = edit},
        description: function (edit){description = edit},
        dueDate: function (edit){dueDate = edit},
        priority: function (edit){priority = edit},
        notes: function (edit){notes = edit}
    }

    const printTodo = () => {
        console.log(`
            ID: ${id}
            Title: ${title}
            Description: ${description}
            Due Date: ${dueDate}
            Priority: ${priority}
            Notes: ${notes}
            `);
    }

    return {getID, getProjectID, getTitle, getDescription, getDueDate, getPriority, getNotes, printTodo, editTodo};
}