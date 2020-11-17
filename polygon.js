class Polygon{
    constructor(x, y, radius) {
      var options = {
          'restitution':0,
          'friction':1.0,
          isStatic: false,
          density: 1.2
      }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius= radius
      
      World.add(world, this.body);
      this.image=loadImage("polygon.png")
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };
  