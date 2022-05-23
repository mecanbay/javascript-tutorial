const form = document.querySelector('#todo_form');
const input = document.querySelector('#input');


function readLocalStorage(){
    let todos = localStorage.getItem('todos');
    if (!todos) {
        localStorage.setItem('todos', JSON.stringify([]))
        
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
        todos.forEach( todo => {
            createTodoElement(todo)
        });
    }
}


function createTodoElement(todo){
    const ulDOM = document.querySelector('.list-group')
    const liDOM = document.createElement('li');
    const todoLeft = document.createElement('div');
    const todoRigth = document.createElement('div');
    const todoLabel = document.createElement('label');
    const todoDelete = document.createElement('button');
    

   

    todoDelete.classList.add('btn', 'btn-sm', 'btn-danger');
    todoDelete.textContent = 'Sil';
    todoDelete.id = todo.id;

   

    todoLabel.textContent = todo.title;
    todoLabel.setAttribute('for', todo.id);

    liDOM.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'list-group-item', 'list-group-item-action', 'border-dark');

    todoLeft.append(todoLabel);
    todoRigth.append(todoDelete);

    liDOM.append(todoLeft, todoRigth);

    ulDOM.append(liDOM);


    const deleteButton = document.querySelectorAll('.btn-danger')
    const editButton = document.querySelectorAll('.btn-primary');
    deleteButton.forEach(btn => btn.addEventListener('click', deleteTodo))
    editButton.forEach(btn => btn.addEventListener('click', editTodo))
    



}

const alertMessage = (message, types) => {
    let alerts = document.createElement('div');
    let footerDOM = document.querySelector('.card-footer');
    alerts.classList.add('alert', `alert-${types}`, 'mt-3');
    alerts.textContent = message;

    form.append(alerts)
    setTimeout(function(){
        alerts.remove();
    }, 1500);
    

}

const addTodo = (event) => {
    event.preventDefault();
    todoText = input.value;
    if(todoText.trim() == ''){
        alertMessage('Todo Boş Girilemez !', 'danger');
    }else{
        const todo = {
            id : new Date().getTime(),
            title : todoText,
            isCompleted : false
        }
        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(todo)
        localStorage.setItem('todos', JSON.stringify(todos));
        createTodoElement(todo)
    
        input.value = null;
    }

    
}



function deleteTodo(event){
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos = todos.filter(todo => todo.id != event.target.id)
    localStorage.setItem('todos', JSON.stringify(todos));
    let todo = event.target.parentElement.parentElement;
    todo.remove()
}

function editTodo(event){
    todoId = event.target.id;
    let editedInput = document.querySelector()
    console.log(editedInput);
}




readLocalStorage()



form.addEventListener('submit', addTodo);

const deleteButton = document.querySelectorAll('.btn-danger');
const editButton = document.querySelectorAll('.btn-primary');
if(deleteButton.length > 0 && editButton.length > 0){
    deleteButton.forEach(btn => btn.addEventListener('click', deleteTodo))
    editButton.forEach(btn => btn.addEventListener('click', editTodo))

}
// 






