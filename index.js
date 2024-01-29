document.addEventListener('DOMContentLoaded', function () {
    var svgObjekt = document.getElementById("svgfile");
    var svgInnehall = svgObjekt.contentDocument;
    var scaffold = svgInnehall.getElementById("scaffold");
  //  scaffold.style.opacity = '0'
});

const wordArray = ['bananpaj', 'lingonsylt', 'glasögon', 'blåbär', 'vitmögelost', 'ansiktslyft', 'trädgårdsredskap']
let correctWord = ''
let tiles = 0
let playBoard = document.querySelector('.play-board')
let instruction = document.querySelector('.instruction')
let letterBox = document.querySelector('.used-letters')

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

function startGame() {
    document.addEventListener('keydown', function(event) {
        // Hämta tangenten som trycktes ner
        var keyPressed = event.key;
        if(correctWord.includes(keyPressed)) {
            console.log('bokstaven finns i ordet!')
        } else {
            letterBox.innerText += keyPressed
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

