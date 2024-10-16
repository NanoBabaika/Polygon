let arrNumbers = [ 1, 2 , 12, 18, 25, 3]

function evenNumber (numbers) {
    let resultArr = [];

    for (let number of numbers ) {
        if (number % 2 === 0) {
            resultArr.push(number);
        }
    }
    return resultArr;
}


let storkeArr = ['Банан', 'Вишня', 'Крыжовник', 'Клубника',];

const strokeList = storkeArr.reduce((acc, item) => {
    acc[`наименование продукта-${item}`] = item;
    return acc;
}, {});


const summlist = arrNumbers.reduce((acc, elem) => {
    acc += elem;
    return acc
}, 0)

function showAllElem(comingValue) {
    let resultValue = [];

    comingValue.forEach(element => {
        resultValue.push(element)
    });

    return resultValue;
}

 
 
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

// Получение инициалов
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