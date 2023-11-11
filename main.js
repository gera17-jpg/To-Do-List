
const tasks = [];

function addToDo() {
    const taskInput = document.querySelector('.input-value');
    const name = taskInput.value;

    tasks.push(name);
    console.log(tasks);
}
