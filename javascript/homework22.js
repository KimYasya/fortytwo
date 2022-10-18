"use strict"

// Импорт из data.js
import { product, firstReview, secondReview } from "/javascript/data.js"

// Упражнение 1
console.group("Упражнение 1");

let sum = 0;

function getSumm(arr) { 
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) === true) {
      continue;
    } else { sum += Number(arr[i]) };
 }
 return sum;
}

// сложная функция, которую нашла пока искала решение. На будущее

// function getSumm(arr) { 
//   for (let i = 0; i < arr.length; i++) {
// 		if (Object.prototype.toString.call(arr[i]) === '[object Number]') {
// 			sum += arr[i];
// 		}
// }
// return sum;
// }

let arr1 = [1, 2, 5, "f"]
console.log(getSumm(arr1));

console.groupEnd();


// Упражнение 2
console.group("Упражнение 2");

console.group("Товар")
console.log("Цвет товара: " + product.color);
console.log("Конфигурация памяти: " + product.memoryConfigGb);
console.log("Фото товара: " + product.productPhoto);
console.group("Варианты доставки: "); 
console.log(product.delivery);
console.groupEnd();
console.groupEnd();

console.group("Отзыв 1")
console.log(firstReview);
console.groupEnd();

console.group("Отзыв 2")
console.log(secondReview);
console.groupEnd();

console.groupEnd();


// Упражнение 3
console.group("Упражнение 3");

const cart = [2636, 5648];

function addToCart(n) {
  for (let i = 0; i < cart.length; i++) {
    if ((cart.includes(n)) === true) {
      continue;
    }
cart.push(n);
}
};

addToCart(6573);
console.log(cart);

addToCart(6573);
console.log(cart);

function deleteFromCart(f) {
  cart.pop(f);
}

deleteFromCart(6573);
console.log(cart);

console.groupEnd();