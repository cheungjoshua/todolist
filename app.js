//Selectors
const todoInput = document.querySelector('.todo-input'); 
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 


//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions

function addTodo(evt) {
    //prevent refresh
    evt.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //creat Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    //Add Li to Todo
    todoDiv.appendChild(newTodo);
    //Add Todo div to todoList
    todoList.appendChild(todoDiv);
    //Creat Add Button
    addButton = document.createElement('button');
    addButton.innerHTML = 'Done';
    addButton.classList.add('done-button');
    todoDiv.appendChild(addButton);
    //Create Remove Button
    removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.classList.add('remove-button');
    todoDiv.appendChild(removeButton);
   

}
