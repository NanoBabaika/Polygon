const additionBtn = document.getElementById('add');
const delBtn = document.getElementById('rem');
const list = document.getElementById('list');
 

// Научить приложение хранить данные !!!!
let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    for (task of tasks) {
        rederTask(task);
    }
   }

additionBtn.onclick = function() {
    let inputValue = document.getElementById('taskText').value;

    if (inputValue === '') {
        console.log('пустое значение');
        return false;
    } else {
        tasks.push(inputValue);
        console.log(tasks);
        saveTask ();
        rederTask();
    }
}; 



function rederTask() {
    for(let task of tasks) {
        let newTaskInfo = `<li
                                class="list__item":> ${tasks} 
                                <button class="task_delBtn" >Удалить</button>    
                            <li/>`;
        let SavedItem = list.insertAdjacentHTML('beforeend', newTaskInfo); 
        return SavedItem;

    }     
}

function saveTask () {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

 

// list.onclick = function(e) {
//     const btn = e.target.closest('.task_delBtn');
//     if (!btn) {
//       return;
//     }    
//     btn.parentElement.remove();
// }

