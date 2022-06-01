function combine(input1: number | string, input2: number | string, convertResult: 'to-number' | 'to-text') {
    let result;
   if (typeof input1 === 'number' && typeof input2 === 'number' || convertResult === 'to-number') {
       result = +input1 + +input2;
   }else {
       result = input1.toString() + input2.toString();
   } 
    return result; 
}

console.log(combine(31, 34, 'to-number'));

console.log(combine('Ali', 'Haider', 'to-text'));