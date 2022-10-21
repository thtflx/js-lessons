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
var str = '1,2,3,4,5,6,7,8'

var array = str.split(',')

// console.log(array.join(';'))
// console.log(array.reverse())

array.splice(1, 0, '11', '22')

var newArray = array.concat([1, 2])

// console.log(newArray)

var objArr = [
    { name: 'Elon', age: 43 },
    { name: 'John', age: 26 },
    { name: 'Ugway', age: 55 }
]

var findPerson = objArr.find(function(person) {
    return person.age === 20
})


// Чётно или Нечётно?
var oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
oddArray.filter(function(i) {
    return i % 2 !== 0 //выводит нечётных чисел
        // return i % 2 === 0 //выводит чётных чисел
})

// console.log(oddArray)


var numArray = array.map(function(i) {
    return parseInt(i)
})
console.log(numArray)