function Laser(spos, angle) { //Laserne posotion og heading og deres hastighed (vel)
    this.pos = createVector(spos.x, spos.y);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(10);

    this.update = function(){
        this.pos.add(this.vel);
    }
    this.render = function(){ //grafikken på laserne
        push();
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop(); //For ikke at læse funktionen konstant
    }

    this.hits = function(asteroid){ //Fortæller med snadt eller flask om en laser har ramt en astroide
        var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
        if (d < asteroid.r) {
           return true;
        } else {
            return false;
        }
        
    }


}
 