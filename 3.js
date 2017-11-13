

  const board = [
    ['x', 'o', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
  
  const rand = function(n) {
      
     return Math.floor((Math.random() * n) + 1);
      
    };
  
  const nextMove = function(board,isX) {
    
	
 	let i = rand(3)-1;
	let j = rand(3)-1;
    

	while(board[i][j]!==' ')
      
	{
      
		i = rand(3)-1;
		j = rand(3)-1;
	} 
    
	return [i,j];
	
  };
   
    console.log(nextMove(board, true)); 