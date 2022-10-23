// ---
// Переменные
// var message = 'Hello world!';

// var $ = 'dollar';
// var _ = 'Underscore';

// console.log(message)




// ---
//Типы данных
/* 
  Number
  String
  Boolean(if,else)
  Object
  Null
  Undefined
*/

// var num = 42;
// var str = 'message';
// var isTrue = true /// false
// var obj = { a: 1 };
// var isNull = null;
// var undef = undefined;

// console.log(typeof obj)




// ---
// Базовые операции
// var num1 = 12;
// var num2 = 8;

// console.log('+', num1 + num2)
// console.log('-', num1 - num2)
// console.log('*', num1 * num2)
// console.log('/', num1 / num2)

// var str1 = 'Hello';
// var str2 = 'World';

// console.log('+:', str1 + ' ' + str2)




// ---
// Приоритет операции
// var result1 = 12 - 6 / 3;
// var result2 = 3 + 4 * 2;

// var isGreater = 20 - 6 * 3 >= 4

// console.log('Result: ', result1)
// console.log('Result: ', result2)
// console.log('Result: ', isGreater)




// ---
// Больше операторов
// console.log('5 % 2 =', 5 % 2)
// console.log('8 % 3 =', 8 % 3)
// console.log('15 % 3 =', 15 % 3)

// var i = 1;
// i++ //  i += 1 //  i = i + 1
// console.log('i =', i)

// i-- //  i -= 1 //  i = i - 1
// console.log('i =', i)




// ---
// Операторы сравнения
// console.log('5 > 3', 5 > 3) //true
// console.log('3 < 2', 3 < 2) //false
// console.log('8 >= 7', 8 >= 7) //true
// console.log('12 <= 12', 12 <= 12) // true

// console.log('4 != 4', 4 != 4) // false
// console.log('4 != 5', 4 != 5) //true

// console.log('3 != 3', 3 != 3) // false
// console.log('6 != 7', 6 != 7) // true

// console.log('4 === 4', 4 === '4') // false
// console.log('4 == 4', 4 == '4') // true




// Как работают логические операторы
/* 
  && (и) - true если все значения true
  || (или) - true если хоть одно значние true
  ! (нет) - инвертируeт true или false
*/


// console.log(true && true) // true
// console.log(true && false) // false

// console.log(true || false) // true
// console.log(false || false) // false

// console.log(!false) // true
// console.log(!!true) // true

// console.log((false && true) || (true || false) || !true) //true




// ---
// Условные операторы
// var currentYear = 2022;
// var carName = 'BMW';
// var carYear = 1916;
// var carAge = currentYear - carYear

// if (carAge < 5) {
//     console.log(carName + ' smaller than 5');
// } else if (carAge >= 5 && carAge <= 10) {
//     console.log(carName + ' bigger or equal to 5 years or smaller or equal to 10 years');
// } else {
//     console.log('Age of ' + carName + ' equal to ' + carAge + ' years');
// }

// // 0 null undefined '' NaN (not a number)
// var empty = '';

// if (NaN) {
//     console.log('True!')
// } else {
//     console.log('False!')
// }




// ---
// Тернарные операторы
// if (4) {
//     console.log('True!')
// } else {
//     console.log('False!')
// }

// 4 ? console.log('True!') : console.log('False!')

// var personAge = 20;
// var message = '';

// // if (personAge < 18) {
// //     message = `Person isn't adult!`;
// // } else {
// //     message = `Person is adult.`;
// // }

// // var message = personAge < 18 ?
// //     `Person isn't adult!` :
// //     `Person is adult.`;

// console.log(message)




// ---
// Оператор Switch Case
// var carColor = 'red';

// // if (carColor === 'green') {
// //     console.log(`Car's color is green.`);
// // } else if (carColor === 'yellow') {
// //     console.log(`Car's color is yellow.`);
// // } else if (carColor == 'red') {
// //     console.log(`Car's color is red.`);
// // } else {
// //     console.log(`Car's color is undefined.`)
// // }

// switch (carColor) {
//     case 'green':
//         console.log(`Car's color is green.`);
//         break
//     case 'yellow':
//         console.log(`Car's color is yellow.`);
//         break
//     case 'red':
//         console.log(`Car's color is red.`);
//         break
//     default:
//         console.log(`Car's color is undefined.`)
// }




// ---
// Функции.Задание
// var carName = 'Porsche';
// var carYear = 1931;
// var personYear = 1990;

// function calculateAge(year) {
//     var currentYear = 2022;
//     var result = currentYear - year;
//     return result
// }

// function checkAngLogAge(year) {
//     if ((calculateAge(year)) < 10) {
//         console.log(`Age is smaller than 10 years`);
//     } else {
//         console.log(`Age is bigger than 10 years`);
//     }
// }

// checkAngLogAge(carYear)
// checkAngLogAge(personYear)



