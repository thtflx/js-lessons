// 1 Переменные
// camelCase
// const firstName = 'the cod that cats';
// const someThing = 'something was fine';
// const lastname = 'Sattorov'; /* string */
// // const age = 19; /* number */
// const isProgrammer = false; /* boolean */

// console.log(isProgrammer)
// console.log(age)
// console.log('catbrthday')
// console.log(someThing)




// 2 Мутирование
// console.log('Name of guy: ' + firstName + ' and age of the guy is ' + age)
// alert('Name of guy: ' + firstName + ' and age of the guy is ' + age)

// const surname = prompt('Enter your surname: ');
// alert(firstName + ' - ' + lastname);




// 3 Операторы
// const currentYear = 2022;
// const birthYear = 2003;
// const age = currentYear - birthYear;

// console.log(age)


// Вычитывает сразу же!
// const yourBirthYear = prompt('When year were u born?')
// alert(currentYear - yourBirthYear)


// Кулькулятор
// const a = 10;
// const b = 5;

// let c = 32;
// c = c + a
//     /* or */
// c += a

// console.log(a - b)
// console.log(a + b)
// console.log(a * b)
// console.log(a / b)
// console.log(c)




// 4 Типы данных
// const isProgrammer = true
// const name = 'Vladilen'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)




// 5 Приоритет операторов
// const fullAge = 26
// const birthYear = 2003
// const currentYear = 2020

// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 26 >= 27 => true
// console.log(isFullAge)
// console.log(areFullAge)


// const fullAge = 19;
// const birthYear = 2003;
// const currentYear = 2022;

// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge)




// 6 Условные операторы
// const courseStatus = 'pending' /* ready,fail,pending */
// if (courseStatus === 'ready') {
//     console.log('Course is ready for using!')
// } else if (courseStatus === 'pending') {
//     console.log('Course is fixed.')
// } else {
//     console.log('Course is not working at the moment.')
// }


// const isReady = false
// if (isReady === true) {
//     console.log('All are finished.')
// } else {
//     console.log('All are not finished.')
// }
// Можно еще так сокрощённо: (Тернарное выражение)
// const isReady = true
// isReady ? console.log('All are finished.') : console.log('All are not finished.')


// const num1 = 42 /* number */
// const num2 = '42' /* string */

// console.log(num1 === num2)




// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND




// 8 Функции (def)
// function calculateAge(year) {
//     return 2022 - year
// }
// console.log(calculateAge(2003))
// console.log(calculateAge(2006))
// console.log(calculateAge(1999))

// - - -

// function logInfoAbout(name, year) {
//     return 'My name is ' + name
// }
// console.log(logInfoAbout('Aziz'))

// // - - -

// function userInfo(name, surname, year) {
//     const age = calculateAge(year)

//     console.log('The human with named ' + name + ', ' + age + ' years old.')
// }
// userInfo('Cat', 'Barikhanofv', 2003)
// userInfo('Kitty', 'Barikhanofva', 2006)

// // - - -

// function allInfoAbout(name, lastname, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Name: ' + name + ', ' + age + ' - years old.')
//     } else {
//         console.log("It's not future! Are u crazy?")
//     }
// }
// allInfoAbout('Amirkhan', 'Oev', 2024)




// 9 Массивы
// const cars = ['BMW', 'Mercedes Benz', 'Porsche']
// console.log(cars)

// const cars = ['BMW', 'Mercedes Benz', 'Porsche']
// console.log(cars)
// console.log(cars.length)
// console.log(cars[0])


// cars[1] = 'Lamborghini'
// cars[3] = 'Audi'
// console.log(cars)




// 10 Циклы
// const cars = ['BMW', 'Mercedes Benz', 'Porsche']

// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }

// // Или же можно так:

// for (let car of cars) {
//     console.log(car)
// }




// 11 Объекты
// const person = {
//     firstName: 'Aziz',
//     lastName: 'Sattorov',
//     year: 2003,
//     languages: ['Uz', 'Ru', 'En'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from person')
//     }
// }
// const key = 'year'

// console.log(person)
// console.log(person.lastName)
// console.log(person['hasWife'])
// console.log(person[key])

// person.greet()









// Calculator
const someWord = 'Truth'
if (someWord === 'Truth') {
    console.log('Truth is true!')
} else {
    console.log('Truth is false!')
}