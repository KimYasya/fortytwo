"use strict"

// Упражнение 1
console.group("Упражнение 1");

let n = +prompt("Введите число");

function newCount() {
  console.log("Осталось", n);
}
setTimeout(newCount, 1000);


let intervalId = setInterval(() => {
  if (!n) {
    clearInterval(intervalId);
    alert("Вы ввели не число");
  } 
  n--;
  console.log("Осталось", n);

  if (n === 0) {
    clearInterval(intervalId);
    console.log("Время вышло!")
  }
}, 1000);
 
console.groupEnd();


// Упражнение 2
console.group("Упражнение 2");

// console.time("Сколько заняло выполнение кода");

let start = performance.now();


const promise = fetch("https://reqres.in/api/users") 

promise
.then((response) => {
  return response.json()
})

.then((response) => {

let users = response.data
  console.log("Количество пользователей: " + users.length)
  
  users.forEach((user) => {
    console.log("-", user.first_name, user.last_name, "(" + user.email + ")")
  })
})

.catch(() => {
  console.log("Что-то пошло не так")
});




let result = performance.now() - start;
console.log("Время выполнения: " + result);

// console.timeEnd("Сколько заняло выполнение кода");

console.groupEnd();
