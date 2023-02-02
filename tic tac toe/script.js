// some variable for game
let turn = 'X'
let gameOver = false
let gameWinSound = new Audio('Gamewin.mp3')
const pos = [
    [0, 1, 2],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [4, 0, 8],
    [6, 7, 8],
    [0, 3, 6],
    [6, 4, 2],
]

// changing the player turn
const changeTurn = () => { turn = (turn === 'X' ? 'O' : 'X') }

// game win cheack
let cheackWinner = () => {
    let box = document.getElementsByClassName("textBox")
    pos.forEach(elm => {
        if ((box[elm[0]].innerText === box[elm[1]].innerText) && (box[elm[1]].innerText === box[elm[2]].innerText) && (box[elm[0]].innerText !== '')) {
            gameOver = true
            setpopUp(turn)
        }
    })
    cheackDraw()
}

// game draw cheack
let cheackDraw = () => {
    let box = document.getElementsByClassName("textBox"), i
    for (i = 0; i < 9; i++)
        if (box[i].innerText === '')
            break
    if (i == 9)
        setpopUp("DRAW")
}

// popup window for game winner
let setpopUp = (winner) => {
    gameWinSound.play()
    let winPop = document.getElementsByClassName("winStatus")[0]
    if (winner === 'DRAW')
        winPop.firstElementChild.innerText = winner;
    else
        winPop.firstElementChild.innerText = winner + " win"
    winPop.classList.add("popup")
    document.getElementsByClassName("overlay")[0].classList.add("popUpOverlay")
}

// reset all thig
let restart = () => {
    document.getElementsByClassName("winStatus")[0].classList.remove("popup")
    document.getElementsByClassName("overlay")[0].classList.remove("popUpOverlay")
    boxes.forEach(element => {
        let textbox = element.querySelector('.textBox')
        textbox.innerText = ''
        turn = 'X'
        gameOver = false
    })
    document.getElementById("turnMsg").innerText = "turn for " + turn
}

// game logic
let boxes = Array.from(document.getElementsByClassName("box"))
boxes.forEach(element => {
    let textbox = element.querySelector('.textBox')
    element.addEventListener("click", () => {
        if (textbox.innerText === '') {
            textbox.innerText = turn
            cheackWinner()
            changeTurn()
            if (!gameOver)
                document.getElementById("turnMsg").innerText = "turn for " + turn
        }
    })

})