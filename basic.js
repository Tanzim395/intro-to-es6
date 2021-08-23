// variable declaration
var deposit = 400;
// condition
if (deposit > 500) {
    console.log('deposit is greater than 500');
}
else if (deposit < 500) {
    console.log('deposit is less than 500');
}
if (deposit == 500) {
    console.log('deposit is equal to 500');
}
if (deposit != 500) {
    console.log('deposit is not equal to 500');
}
if (deposit >= 500) {
    console.log('deposit is greater or equal to 500');
}
if (deposit <= 500) {
    console.log('deposit is less or not equal to 500');
}
else {

}

//array
const numbers = [45, 6587, 124, 45, 1, 365];
const numbersCount = numbers.length; //Array element number
numbers.push(111);//add new element in array.
numbers.pop();//to remove a element from an array.
numbers[2] = 555;
//check whether 222 included in the array
if (numbers.indexOf(222) != -1) {

}
if (numbers.includes(222)) {

}
//loop
// while,for
//for off loop:
for (const number of numbers) {

}
//function
function fullName(first, second) {
    const name = first + '' + second;
}
const person = fullName('Rahim', 'Ali');

//object
const bottle = { color: 'yellow', contain: 'water', price: 50 };