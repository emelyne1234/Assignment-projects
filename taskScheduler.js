const readline = require('readline');

let tasks = [];

// Function to add a task to the scheduler
function addTask(title, description, dueDate) {
    tasks.push({ title: title, description: description, dueDate: dueDate, completed: false });
}

// Function to display tasks sorted by their due dates
function displayTasksSortedByDueDate() {
    let sortedTasks = tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    sortedTasks.forEach(task => {
        console.log(`Title: ${task.title}`);
        console.log(`Description: ${task.description}`);
        console.log(`Due Date: ${task.dueDate}`);
        console.log(`Completed: ${task.completed ? 'Yes' : 'No'}`);
        console.log("------------------------------------");
    });
}

// Function to update task details or mark tasks as completed
function updateTask(title, newTitle, newDescription, newDueDate, completed) {
    let task = tasks.find(task => task.title === title);
    if (task) {
        task.title = newTitle || task.title;
        task.description = newDescription || task.description;
        task.dueDate = newDueDate || task.dueDate;
        if (completed !== undefined) {
            task.completed = completed;
        }
        console.log(`Task '${title}' updated successfully.`);
    } else {
        console.log(`Task '${title}' not found.`);
    }
}

// Function to remove a task from the scheduler
function removeTask(title) {
    let index = tasks.findIndex(task => task.title === title);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task '${title}' removed from the scheduler.`);
    } else {
        console.log(`Task '${title}' not found.`);
    }
}

// Function to get user input from the command line
function getUserInput(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer);
        });
    });
}


async function startQuiz() {
    const title = await getUserInput("Enter task title: ");
    const description = await getUserInput("Enter task description: ");
    const dueDate = await getUserInput("Enter due date (YYYY-MM-DD): ");
    addTask(title, description, dueDate);

    console.log("Tasks sorted by due date:");
    displayTasksSortedByDueDate();

    updateTask(title, undefined, undefined, undefined, true);

    console.log("\nUpdated tasks sorted by due date:");
    displayTasksSortedByDueDate();

    const taskToRemove = await getUserInput("Enter the title of the task to remove: ");
    removeTask(taskToRemove);

    console.log("\nRemaining tasks sorted by due date:");
    displayTasksSortedByDueDate();
}

startQuiz();
