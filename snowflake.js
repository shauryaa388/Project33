
  class Snowflake {

  constructor(x,y) {
   var options={
       restitution:0.5,
       density:0.5
   }
   this.body = Bodies.circle(x, y, 10,options)
   World.add(this.body, world)
   this.image=loadImage("snow4.webp")
  }

 display() {
     imageMode(CENTER)
   image(this.image, this.body.position.x, this.body.position.y,20,20)
    

 }

}

