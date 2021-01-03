class Box {
    constructor(x, y, width, height){
        var options = {
            isStatic:false,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        push();
        
        strokeWeight(4)
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();


    }
}