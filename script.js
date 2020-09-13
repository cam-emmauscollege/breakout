class Bal {
   constructor(x, y, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.speedX = speedX;
      this.speedY = speedY;
      this.diameter = 80;
   }
}


var bal = new Bal(50, 50, 3, 6);

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