function nameV(num1 , num2) {
    if(num2==undefined){
        num2 = 0
    }
    const total = num1 + num2;
    return total;
}
console.log(nameV(12));

// es6
function nameF(num1 , num2 = 0) {
    const total = num1 + num2;
    return total;
}
console.log(nameF(12));