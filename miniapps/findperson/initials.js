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


// Написать функцию которая будет принимать массив объектов и будет выводить список сотрудников и инцициаалми.
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
 

function findPerson( findOption, wantedPerson, personArray = colleagues,) {
    let resultArray = [];
    let len = personArray.length;

    for(let i = 0;  i < len; i++) {
        if(personArray[i][findOption] === wantedPerson){
            resultArray.push(personArray[i]);
        }
    }

    if (resultArray.length === 0) {
        console.log('Неудалось найти нужного сотрудника')
    } else {
        console.log(resultArray);
    }
}


findPerson( 'lastname', 'Kozlova');