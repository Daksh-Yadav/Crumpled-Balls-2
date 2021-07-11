class Dustbin
{
    constructor (x,y,width,height)
    {
        this.image = loadImage("Dustbin_Image .png")
        var options = 
        {
            isStatic:true,
            density:1.2
        }
        this.y = y
        this.x = x
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position
        this.image.scale = 0.2
        push()
        translate(pos.x, pos.y)
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,0,0,120,200);
        pop()
    }
};