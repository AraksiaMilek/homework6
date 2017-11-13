

for(let i=0;;i++)
  
{
	nextMove(board, isX);
	makeMove(board, location, isX);
  
	isX=!isX;

	if(findWinner(board)===undefined)

		continue;
	else
	{
		alert('the winner is: ' + findWinner(board).winner + ', and the winning locations are: ' + findWinner(board).winningLocations);
		break;
	}
