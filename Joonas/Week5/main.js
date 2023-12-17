/* Task 1: Write code which models a pizza as a class. Pizza has at least following properties: name, toppings, base price for a small pizza. Pizza has also a functions, which calculates it’s price. */

/* Task 2: Write code which models an order to a pizza place as a class. The order has a customer name, delivery type, and there can be several pizzas in one order. Order can be updated by adding pizzas to it with a method of the order class. */

const freeToppingsAmount = 4;
const xtraToppingsPrice = 50;

class Pizza {
  // Class representing a Pizza
  constructor(name = "", toppings = [], basePrice = 0) {
    this.name = name; // Name of the pizza
    this.toppings = toppings; // Toppings array
    this.basePrice = basePrice; // Base price is in cents!!
  }

  // Function to calculate the price of the pizza
  calcPrice() {
    let extraToppings = this.toppings.length - freeToppingsAmount;
    if (extraToppings < 0) {
      extraToppings = 0;
    }

    return this.basePrice + extraToppings * xtraToppingsPrice;
  }
}

const americano2 = new Pizza("americano", ["ham", "tomato", "cheese"], 1000);
americano2.basePrice = 1100;

const americano1 = new Pizza();
americano1.name = "americano";
americano1.toppings = ["ham", "tomato", "cheese"];
americano1.basePrice = 1000;

console.log(americano1.calcPrice());

class PizzaOrder {
  // Class representing an order for pizzas
  constructor(customerName = "", deliveryOpt = "EAT_IN") {
    this.customerName = customerName; // Name of the customer
    this.deliveryOpt = deliveryOpt; // Delivery type
    this.pizzas = []; // Array to store pizzas in the order
  }

  // Method to add a pizza to the order
  addPizza(pizza) {
    this.pizzas.push(pizza);
  }

  // Method to calculate the total price of the order
  getPrice() {
    let totalPrice = 0;

    for (let i = 0; i < this.pizzas.length; i++) {
      totalPrice += this.pizzas[i].calcPrice();
    }
    return totalPrice;
  }
}

const hawaii = new Pizza("hawaii", ["ham", "pineapple"], 1000);
const margherita = new Pizza(
  "margherita",
  ["emmental", "mozzarella", "cheese"],
  1100
);

const order = new PizzaOrder("Kati Perkio", "DELIVERY");
order.addPizza(hawaii);
order.addPizza(margherita);

console.log(order.getPrice());
