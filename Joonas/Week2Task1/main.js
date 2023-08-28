/* let inputNumber;

do {
inputNumber = parseInt(prompt('Please enter a number:'));
posOrNeg();
} while (inputNumber < 0)

function posOrNeg() {
    if (inputNumber < 0) {
        alert("Please enter a positive number")
    } else if (inputNumber % 2 == 0) {
        alert(`Number ${inputNumber} is even`);
    } else if (inputNumber % 2 != 0) {
        alert(`Number ${inputNumber} is odd`);
    }
} */

// Loop Assignments (Don’t use arrays)

// 1.  Make a program that prints all positive numbers that are odd and smaller
//     than 100 starting from 1. (1 3 5 7 9 11...)

/* let number = 1;

do {
        if (number % 2 === 1) {
            console.log(number);
        }
    number ++;
} while (number <= 100); */

/* for (let i = 1; i < 100; i += 2) {
    console.log(i);
} */

/* for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
} */

// 2.  Make a program that prints all positive numbers that are smaller than
//     100 and even, in this order: 2 98 4 96 6 94... Print result in one line.

/* let result = ''; // making an empty string

for (let i = 2; i < 50; i+= 2) { // declare variable ; condition (for how long) ; on every loop add 2 to i
    result += i + ' '; // adding i to result string in every loop
    if ( i != 50) {
        result += (100 - i) + ' '; // adding 100 - i to result string in every loop as long as i is not 50
    }
} // going back to start of loop on line 47

console.log(result);
 */

// 3.  Make a program that asks repeatedly from the user the distance (km) and
//     time (h) and calculates average speed. The program ends when user gives
//     0 for the distance. (After getting 0, the program does not ask anything
//     from the user.)

/* let distance;
let time;

for (let i = 0; i < Infinity; i++) {
    distance = prompt("What is the distance in kilometers");
    if (distance == 0) {
        break;
    }
    time = prompt("How much is the time in hours?");
    let avgSpeed = distance / time;
    console.log(`Your average speed is ${avgSpeed} km/h`)
} */

// 4.  Make a program that asks 20 numbers from user. After that the program
//     prints out how many of those numbers where even.

/* let result = '';
let number;

for (let i = 0; i < 20; i++) {
    number = prompt ('Please give a number');
    if (number % 2 === 0) {
        result += number + ' ';
    }
}

console.log(result); */

// 5.  Make a program that asks numbers from the user, until user gives 0 and
//     then program ends. In the end program prints out average of the numbers.

/* let sum = 0;
let amount = -1;
let number;

do {
    number = parseInt(prompt('Please give a number, you can exit by 0'));
    sum += number;
    amount++;
} while (number != 0)

console.log(`The average of the numbers is ${sum/amount}`); */

// 6.  Make a program that asks 25 numbers form the user. In the end program
//     printsout average of the numbers.

/* let sum = 0;
let amount = 0;
let number;

for (let i = 0; i < 25; i++) {
    number = parseInt(prompt('Please give 25 numbers'));
    sum += number;
    amount++;
}

console.log(`The average of the numbers is ${sum/amount}`); */

// 7.  Make a program that ask first one number from the user. After that the
//     program asks: "Do you want to continue giving numbers?(y/n)". If user
//     answers y, the program continues to ask another number. If user answers
//     n, program ends. In the end program prints out average of the numbers.

/* let number;
let sum = 0;
let amount = 0;
let answer = '';

for (let i = 0; i < Infinity; i++) {
    number = parseInt(prompt('Please give a number'));
    sum += number;
    amount++;
    answer = prompt('Do you want to continue giving numbers? (y/n)');
    if (answer === 'n') {
        break;
    }
}

console.log(`The average of the numbers is ${sum/amount}`); */

// 8.  Make a program that asks first how many numbers user wants to give to
//     the program. After that program asks those numbers. In the end program
//     prints out the smallest number that user gave.

/* let max = parseInt(prompt('How many numbers would you like to give?'));
let number;
const nums = [];

for (let i = 0; i < max; i++) {
    number = prompt('Please give a number');
    nums.push(number);
}

console.log(`The smallest number you gave is ${Math.min.apply(null, nums)}`) */

// 9.  Make a program that asks ten numbers and in the end prints out two
//     biggest numbers.

/* const nums = [];
let number;

for (let i = 0; i < 10; i++) {
number = prompt('Please give a number');
nums.push(number);
}

nums.sort(function(a, b){return b - a});

console.log(`Two biggest numbers from the numbers you gave are ${nums[0]} and ${nums[1]}`); */

// 10. Make a program that asks ten numbers. Program calculates and prints out
//     sum and average, also prints out the smallest and biggest number.

let number;
let sum = 0;
let amount = 0;
const nums = [];

for (let i = 0; i < 10; i ++) {
    number = parseInt(prompt('Please give a number'));
    sum += number;
    amount++;
    nums.push(number);
}

nums.sort(function(a, b) {return a - b});
console.log(`The sum of the numbers is ${sum} and the average is ${sum/amount}`);
console.log(`The smallest number is ${nums[0]} and biggest is ${nums[9]}`);