
function toFixed(number, fractionLength) {
    const fraction = 10 ** fractionLength;
    const calc = Math.round(number * fraction) / fraction;
    const integer = Math.trunc(calc);
    const decimal = Math.round((calc - integer) * fraction);
    let resultString = `${integer}`;
    if (fractionLength > 0) {
        resultString += `.${String(Math.abs(decimal)).padStart(fractionLength, '0')}`;
    }
    return resultString;
}

console.log(toFixed(3, 0), '-->', '3');
console.log(toFixed(-3, 0), '-->', '-3');
console.log(toFixed(3.14, 0), '-->', '3');
console.log(toFixed(-3.14, 0), '-->', '-3');
console.log(toFixed(3.11, 1), '-->', '3.1');
console.log(toFixed(-3.12, 1), '-->', '-3.1');
console.log(toFixed(3.14, 5), '-->', '3.14000');
console.log(toFixed(-3.14, 5), '-->', '-3.14000');
console.log(toFixed(3.1412, 3), '-->', '3.141');
console.log(toFixed(-3.1412, 3), '-->', '-3.141');
console.log(toFixed(3.14, 2), '-->', '3.14');
console.log(toFixed(-3.14, 2), '-->', '-3.14');
console.log(toFixed(3.14159, 5), '-->', '3.14159');
console.log(toFixed(-3.14159, 5), '-->', '-3.14159');
console.log(toFixed(3.14, 4), '-->', '3.1400');
console.log(toFixed(-3.14, 4), '-->', '-3.1400');
console.log(toFixed(3.1412, 0), '-->', '3');
console.log(toFixed(-3.1412, 0), '-->', '-3');
console.log(toFixed(3.1, 2), '-->', '3.10');
console.log(toFixed(-3.1, 2), '-->', '-3.10');
console.log(toFixed(3, 3), '-->', '3.000');
console.log(toFixed(-3, 3), '-->', '-3.000');

console.log(toFixed(3.14159, 3), '-->', '3.142');
console.log(toFixed(-3.14159, 3), '-->', '-3.142');

