"use strict"

// Упражение 1
console.group("Упражнение 1");

function isEmpty(obj) {
  for (let key in obj) {
    // если цикл выполняется - в объекте есть свойства
    return false;
  }
  return true;
}

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
   newSalaries[key] = (salaries[key] / 100 * persent) + salaries[key];   
  }
  return newSalaries;
}

console.log(raiseSalary(3));


let sum = 0;
for (let key in newSalaries) {
  sum += newSalaries[key];
}

console.log(sum);



console.groupEnd();