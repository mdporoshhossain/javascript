// fibonacciWhile.js



function fibonacciSeries(n) {
    let fibo = [0 ,1];
    let i = 2;
    while(i <= n){
        fibo[i] = fibo[i-1] + fibo[i-2];
        i++;

    }
    return fibo;
}

let result = fibonacciSeries(12);
console.log(result);