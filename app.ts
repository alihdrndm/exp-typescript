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

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) { 
    //note that the void here means that in addAndHandle function, we're not going
    //to return anything from the 'cb' callback, because anything we might return
    //will not be used
    let result = n1 + n2;
    cb(result)
}

addAndHandle(3, 5, (res) => {
    console.log('res', res);
})