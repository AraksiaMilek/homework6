
  
  const board=[
['x', 'o', 'o'],
[' ', 'x', 'o'],
['x', 'o', 'x']
];
  
const findWinner = function(board){

	let alert={};

	
	if((board[1][0] === board[1][1]) && (board[1][0] === board[1][2]) && (board[1][1] === board[1][2]))
	{
		if(board[1][0] === "x")
			alert=
			{
	    		winner: 'x',
	    		winningLocations: [[1, 0], [1, 1], [1, 2]] 
			};
		if(board[1][0] === "o")
			alert=
			{
	    		winner: 'o',
	    		winningLocations: [[1, 0], [1, 1], [1, 2]] 
			};
	}
  
  if((board[0][0] === board[0][1]) && (board[0][0] === board[0][2]) && (board[0][1] === board[0][2]))
	{
		if(board[0][0] === "x")
			alert=	
			{
    			winner:"x",
    			winningLocations: [[0, 0],[0, 1],[0, 2]] 
			};
		if(board[0][0] === "o")
			alert=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 0], [0, 1], [0, 2]] 
			};
	} 
	
	if((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[0][0] === board[2][0]))
	{
		if(board[0][0] === "x")
			alert=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 0], [1, 0], [2, 0]] 
			};
		if(board[0][0] === "o")
			alert=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 0], [1, 0], [2, 0]] 
			};
	}
  if((board[2][0] === board[2][1]) && (board[2][0] === board[2][2]) && (board[2][1] === board[2][2]))
	{

		if(board[2][0] === "x")
			alert=
			{
	    		winner: 'x',
	    		winningLocations: [[2, 0], [2, 1], [2, 2]] 
			};
		if(board[2][0] === "o")
			alert=
			{
	    		winner: 'o',
	    		winningLocations: [[2, 0], [2, 1], [2, 2]] 
			};
	}
	if((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[0][1] === board[2][1]))
	{
		if(board[0][1] === "x")
			alert=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 1], [1, 1], [2, 1]] 
			};
		if(board[0][1] === "o")
			alert=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 1], [1, 1], [2, 1]] 
			};
	}
  	if((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[0][2] === board[2][0]))
	{
		if(board[0][2] === "x")
			alert=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 2],[1, 1],[2, 0]] 
			};
		if(board[0][2] === "o")
			alert=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 2],[1, 1], board[2, 0]] 
			};
	}
	
	if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[0][0] === board[2][2]))
	{
		if(board[0][0] === "x")
			alert=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 0],[1, 1], [2, 2]] 
			};
		if(board[0][0] === "o")
			alert=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 0], [1, 1], [2, 2]] 
			};
	}
  if((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[0][2] === board[2][2]))
	{
		if(board[0][2] === "x")
			alert=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 2], [1, 2], [2, 2]] 
			};
		if(board[0][2] === "o")
			alert=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 2], [1, 2], [2, 2]] 
			};
	}


	let gameOver=true;

	for(let i=0;i<3;i++)

		for(let j=0;j<3;j++)

			if(board[i][j]===" ")

				gameOver=false;

	if(gameOver&&!alert.hasOwnProperty("winner"))

	alert=

	{
		winner: 'no one won'
	};

	if(alert.hasOwnProperty("winner"))

		return alert;

	else 

		return;
};
  
 alert(findWinner(board)); 

				