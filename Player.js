class Player {
    constructor(x, y, width, height) {
      var options = {
       // isStatic: true
       restituion:0.5
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();

      if(keyIsDown(LEFT_ARROW)){
         pos.x -=0.5 
      }

      if(keyIsDown(RIGHT_ARROW)){
        pos.x +=0.5 
     }
    }
  }