let isX = true;
  
  while(true){   

      let next = nextMove(board, isX);

      if(makeMove(board, next, isX) === -1) {

          alert("shayze!");

          break;
      }

      makeMove(board, next, isX);
    
      if(findWinner(board) !== undefined) {
        alert(findWinner(board)["winner"] + " won the game!");
          break;
      }
     
  }