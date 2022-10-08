"use strict"

// Упражнение 1
let a = "100px";
let b = "323px";

let result= parseInt(a) + parseInt(b);

console.log(result);

// Упражнение 2
console.log(Math.max(10, -45, 102, 36, 12, 0, -1));

// Упражнение 3
let d = 0.111;
console.log(Math.ceil(d));

let e = 45.333333;
console.log(e.toFixed(1));

let f = 3;
console.log(f ** 5);

let g = 4e15;
console.log(g);

let h = "1" !== 1;
console.log(h);

// Дополнительное упражнение
console.log(0.1 + 0.2 === 0.3); /* результатом сложения 0.1 и 0.2 будет число 0.30000000000000004
в печатной лекции этого не было, но видимо это связано с записью чисел с плавающей точкой  */ 

let r = 0.1;
let t = 0.2;
console.log(r + t);