type Combinable = number | string;  // custom type
type ConversionDescriptor = 'as-number' | 'as-text'    // union type ve literal type birlikte kullanımı

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;           // önüne + koyduğunda sayıya dönüşür !!!
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number'){
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combinedAges = combine(30,26,'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30','26','as-number')
console.log(combinedStringAges)

const combinedNames = combine('Max','Anna','as-text');
console.log(combinedNames);