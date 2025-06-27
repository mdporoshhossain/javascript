let numbars = [23, 44,54,55,66,56,65,43,32,111];

let look = numbars[0];

for(let i=0; i < numbars.length; i++){
    let element =numbars[i];
    if(element > look){
        look=element;
    }

}
console.log(look);