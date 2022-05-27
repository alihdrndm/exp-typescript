function combine(input10: number | string, input20: number | string) {
    let result;
   if (typeof input10 === 'number' && typeof input20 === 'number') {
       result = input10 + input20;
   }else {
       result = input10.toString() + input20.toString();
   } 
    return result; 
}

console.log(combine(30, 34));

console.log(combine('Ali', 'Haider'));