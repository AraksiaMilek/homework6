 

  const board = [
    ['x', 'o', ' '],
    [' ', ' ', ' '],
    [' ', ' ', 'o']
];
   
  
 const makeMove = function(board,location,isX) {
   
	if(board[location[0]][location[1]]===" ") {
      
		if(isX) {
          
			board[location[0]][location[1]]='x';
          
		}  else  {
          
			board[location[0]][location[1]]='o';
		}
      
		return 0;
	}
    
	return -1;
};
      
  console.log(makeMove(board, [2,2], true)); 