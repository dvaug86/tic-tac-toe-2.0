let cells = document.querySelectorAll('.row > div');
let moveIndex = 0;
let gameIsOver = false;

for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

function cellClicked() {
    if (gameIsOver) return;
    //paint
    if(event.target.textContent == ""){
        let currentPlayer = moveIndex % 2 == 0 ? "Me" : "You";
        event.target.textContent = currentPlayer;
moveIndex++;
        if(currentPlayer ==="Me"){
    event.target.style.color = 'green'
    event.target.style.background = 'brown'


}else{
    event.target.style.color = 'brown'
    event.target.style.background = 'green'
}
        

        if (moveIndex == 9 && gameIsOver == false) {
            alert("Draw!");
        }

        for (let j = 0; j < winningCombo.length; j++){
            const currentCombo = winningCombo[j];
            //[6, 7, 8]
            if (cells[currentCombo[0]].textContent === currentPlayer && cells[currentCombo[1]].textContent === currentPlayer && cells[currentCombo[2]].textContent === currentPlayer){
                announceWinner(currentPlayer);
                gameIsOver = true;
                if(confirm("Do you want to play again?")) {
                    window.location.reload();
                }
                
            }
        }
    }
}

function announceWinner(winner){
    let statement = (winner ==="Me") ? "I am the winner!" : "You are the winner!" ;
    alert(statement);
};

function reset () {
    moveIndex = 0;
    gameIsOver = false;
    for (let i = 0; i < cells.length; i++){
        cells[i].textContent ="";
    }
};







