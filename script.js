// Select necessary elements

const form = document.querySelector('form');
const newTaskField = form.querySelector('input[type = "text"]');
const incompleteTasksContainer = document.querySelector('.todo-list');
const incompleteTasksUl = incompleteTasksContainer.querySelector('ul');
const completeTasksUl = document.querySelector('.complete-list ul');

const createAnIncompleteTask = (taskName) => {

    const liElement = document.createElement('li');
    const checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    const label = document.createElement('label');
    label.innerText = taskName;
    liElement.appendChild(checkBoxElement);
    liElement.appendChild(label);
    liElement.classList.add('item');
    return liElement;

};

const addTaskToIncompleteContainer = (event) => {
    event.preventDefault();
    const taskName = newTaskField.value;
    newTaskField.value = "";
    const liElement = createAnIncompleteTask(taskName);
    incompleteTasksUl.appendChild(liElement);
    bindIncompleteItems(liElement);
};

const checkboxHandler = function() {
    const liElement = this.parentNode;
    const checkbox = liElement.querySelector("input[type = 'checkbox']");
    removeTaskFromContainer(liElement, incompleteTasksUl);
    checkbox.remove();
    addTaskToCompleteContainer(liElement);
};

const buttonClickHandler = function () {
    const liElement = this.parentNode;
    removeTaskFromContainer(liElement, completeTasksUl);
};

const addTaskToCompleteContainer = (liElement) => {
    completeTasksUl.appendChild(liElement);
    const deleteButton = createDeleteButton();
    liElement.appendChild(deleteButton);
    bindCompleteItems(liElement);
};

const createDeleteButton = () => {
    const btn = document.createElement('button');
    btn.classList.add('delete');
    btn.innerText = 'Delete';
    return btn;
};

const removeTaskFromContainer = (liElement, ul) => {
    ul.removeChild(liElement);
};

const bindIncompleteItems = (liElement) => {
    const checkBoxElement = liElement.querySelector('input');
    checkBoxElement.onchange = checkboxHandler;
};

const bindCompleteItems = (liElement) => {
    const btn = liElement.querySelector('button');
    btn.onclick = buttonClickHandler;
};

form.addEventListener('submit', addTaskToIncompleteContainer);

for(i = 0; i < incompleteTasksUl.children.length; i++){
    bindIncompleteItems(incompleteTasksUl.children[i]);
};

for(i = 0; i < completeTasksUl.children.length; i++){
    bindCompleteItems(completeTasksUl.children[i]);
};