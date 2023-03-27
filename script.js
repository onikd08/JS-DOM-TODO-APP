// Select necessary elements

const form = document.querySelector('form');
const newTaskField = form.querySelector('input[type = "text"]');
const incompleteTasksContainer = document.querySelector('.todo-list');
const incompleteTasksUl = incompleteTasksContainer.querySelector('ul');


const createAnIncompleteTask = (taskName) => {

    const liElement = document.createElement('li');
    const checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    const label = document.createElement('label');
    label.innerText = taskName;
    liElement.appendChild(checkBoxElement);
    liElement.appendChild(label);
    liElement.classList.add('item');
    incompleteTasksUl.appendChild(liElement);

};

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const taskName = newTaskField.value;

    //list new task in the Incomplete Task section
    createAnIncompleteTask(taskName);

    newTaskField.value = "";
});