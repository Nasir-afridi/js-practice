/*
    let string = 'Nasir';
    let reverse = string.split('').reverse('').join('');
    console.log(reverse);
*/


let numbers = [4, 10, 2, 99, 23];
let max = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max)