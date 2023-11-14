
const tasks = [];
displayTasks();

function displayTasks() {
    let tasksHTML = '';

    function updateTasks() {
        document.querySelector('.js-todolist').innerHTML = tasksHTML;
    }

    for (let i = 0; i < tasks.length; i++) {
        const toDo = tasks[i];
        tasksHTML += `<p>${toDo}</p>`;
    }

    updateTasks();
}

function addToDo() {
    const taskInput = document.querySelector('.input-value');
    const name = taskInput.value;

    tasks.push(name);
    console.log(tasks);

    taskInput.value = '';

    displayTasks();
}

