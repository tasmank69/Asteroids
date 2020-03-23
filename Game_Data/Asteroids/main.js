let player;


function preload() {
  player = loadImage('../images/player/player.png');
}

function setup() {
createCanvas (window.innerWidth,window.innerHeight - (window.innerHeight * .0032));
frameRate(60);
}

function draw() {
  background(0);
  Image(player, 0, 0);
  
}



