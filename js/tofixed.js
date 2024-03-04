
function toFixed(number, fractionLength) {
    const fraction = 10 ** fractionLength;
    const calc = Math.round(number * fraction) / fraction;
    const integer = Math.floor(calc);
    const decimal = Math.round((calc - integer) * fraction);
    let resultString = `${integer}`;
    if (fractionLength > 0) {
        resultString += `.${String(decimal).padStart(fractionLength, '0')}`;
    }
    return resultString;
}

const result = toFixed(2.548, 2);
console.log(result); 


// const number = 10;
// const fractionLength = 3;
// const fraction = 10 ** fractionLength;
// const calc = Math.round(number * fraction) / fraction;
// const integer = Math.floor(calc);
// const decimal = Math.round((calc - integer) * fraction);
// console.log(fraction);
// console.log(calc);
// console.log(integer);
// console.log(decimal);
// if (fractionLength > 0) {
//             resultString = `.${String(decimal).padStart(fractionLength, '1')}`;
//         }
// console.log(resultString);
