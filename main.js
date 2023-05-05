"use strict";

let totalPrice = 0;

let booking = document.getElementById("booking");

const queen = document.getElementById("queen").checked;
if (queen === true) {
  totalPrice += 100;
}
const king = document.getElementById("king").checked;
if (king === true) {
  totalPrice += 80;
}
const twin = document.getElementById("twin").checked;
if (twin === true) {
  totalPrice += 60;
}

const seniorRadioBtn = document.getElementById("senior");
const militaryRadioBtn = document.getElementById("military");
let discount = 0;
if (seniorRadioBtn.checked) {
  discount = totalPrice * 0.1;
} else if (militaryRadioBtn.checked) {
  discount = totalPrice * 0.2;
} else {
  discount = 0;
}

const finalPrice = totalPrice - discount;

console.log(finalPrice.toFixed(2));


