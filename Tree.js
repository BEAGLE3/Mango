class Tree {
    constructor(x,y,width,height) {
      var options = {
        isStatic:true,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2,
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("Img/tree.png");
      this.image.scale=2;
     
     
      World.add(world, this.body);
      
     
    }
    display(){
     
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, 340, 610);
      pop();
    }
  };