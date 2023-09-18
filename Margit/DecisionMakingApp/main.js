/* const getUserName = () => {
let userName = document.querySelector('#userName').value;
if (userName.length === 0) {
   greeting.textContent = 'Hello';
} else {
    greeting.textContent = `Hello, ${userName}`;
}
} */

const getAnswer = () => {
    let question = document.querySelector('#question').value;
    if (question.length === 0){
        wisdom.textContent = 'I can not answer, for I do not hear a question.'
    } else {
        let decisionStatements = '';
        const randomNumber = Math.floor(Math.random() * 10) + 1;
    switch (randomNumber) {
        case 1:
            decisionStatements = 'Look within, and you shall find the answer you seek.';
            break;
        case 2:
            decisionStatements = 'Trust your instincts, for they hold the truth you desire.';
            break;
        case 3:
            decisionStatements = 'Your question is a key that unlocks the door to knowledge.';
            break;
        case 4:
            decisionStatements = 'Answers hide in plain sight, waiting for your gaze.';
            break;
        case 5:
            decisionStatements = 'Advice from a kindred spirit may bring clarity.';
            break;
        case 6:
            decisionStatements = `Whispers of fate echo with a resounding 'yes'.`;
            break;
        case 7:
            decisionStatements = 'The waters reflect a positive response this time.';
            break;
        case 8:
            decisionStatements = 'Patience, like a lantern, guides you to the answer.';
            break;
        case 9:
            decisionStatements = 'Guided by stars, destiny advises against it.';
            break;
        case 10:
            decisionStatements = 'As dawn reveals, the answer carries a negative tone.';
            break;
    }
    wisdom.textContent = decisionStatements;
}
}