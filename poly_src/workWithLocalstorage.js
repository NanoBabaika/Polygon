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
        // реструктуризация задачи
        const newTask = {
            id: Date.now(),
            text: inputValue,
        }

        tasks.push(newTask);
        console.log(tasks);
        saveTask ();
        rederTask(newTask);
    }
}; 



function rederTask(task) {
        let newTaskContent = `<li
                                 id="${task.id}"
                                 class="list__item":> ${task.text} 
                                 <button class="task_delBtn" >Удалить</button>    
                            <li/>`;
        list.insertAdjacentHTML('beforeend', newTaskContent); 
        return newTaskContent;

    }     


function saveTask () {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

 

list.onclick = function(event) {
    const btn = event.target.closest('.task_delBtn');
    const parentNode = event.target.closest('.list__item');
    
    if (!btn) {
      return;
    } else {
         const id = Number(parentNode.id);
        tasks = tasks.filter((task) => task.id !==id);
        saveTask ();
        parentNode.remove();
    }
}

