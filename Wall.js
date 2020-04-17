class Wall extends BaseClass{
  constructor(x, y, width, height){
    super(x,y,20,height,angle);
   // this.x = x;
   // this.y = y;
    var options = {
     isStatic:true
  }
   // this.positionX = this.position.x;
   // this.positionY = this.position.y;
  
   // this.image = loadImage("sprites/wood1.png");
   this.body = Bodies.rectangle(x, y, width, height, options);
   this.height = height;
   this.width = width;
   World.add(world,this.body);
   Matter.Body.setAngle(this.body, angle);
  }
display(){
  

}
};
