var p; 

function setup() {
  createCanvas(400, 400);

  p = new Pendulum(createVector(width / 2, 10), 300);
}

function draw() {
  background(225);
  p.go();
}

function Pendulum(temp_origin, temp_r) {
  this.origin = temp_origin.copy();
  this.r = temp_r;

  this.location = createVector();

  this.angle = PI / 2;

  this.aVelocity = 0.0;
  this.aAcceleration = 0.0;
  this.damping = 0.980;

  this.go = function() {
    this.update();
    this.display();
  }

  this.update = function() {
    var gravity = 0.4;

    this.aAcceleration = (gravity / this.r) * -1 * sin(this.angle); 
    this.location.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);

    this.location.add(this.origin);
  

    this.aVelocity += this.aAcceleration;
  
    this.angle += this.aVelocity;
   

    this.aVelocity *= this.damping; 
    
    
  this.display = function() {

    stroke(0);
    line(this.origin.x, this.origin.y, this.location.x, this.location.y);
    fill(175);
    ellipse(this.location.x, this.location.y, 30, 30);

  }

  }
}