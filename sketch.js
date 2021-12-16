var canvas, backgroundImage;

var gameState = 0;



var form, player, game;

var player1;



function preload(){
  
  
}
function setup(){
  canvas = createCanvas(500,1000);
  
  game = new Game();
  //game.getState();
  game.start();
}


function draw(){

  game.play();
//   if(playerCount === 4){
//     game.update(1);
//   }
//   if(gameState === 1){
//     clear();
    
//   }

//   if(gameState === 2)
// {
//   game.end();
// }
}
