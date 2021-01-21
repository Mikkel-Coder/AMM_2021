function Asteroid() {
    this.pos = createVector(random(width), random(height))
    this.r = 50;

    this.render = function(){
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);
        ellipse(0,0, this.r*2)
        pop();
    }

}