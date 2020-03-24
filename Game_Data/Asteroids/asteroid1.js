function asteroid1() {
  
  this.x = window.innerWidth / 2;
  this.y = window.innerHeight / 2;
  this.xspeed = 0;
  this.yspeed = 0;
  this.rotate = 100;
  
  
  

  
  
  this.dir = function(x,y,) {
      this.xspeed = 2 * x;
      this.yspeed = 2 * y;
  }
//   this.rotate = function(a) {
    
//     angleMode(DEGREES);
//     this.angle = this.angle + a;
//     rotate(this.angle);
//   }

  

  this.update = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    };
  this.show = function() {
    image(aster, this.x, this.y);
    asteroid1.resize(30, 30);
    
  };
};
