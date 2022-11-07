"use strict"

// Упражение 1
console.group("Упражнение 1");

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

/** 
 * Проверяет, есть ли свойства у объекта.
 *
 * @return возвращает true, если у обхъекта нет свойств, иначе возвращает false
 */

let user = {};
  console.log(isEmpty(user));

user.age = 12;
  console.log(isEmpty(user));

console.groupEnd();


// Упражнение 3
console.group("Упражнение 3");

const salaries = { 
  John: 100000, 
  Ann: 160000, 
  Pete: 130000, 
};

let newSalaries = { };

function raiseSalary(persent) {
  for (let key in salaries) {
   newSalaries[key] = Math.floor((salaries[key] / 100 * persent) + salaries[key]);   
  }
  return newSalaries;
}

/**
 * высчитывает повышение зарплаты на %
 * 
 * @param {salaries[key]} изначальный уровень зп
 * @param {persent} процент повышения зп
 * @return {newSalaries} зарплата, повышенная на указанный процент * 
 */

console.log(raiseSalary(1,11234454));


let sum = 0;
  for (let key in newSalaries) {
    sum += newSalaries[key];
  }

/**
 * считает сумму новых зарплат
 * 
 * @param {newSalaries} повышенные разрплаты
 * @param {sum} сумма новых зарплат
 */

console.log("Общая зарплата: " + sum);


console.groupEnd();