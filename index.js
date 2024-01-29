document.addEventListener('DOMContentLoaded', function () {
    var svgObjekt = document.getElementById("svgfile");
    var svgInnehall = svgObjekt.contentDocument;
    var scaffold = svgInnehall.getElementById("scaffold");
  //  scaffold.style.opacity = '0'
});

const wordArray = ['bananpaj', 'lingonsylt', 'glasögon', 'blåbär', 'vitmögelost', 'ansiktslyft', 'trädgårdsredskap']
let correctWord = ''

let startBtn = document.querySelector('.start-btn')
startBtn.addEventListener('click', function() {
    let num = Math.floor((Math.random() * 7))
    correctWord = wordArray[num]
    setPlayboard()
})


function setPlayboard() {
    
}

