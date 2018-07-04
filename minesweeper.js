const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];

  for (var i = 0; i < numberOfRows; i++) {
    let row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    } board.push(row);
  } return board

};

console.log(generatePlayerBoard(10,10));



