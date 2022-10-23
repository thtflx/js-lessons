var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $result = document.querySelector('#result')
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $gameTime = document.querySelector('#game-time')

// randomColors
var colors = ['red', 'purple', 'pink', 'green', 'orange', 'yellow', 'aliceBlue', 'orangered', 'lime', 'grey', 'gray']

var score = 0
var isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)


function show($el) {
    $el.classList.remove('hide')
}



function hide($el) {
    $el.classList.add('hide')
}



function setGameScore() {
    $result.textContent = score.toString()
}



function startGame() {
    score = 0
    setGameTime()
    $gameTime.setAttribute('disabled', true)
    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    hide($start)


    var interval = setInterval(function() {
        var time = parseFloat($time.textContent)

        if (time <= 0) {
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

    renderBox()
}



function setGameTime() {
    var time = parseInt($gameTime.value)
    $time.textContent = time.toFixed(1)
    show($timeHeader)
    hide($resultHeader)
}



function endGame() {
    isGameStarted = false
    setGameScore()
    $gameTime.removeAttribute('disabled')
    show($start)
    $game.style.backgroundColor = '#ccc'
    $game.innerHTML = ''
    hide($timeHeader)
    show($resultHeader)
}



// Когда будет работать эта функция, при нажатии поле Game, рендерится заново.
function handleBoxClick(event) {
    if (!isGameStarted) { // ч-4
        return
    }

    if (event.target.dataset.box) {
        score++
        renderBox()
    }
}



function renderBox() {
    $game.innerHTML = ''
    var box = document.createElement('div')
    var boxSize = getRandom(30, 100)
    var gameSize = $game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize
        // [1,2,3] -> length == 3
    var randomColorIndex = getRandom(0, colors.length)

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = colors[randomColorIndex]
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}