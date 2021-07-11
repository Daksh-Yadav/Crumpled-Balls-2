class Paper
{
    constructor(x,y,r)
    {
        
    this.image = loadImage("Crumpled_Paper.png");
    this.Visiblity = 255;
        var options = 
        {
            isStatic:false,
            restitution:0.3,
            friction:9,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;
        
        this.image.scale = 0.2
        push()
        translate(paperpos.x,paperpos.y);
        imageMode(RADIUS)
        //strokeWeight(3);
        //fill(225,0,225)
        image(this.image, 0,0,this.r,this.r);
        //ellipse(0,0,this.r,this.r);
        pop()
    }
}
