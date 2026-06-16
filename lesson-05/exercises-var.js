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