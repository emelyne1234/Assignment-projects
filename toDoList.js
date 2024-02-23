let tasks = [];

function addTask(name, category) {
    tasks.push({ name: name, category: category, completed: false });
}

function displayTasksByCategory() {
    let tasksByCategory = {};
    tasks.forEach(task => {
        if (!(task.category in tasksByCategory)) {
            tasksByCategory[task.category] = [];
        }
        tasksByCategory[task.category].push(task.name);
    });
    for (let category in tasksByCategory) {
        console.log(`${category}:`);
        tasksByCategory[category].forEach(taskName => {
            console.log(`\t- ${taskName}`);
        });
    }
}

function markTaskAsCompleted(taskName) {
    let task = tasks.find(task => task.name === taskName);
    if (task) {
        task.completed = true;
        console.log(`Task '${taskName}' marked as completed.`);
    } else {
        console.log(`Task '${taskName}' not found.`);
    }
}

function removeTask(taskName) {
    let index = tasks.findIndex(task => task.name === taskName);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task '${taskName}' removed from the list.`);
    } else {
        console.log(`Task '${taskName}' not found.`);
    }
}


addTask("Buy jewerlies", "Shopping");
addTask("Finish report", "Work");
addTask("Call mom", "Personal");
addTask("Read book", "Personal");

console.log("Tasks grouped by category:");
displayTasksByCategory();

markTaskAsCompleted("Buy groceries");
removeTask("Call mom");

console.log("\nUpdated tasks grouped by category:");
displayTasksByCategory();
