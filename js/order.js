const breadArr = ["White","Whole Wheat","Rye","Ciabatta","Sourdough","bagel","Soda"];
const toppingArr = ["Pickle","Lettuce","Tomato","Coleslaw","Avocado","Rocket"];
const meatArr = ["Ham","Bacon","Prosciutto","Chicken","Steak"];
const sauceArr = ["Mayo","BBQ","Balsamic","Sweet Chili Jam"];
const cheeseArr = ["Cheddar","Brie","Gorgonzola","Cream Cheese","Goats Cheese"]


let orderArr = [];

let sandwichArr = [];
let submit = false;
let orderIndex = 0;

console.log("Choose Your Bread");
for(let i = 0;i<breadArr.length;i++){
    console.log(breadArr[i]);
}

let breadInput = prompt();

console.log("Choose Your Topping");
for(let i = 0;i<toppingArr.length;i++){
    console.log(toppingArr[i]);
}

let toppingInput = prompt();

console.log("Choose Your Meat");
for(let i = 0;i<meatArr.length;i++){
    console.log(meatArr[i]);
}

let meatInput = prompt();

console.log("Choose Your Sauce");
for(let i = 0;i<sauceArr.length;i++){
    console.log(sauceArr[i]);
}

let sauceInput = prompt();

console.log("Choose Your Cheese");
for(let i = 0;i<cheeseArr.length;i++){
    console.log(cheeseArr[i]);
}

let cheeseInput = prompt();

orderArr[orderIndex] = {
    breadInput,
    toppingInput,
    meatInput,
    sauceInput,
    cheeseInput
}

console.log(orderArr[orderIndex])