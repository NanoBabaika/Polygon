console.log('Привет, кожанный! |_{^_^}_| Давай проверим твой код на работоспособность');
 
let sotrunnik1 = {
    name: 'Ksenia',
    fathername:'Viktorovna' ,
    lastname: 'Kolesnikova',
};

let sotrunnik2 =  {
    name: 'Vladislava',
    fathername: 'Sergeevna' ,
    lastname: 'Ivanova',
}


function initials (person) {
    // Находим элементы массива и получаем к ним доступ
    let keyName ='name';
    let keyFathername = 'fathername'; 
    let Family = person.lastname;

    // обращаемся И и О обрезаем лишнее и оставляем только 1й символ
    let initialsName = person[keyName].charAt(0);
    let initialFathername = person[keyFathername].charAt(0);
     
    // Возвращаем результат в виде строки и выводим в консоль
    let resultInitials =`Сотрудник ${Family} ${initialsName}.${initialFathername}.`;
    console.log( resultInitials);
    return resultInitials;
}

// Типа база данных, потом нужно будет вывести в отдельный файл
let colleagues = [
    {
        name: 'Ksenia',
        fathername:'Viktorovna' ,
        lastname: 'Kolesnikova',
    },
    {
        name:' Vladislava',
        fathername: 'Sergeevna' ,
        lastname: 'Ivanova',
    },
    {
        name: 'Irina',
        fathername:'Olegovna' ,
        lastname: 'Kozlova',
    },
];
 
// Функция для поиска нужной информации
function findPerson(findOption,  wantedPerson,   personArray = colleagues,) {
    let len = personArray.length;
    let findedItem = {}

    for(let index = 0;  index < len; index++) {
        if(personArray[index][findOption] === wantedPerson){
            let findedItem  = personArray[index];
            let {name, fathername, lastname} = findedItem;
            let resultInfo = `Данные сотрудника найдены: ${name} ${fathername} ${lastname}`
            console.log(resultInfo);
            return resultInfo;
        } else {
            findedItem = ''
        }
    }

    if(findedItem === '') {
        console.log('Сотрудник не найден проверьте данные....')
    }

}

 
// Присвоить переменную инпут и получить введенное пользователем значение

// Определили кнопку
let searchBtn = document.getElementById('findBtn');

// Вещаем обработчик события
searchBtn.addEventListener('click', getValue);


// Получаем значение из инпута
function getValue() {
  let valueInput = document.getElementById('findInput').value;
  let searchValue = valueInput.split(' ');
  let searchParameter=searchValue[0];
  let seachInfo=searchValue[1];
 
  if(searchValue.length === 2) {
    findPerson(searchParameter, seachInfo);
   } else {
    console.log('Слишком много данных');
  }
}
 

















































console.log('Результат такой. Проверь что сможешь улучшить')