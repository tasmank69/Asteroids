let player;
var s;



function preload() {
  player = loadImage('https://raw.githubusercontent.com/tasmank69/Asteroids/master/Game_Data/images/player/player.png');
}

function setup() {
createCanvas(window.innerWidth,window.innerHeight - (window.innerHeight * .0032));
angleMode(DEGREES);
imageMode(CENTER)
frameRate(60);
s = new ship;
}

function draw() {
  background(0);
  translate(s.x, s.y)
  s.update();
  s.show();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  }
  else if (keyCode === LEFT_ARROW) {
    s.rotate(-1);
  }
  else if (keyCode === RIGHT_ARROW) {
    s.rotate(1);
  }
  else if (keyCode === 32) {
    s.dir(0, 0);
  }
}


