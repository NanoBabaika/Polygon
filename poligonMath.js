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

 
let aVariable = 15;

let bVariable = 5;

console.log(aVariable > bVariable);
