/* let workHours = parseFloat(prompt('How many hours did you work today?'));
let hourlyRate = parseFloat(prompt('What is your hourly rate?'));
let salary = 0;

if (workHours > 0 && workHours <= 7) {
    salary = workHours * hourlyRate
    console.log(salary);
} else if (workHours > 7 && workHours <= 9) {
    salary = (hourlyRate * 7) + ((workHours - 7) * hourlyRate * 1.5);
    console.log(salary);
} else if (workHours > 9) {
    salary = (hourlyRate * 7) + (hourlyRate * 2 * 1.5) + ((workHours - 9) * hourlyRate * 2.0);
    console.log(salary);
} else if (workHours <= 0 || workHours > 24) {
    console.log('Invalid hours');
} */

/* const firstNumber = parseInt(prompt('Enter the first number:'));
const secondNumber = parseInt(prompt('Enter the second number:'));
const thirdNumber = parseInt(prompt('Enter the third number:'));

if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber >= 0) {
    //Too many backticks eat into readability:
    //console.log(`The numbers you entered are ` + firstNumber + `, ` + secondNumber + ` and ` + thirdNumber);
    console.log(`The numbers you entered are ${firstNumber}, ${secondNumber} and ${thirdNumber}`);
    console.log(`The sum of the numbers is ${firstNumber + secondNumber + thirdNumber} \nThe product of the numbers is ${firstNumber * secondNumber * thirdNumber}`);
} else if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
    console.log(`The numbers you entered are ${firstNumber}, ${secondNumber} and ${thirdNumber}`);
    console.log('Only negative numbers');
} else {
    console.log(`The numbers you entered are ${firstNumber}, ${secondNumber} and ${thirdNumber}`);
    console.log(`The sum of the numbers is ${firstNumber + secondNumber + thirdNumber}`);
} */

function posOrNeg() {
    const inputNumber = parseInt(prompt('Please enter a number:'));
    if (inputNumber <= 0) {
        alert("Please enter a positive number greater than 0")
        posOrNeg();
    } else if (inputNumber % 2 == 0) {
        alert(`Number ${inputNumber} is even`);
    } else if (inputNumber % 2 != 0) {
        alert(`Number ${inputNumber} is odd`);
    }
}
posOrNeg();