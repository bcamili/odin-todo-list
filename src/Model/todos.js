export const createTodo = (projectID, title, description, dueDate, priority, notes) => {
    
    const id = String(Math.floor(Math.random()*1000000000))
    
    const getID = () => id;

    let done = false;
    const getDone = () => done;
    const toggleDone = () => done = done == false;
    const getProjectID = () => projectID;
    const getTitle = () =>  title;
    const getDescription = () =>  description;
    const getDueDate = () =>  {
        const day = getDayName(dueDate.getDay());
        const dayOfMonth = dueDate.getDate();
        const month = dueDate.getMonth() +1;
        const nameOfMonth = getMonthName(dueDate.getMonth())
        const year = dueDate.getFullYear();

        return {day, month, nameOfMonth, dayOfMonth, year};
    };
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
            Done: ${done}
            `);
    }

    const getMonthName = (month) =>{
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[month];
    }

    const getDayName = (day) =>{
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        return days[day];
    }

    return {getID, getDone, toggleDone, getProjectID, getTitle, getDescription, getDueDate, getPriority, getNotes, printTodo, editTodo};
}