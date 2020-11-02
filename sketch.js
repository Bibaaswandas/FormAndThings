var database, canvas;
var gameState = 0;
var PlayerCount;
var form;
var game;
var player;

function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  
}

function draw(){
    background("white");
}


