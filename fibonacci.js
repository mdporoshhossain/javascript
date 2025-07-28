
// Create a Fibonacci Series using a for loop

// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

// let fibo = [0 , 1];

// for (let i = 2; i <= 12; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];

//     // console.log(fibo[i] , fibo[i-1], fibo[i-2]);
    
// }
// console.log(fibo)

// Function


function fibonacci (e){
    let fibo=[0 ,1];
    for (let i = 2; i <= e; i++) {
        
        fibo[i]= fibo[i-1] + fibo[i-2];

    }
    return fibo;
}

const result = fibonacci(12);
console.log(result);

const myResult = fibonacci(10);
console.log(myResult);