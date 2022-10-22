// CALCULATOR
// HTML:
{
    /* <h1>JS extra</h1>

    <button id="alert">Alert</button>

    <input id="number_one" type="number">
    <input id="number_two" type="number"> */
}

// JS:
// var h1 = document.querySelector('h1')
// var alert = document.querySelector('#alert')
// var numberOne = document.querySelector('#number_one')
// var numberTwo = document.querySelector('#number_two')

// function answerHandler() {
//     console.log('Answer is working!')

//     var answer = parseFloat(numberOne.value) + parseFloat(numberTwo.value)
//     h1.textContent = answer
// }

// alert.addEventListener('click', answerHandler)





// 01 - Addition features (Взаймодействие с пользователем).
// HTML:
{
    /* <h1>JS extra</h1>

    <button id="alert">Alert</button>
    <button id="confirm">Confirm</button>
    <button id="prompt">Prompt</button> */
}

// JS:
// var alertButton = document.querySelector('#alert')
// var confirmButton = document.querySelector('#confirm')
// var promptButton = document.querySelector('#prompt')

// // alert:
// alertButton.addEventListener('click', function() {
//     alert('Вы успешно кликнули по кнопке!')
// })

// // confirm:
// confirmButton.addEventListener('click', function() {
//     var decision = confirm('Сделает-ли это тебя счастливым?')
//         // console.log(decision)

//     if (decision) {
//         alert('Вы успешно кликнули по кнопке!')
//     }
// })

// // prompt:
// promptButton.addEventListener('click', function() {
//     var name = prompt('Напишите своё имя:', Alex)
//     console.log(name)
// })


// // Консоли:
// console.log('Console.log')
// console.warn('Console.warn')
// console.info('Console.info')
// console.error('Console.error')
//     // еще один типо error:
// throw new Error('undefined')





// 02 - Addition features (Методы массивов).
// HTML:

// JS:
// var str = '1,2,3,4,5,6,7,8'

// var array = str.split(',')

// // console.log(array.join(';'))
// // console.log(array.reverse())

// array.splice(1, 0, '11', '22')

// var newArray = array.concat([1, 2])

// // console.log(newArray)

// var objArr = [
//     { name: 'Elon', age: 43 },
//     { name: 'John', age: 26 },
//     { name: 'Ugway', age: 55 }
// ]

// var findPerson = objArr.find(function(person) {
//     return person.age === 20
// })


// // Чётно или Нечётно?
// var oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// oddArray.filter(function(i) {
//     return i % 2 !== 0 //выводит нечётных чисел
//         // return i % 2 === 0 //выводит чётных чисел
// })

// // console.log(oddArray)


// var numArray = array.map(function(i) {
//     return parseInt(i)
// })
// console.log(numArray)




// 03 - Addition features (Объект Math).
// HTML:

// JS:
// var num = 2.4

// console.log(Math.random())
// console.log(Math.floor(num)) //округляет в мен ьшую сторону - 2.
// console.log(Math.ceil(num)) //округляет в большую сторону - 3.





// 04 - Addition features (Объект JSON).
// HTML:

// JS:
// var person = {
//     name: 'Aziz',
//     surname: 'Sattorov',
//     age: 19,
//     car: {
//         model: 'BMW'
//     },
//     job: 'Frontend developer',
//     friends: ['Azikello', 'Patrick']
// }

// var str = JSON.stringify(person) // сам код.

// console.log(str) // Выводит в JSON формат
// console.log(JSON.parse(str)) // Из JSON в OBJECT





// 05 - Addition features (Дата и время с Date).
// HTML:

// JS:
// var date = new Date()
// (Можно посмотреть на mdn или про это расскажут еще в бонусном блоке.)





// 06 - Addition features (Хранение данных в localStorage).
// HTML:

// JS:
var button = document.querySelector('button')

button.addEventListener('click', function(event) {
    var value = document.querySelector('input').value

    var obj = {
        text: value
    }

    localStorage.setItem('headerText', JSON.stringify(obj))



})

document.addEventListener('DOMContentLoaded', function() {

    var obj

    try {
        obj = JSON.parse(localStorage.getItem('headerText'))
    } catch (e) {
        obj = {}
    }


    // тримом удаляем лишние пробелы и если ничего нету вернём h1 как раньше
    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text
    }
})


// Повторить вот эти пройденные темы (прочитать документацию.)