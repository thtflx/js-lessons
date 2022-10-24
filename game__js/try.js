// Биринчи уринда #start ни топишим керак
// Начать кнопкаси босилган пайти - Начать билан background ойок булиши керак
var start = document.querySelector('#start')
var game = document.querySelector('#game')

var score = 0
var colors = ['Gray',
    'Silver',
    'Fuchsia',
    'Purple',
    'Red',
    'Maroon',
    'Yellow',
    'Orange',
    'Olive',
    'Lime',
    'Green',
    'Aqua',
    'Teal',
    'Blue',
    'Navy'
]

start.addEventListener('click', startGame)
game.addEventListener('click', boxClick)



function startGame() {
    start.classList.add('hide')
    game.style.backgroundColor = '#fff'

    colorizedBox()
}

function boxClick(event) {
    if (event.target.dataset.box) {
        score++
        colorizedBox()
    }
}


// Старт босилган пайти КВАДРАТЧАЛА пайдо булиши керак
function colorizedBox() {
    // бу кодни сабаби, биза boxClick ни боссак куп пайдо булади (html ичига)
    // Битта булиши учун хаммасини биттага тозалаймиз 
    game.innerHTML = ''

    var box = document.createElement('div')
    var boxSize = getRandom(30, 100)
    var gameSize = game.getBoundingClientRect() // getBoundingClientRect() - бу узига хос кординатлага, улчамларга эга булган переменная 
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize
    var randomColor = getRandom(0, colors.length)


    box.style.position = 'absolute'
    box.style.width = boxSize + 'px'
    box.style.height = boxSize + 'px'
    box.style.backgroundColor = colors[randomColor]
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'

    // биза хози бу код билан html ни ичига data атрибутини яратобмиз ва унга true знч. беробмиз
    box.setAttribute('data-box', 'true')

    // крч шу яратган box ни game га кушадиган код:
    game.insertAdjacentElement('afterbegin', box)
}


function getRandom(min, max) {
    // Math.floor - масалан 45.202424 булса ушани яхлитлаб 25 йоки 16 килади.
    return Math.floor(Math.random() * (max - min) + min)
}