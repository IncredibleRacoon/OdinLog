
const gameBoard = (() => {

    let gameBoardValues = Array(9).fill("");
    let nextPlayer = "O"

    const checkIfWon = () => {
        
        for (let sign of  ["X", "O"]) {

            // check if row win
            if (
                gameBoardValues.slice(0, 3).filter((x) => x == sign).length == 3 ||
                gameBoardValues.slice(3, 6).filter((x) => x == sign).length == 3 ||
                gameBoardValues.slice(6).filter((x) => x == sign).length == 3
            ) {
                return "win"
            }

            // check for column win
            if (
                gameBoardValues.filter((element, index) => index % 3 == 0 && element == sign).length == 3 ||
                gameBoardValues.filter((element, index) => index % 3 == 1 && element == sign).length == 3 ||
                gameBoardValues.filter((element, index) => index % 3 == 2 && element == sign).length == 3
            ) {
                return "win"
            }

            // check for diagonal win
            if (
                gameBoardValues.filter((element, index) => index % 4 == 0 && element == sign).length == 3 ||
                gameBoardValues.filter((element, index) => index % 2 == 0 && index > 1 && index < 7 && element == sign).length == 3
            ) {
                return "win"
            }

        }
        
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
        checkIfWon
    };
})();




var gameBoardOne = gameBoard;


function onclickPlacing(index) {
    gameBoardOne.placeSymbol(index);
    if (gameBoardOne.checkIfWon() == "win") {
        alert("won")
    }
}
