function Asteroid() {
    this.pos = createVector(random(width), random(height))
    this.r = 50;


    this.render = function(){

        translate(this.pos.x, this.pos.y);
        ellipse(0,0 this.r*2, )
    }

}