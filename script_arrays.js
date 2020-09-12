var balX = [50, 50, 50];
var balY = [50, 150, 250];
var speedX = [6, 4, 2];
var speedY = [3, 2, 6];

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

  // ga de arrays van de balgegevens af:
  for (var i = 0; i < balX.length; i++) {
    // teken een cirkel
    ellipse(balX[i], balY[i], 80, 80);

    // update positie van bal
    balX[i] = balX[i] + speedX[i];
    balY[i] = balY[i] + speedY[i];

    // controlleer of bal moet kaatsen
    if (balX[i] <= 0 || balX[i] >= 1280 ) {
      speedX[i] = speedX[i] * -1
    }
    if (balY[i] <= 0 || balY[i] >= 720) {
      speedY[i] = speedY[i] * -1;
    }
  }
}