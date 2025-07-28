
// let i = 1;
// let factorial = 1;
// while (i <= 5) {
//     factorial= factorial * i;
//     console.log(i ,factorial);
//         i++;

// }

function functionName(e) {
    let i = 1;
    let factorial =1;

    while (i <= e) {
        factorial= factorial * i;
        i++;
    }
    return factorial;
}

let result = functionName(5);
console.log(result);