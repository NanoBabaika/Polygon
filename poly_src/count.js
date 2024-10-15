let count = 0;

const displayCount = document.getElementById('count');

const btnMinus = document.getElementById('minus');

const btnPlus = document.getElementById('plus');


btnPlus.addEventListener('click', function() {
    count++;
    // передаем значение переменной в div
    displayCount.innerHTML = count;
    if(count < 0) {
        displayCount.innerHTML = 0;
    }
})

 


btnMinus.addEventListener('click', function() {
    count--;
    displayCount.innerHTML = count;
    if(count < 0) {
        count = 0;
        displayCount.innerHTML = 0;
    }
})
 

