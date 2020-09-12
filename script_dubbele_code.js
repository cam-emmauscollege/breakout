var balX1 = 50;
var balY1 = 50;
var speedX1 = 6;
var speedY1 = 3;

var balX2 = 50;
var balY2 = 150;
var speedX2 = 4;
var speedY2 = 2;

var balX3 = 50;
var balY3 = 250;
var speedX3 = 2;
var speedY3 = 6;

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
  ellipse(balX1, balY1, 80, 80);
  ellipse(balX2, balY2, 80, 80);
  ellipse(balX3, balY3, 80, 80);

  // update positie van ballen
  balX1 = balX1 + speedX1;
  balY1 = balY1 + speedY1;
  balX2 = balX2 + speedX2;
  balY2 = balY2 + speedY2;
  balX3 = balX3 + speedX3;
  balY3 = balY3 + speedY3;

  // controlleer of ballen moeten kaatsen
  if (balX1 < 0 || balX1 >= 1280 ) {
    speedX1 = speedX1 * -1
  }
  if (balY1 < 0 || balY1 >= 720) {
    speedY1 = speedY1 * -1;
  }

  if (balX2 < 0 || balX2 >= 1280 ) {
    speedX2 = speedX2 * -1
  }
  if (balY2 < 0 || balY2 >= 720) {
     speedY2 = speedY2 * -1;
  }

  if (balX2 < 0 || balX2 >= 1280 ) {
    speedX2 = speedX2 * -1
  }
  if (balY3 < 0 || balY3 >= 720) {
    speedY3 = speedY3 * -1;
  }
}