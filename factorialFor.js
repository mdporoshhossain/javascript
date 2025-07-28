

// Calculate Factorial of a number using for loop.

// 3! =3*2*1
// 4! =4*3*2*1
// 5! = 5*4*3*2*1

// let Factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     Factorial = Factorial * i;
//     console.log(Factorial);
    
// }

function factorialFunction(n) {
    let factorialVar = 1;
    for (let i = 1; i <= n; i++) {
        factorialVar = i * factorialVar;
        
    }
    return factorialVar;
}
let result = factorialFunction(10);
console.log(result);