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

// console.log(true || false) // false
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
// var newMessage = `Hello world!`

// console.log(newMessage.length)
// console.log(newMessage.toUpperCase()) /* большие буквы */
// console.log(newMessage.toLowerCase()) /* маленькие буквы */
// console.log(newMessage.charAt(0)) /* какой символ находится здесь */
// console.log(newMessage.indexOf('w')) /* найди мне этот текст или букву */
// console.log(newMessage.substr(1, 4)) /* шу харфдан унг томондаги 4 тасини олиб кел */
// console.log(newMessage.substr(newMessage.indexOf('world'), 3))
// console.log(newMessage.substring(1, 3)) /* сам посмотри как работает */




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









// DOM
// 1 - DOM.
// HTML:
// <h1>Что такое DOM</h1>
// <p>Document Object Model</p>
// <p class="text">Параграф с текстом</p>
// <p class="text">Еще текст</p>
// <div id="playground">Playground wrapper</div>
// <span>text</span>

// JS:
// var div = document.querySelector('#playground')
// var p = document.querySelectorAll('.text')
// var h1 = document.querySelector('h1')

// console.log(div)
// console.log(p)
// console.log(h1)




// 2 - DOM.
// HTML:
// <h1>Что такое DOM</h1>
// <p>Document Object Model</p>
// <p class="text">Параграф с текстом</p>
// <p class="text">Еще текст</p>
// <div id="playground">Playground wrapper</div>
// <span>text</span>

// JS:
// var div = document.querySelector('#playground')
// var p = document.querySelectorAll('.text')
// var h1 = document.querySelector('h1')
// var input = document.querySelector('input')

// div.innerHTML = '<h2 style="color: purple;">From JS</h2>'
// h1.textContent = 'Changed from JS'

// console.log(div.innerHTML)
// console.log(p)
// console.log(h1.textContent)
// console.log(input.value)




// 3 - DOM (Атрибуты).
// HTML:

/* <h1>Что такое DOM</h1>
<a href="https:/google.com/" target="_blank" title="Click me!">Google</a> */

// JS:
// var a = document.querySelector('a')
// var oldHref = a.getAttribute('href')

// // Изменяем ссылку:
// a.setAttribute('href', 'https://ya.ru')
// a.textContent = 'Yandex'

// // Изменяем title:
// a.setAttribute('title', 'Get shit done.')

// console.log(a.title)




// 4- DOM (Классы).
// CSS:
// {<style>
//         .box {
//             width: 100px;
//             height: 100px;
//             border: 1px solid black;
//         }

//         .red {
//             background-color: rgb(218, 38, 38);
//         }

//         .purple {
//             background-color: rgb(127, 7, 127);
//         }
//     </style>}

// HTML:
/* <h1>Что такое DOM</h1>

<a href="https:/google.com/" target="_blank" title="Click me!">Google</a>

<hr>

<div id="box1" class="box"></div>
<div id="box2" class="box red"></div> */

// JS:
// var box1 = document.querySelector('#box1')
// var box2 = document.querySelector('#box2')
// var purple = document.querySelector('.purple')
// var red = document.querySelector('.red')

// box1.classList.add('purple')
// box2.classList.remove('red')

// // Проверяем, есть ли такой класс:
// var hasClass = box2.classList.contains('box')
// console.log(hasClass)

// if (hasClass) {
//     box2.classList.add('red')
// } else {
//     box2.classList.remove('red')
// }




// 5 - DOM (Добавление событий).
// HTML:
// JS:
// var button = document.querySelector('button')
// var h1 = document.querySelector('h1')
// var input = document.querySelector('input')

// // 1-ый способ:
// function buttonHandler() {
//     console.log('checked!')
//     h1.textContent = input.value
// }

// button.addEventListener('click', buttonHandler)

// // 2-ой способ:

// h1.addEventListener('mouseenter', function() {
//     console.log('Mouse has entered!')
//     this.style.color = 'green'
//         // h1.classList.add('green')
// })

// h1.addEventListener('mouseleave', function() {
//     console.log('Mouse has left!')
//     this.style.color = 'red'

//     // h1.classList.remove('green')
//     // h1.classList.add('red')
// })


// console.log(button.textContent)




// 6 - DOM (Всплытие и погружение).
// CSS:
// .box1 {
//   width: 300px;
//   height: 300px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: red;
// }

// .box2 {
//   width: 150px;
//   height: 150px;
//   background-color: blue;
// }

// HTML:
/* <h1>JS events</h1>

<div class="box1" id="1">
    <div class="box2" id="2"></div>
</div> */

// JS:
// var divs = document.querySelectorAll('div')

// for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function() {
//         console.log(this.getAttribute('id'))
//     })
// }




// 7 - DOM (Объект события).
// CSS:

// HTML:
/* <h1>JS events</h1>

<a id="google" href="https://google.com" target="_blank ">Toggle</a>


<div class="box1" id="1">
    <div class="box2" id="2"></div>
</div> */

// JS:
// var divs = document.querySelectorAll('div')

// for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function(event) {
//         event.stopPropagation()
//         console.log(this.getAttribute('id'))
//     })
// }

// // var google = document.querySelector('#google')

// // google.addEventListener('click', function(event) {
// //     event.preventDefault()
// //     console.log('All are worked!')
// // })

// // или:

// google.addEventListener('click', handleLinkClick)

// function handleLinkClick(event) {
//     event.preventDefault()
//     console.log(`I can't work! I'm stopped by JS.`)

//     // ---

//     var div = divs[0]

//     if (div.style.display === 'none') {
//         div.style.display = 'flex'
//     } else {
//         div.style.display = 'none'
//     }
//     // или
//     div.style.display = div.style.display === 'none' ?
//         'flex' :
//         'none'

//     console.log(div.style.display)
// }





// 8 - DOM (Делегирование событий).
// CSS:

// HTML:
/* <h1>JS events</h1>

<div id="wrapper">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ut.</p>
    <p class="color">COLORLorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, sed.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quasi.</p>

    <ul>
        <li class="color">53</li>
        <li>75</li>
    </ul>
</div> */

// JS:
// так не стоит:
// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function(event) {
//         event.target.style.color = 'blue';
//     })
// }

// так нужно сделать:
// var wrapper = document.getElementById('wrapper')

// wrapper.addEventListener('click', function(event) {
//     var tagName = event.target.tagName.toLowerCase()

//     if (tagName === 'p') {
//         event.target.style.color = 'orange'
//     }

//     if (event.target.classList.contains('color')) {
//         event.target.style.color = 'red'
//     }
// })