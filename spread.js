const numbers = [23, 65, 55, 99, 21, 36];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
