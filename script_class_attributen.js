class Bal {
   constructor(x, y, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.speedX = speedX;
      this.speedY = speedY;
      this.diameter = 80;
   }
}


var ballen = [new Bal(50,  50, 6, 3),
              new Bal(150, 50, 4, 2),
              new Bal(250, 50, 2, 6)];

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}
 

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
  
  // stel vulkleur in
  fill(255, 100, 255);

  // ga alle ballen af
  for (var i = 0; i < ballen.length; i++) {
    var bal = ballen[i];

    // teken een cirkel
    ellipse(bal.x, bal.y, bal.diameter, bal.diameter);

    // update positie
    bal.x = bal.x + bal.speedX;
    bal.y = bal.y + bal.speedY;

    if (bal.x <= 0 || bal.x >= 1280 ) {
      bal.speedX = bal.speedX * -1
    }

    if (bal.y <= 0 || bal.y >= 720) {
      bal.speedY = bal.speedY * -1;
    }
  }
}