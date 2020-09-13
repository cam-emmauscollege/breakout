class Bal {
   constructor(x, y, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.speedX = speedX;
      this.speedY = speedY;
      this.diameter = 80;
   }

   show() {
      fill(255, 100, 255);
      ellipse(this.x, this.y, this.diameter, this.diameter);
   }

   update() {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;

      if (this.x <= 0 || this.x >= 1280 ) {
         this.speedX = this.speedX * -1
      }

      if (this.y <= 0 || this.y >= 720) {
         this.speedY = this.speedY * -1;
      }
   }
}




var ballen = [/* maak hier je ballen */];

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
  
  // ga alle ballen af
  for (var i = 0; i < ballen.length; i++) {
    var bal = ballen[i];
    bal.show()
    bal.update();
  }
}