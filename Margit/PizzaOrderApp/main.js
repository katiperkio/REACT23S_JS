const getCustomerName = () => {
    let customerName = document.querySelector('#customerName').value;
    if (customerName.length === 0) {
        nameSubmit.textContent = 'What kind of pizza would you like?'
    } else if (customerName.length != 0) { 
    nameSubmit.textContent = `What kind of pizza would you like, ${customerName}?`;
}
}

const getTotalSum = () => {
    let totalSum = 0, sumToppings = 0, toppingCount = 0;
    const sizeNodeList = document.querySelectorAll('input[type=radio]:checked');
    const toppingsNodeList = document.querySelectorAll('input[type=checkbox]:checked');
    const deliveryNodeList = document.querySelectorAll('select');

    for (let i = 0; i < sizeNodeList.length; i++) {
        let selectedSize = sizeNodeList[i];
        if (selectedSize.value === '2') {
            totalSum += 7.5;
        } else if (selectedSize.value === '4') {
            totalSum += 10.5;
        } else if (selectedSize.value === '6') {
            totalSum += 12.5;
        } else if (selectedSize.value === '8') {
            totalSum += 15.5;
        }
        }

    for (let i = 0; i < toppingsNodeList.length; i++) {
        let selectedToppings = toppingsNodeList[i];
        if (selectedToppings.checked == true) {
            toppingCount ++;
        }
        if (toppingCount <= 4) {
            sumToppings = 0;
        } else if (toppingCount > 4) {
            sumToppings = (toppingCount - 4) * 0.5;
        }
    }

    for (let i = 0; i < deliveryNodeList.length; i++) {
        let selectedDelivery = deliveryNodeList[i];
        if (selectedDelivery.value === "homeDelivery") {
            totalSum += 5;
        }
    }
        totalSum += sumToppings;
        sumTotal.textContent = `Your total comes to ${totalSum}€`
    }