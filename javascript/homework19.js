"use strict"

// Упражнение 1
console.group("Упражнение 1");

let a = "$100";
let b = "300$";

let summ = Number(a.slice(1)) + Number(b.slice(0 , 3));

console.log(summ);

console.groupEnd();

// Упражнение 2
console.group("Упражнение 2");

let message = "    привет, медвед     ";

message = message.trim()
message = message[0].toUpperCase("п") + message.slice(1);

console.log(message);

console.groupEnd();

// Упражнение 3
console.group("Упражнение 3");

let age = +prompt("Сколько вам лет?");

if ( age >=0 && age <= 3 ) {
    console.log( `Вам ${age} лет и вы младенец` );

} else if ( age >= 4 && age <= 11 ) {  
    console.log( `Вам ${age} лет и вы ребенок` );

} else if ( age >= 12 && age <= 18 ) {
    console.log( `Вам ${age} лет и вы подросток` );

} else if ( age >= 18 && age <= 40 ) {
    console.log( `Вам ${age} лет и вы познаете жизнь` );

} else if ( age >= 41 && age <= 80 ) {
    console.log( `Вам ${age} лет и вы познали жизнь` );    

} else if ( age >= 81 ) {
    console.log( `Вам ${age} лет и вы долгожитель` );
}

console.groupEnd();

// Дополнительное задание
console.group("Дополнительное задание");

let message2 = "Я работаю со строками как профессионал";

// let count = message2.split(/\s+/).length; Более точный вариант, защищает от использования двойных пробелов

let count = message2.split(" ").length;

console.log(count);

console.groupEnd();