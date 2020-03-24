function ship() {
  
  this.x = window.innerWidth / 2;
  this.y = window.innerHeight / 2;
  this.xspeed = 0;
  this.yspeed = 0;
  this.angle = 0;
  
  this.rotate = function(a) {
      this.angle = this.angle + a;
    }
  

  
  
  this.dir = function(x,y,) {
      this.xspeed = 2 * x;
      this.yspeed = 2 * y;
  }
  

  

  this.update = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    };
  this.show = function() {
    rotate(this.angle)
    image(player, this.x, this.y, 30, 30);
    
    
    
  };
};
