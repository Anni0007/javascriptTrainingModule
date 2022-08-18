let sum = 0
let cards = [1,2,3]

cardEl = document.getElementById("card-element")

cardStr = ""

for(let i = 0; i < cards.length; i++){
    cardStr += cards[i] + "-"
}

cardEl.textContent += cardStr

function startGame(){

}

function newCard(){

}