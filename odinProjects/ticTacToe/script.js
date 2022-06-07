
const gameBoard = (() => {

    let gameBoardValues = Array(9).fill("");
    let nextPlayer = "O"

    const checkIfWon = () => {
        
    }

    const placeSymbol = (index) => { 
        if (nextPlayer == "X") {
            nextPlayer = "O";
        } else {
            nextPlayer = "X";
        }

        if (!(document.getElementsByClassName("square")[index].innerHTML)) {
            gameBoardValues[index] = nextPlayer;
            document.getElementsByClassName("square")[index].innerHTML = nextPlayer;    
        }
     }

    return {
        placeSymbol,
    };
})();




var gameBoardOne = gameBoard;


function onclickPlacing(index) {
    gameBoardOne.placeSymbol(index);
}
