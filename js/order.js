const breadArr = ["White","Whole Wheat","Rye","Ciabatta","Sourdough"];
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


//Carousel Controls
"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
