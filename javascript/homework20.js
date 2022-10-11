"use strict"

// Упражнение 1
console.group("Упражнение 1");

for (let a = 0; a <= 20; a++) {
  if (a % 2 == 0 && a != 0) {
    console.log(a);
  }
}

console.groupEnd();


// Упражнение 2
console.group("Упражнение 2");

let sum = 0
let count = 0 // Количество вызовов цикла/функции

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

function getNameOfMonth() {

  let mon = +prompt("Введите число от 0 до 11");

    switch (mon) {
      case 0:
        return "Январь";
     
      case 1:
        return "Февраль";
     
      case 2:
        return "Март";
     
      case 3:
        return "Апрель";
     
      case 4:
        return "Май";
     
      case 5:
        return "Июнь";
     
      case 6:
        return "Июль";
     
      case 7:
        return "Август";
     
      case 8:
        return "Сентябрь";
         
      case 9:
        return "Октябрь";
         
      case 10:
        return "Ноябрь";
         
      case 11:
         return "Декабрь";
  }
}

let month = getNameOfMonth();

console.log(month)

// Цикл
for (month = 0; month <= 11; month++) {

  month = [
   "Январь",
   "Февраль",
   "Март",
   "Апрель",
   "Май",
   "Июнь",
   "Июль",
   "Август",
   "Сентябрь",
   "Ноябрь",
   "Декабрь",
  ]

  if (month == 9) continue;

  console.log(month);
}

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