// Создание класса
class Product{
    constructor(name, price,) {
        this.name = name;
        this.price = price;
    }

    discountAlert() {
        console.log('стандартная скидка не более 5%');
    }
}


// Создание нового объекта
const banana = new Product ('Banan', 150);
 

// Синтаксис функции конструктора
function NewCollegue(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log('Добро пожаловать ' + this.name);
    }
}


const newcollegue = new NewCollegue('Alina', 37);




