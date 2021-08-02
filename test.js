

function startGame()
{
    let welocmeText = document.getElementById("starting-screen")
    welocmeText.style.display = "none"
    let GameScreen = document.getElementById("game-screen")
    console.log(GameScreen)
    GameScreen.style.visibility = "visible"
    console.log("games starting....")
    game()
} 



function game()
{
    let resultScreen = document.getElementById("your-score")
    resultScreen.style.visibility = "hidden"
    let score = document.getElementById("actualScore")
    let input = document.getElementById("input")

    let seconds = 7
    document.getElementById("timer").innerText = 7
    function updateTime()
    {
    let secondsElement = document.getElementById("timer")
    secondsElement.innerText = seconds
    seconds--
    if (secondsElement.innerText === "0")
    {
        console.log("here")
        secondsElement.innerText = seconds
        clearInterval(inter)
        let GameScreen = document.getElementById("game-screen")
        GameScreen.style.visibility = "hidden"
        let resultScreen = document.getElementById("your-score")
        resultScreen.style.visibility = "visible"
        let scoreToShow = document.getElementById("finalScore")
        scoreToShow.innerText = scoreCount
        input.value = ""
        clearInterval(inter)

    }
}
    let inter = setInterval(updateTime, 1000)

    
    let scoreCount = 0
    score.innerText = scoreCount
    let words = ["lasha", 'baghdavadze', 'just', 'testin']
    let wordOutput = document.getElementById("word")

    let index = 0
    let word = words[index]
    wordOutput.innerText = word

    input.addEventListener('change', (event) => 
    {
        if (input.value === word)
        {
            console.log("guessed")
            index++
            word = words[index]
            wordOutput.innerText = word
            scoreCount++
            console.log(`score: ${scoreCount}`)
            score.innerText = `${scoreCount}`
            console.log(input.value)
            if (input.value == words[words.length - 1])
            {
                console.log("shemovida")
                let welocmeText = document.getElementById("starting-screen")
                let GameScreen = document.getElementById("game-screen")
                GameScreen.style.visibility = "hidden"

                let resultScreen = document.getElementById("your-score")
                resultScreen.style.visibility = "visible"
                let scoreToShow = document.getElementById("finalScore")
                scoreToShow.innerText = scoreCount
            }
            input.value = "" 
        }

        else
        {
            console.log("didnt guess")
            wordOutput.innerText = words[index]
        }

    })

}

