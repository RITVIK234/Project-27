class Bob{
constructor(x,y,radius,angle) {
    var options = {
    isStatic: false,
    restitution:0.3,
    friction:0.5,
    density:4.2
}
this.body = Bodies.circle(x,y,radius,options);
this.radius= radius;
World.add(world, this.body);
}
display(){   
    var pos =this.body.position;
    this.body.visible=false;

    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, (this.radius)*2, (this.radius)*2); 
}
}