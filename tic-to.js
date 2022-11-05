console.log("hello gamers")
let turnAudio = new Audio("ting.mp3")
let gameoverAudio = new Audio("gameover.mp3")
let gameOver = false


// logic for changing the turn


let turn = "X"
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}
// its a logic how to show a winner (bohat okha ha kidr phas gya hun ma 😭😭😭😭😭)


let checkWin = () => {
    let late = document.getElementsByClassName("text-box")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if (
            (late[e[0]].innerText === late[e[1]].innerText) &&
            (late[e[2]].innerText === late[e[1]].innerText) &&
            (late[e[0]].innerText !== "")
        ) {
            document.querySelector('.turn').innerText = late[e[0]].innerText + " won😎";
            if (gameOver = !false) {
                gameoverAudio.play();
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            }
        }
    })
}


// this is a game logic 


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.text-box');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWin();
            if (!gameOver) {

                document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//reset button setting
reset.addEventListener('click', () => {
    let boxes = document.querySelectorAll(".text-box")
    Array.from(boxes).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    gameOver = false
    document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})