const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];

  for (var i = 0; i < numberOfRows; i++) {
    let row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    } board.push(row);
  } return board

};

//console.log(generatePlayerBoard(3,3)); //BDD a player board is created


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBoms) => {
  
  let board = [];

  for (var i = 0; i < numberOfRows; i++) {
    let row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(null);
    } board.push(row);
  } return board

}

console.log(generateBombBoard(3,3,4));