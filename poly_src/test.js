const arr = [1, 2, 3, 4, 5];

const areEven = arr.filter(bum => bum  < 2);

console.log(areEven);

let colleagues = [
    {
        name: 'Ксения',
        fathername:'Викторовна' ,
        lastname: 'Колесникова',
    },
    {
        name: 'Ольга',
        fathername:'Олеговна' ,
        lastname: 'Чердынцева',
    },
    {
        name:' Владислава',
        fathername: 'Сергеевна' ,
        lastname: 'Иванова',
    },
    {
        name: 'Ирина',
        fathername:'Николаевна' ,
        lastname: 'Сыромятова',
    },
];

 
let findedPerson = colleagues.filter(person => colleagues['Иванова']);
