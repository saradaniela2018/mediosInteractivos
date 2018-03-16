var ah;
var lines;
var menina;
var sentada;
var gato;
var mascara;
var ahmascara;

var herramienta = 0;
var nombre = 'filtrogato';

function preload() {

  ah = loadImage('data/ah.jpg');
	ahmascara = loadImage ('data/ah.jpg');
  icon = loadImage('data/icon.png');
  gato = loadImage('data/gato.png');
  menina = loadImage('data/menina.png');
  sentada = loadImage('data/sentada.png');
  mascara = loadImage('data/d.png');
}

function setup() {
  createCanvas(670, 800);
  // image (ah, 50,50);
  ahmascara.mask(mascara);

}

function draw() {
  background(255, 232, 107);

  image(ah, 50, 50);

  //botones
  noStroke();
  fill(192);
  ellipse(115, 700, 70, 70);
  image(icon, 87, 670, 60, 60);

  fill(256, 205, 174); //durazno
  ellipse(255, 700, 70, 70);

  fill (255);
  ellipse (370,700,70,70);

  fill(0);
  ellipse(535, 700, 70, 70);

  //fill(0);
  //rect(320, 635, 140, 140);

  if (mouseIsPressed) {

    if (mouseX > 475 && mouseX < 775 && mouseY > 635 && mouseY < 775) {
      herramienta = 1;
      print("herramienta1");
    }
    
    if (mouseX > 320 && mouseX < 470 && mouseY > 635 && mouseY < 775) {
      herramienta = 2;
      print("herramienta2");
    }
    
    if (mouseX>205 && mouseX <315 && mouseY > 635 && mouseY < 775) {
      herramienta = 3;
      print ("herramienta3");
    }

    if (mouseX > 45 && mouseX < 180 && mouseY > 635 && mouseY < 775) {
      herramienta = 4;
    }
    
 
    
    if (herramienta == 4) {
      print("herramienta4");
      saveCanvas("filtrogato", "jpg");

    }
  }

  //FILTRO tres colores
  if (herramienta == 1) {
    //  tint (175,216);
    // image (ah, 50,50);
    filter(GRAY);
    tint(255, 255, 20);
    image(sentada, 50, 50);
    tint(20, 255, 255);
    image(gato, 50, 50);
    tint(235, 20, 255);
    image(menina, 50, 50);
  }



  //FILTRO ellipse

  if (herramienta == 2) {
    //image (ah, 50,50);
    noTint();
    for (var f = 52; f < 620; f = f + 10) {
      for (var c = 52; c < 620; c = c + 14) {
        var cols = get(c, f);

        var rojo = red(cols);
        var verde = green(cols);
        var azul = blue(cols);

        var nuevocolor = color(rojo, verde, azul);

        noStroke();
        fill(nuevocolor);
        ellipse(c, f, 20, 20);

      }
    }
  }

  if (herramienta ==3) {
    tint (255,0,0);
    image (ah, 50,50);
    filter (BLUR,1);
    tint (96,255,96);
    image (ahmascara,15,9);
    
  }
  
  
  }