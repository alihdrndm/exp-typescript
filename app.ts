function add(n1: number, n2: number): number {
    return n1 + n2; 
}

// console.log(add(11, 31));

function printResult(num: number)  {
    console.log('Resulted', + num);
}

console.log(printResult(add(11, 32)));