// // if ((calculateAge(personYear)) > 10) {
// //     console.log(`Age is smaller than 10 years`);
// // } else {
// //     console.log(`Age is bigger than 10 years`);
// // }




// ---
// // Задание.Ответ на задание
// /* 
//   Перепишите функцию checkAndLogAge таким образом,чтобы:
//   1. В консоли можно было определить,что это за объект (человек или машина)
//   2. Мы могли сами определять с каким возрастом сравнивать (не только 10 лет, 
//     но и любой другой возраст), причем это должно быть отображено в консоли
// */

// var carName = 'Rolls Royce';
// var carYear = 1961;
// var personYear = 1856;

// function calculateAge(year) {
//     var currentYear = 2022;
//     var result = currentYear - year;
//     return result
// }


// function checkAngLogAge(year, name, compareTo) {
//     if ((calculateAge(year)) < compareTo) {
//         console.log(`Возраст ${name} меньше ${compareTo} лет`);
//     } else {
//         console.log(`Возраст ${name} больше ${compareTo} лет`);
//     }
// }

// checkAngLogAge(carYear, 'машины', 8)
// checkAngLogAge(personYear, 'человека', 30)




// Способы создания функций.
// var sayHelloTo =
//     function sayHelloTo(name) {
//         console.log(`Hey ${name}!`)
//     }

// sayHelloTo('Morti')


// // Когда работает а когда нет?
// // Не работает:
// sayHelloTo('Conor')

// var sayHelloTo =
//     function sayHelloTo(name) {
//         console.log(`Hey ${name}!`)
//     }

// // Работает:
// sayHelloTo('McGregor')

// function sayHelloTo(name) {
//     console.log(`Hey ${name}!`)
// }




// Строки.
var newMessage = `Hello world!`

console.log(newMessage.length)

console.log(newMessage.toUpperCase()) /* большие буквы */

console.log(newMessage.toLowerCase()) /* маленькие буквы */

console.log(newMessage.charAt(0)) /* какой символ находится здесь */

console.log(newMessage.indexOf('w')) /* найди мне этот текст или букву */

console.log(newMessage.substr(1, 4)) /* шу харфдан унг томондаги 4 тасини олиб кел */

console.log(newMessage.substr(newMessage.indexOf('world'), 3))

console.log(newMessage.substring(1, 3)) /* сам посмотри как работает */




// Числа.
// // От числа к строке:
// var fortyTwo = 42
// var delta = 8 / 3 /* 2.666666666 */

// console.log(fortyTwo.toString())
// console.log(delta.toFixed(2))
//     // От строки к числу:
// console.log(+delta.toFixed(2) + 5)

// console.log(parseFloat(delta.toFixed(2))) // 2.67 
// console.log(parseInt(delta.toFixed(2))) // 2

// console.log(isNaN(NaN)) //true
// console.log(isNaN(45)) //false

// console.log(isFinite(1 / 0)) // false
// console.log(isFinite(99999)) //true




// Массивы.
/* var cars = [
    'BMW',
    'Porsche',
    'Chevrolet',
    'Audi'
]
console.log(cars)

console.log(cars[1])
console.log(cars.length)

// добавит в конец
cars.push('Mercedes Benz')
console.log(cars)

// удаляет и возвращает последний элемент
var audi = cars.pop()
console.log(cars, audi)

// удалять и возвращать первый элемент
var bmw = cars.shift()
console.log(cars, bmw)

// добавляет в начало
cars.unshift(audi)
console.log(cars)

// находит определенный элемент
var index = cars.indexOf('Porsche')
var porsche = cars[index]

console.log(porsche) */




// Объекты.
// var person = {
//     name: 'Vasily',
//     lastname: 'Pupkov',
//     year: 1955,
//     family: ['Catherine', 'John'],
//     car: {
//         year: 1916,
//         model: 'BMW',
//     },
//     calculateAge: function() {
//         var age = 2018 - this.year // = person year
//         console.log(`Age: ${age}`)
//     }
// }

// console.log(person) // *outputs person*
// console.log(person.family) // ['Catherine,'John']
// console.log(person['year']) // 1955

// var field = 'car'
// console.log(person[field].year) //1916

// person.year = 1993
// console.log(person) // меняется c 1955 на 1993


// person.calculateAge()




// Циклы.
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // numbers.push('Not a number')
// // numbers.push('New line')

// console.log('Четные числа:')
//     // i++ => i = 1; 1 < 5
// for (var i = 0; i < numbers.length; i++) {
//     if ((numbers[i]) % 2 === 0) {
//         console.log(numbers[i])
//     }
// }

// console.log('Нечетные числа:')
// for (var i = 0; i <a numbers.length; i++) {
//     if ((numbers[i]) % 2 === 0) {
//         continue
//     }
//     console.log(numbers[i])
// }