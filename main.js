
// When loading the page, load from localStorage.
const todoList = JSON.parse(localStorage.getItem('todoList')) || 
   [] ;
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';
  
    for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;
      const { name,time, dueDate } = todoObject;
      const html = 
      `<div class= 'js-tasks'>
        <div class='task'>${name}</div>
        <div class='time'>${time}</div>
        <div class='date'>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();

            // Whenever we update the todo list, save in localStorage.
            saveToStorage();
        " class="delete-todo-button">
            Delete
        </button> 
      </div>
      `;
      todoListHTML += html;
    }
  
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  }
  
  function addTodo() {
    const nameInputElement = document.querySelector('.js-name-input');
    const name = nameInputElement.value;

    const timeInputElement = document.querySelector('.js-time-input');
    const time = timeInputElement.value
  
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
  
    todoList.push({
      //name: name,
      //dueDate: dueDate,
      name,
      time,
      dueDate
    });
  
    nameInputElement.value = '';
  
    renderTodoList();
  
    // Whenever we update the todo list, save in localStorage.
    saveToStorage();
  }
  
  function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

