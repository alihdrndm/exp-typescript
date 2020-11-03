// our function with 2 parameters
function add(n1: number, n2: number): number {
    return n1 + n2; 
}

// our function with only 1 parameter
function printResult(num: number)  {
    console.log('Resulted', + num);
}

// declaring a variable and giving it a type of Function
let combineValues: (a: number, b: number) => number;

combineValues = add;

combineValues = printResult; // notice this assignment throws error

console.log(combineValues(8, 8));