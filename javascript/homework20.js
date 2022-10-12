"use strict"

// Упражнение 1
console.group("Упражнение 1");

for (let a = 0; a <= 20; a++) {
  if (a % 2 === 0 && a !== 0) {
    console.log(a);
  }
}

console.groupEnd();


// Упражнение 2
console.group("Упражнение 2");

let sum = 0;
let count = 0; // Количество вызовов цикла/функции

while (count < 3) { // до тех пор, пока количество вызовов не будет равно 1
  let b = +prompt("Введите число");
     
  if (!b) {
    alert("Вы ввели не число");
    break;
  }

  sum += b;
  count++  // вызываем цикл еще один раз
}

console.log("Сумма: " + sum );

console.groupEnd();


// Упражнение 3
console.group("Упражнение 3");

const monthsArr = ["Январь", 
"Февраль", 
"Март", 
"Апрель", 
"Май", 
"Июнь", 
"Июль", 
"Август", 
"Сентябрь", 
"Октябрь", 
"Ноябрь", 
"Декабрь"] // Массив с перечислениями месяцев, из него берем и список месяцев и нужный нам
console.log("Количество месяцев", monthsArr.length) // Необязательная строка, показывает 
//количество элементов в массиве (в нашем случае, количество месяцев)

function getNameOfMonth(monthNumber) {
  return monthsArr[monthNumber];
};

//// То же самое
// const getNameOfMonth =  (monthNumber) => {
//   return monthsArr[monthNumber];
// };


console.log("getNameOfMonth(6)", getNameOfMonth(6)) // возвращает нам название месяца по его порядковому номеру
// тут же мы передаем параметру monthNumber его значение, в нашем случае цифры от 0 до 11 - которые соответствуют месяцам


for (let i = 0; i < monthsArr.length; i++) {
  if (getNameOfMonth(i) !== "Октябрь") console.log(getNameOfMonth(i));
};

console.groupEnd();


// Дополнительное упражнение
console.group("Дополнительное упражнение");

// IIFE - самовызывающаяся функция. Позволяет не засорять глобальную область видимости
// и защищает переменные от изменений или повторов

(function() {
  for (let a = 0; a <= 2; a++) {
    console.log(a);
  }
})()

console.groupEnd();