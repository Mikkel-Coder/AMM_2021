var ship;
var asteroids = []; //Et arry med asteroids posotioner
var lasers = []; //Et arry med lasernes postioner

function setup() { 
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  for (var i = 0; i < 5; i++) {
  asteroids.push(new Asteroid());
  }
}

function draw() { //En funktion til visuelt at tegne ship og dens drejning og kanter
  background(0);
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();

  for (var i = 0; i < asteroids.length; i++) { //Et ikke færdigudvilket scoresystem. Det sskriver bare ops når du ramer kanterne på asteroids
    if (ship.hits(asteroids[i])){
      console.log('ops')
    }
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
  for (var i = lasers.length-1; i >=0; i--) { //lasernes position opdateres 
    lasers[i].render();
    lasers[i].update();
    for (var j = asteroids.length-1; j >= 0; j--) {
      if (lasers[i].hits(asteroids[j])) {
        if (asteroids[j].r >10) {
        var newAsteroids = asteroids[j].breakup();
        asteroids = asteroids.concat(newAsteroids); 
      } else {
        // increase the score
      }
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        break; //Laver 2 nye astorides, når den gamle bliver ramt af laser
      }
    }

  }
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}


function keyPressed() {// Knapper til at styrre skibet <^>
  if (key ===  " ") {
    lasers.push(new Laser(ship.pos, ship.heading)) = true;
  } 
  if (keyCode === RIGHT_ARROW) {
    ship.setRotation(0.07) = true;
  } 
  if (keyCode === LEFT_ARROW) {
    ship.setRotation(-0.07) = true;
  }
  if (keyCode === UP_ARROW) {
    ship.boosting(true) = true;
  }

}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    ship.setRotation(0);
  }
  if (keyCode === LEFT_ARROW) {
    ship.setRotation(0);
  }
  if (keyCode === UP_ARROW) {
    ship.boosting(false) = false;
  }
}
