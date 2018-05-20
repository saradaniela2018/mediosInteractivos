var imgfeliz;
var imgflota;
var imgflor;
var fondo;

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

//POSIION BOTONES
var x= 690;
var y1=350;
var y2=590;
var x1=900;
var y3=60;

//VARIABLES JUEGO
var puntaje = 0; 
var imgflota;
var misAguacates = [] ;


function preload() {
  
  //imagenes personajes
 imgfeliz = loadImage('x/simle.png');
 imgtriste = loadImage ('x/triste.png');
 imgwow = loadImage ('x/wow.png');
 imgflota = loadImage ('x/oo.png');
 imgflor = loadImage ('x/flor.png');
  fondo = loadImage('x/fondo.png');

  //tipografia
 // font = loadFont("");
}

function setup() {
  createCanvas(980, 650);
//  background(247,111,111);
  
      for (var i=0; i<20; i++) {
    balls.push(new Ball());
}
  
    for (var w = 0; w < 50; w = w+1) {
    misAguacates[w] = new oo();
  }
  
}

function draw() {
  
    if (estado == intro) {
        //botones
  background(247,111,111);
  noStroke();
  fill (255,255,113); //rojo
  ellipse (x,y1+7,300,300);
  ellipse (x1,y2+7,66,66);
  
  fill(255,255,113); //morado
  ellipse (x,y1,300,300); //jugar
      fill(53);
  ellipse (x1,y2,66,66); //instruiiones
  
  //titulo
	fill(53);
  textSize(130);
  textFont('billy');
  text ('UN WALM ANDANTE', 95,120);
  
  //jugar 
  fill(53);
  //textSize(70);
  //text ('JUGAR',682,315);
      triangle(650,280,650,440,760,360);
  
  //instruiones
      fill(255);
  textSize(70);
  text ('?',890,610);

  //personje feliz
  image(imgfeliz,0,160,380,500);

  
  //FONDO JUEGO                  ----------------------------
      
  } else if (estado == juego) {
    background(247,111,111);
    image(imgfeliz,0,160,380,500);
    
//falta reloj
    
    for (var w = 0; w < misAguacates.length; w = w+1) {
    misAguacates[w].dibujarse();
    misAguacates[w].caer();
      
  //boton regresar
  noStroke();
  fill (255,255,113); //amarillo
  ellipse (900,y3+7,66,66);
  
  fill(53); 
  ellipse (x1,y3,66,66); 

      fill(255);
  textSize(30);
  text ('↩',885,73);
  fill(53);
 
  }
  
  //FONDO PERDER                 ----------------------------
    
  } else if (estado == perdio) { 
  background(212,209,219);
  image (imgtriste,0,80,450,600);
   
  
    for (var i=0; i<balls.length; i++) { 
    balls[i].move(); 
    balls[i].display();    
  }

  checkForShake();
    
  fill(53);
  textSize(50);
  textFont('billy');
  text ('me pierdes,', 290, 250);
  text ('ni siquiera quieres agitar?', 290, 280);
  
     //botones
  noStroke();
  fill (255,255,113); //amarillo
  ellipse (900,y3+7,66,66);
  
  fill(53); 
  ellipse (x1,y3,66,66); 

      fill(255);
  textSize(30);
  text ('↩',885,75);
  fill(53);
  
  
//FONDO INSTRUIONES                 ---------------------------
    
  } else if (estado == instru) {
    
  image(fondo,0,0,980,670);
  
 // background(247,111,111);
  fill(53,53,53,180);
  noStroke();
  rect(250, 90, 500, 510,150);
    
      //boton regresar
  noStroke();
  fill (255,255,113); //amarillo
  ellipse (900,y3+7,66,66);
  
  fill(53); 
  ellipse (x1,y3,66,66); 

      fill(255);
  textSize(30);
  text ('↩',885,75);
  fill(53);
    
  }


if (mouseIsPressed) {

    if (mouseX > x-160 && mouseX < x + 160 && mouseY > y1 - 160 && mouseY < y1 + 160) {
      estado = 2; //juego
    }

    if (mouseX > x1-45 && mouseX < x1 + 45 && mouseY > y2 - 45 && mouseY < y2 + 45) {
      estado = 4; //instru
    }

   if (mouseX > x1-45 && mouseX < x1 + 45 && mouseY > y3 - 45 && mouseY < y3 + 45) {
      estado = 1; //intro
    }
}
}



function mouseReleased(){
  
  var borro = false;
  
  for (var w=0; w< misAguacates.length; w = w +1){
    if(mouseX > misAguacates[w].x  && mouseX < misAguacates[w].x+234 && mouseY > misAguacates[w].y && mouseY < misAguacates[w].y+197) { //si lo selecciono, muere
      
      //misaguacates[i].vivo = false;
      misAguacates.splice(w,1); // ara borrar un aguacate en la osicion i 
      borro = true;
    }
  }
  
  if(borro == false){
    misAguacates.push(new oo ());
  }
}

function Ball() {

  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.xspeed = random(-2, 2);
  this.yspeed = random(-2, 2);
  this.oxspeed = this.xspeed;
  this.oyspeed = this.yspeed;
  this.direction = 0.7;

  this.move = function() {
    this.x += this.xspeed * this.direction;
    this.y += this.yspeed * this.direction;       
  };
  
  // Bounce when touch the edge of the canvas  
  this.turn = function() {
    if (this.x < 0) { 
      this.x = 0; 
      this.direction = -this.direction; 
    }
    else if (this.y < 0) { 
      this.y = 0; 
      this.direction = -this.direction;   
    }
    else if (this.x > width - 20) { 
      this.x = width - 20; 
      this.direction = -this.direction; 
    }
    else if (this.y > height - 20) { 
      this.y = height - 20; 
      this.direction = -this.direction;   
    } 
  };

  // Add to xspeed and yspeed based on 
  // the change in accelerationX value
  this.shake = function() {
    this.xspeed += random(5, accChangeX/3);
    this.yspeed += random(5, accChangeX/3);
  };

  // Gradually slows down 
  this.stopShake = function() {
    if (this.xspeed > this.oxspeed) {
      this.xspeed -= 0.6;
    } 
    else {
      this.xspeed = this.oxspeed;
    }
    if (this.yspeed > this.oyspeed) {
      this.yspeed -= 0.6;
    } 
    else {
      this.yspeed = this.oyspeed;
    }
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function checkForShake() {
  // Calculate total change in accelerationX and accelerationY
  accChangeX = abs(accelerationX - pAccelerationX);
  accChangeY = abs(accelerationY - pAccelerationY);
  accChangeT = accChangeX + accChangeY;
  // If shake
  if (accChangeT >= threshold) {
    for (var i=0; i<balls.length; i++) {
      balls[i].shake();
      balls[i].turn();
    }
  } 
  // If not shake
  else {
    for (var g=0; g<balls.length; g++) {
      balls[g].stopShake();
      balls[g].turn();
      balls[g].move(); 
    }
  }
} 

//los que mata                           ------------------------
function oo() {
  this.x = random(0, width-98);
  this.y = random(height, -height);
  this.vivo = true;
  this.aguacate = true;

  this.dibujarse = function() {
    if (this.vivo==true) {
      fill(255, 153, 51);
      image(imgflota, this.x, this.y, 234, 197);
    }
  }

  this.caer = function() {
    this.x = this.x + 6;

    if (this.x > width) {
      this.y = random(0, width-98);
      this.x = random(-134, -height);
    }
    

  }
}
