"use strict"

// Импорт из data.js
import { product, firstReview, secondReview } from "/javascript/data.js"

// Упражнение 1
console.group("Упражнение 1");

let sum = 0;

function getSum(arr) { 
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) === true) {
      continue;
    } else { sum += arr[i] };
 }
 return sum;
};

const arr1 = [1, 2, 6, "f"]
console.log(getSum(arr1));

console.groupEnd();

// Вариант с более удобным решением, не требующий большого количества кода
// const getSum = (arr) => {
//   let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'number') {
//     sum += arr[i];
//   }
// }

// return sum;
// };

// сложная функция, которую нашла пока искала решение. На будущее

// function getSumm(arr) { 
//   for (let i = 0; i < arr.length; i++) {
// 		if (Object.prototype.toString.call(arr[i]) === '[object Number]') {
// 			sum += arr[i];
// 		}
// }
// return sum;
// }


// Упражнение 2
console.group("Упражнение 2");

console.group("Товар")
console.log("Цвет товара: " + product.color);
console.log("Конфигурация памяти: " + product.memoryConfigGb);
console.log("Фото товара: " + product.productPhoto);
console.group("Варианты доставки:", product.delivery); 
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

function addToCart(id) {
  for (let i = 0; i < cart.length; i++) {
    if ((cart.includes(id)) === true) {
      continue;
    }
cart.push(id);
}
};

function deleteFromCart(id) {
  for (const index in cart) {
    if (cart[index] === id) {
      cart.splice(index, 1);
      break;
    }
  }

}

addToCart(6573);
console.log(cart);

addToCart(6573);
console.log(cart);

deleteFromCart(6573);
console.log(cart);

deleteFromCart(6573);
console.log(cart);

console.groupEnd();