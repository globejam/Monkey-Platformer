class Ground {
  constructor(x, y, width, height,color) {
    var options = {
      isStatic: true
     //restituion:1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
    this.color=color
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill(this.color);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
