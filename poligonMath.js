let numbers = [ 1, 2 , 12, 18, 25, 3]

function evenNumber (initialArr) {
    let resultArr = [];

    for (let i; i < initialArr.lenght; i++) {
        if (i % 2 === 0) {
            resultArr.push(i);
        }
    }
    return resultArr;
}


console.log(evenNumber(numbers));
