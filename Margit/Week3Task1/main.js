const calcGas = () => {
const price = document.querySelector('#price').value
const money = document.querySelector('#money').value
const answer = document.querySelector('#answer')

const amount = (money/price).toFixed(3);

if (amount >= 10) {
    answer.textContent = `Oh, it's a sweet escape! You can get ${amount} liters with your money.`
} else {
    answer.textContent = `Oops, I guess you're stuck here! You can get ${amount} liters with your money.`
}
}
