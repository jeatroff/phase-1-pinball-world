const gameList = document.querySelector(".game-list")

const detailImage = document.querySelector("#detail-image")
const detailTitle = document.querySelector("#detail-title")
const detailScore = document.querySelector("#detail-high-score")

const scoreForm  = document.querySelector("#high-score-form")
const scoreInput = document.querySelector("#score-input")

let currentGame = {}

fetch(`http://localhost:3000/games`)
    .then((response) => response.json())
    .then((gameArray) => {
        updateTitles(gameArray)
        displayDetais(gameArray[0])
        updateScore(gameArray)
    })

//Challenge 1
function updateTitles(gameArray) {
    gameArray.forEach(game => {
        let gameTitle = document.createElement("h5")
        gameTitle.textContent = `${game.name} (${game.manufacturer_name})`
        gameList.append(gameTitle)
        titleEvent(gameTitle, game)
    })
}

//Challenge 2
function displayDetais(game) {
    detailImage.src = game.image
    detailTitle.textContent = game.name
    detailScore.textContent = game.high_score

    currentGame = game
}

// Challenge 3
function titleEvent(gameTitle, game) {
    gameTitle.addEventListener("click", (event) => {
        displayDetais(game)
    })
}

// Challenge 4
function updateScore(gameArray) {
    scoreForm.addEventListener("submit", (event) => {
        event.preventDefault()

        // Update high score on DOM
        console.log(scoreInput.value)
        detailScore.textContent = scoreInput.value

        // Update high score internally
        currentGame.high_score = scoreInput.value

        scoreForm.reset()
    })       
}