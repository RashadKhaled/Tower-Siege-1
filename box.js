class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':1.0,
      }
      this.color= color(random(0,255),random(0,255),random(0,255))
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width= width
      this.height=height
      
      World.add(world, this.body);
      this.visibility=255
    }
    display(){
        if(this.body.speed<3){

        
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
     rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
        }
        else{
            push()
            World.remove(world,this.body)
            this.visibility=this.visibility-5
            pop()
        }
        
    }
  };
  