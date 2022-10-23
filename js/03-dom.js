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