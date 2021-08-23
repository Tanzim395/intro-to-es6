const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;

const result = multiply(4, 12, 3);

const fiveTimes = (num) => num * 5;
const value = fiveTimes(17);
// console.log(value);

const getName = () => 'Brandon Eich';
const name = getName();
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
};

const total = doMatth(12, 5);
console.log(total);