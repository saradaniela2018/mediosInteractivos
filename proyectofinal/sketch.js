var imgfeliz; //personaje prinipal
var imgflota;
var imgflor;

var imgabeja; //abeja
var imgdanger; //veneno, monedas grises

var intro = 1;
var juego = 2;
var perdio = 3;
var instru = 4;

var estado = intro;

//FONDO PERDER
var imgtriste;
var balls = [];
var threshold = 30;
var accChangeX = 0;
var accChangeY = 0;
var accChangeT = 0;

//FONDO INSTRUCCIONES
var fondo;
var imghead;
var mano;
var head = [];

//POSICION BOTONES
var x = 690;
var y1 = 350;
var y2 = 590;
var x1 = 900;
var y3 = 60;

//VARIABLES JUEGO
var puntaje = 0;
var venenos = [];
var misAbejas = [];
var cosa; // personaje verde con amarillo
var contador = 0;

//varios
var myFont;
var er;

function preload() {

  //imagenes personajes
  imgfeliz = loadImage('x/simle.png');
  imgtriste = loadImage('x/triste.png');
  fondo = loadImage('x/fondo.png'); //lineas instruiones
  imgabeja = loadImage('aebja.png'); //abeja
  imgdanger = loadImage('x/danger.png'); //veneno
  imgabeja = loadImage('x/aebja.png');
  mano = loadImage('x/mano.png');

  //tipografia
  myFont = loadFont('x/billy.ttf');
  //sonido
  er = loadSound("er.mp3");
}

function setup() {
  createCanvas(980, 650);

  //cancion en repeticion y bajo volumen
  er.loop();
  er.setVolume(0.3);

  //especies
  for (var i = 0; i < 20; i++) {
    balls.push(new Ball()); //abejas que se agitan
  }

  for (var w = 0; w < 100; w = w + 1) {
    misAbejas[w] = new oo(); //abejas juego 
  }

  for (var r = 0; r < 70; r = r + 1) {
    venenos[r] = new ff(); //monedas grises juego
  }
}

function draw() {

  if (estado == intro) {

    //botones
    background(247, 111, 111);
    noStroke();
    fill(255, 255, 113); //rojo
    ellipse(x, y1 + 7, 300, 300);
    ellipse(x1, y2 + 7, 66, 66);

    fill(255, 255, 113); //amarillo
    ellipse(x, y1, 300, 300); //jugar
    fill(53);
    ellipse(x1, y2, 66, 66); //instruiiones 


    //titulos
    fill(53);
    textSize(150);
    textFont('courier new');
    text('UN WALM', 180, 140);
    textSize(15);
    text("*agita y las abejas se moveran", 240, 630);

    //boton jugar
    fill(53);
    triangle(650, 280, 650, 440, 760, 360);

    //instruiones
    fill(255);
    textSize(30);
    text('?', 890, 600);

    //personje verde con amarillo
    image(imgfeliz, -130, 120, 600, 800);

    //abejas
    for (var i = 0; i < balls.length; i++) {
      balls[i].move();
      balls[i].display();
    }

    checkForShake();

    //FONDO JUEGO                  ----------------------------

  } else if (estado == juego) {
    background(247, 111, 111);
    image(imgfeliz, -85, 115, 420, 560);
    noStroke();
    fill(255, 255, 255, 10);
    rect(0, 0, 1000, 150);

    //boton regresar
    noStroke();
    fill(255, 255, 113); //amarillo
    ellipse(900, y3 + 7, 66, 66);

    fill(53);
    ellipse(x1, y3, 66, 66);

    fill(255);
    textSize(30);
    text('↩', 885, 73);
    fill(53);
    textFont('courier new');
    textAlign(LEFT);
    textSize(30);
    text("veneno " + contador, 20, 40);

    //se dibujan las abejas   
    for (var w = 0; w < misAbejas.length; w = w + 1) {
      misAbejas[w].dibujarse();
      misAbejas[w].caer();
    }

    //monedas grises
    for (var r = 0; r < venenos.length; r = r + 1) {
      venenos[r].dibujarse();
      venenos[r].caer();
    }

    //si toca a Walm pierde  
    for (var w = 0; w < misAbejas.length; w = w + 1) {
      if (misAbejas[w].x < 130) {
        estado = perdio;
        //reinicio
        for (var w = 0; w < misAbejas.length; w = w + 1) {
          misAbejas[w] = new oo;

          for (var r = 0; r < venenos.length; r = r + 1) {
            venenos[r] = new ff;
          }
        }
      }
    }

    //si toca 3 monedas, pierde
    if (contador > 2) {
      estado = perdio;
      contador = 0;
    }

    //FONDO PERDER                 ----------------------------

  } else if (estado == perdio) {
    background(212, 209, 219);
    image(imgtriste, 0, 65, 450, 600);

    //las abejas que se agitan 
    for (var i = 0; i < balls.length; i++) {
      balls[i].move();
      balls[i].display();
    }

    checkForShake();

    //texto para saber que hacer 
    fill(53);
    textSize(30);
    textFont('courier new');
    text('me pierdes,', 290, 250);
    text('ni siquiera quieres agitar?', 290, 280);

    //botones
    noStroke();
    fill(255, 255, 113); //amarillo
    ellipse(900, y3 + 7, 66, 66);

    fill(53);
    ellipse(x1, y3, 66, 66);

    fill(255);
    textSize(30);
    text('↩', 885, 75);
    fill(53);

    //FONDO INSTRUIONES                 ---------------------------

  } else if (estado == instru) {


    image(fondo, 0, 0, 1000, 650);
    //boton regresar
    noStroke();
    fill(255, 255, 113); //amarillo
    ellipse(900, y3 + 7, 66, 66);

    fill(53);
    ellipse(x1, y3, 66, 66);

    fill(255);
    textSize(30);
    text('↩', 885, 73);
    fill(53);

    fill(70);
    noStroke();
    rect(250, 90, 500, 510, 150);

    //imagens
    image(imgabeja, 550, 170, 100, 90);
    image(imgdanger, 340, 170, 100, 80);
    image(mano, 350, 260, 290, 210);

    fill(255);
    textFont('courier new');
    textSize(15);
    text('si tocas 3 veces la moneda gris, perderas', 325, 535);
    text('una vez la abeja toque a Walm, perderas', 325, 560);
  }


  if (mouseIsPressed) {

    if (mouseX > x - 160 && mouseX < x + 160 && mouseY > y1 - 160 && mouseY < y1 + 160) {
      estado = 2; //juego

      //reinicio
      for (var w = 0; w < misAbejas.length; w = w + 1) {
        // if (this.x < 0) {
        misAbejas.y = random(height, -height);
        misAbejas.x = random(width, width - 400);
        // }
      }

    }

    if (mouseX > x1 - 45 && mouseX < x1 + 45 && mouseY > y2 - 45 && mouseY < y2 + 45) {
      estado = 4; //instru
    }

    if (mouseX > x1 - 45 && mouseX < x1 + 45 && mouseY > y3 - 45 && mouseY < y3 + 45) {
      estado = 1; // inicio
    }
  }
}

