const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];

  for (var i = 0; i < numberOfRows; i++) {
    let row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    } board.push(row);
  } 

  return board;

};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  
  let board = [];

  for (var i = 0; i < numberOfRows; i++) {
    let row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(null);
    } board.push(row);
  };

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex, randomColumnIndex] = 'B'
    numberOfBombsPlaced++;
    // The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
  };

    const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
  }; 

  return board;

};

console.log(generateBombBoard(5,5,3)); //BDD a bomb board is create with "null" values;