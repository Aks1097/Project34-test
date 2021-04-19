class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5            
        }
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
   
   show(){
        image(this.fly,200,20);
        
     
            var pos1 = this.fly.bodyA.position;
            var pos2 = this.fly.bodyB.position;
            stroke(0)
            strokeWeight(5)
            line(pos1.x , pos1.y, pos2.x , pos2.y);
               
    }
    
}