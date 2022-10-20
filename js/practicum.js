// const a = 45;
// const b = 455;
// if (a === b) {
//     console.log("a = b")
// } else if (a <= b) {
//     console.log("a < b")
// } else {
//     console.log("a > b")
// }

// const myName = 'Aziz';
// const mySurname = 'Sattorov';
// const myBirthDay = 11;
// const myBirthYear = 2003;
// const myBirthMonth = 'July';
// const nowYear = 2022;
// const myCountry = 'Uzbekistan';



// JS darslar


// Length
// const howLong = 'abcdefgihjklmnopqrstuvwxyz';
// console.log('Alphabet\'s length is ' + howLong.length)



// Template literal, CanIUse
// const firstName = `Aziz`;
// const lastName = `Sattorov`;
// const age = 19;
// console.log(`My name is ${firstName} and i'm ${age} years old.`)



// Elementni tanlash (CSS selector)
// document.querySelector('')



// elClass dan foydalanish
// score VS elScore
// elBirnima, birnimaElement
// const username = 'thtflx';
// const userScore = 11;

// const elUsername = document.querySelector('.user-name');
// const elUserScore = document.querySelector('.user-score');




// Bir nechta elementni tanlash
// Rasmlar
// const elsGalleryImg = document.querySelectorAll('.gallery-img');
// console.log(elsGalleryImg.length);



// Element matnini o'zgartirish
// Consoledan buyruq berib o'zgartirish,faylda kod yozish
// const username = 'thtflx';
// const score = '11';

// const elUsername = document.querySelector('.username');
// const elScore = document.querySelector('.score');

// elUsername.textContent = username;
// elScore.textContent = score;



// Element classlari bilan ishlash
// add, remove, toggle, contains (classList ni ichidagila)
// add - qo'sh
// remove - olib tashla
// toggle - qo'sh/olib tashla
// contains - tekshir,bormi yoki yo'qmi
// nuqtasiz yoziladi!!! 
// const elUsername = document.querySelector('.username');
// elUsername.classList.add('username--highlighted');




// Hodisaga javoban amal bajarish
// Click event listener: sahifa foni, element matni
// const elText = document.querySelector('.text');
// const elChangeBgButton = document.querySelector('.change-bg-button');
// const elChangeTextButton = document.querySelector('.change-text-button');

// elChangeBgButton.addEventListener('click', function() {
//     document.body.classList.toggle('dark-theme');
// });

// elChangeTextButton.addEventListener('click', function() {
//     elText.textContent = 'Bye';
// })




// js- prefiksli classlardan foydalanish sababi
// classlarni o'zgartirish
// const elText = document.querySelector('.text');
// const elChangeBgButton = document.querySelector('.js-change-bg-button');
// const elChangeTextButton = document.querySelector('.js-change-text-button');

// elChangeBgButton.addEventListener('click', function() {
//     document.body.classList.toggle('dark-theme');
// });

// elChangeTextButton.addEventListener('click', function() {
//     elText.textContent = 'Bye';
// })



// Hodisalar turlari: click, input, submit, mouseover, change - to'liq ro'yxati
// Select bilan misol - fon rangini o'zgartirish
// document.body.addEventListener('mousemove', function() {
//     console.log('Worked!')
// });

// const elBodyBgSelect = document.querySelector('.js-body-bg-select');
// elBodyBgSelect.addEventListener('change', function() {
//     console.log(elBodyBgSelect.value);
// });



// Input va element matnini bir-biriga bog'lash - ism va ism uzunligi
// html:
{
    /* <div class="container">
      <input class="js-name-input" type="text" placeholder="Your name...">
      <p>Your name: <span class="name"></span></p>
      <p>In your name: <span class="name-length">0</span> symbols.</p>
    </div> */
}

// const elNameInput = document.querySelector('.js-name-input');
// const elName = document.querySelector('.name');
// const elNameLength = document.querySelector('.name-length');

// elNameInput.addEventListener('input', function() {
//     elName.textContent = elNameInput.value;
//     elNameLength.textContent = elNameInput.value.length;
// });




// Hodisalarga nusbataba amal bajarishni sug'urtalash(if)
// Bitta JS fayl butun sayt uchun 



// setTimeout - oddiy va hodisaga bog'lab ishga tushirish
// Oddiy va eventListener bilan
// setTimeout(function() {
//     console.log('Assalamu alaykum!');
// }, 3000);

// const elTestButton = document.querySelector('.js-test-button');
// if (elTestButton) {
//     elTestButton.addEventListener('click', function() {
//         setTimeout(function() {
//             console.log('Test')
//         }, 3000);
//     });
// }

// const elCoolButton = document.querySelector('.js-cool-button');
// if (elCoolButton) {
//     elCoolButton.addEventListener('click', function() {
//         setTimeout(function() {
//             console.log(elCoolButton.textContent)
//         }, 3000);
//     });
// }





// Hodisaga nisbatan tabiiy reaksiyani to'xtatish
// preventDefault - qachon ishlatiladi?
// const elShopButton = document.querySelector('.js-shop-button');
// if (elShopButton) {
//     elShopButton.addEventListener('click', function(evt) {
//         evt.preventDefault();
//         console.log(`Internet do'konga o'tyapsiz`);
//     });

//     elShopButton.addEventListener('contextmenu', function(evt) {
//         evt.preventDefault();
//         console.log(`Menyu ochilmaadiii :3`);
//     });
// }



// Bir nechta elementlarga hodisaga nisbatan amal bajarishni yuklash
// Scale
// const elsScaleButton = document.querySelectorAll('.js-scale-button');

// elsScaleButton.forEach(function(elScaleButton) {
//     if (elScaleButton) {
//         elScaleButton.addEventListener('click', function() {
//             elScaleButton.classList.add('scale-button--big');
//         });
//     }
// });



// Data atributi yordamida HTML elementlarga qo'shimcha ma'lumot biriktirish
// Consoleda, sahifada



// eventDelegation yordamida sahifada keyinroq paydo bo'ladigan elementlarga amal biriktirish
// Kinolar va "Like"
// const elsLikeMovieButton = document.querySelectorAll('.js-like-movie-button');

// elsLikeMovieButton.forEach(function(elLikeMovieButton) {
//     elLikeMovieButton.addEventListener('click', function() {
//         elLikeMovieButton.classList.toggle('button--liked');
//     });
// });

// const elMoviesList = document.querySelector('.movies-list');

// if (elMoviesList) {
//     elMoviesList.addEventListener('click', function(evt) {
//         if (evt.target.matches('.js-like-movie-button')) {
//             evt.target.classList.toggle('button--liked');
//         }
//     });
// }



// Matnni nusxalab olish
// navigator copy
// navigator.clipboard.writeText();
// const movie = 'Spider Man';
// const elCopyButton = document.querySelector('.js-copy-button');

// if (elCopyButton) {
//     elCopyButton.addEventListener('click', function() {
//         navigator.clipboard.writeText(movie);
//     });
// }


// DOM traversing
// Oldingi, keyingi, ajdod va avlod element bilan ishlash




// localStorage bilan ishlash
// Ismni eslab qolish
// Sahifa mavzusini (theme) eslab qolish