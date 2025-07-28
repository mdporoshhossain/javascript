

function getinchi(inchi) {
    const feet = inchi/12;
    return feet;
}

const naniFeet = getinchi(156);
console.log(naniFeet);

const dadiFeet = getinchi(288);
console.log(dadiFeet);