function mouseReleased() {

  var borro = false;

  for (var w = 0; w < misAbejas.length; w = w + 1) {
    if (mouseX > misAbejas[w].x && mouseX < misAbejas[w].x + 70 && mouseY > misAbejas[w].y && mouseY < misAbejas[w].y + 60) { //si lo selecciono, muere

      misAbejas.splice(w, 1); // ara borrar una abeja en la osicion w
      borro = true;
    }
  }


  if (borro == false) {
    misAbejas.push(new oo());
  }

  for (var r = 0; r < venenos.length; r = r + 1) {
    if (mouseX > venenos[r].x && mouseX < venenos[r].x + 50 && mouseY > venenos[r].y && mouseY < venenos[r].y + 40) { //si lo selecciono, muere
      venenos.splice(r, 1); // lo borra en la osicion r
      borro = true;
      contador = contador + 1; //y suma una al contador
    }
  }

  //crear uno si se equivoca al tocar
  if (borro == false) {
    venenos.push(new ff());
  }
}

//abejas agitar
function Ball() {

  this.x = random(width);
  this.y = random(height);
  //this.diameter = random(10, 30);
  this.xspeed = random(-2, 2);
  this.yspeed = random(-2, 2);
  this.oxspeed = this.xspeed;
  this.oyspeed = this.yspeed;
  this.direction = 0.7;

  this.move = function() {
    this.x += this.xspeed * this.direction;
    this.y += this.yspeed * this.direction;
  };

  // rebotar cuando se toca el borde del canvas
  this.turn = function() {
    if (this.x < 0) {
      this.x = 0;
      this.direction = -this.direction;
    } else if (this.y < 0) {
      this.y = 0;
      this.direction = -this.direction;
    } else if (this.x > width - 20) {
      this.x = width - 20;
      this.direction = -this.direction;
    } else if (this.y > height - 20) {
      this.y = height - 20;
      this.direction = -this.direction;
    }
  };

  // velocidad+aceleracion
  this.shake = function() {
    this.xspeed += random(5, accChangeX / 3);
    this.yspeed += random(5, accChangeX / 3);
  };

  // volver más lento 
  this.stopShake = function() {
    if (this.xspeed > this.oxspeed) {
      this.xspeed -= 0.6;
    } else {
      this.xspeed = this.oxspeed;
    }
    if (this.yspeed > this.oyspeed) {
      this.yspeed -= 0.6;
    } else {
      this.yspeed = this.oyspeed;
    }
  };

  this.display = function() {
    // ellipse(this.x, this.y, this.diameter, this.diameter);
    image(imgabeja, this.x, this.y, 60, 50);
  };
}

function checkForShake() {
  // calcular la aceleracion
  accChangeX = abs(accelerationX - pAccelerationX);
  accChangeY = abs(accelerationY - pAccelerationY);
  accChangeT = accChangeX + accChangeY;
  // If shake
  if (accChangeT >= threshold) {
    for (var i = 0; i < balls.length; i++) {
      balls[i].shake();
      balls[i].turn();
    }
  }

  // si no agita
  else {
    for (var g = 0; g < balls.length; g++) {
      balls[g].stopShake();
      balls[g].turn();
      balls[g].move();
    }
  }
}

function oo() { //abejas
  this.x = random(width, width - 600);
  this.y = random(height, -height);
  this.vivo = true;
  this.abeja = true;

  this.dibujarse = function() {
    if (this.vivo == true) {
      fill(255, 153, 51);
      image(imgabeja, this.x, this.y, 70, 60);
    }
  }

  this.caer = function() {
    this.x = this.x - 2;

    if (this.x < 0) {
      this.y = random(height, -height);
      this.x = random(width, width - 700);
    }
  }
}

function ff() { //venenos, monedas grises
  this.x = random(width, -width);
  this.y = random(height, -height);
  this.vivo = true;
  this.veneno = true;

  this.dibujarse = function() {
    if (this.vivo == true) {
      fill(255, 153, 51);
      image(imgdanger, this.x, this.y, 50, 40);
    }
  }

  this.caer = function() {
    this.x = this.x - 3;

    if (this.x < 0) {
      this.y = random(height, -height);
      this.x = random(width, -width);
    }
  }
}