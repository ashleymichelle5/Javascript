// 1. 

const books = 4 * 3;
const pens = 2 * 1;
const backpack = 35;

const total1 = books + pens + backpack; 
const tax1 = total1 * 0.08;
const totalWithTax1 = total1 + tax1; 
console.log(`The total before tax is: $${total1}`);
console.log(`The total with tax is: $${totalWithTax1}`);

// 2.

const ticket = 12 * 4;
const popcorn = 2 * 6;
const total2 = ticket + popcorn;
const tax2 = 0.05;
const totalWithTax2 = total2 + (total2 * tax2);
console.log(`The total before tax is: $${total2}`);
console.log(`The total with tax is: $${totalWithTax2}`);

// 3.

const pizza = 14 * 2;
const soda = 3 * 2;
const dessert = 7;
const total3 = pizza + soda + dessert;
const tax3 = 0.09;
const totalwithTax3 = (total3 * tax3) + total3;
console.log(`The total before tax is: $${total3}`);
console.log(`The total with tax is: $${totalwithTax3}`);

//4.

const book = 5 * 8; 
const bookmarks = 1.50 * 2;
const subtotal = book + bookmarks;
const discount = subtotal - (subtotal * 0.06);
console.log(` The total before discount is: $${subtotal}`);
console.log(`The total with discount is: $${discount}`);

//5 

const membership = 40 * 6;
const waterBottle = 15 * 2; 
const gymCost = membership + waterBottle;
const gymCostWithTax = (gymCost * 0.07) + gymCost;
console.log(`The total before tax is: $${gymCost}`);
console.log(`The total with tax is: $${gymCostWithTax}`);

//6

const concertTicket = 55 * 4;
const merchandise = 20 * 3;
const totalCost = concertTicket + merchandise;
const concertCostWithTax = (totalCost * 0.12) + totalCost;
console.log(`The total before tax is: $${totalCost}`);
console.log(`The total with tax is: $${concertCostWithTax}`);

//7

const apples = 0.75 * 6;
const milk = 4 * 2;
const bread = 3.50; 
const totalGroceryCost = apples + milk + bread;
const groceryCostWithTax = (totalGroceryCost * 0.04) + totalGroceryCost;
console.log(`The total before tax is: $${totalGroceryCost}`);
console.log(`The total with tax is: $${groceryCostWithTax.toFixed(2)}`);

//8 

const room = 120 * 3;
const roomService = 25 * 2;
const hotelBill = room + roomService;
const hotelBillWithTax = (hotelBill * 0.15) + hotelBill;
console.log(`The total before tax is: $${hotelBill}`);
console.log(`The total with tax is: $${hotelBillWithTax}`);

//9

const socks = 5 * 3;
const shoes = 65 * 2;
const belt = 20;
const shoppingTotal = socks + shoes + belt;
const shoppingTotalWithTax = (shoppingTotal * 0.11) + shoppingTotal;
console.log(`The total before tax is: $${shoppingTotal}`);
console.log(`The total with tax is: $${shoppingTotalWithTax}`);

//10

const streamingService = 15 * 12;
const giftcards = 25 * 2;
const streamingCost = streamingService + giftcards;
const streamingCostWithTax = (streamingCost * 0.03) + streamingCost;
console.log(`The total before tax is: $${streamingCost}`);
console.log(`the total with tax is: $${streamingCostWithTax.toFixed(2)}`);

//11

const name = 'Ashley';
const age = 29;
console.log(`My name is ${name} and I am ${age} years old`);

//12 

let score = 0;
score = 10;
console.log(`The score is ${score}`);

const pi = 3.14;
console.log(`The pi value is ${pi}`);

//13 

let city = 'New York', country = 'USA', population = 8419600;
console.log(`The city is ${city}, the country is ${country}, and the population is ${population}`);

var oldStyle = 'test';
console.log(oldStyle);

//14 

if (true) {
  var x = 10;
  let y = 20;
}
console.log(x);

let $price = 100;
console.log($price);

let _isValid = true;
console.log(_isValid);

//15 

let string = 'Hello world';
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = {color: 'red', size: 'medium'};

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof array);
console.log(typeof object);
console.log(Array.isArray(array));

//16 

let firstName = 'John';
let lastName = 'Doe';
let birthYear = 1990;
let fullName = firstName +' ' +  lastName; 
console.log(`My full name is ${fullName} and my age is  ${2026 - birthYear}`); 
console.log(fullName);