/*
                    01.
    let string = 'Nasir';
    let reverse = string.split('').reverse('').join('');
    console.log(reverse);


                    02.
    let numbers = [4, 10, 2, 99, 23];
    let max = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
    }console.log(max)


                    03.
    let number = 90;
    let isPrime = true;
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            isPrime = false;
            break;
        }}
        if(isPrime && number > 1) {
            console.log('Prime');
        } else{
            console.log('Not prime')
        }

  
                    04.
    let number = 123456;
    let reverse = number.toString().split('').reverse().join('');
    console.log(reverse)
    */


    let celsuis = 25;
    let fahernheit = (celsuis * 9/5) + 32
    console.log(fahernheit)