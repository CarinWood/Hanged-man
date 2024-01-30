document.addEventListener('DOMContentLoaded', function () {
    var svgObjekt = document.getElementById("svgfile");
    var svgInnehall = svgObjekt.contentDocument;
    ground = svgInnehall.getElementById("ground")
    ground.style.opacity = '0'
    scaffold = svgInnehall.getElementById("scaffold");
    scaffold.style.opacity = '0'
    head = svgInnehall.getElementById("head")
    head.style.opacity = '0'
    body = svgInnehall.getElementById("body")
    body.style.opacity = '0'
    arms = svgInnehall.getElementById("arms")
    arms.style.opacity = '0'
    legs = svgInnehall.getElementById("legs")
    legs.style.opacity = '0'
});


const wordArray = ['bananpaj', 'lingonsylt', 'glasögon', 'blåbär', 'vitmögelost', 'ansiktslyft', 'trädgårdsredskap']
let ground
let scaffold
let head
let body
let arms
let legs
let strike = 0
let correctWord = ''
let tiles = 0
let playBoard = document.querySelector('.play-board')
let instruction = document.querySelector('.instruction')
let letterBox = document.querySelector('.used-letters')
let allowedLetters = 'abcdefghijklmnopqrstuvwxyzåäö'
let wrongLettersPressed = ''
let place
let gameOverText = document.querySelector('.game-over-text')
let pic = document.querySelector('.pic')
let count = 0;
let modal = document.querySelector('.modal')
let cancel = document.querySelector('.cancel')

let startBtn = document.querySelector('.start-btn')
startBtn.addEventListener('click', function() {
    pic.classList.add('fade-out')
    let num = Math.floor((Math.random() * 7))
    correctWord = wordArray[num]
    setPlayboard()
})

function addTiles() {
    for (let i = 0; i < correctWord.length; i++) {
        let tile = document.createElement('p')
        tile.classList.add('tile')
        tile.classList.add(i)
        playBoard.appendChild(tile)
    }
}

function hang(strike) {
    switch(strike) {
        case 1: ground.style.opacity = '1'
        break
        case 2: scaffold.style.opacity = '1'
        break
        case 3: head.style.opacity = '1'
        break
        case 4: body.style.opacity = '1'
        break
        case 5: arms.style.opacity = '1'
        break
        case 6: legs.style.opacity = '1'
        instruction.classList.add('fade-out')
        playBoard.classList.add('fade-out')
        letterBox.classList.add('fade-out')
        gameOverText.classList.add('show')
        break
        default: ''
    }
}

function startGame() {
    document.addEventListener('keydown', function(event) {
        var keyPressed = event.key
        if(correctWord.includes(keyPressed)) {
            for (let i = 0; i < correctWord.length; i++) {
                if(correctWord.charAt(i) === keyPressed) {
                    playBoard.children[i].innerText = keyPressed
                    count += 1;
                }
            }
            if(count === correctWord.length) {
                ground.style.opacity = '0'
                head.style.opacity = '0'
                scaffold.style.opacity = '0'
                body.style.opacity = '0'
                legs.style.opacity = '0'
                arms.style.opacity = '0'
                modal.classList.add('show')
            }
                 
        } else {
            if(allowedLetters.includes(keyPressed)) {
                if(wrongLettersPressed.includes(keyPressed)) return
                letterBox.innerText += keyPressed
                strike++
                hang(strike)
                wrongLettersPressed += keyPressed
            } else {
                return
            }
            
        }
    });
}

function setPlayboard() {
    startBtn.classList.add('hide')
    instruction.classList.add('show')
    addTiles()
    startGame()
}


cancel.addEventListener('click', function() {
    startBtn.classList.remove('hide')
    instruction.classList.remove('show')
    pic.classList.remove('fade-out')  
    playBoard.innerHTML = ''  
    modal.classList.remove('show')
    letterBox.innerHTML = ''
})

