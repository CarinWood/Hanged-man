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

let startBtn = document.querySelector('.start-btn')
startBtn.addEventListener('click', function() {
    let num = Math.floor((Math.random() * 7))
    correctWord = wordArray[num]
    setPlayboard()
})

function addTiles() {
    for (let i = 0; i < correctWord.length; i++) {
        let tile = document.createElement('p')
        tile.classList.add('tile')
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
        break
        default: 'Whatever'
    }
}

function startGame() {
    document.addEventListener('keydown', function(event) {
        // Hämta tangenten som trycktes ner
        var keyPressed = event.key;
        if(correctWord.includes(keyPressed)) {
            console.log('bokstaven finns i ordet!')
        } else {
            if(allowedLetters.includes(keyPressed)) {
                letterBox.innerText += keyPressed
                strike++
                console.log(strike)
                hang(strike)
            } else {
                console.log('Tangenten innehåller inte en tillåten bokstav: ' + keyPressed)
            }
            
        }
    });
}

function setPlayboard() {
    startBtn.classList.add('hide')
    instruction.classList.add('show')
    console.log(correctWord)
    addTiles()
    startGame()
}

