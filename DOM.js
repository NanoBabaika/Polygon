
// Создание элемента
let scrtiptLIst = document.createElement('div');
// Добавление текста в элмент
scrtiptLIst.textContent = 'New text content';
// Добавление класса
scrtiptLIst.classList.add('new_dom');
// Добавление id
scrtiptLIst.id = 'idUl';

// Смена стилей через JS
scrtiptLIst.style.color = 'red';

 
// Добавление эмента в дом дерево
// 1. Определяем куда будем страивать элмент. 
// Для этого присваиваем переменную нужному элеменнту через id
let domTestContainer = document.getElementById('domtest');
// 2. Добавляем элмент
domTestContainer.prepend(scrtiptLIst);
scrtiptLIst.innerHTML = "<a href='#'>Link</a>"


// функция для добавлния элемента.
function creatDivInDomTest() {
    let newElement = document.createElement('div');
    newElement.classList.add('new_elem');
    newElement.textContent = 'TEXT from creatDivInDomTest';
    newElement.style.color = 'blue';
    domTestContainer.appendChild(newElement);
}

// определяем кнопку как переменную
const buttonTestDiv = document.getElementById('btn_dom');

// Вешаем на кнопку обработчик события и вызваем нужный нам код
buttonTestDiv.addEventListener('click', function() {
    creatDivInDomTest();
    alert('Добавлен новый элемент!');    
})
