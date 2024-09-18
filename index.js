const head_container = document.getElementById('h_container');
head_container.style.border = '1px solid purple';
const taskList = document.getElementById('list')
taskList.style.border = '1px solid purple';

let input = document.querySelector('input');
const addBtn = document.getElementById('add');


function createNewTask() {
    const newElem = document.createElement('li');
    newElem.classList.add('new__task');
    taskList.prepend(newElem);
    console.log(newElem);

    // получаем значение из инпута и пушим в новый элемент
    let inputText = document.getElementById('taskText').value;
    newElem.innerHTML = inputText;


    // кнопака готово
    const doneBtn = document.createElement('btn');
    doneBtn.classList.add('done_btn');
    doneBtn.innerHTML = 'Готово';
    doneBtn.append(newElem);
    // кнопка удалить задачу 
    const delBtn = document.createElement('btn');
    delBtn.classList.add('del_btn');
    delBtn.innerHTML = 'Удалить';
    delBtn.append(newElem);
}
 
addBtn.addEventListener('click', createNewTask);

