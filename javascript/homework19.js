"use strict"

// Упражнение 1
console.group("Упражнение 1");

let a = "$100";
let b = "300$";

let summ = Number(a.slice(1 , 5)) + Number(b.slice(0 , 3));

console.log(summ);

console.groupEnd();

// Упражнение 2
console.group("Упражнение 2");

let message = "    привет, медвед     ";

message = message.trim().replace("п" , "П");

console.log(message);

console.groupEnd();

// Упражнение 3
console.group("Упражнение 3");

let age = +prompt("Сколько вам лет?");

// switch (age) {

//   case 0 :
//     console.log( `Вам ${age} лет и вы младенец` );
//     break;

//   case 1 :
//     console.log( `Вам ${age} год и вы младенец` );
//     break;

//   case 2 :
//   case 3 :
//     console.log( `Вам ${age} года и вы младенец` );
//     break;

//   case 4 : 
//   case 5 :
//   case 6 :
//   case 7 :
//   case 8 :
//    9, 10, 11 :
//     console.log( `Вам ${age} лет и вы ребенок` );
//     break;

//   case 11 < age < 18  :
//     console.log( `Вам ${age} лет и вы подросток` );
//     break;

//   case 18 < age < 40 :
//     console.log( `Вам ${age} лет и вы познаете жизнь` );
//     break;

//   case 41 < age < 80 :
//     console.log( `Вам ${age} лет и познали жизнь` );
//     break;

//   default:
//     console.log( `Вам ${age} лет и вы долгожитель` ); 
// }

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

let count = message2.split(/\s+/).length;

console.log(count);

console.groupEnd();