class Rope{
    constructor(bodyA, bodyB, offsetX)
    {
        var options = {
           bodyA: bodyA,
           bodyB: bodyB,
           pointB: {x: offsetX, y: 0},
       }
       this.rope = Constraint.create(options);
       this.offsetX = offsetX;
       World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);

        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y);
    }
}