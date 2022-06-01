function combine(input10: number | string, input20: number | string) {
    let ourResult;
   if (typeof input10 === 'number' && typeof input20 === 'number') {
       ourResult = input10 + input20;
   }else {
       ourResult = input10.toString() + input20.toString();
   } 
    return ourResult; 
}

console.log(combine(30, 34));

console.log(combine('Ali', 'Haider'));