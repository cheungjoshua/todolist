//Selectors
const todoInput = document.querySelector('todo-input'); 
const todoButton = document.querySelector('todo-button'); 
const todoList = document.querySelector('todo-list'); 


//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions

function addTodo(e) {
    //prevent refresh
    e.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //creat Li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
}
