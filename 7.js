<canvas id="canvas"></canvas>

<style>
  #canvas {
    border: solid 1px gray 
  }
</style>

<script>
  
  const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
      canvas.width=500;
      canvas.height=300;
        
        
    const xImg = new Image();
    xImg.src = "http://www.clker.com/cliparts/e/0/f/4/12428125621652493290X_mark_18x18_02.svg.hi.png";
    
    const oImg = new Image();
    oImg.src = "https://cdn-images-1.medium.com/max/800/1*aIo-DoVaO8H6B1jZ-vzFuA.png";
    
    const background = new Image();
    background.src = "https://tesolatrennertnyc.files.wordpress.com/2012/07/tic-tac-toe-board.gif";
  
  
  const player = true;
      
   const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  
   const rand = function(n) {
      
     return Math.floor((Math.random() * n) + 1);
      
    };
  
  const nextMove = function(board,isX) {    //nextMove
    
  
  let i = rand(3)-1;
  let j = rand(3)-1;
    

  while(board[i][j]!==' ')
      
  {
      
    i = rand(3)-1;
    j = rand(3)-1;
  } 
    
  return [i,j];
  
  };
  
  
  const makeMove = function(board,location,isX) {      //makeMOve
   
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
  
  
  const findWinner = function(board){                     //findWinner

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
  
  
let isX = true;
  
  while(true){                                                      
      let next = nextMove(board, isX);
      if(makeMove(board, next, isX) === -1) {
          alert("shayze!");
          break;
      }
      makeMove(board, next, isX);
    
      if(findWinner(board) !== undefined) {
        //alert(findWinner(board)["winner"] + " won the game!");
          break;
      }
     
  }

  
    const back = function(){
    context.drawImage(background, 0, 0,canvas.width,canvas.height);
      };
  const myX = function(x,y){
  context.drawImage(xImg, x, y,130,130);
      };
  const myO = function(x,y){
  context.drawImage(oImg, x, y,130,130);
     };
background.onload = back;
  
  
  const func = function() {
    
  if(!player) {
    
    const next = nextMove(board);
    if(makeMove(board, next) === 0) {
      makeMove(board, next);
      myO(next[1] * (canvas.width / 3), next[0] * (canvas.width / 3));
    }
  }
  player = !player;
};
  
func()



let isfunc = false;
  let isWin = false;
canvas.addEventListener('mousedown', function(e) {
  if(board[Math.floor(e.offsetY/(canvas.width / 3))][Math.floor(e.offsetX/(canvas.width / 3))] === ' ') {
    board[Math.floor(e.offsetY/(canvas.width / 3))][Math.floor(e.offsetX/(canvas.width / 3))] = 'x';
    myX(Math.floor(e.offsetX/(canvas.width / 3)) * (canvas.width / 3), 
      Math.floor(e.offsetY/(canvas.width / 3)) * (canvas.width / 3));
    isfunc = false;
    player = false;
  }
  
  if(isWin) {
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board.length; j++) {
        board[i][j] = ' ';
      }
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    back();
    isWin = false;
    player = !player;
    func();
    isfunc = true;
  }
  if(findWinner(board)) {
    isWin = true;
  }
});
  
  canvas.addEventListener('mouseup', function(e) {
  if(!isFirst && !isWin && !player) {
    player = true;
    const next = nextMove(board);
    if(makeMove(board, next) === 0) {
      makeMove(board, next);
      myO(next[1] * (canvas.width /2), next[0] * (canvas.width / 2));
    }
    if(findWinner(board)) {
      isWin = true;
    }
  }
    
});
  
  
  
  
</script>
        