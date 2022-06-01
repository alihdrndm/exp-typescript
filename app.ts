type Combinable = number | string;
type ConversionDescriptor = 'to-number' | 'to-text'

function combine(input1: Combinable, input2: Combinable, convertResult: ConversionDescriptor) {
    let result;
   if (typeof input1 === 'number' && typeof input2 === 'number' || convertResult === 'to-number') {
       result = +input1 + +input2;
   }else {
       result = input1.toString() + input2.toString();
   } 
    return result; 
}

console.log(combine(40, 34, 'to-number'));

console.log(combine('Ali', 'Haider', 'to-text'));