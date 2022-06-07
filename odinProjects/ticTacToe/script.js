
const gameBoard = (() => {

    let gameBoardValues = Array(9).fill("");

    
    const placeSymbol = (index) => { 
        gameBoardValues[index] = symbol;
        document.getElementsByClassName("square")[index].innerHTML = "X";
     }
    
    const getList = () => gameBoardValues;

    

    return {
        placeSymbol,
        getList
    };
})();




var gameBoardOne = gameBoard;


function onclickPlacing(index) {
    alert(index)
    gameBoardOne.placeSymbol(index)
}
