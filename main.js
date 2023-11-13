
const tasks = [];
let tasksHTML = '';

function updateTasks() {
    tasksHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const toDo = tasks[i];
        const html = `<p>${toDo}</p>`;
        tasksHTML += html;
    }
    console.log(tasksHTML);
}

document.querySelector('.js-todolist') 

function addToDo() {
    const taskInput = document.querySelector('.input-value');
    const name = taskInput.value;

    tasks.push(name);
    console.log(tasks);

    taskInput.value = '';

    updateTasks(); // Call the function to update the tasksHTML
}

