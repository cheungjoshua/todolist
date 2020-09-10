//Selectors
const todoInput = document.querySelector('.todo-input'); 
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 


//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', doneRemove);

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
    newTodo.classList.add('todo-item');
    //Add Li to Todo
    todoDiv.appendChild(newTodo);   
    //Creat Add Button
    addButton = document.createElement('button');
    addButton.innerHTML = 'Done';
    addButton.classList.add('done-btn');
    todoDiv.appendChild(addButton);
    //Create Remove Button
    removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.classList.add('remove-btn');
    todoDiv.appendChild(removeButton);

    // // Add function for Remove Button
    // removeButton.addEventListener('click', remove);

    todoInput.value = '';
    //Add Todo div to todoList
    todoList.appendChild(todoDiv);
}

// function remove(e) {
//     e.preventDefault();
//     const item = e.target;
//     console.log(item);
//     const parent = item.parentElement;
//     parent.remove();
// }

function doneRemove(e) {

}