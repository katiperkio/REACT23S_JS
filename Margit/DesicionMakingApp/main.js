const userName = prompt('What is your name?');
//const userName = 'Kati';

if (userName.length === 0) {
    console.log('Hello');
} else {
    console.log(`Hello, ${userName}`);
}

const userQuestion = prompt('What is the wisdom you seek?');
//const userQuestion = 'Should I take a nap?'
let decisionStatements = '';
const randomNumber = Math.floor(Math.random() * 10) + 1;

switch (randomNumber) {
    case 1:
        decisionStatements = 'The stars say yes, go for it!';
        break;
    case 2:
        decisionStatements = 'Trust your instincts and take the leap.';
        break;
    case 3:
        decisionStatements = 'Hmm, better try again later.';
        break;
    case 4:
        decisionStatements = 'Consider all options before making a move.';
        break;
    case 5:
        decisionStatements = 'The outlook is bright, proceed with confidence.';
        break;
    case 6:
        decisionStatements = 'Seek advice drom a trusted friend before deciding.';
        break;
    case 7:
        decisionStatements = 'Signs point to unexpected opportunities.';
        break;
    case 8:
        decisionStatements = 'It is a toss-up, make a choice and see what happens.';
        break;
    case 9:
        decisionStatements = 'Take a step back and reassess before moving forward.';
        break;
    case 10:
        decisionStatements = 'Not the right time, patience will bring better results.';
        break;
}

console.log(decisionStatements);