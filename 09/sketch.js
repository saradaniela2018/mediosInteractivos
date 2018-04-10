var sonido;
var x= 1000;

var glacier;
var alga;
var algae;
var al;
var t;
var t2;

var morsas = [];
var osos = [];

var willy;
var wanda; //orca
var orca;

var carl1; //cangrejo
var crl2;
var k;

var dir =1;

var peces = [];

function preload(){
    glacier = loadImage ("a/b.png");
  alga = loadImage ("a/c.png");
  algae = loadImage ("z.png");
  al = loadImage ("v.png");
  t = loadImage("t.png");
  
  sonido = loadSound ("s.mp3");

 // t1 = loadImage ("t1.png");
}

function setup() {
  createCanvas(x, 700);
  background(240, 240, 240);
  
  sonido.loop();
  
  

  
  for (var md = 0; md <40; md = md +1){
    peces[md] = new Baya();
  }

  
  for (var md = 0; md <7; md = md +1){
  	morsas [md] = new reed();
}
  
    for (var md = 0; md <5; md = md +1){
  	osos [md] = new oso();
}

  willy = new orca ();
  wanda = new orca();
  
  carl1= new k();
crl2= new k();
   
}

function draw() {
  background(240, 240, 240);
  

  noStroke();
  fill (204,228,231);
  rect (0,0,x,210);
  fill (159,213,223);
  rect (0,180,x,450); 
  fill (159,213,203);
  rect (0, 570,x,200);
 tint(255,100);
  image (glacier, -50,44,600,600);
  image (algae,30,638,50,70);
  image (algae,600,638,50,70);

  noTint();
  image (alga, 20,655,50,50);
  image (alga, 600,658,50,50);
  image (alga, 320,650,50,50);

  willy.dibujarse();
  willy.moverse();

  wanda.dibujarse();
  wanda.moverse();
  
  carl1.dibujarse();
  carl1.moverse();
  carl1.crecer(); 
  crl2.dibujarse();
  crl2.moverse();
  crl2.crecer();

   for (var md=0; md < morsas.length; md = md+1){
    morsas[md].dibujarse();
    morsas[md].moverse();
  }
  
    for (var md=0; md < osos.length; md = md+1){
    osos[md].dibujarse();
    osos[md].moverse();
  }
  
  for (var md=0; md < peces.length; md = md+1){
    peces[md].dibujarse();
    peces[md].moverse();
   // peces[md].morirse();
  }
  
    for (var md = 0; md < morsas.length; md = md+1) {
    for (var mg = 0; mg < peces.length; mg = mg+1) {
      if (morsas[md].x > peces[mg].x  && morsas[md].x < peces[mg].x + 40 && morsas[md].y > peces[mg].y && morsas[md].y < peces[mg].y + 15) {
        peces.splice(mg, 1);
      }
    }
  }
  
    for (var md = 0; md < osos.length; md = md+1) {
    for (var mg = 0; mg < peces.length; mg = mg+1) {
      if (osos[md].x > peces[mg].x 
        && osos[md].x < peces[mg].x + 40 
        && osos[md].y > peces[mg].y 
        && osos[md].y < peces[mg].y + 15) {
        peces.splice(mg, 1);
      }
    }
  }
  
/*for (var md = 0; md < willy.x; md = md+1) {
    for (var mg = 0; mg < morsas.length; mg = mg+1) {
      if (willy.x > morsas.x  && orca.x < willy.x + 57 && willy.y > morsas.y  && willy.y < morsas.y + 59) {
        morsas.splice(mg, 1);
      }
    }
}
  
  for (var md = 0; md < wanda.length; md = md+1) {
    for (var mg = 0; mg < morsas.length; mg = mg+1) {
      if (wanda[md].x > morsas[mg].x  && orca[md].x < wanda[mg].x + 40 && wanda[md].y > morsas[mg].y  && wanda[md].y < morsas[mg].y + 15) {
        morsas.splice(mg, 1);
      }
    }
}*/
}

function oso() {
  this.x = random(10, width-10);
  this.y = random(10, height-10);
  this.t = 8;
  this.vivo = 1;
  this.dirX=1;
  this.dirY=1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
    
      noStroke();
      fill(252);
      ellipse (this.x,this.y,this.t+49,this.t+42);
      ellipse (this.x-18,this.y-18-this.t+8,this.t+12);
      ellipse (this.x+18,this.y-18-this.t+8,this.t+12);
      fill(0);
      ellipse (this.x,this.y+5,this.t+7,this.t);
      ellipse (this.x+8,this.y-9,this.t-2,this.t);
  		ellipse (this.x-8,this.y-9,this.t-2,this.t);
      stroke(0);
      line (this.x-5,this.y+16,this.x+2,this.y+16);
      line (this.x-3,this.y-2,this.x,this.y-2);
  
    }
  }

  this.moverse = function() {
    this.x = this.x+this.dirX;
    this.y = this.y+this.dirY;
    
   if(this.y <= 175){
      this.vivo=0;
   }
          
      
      if (this.x <= 10 || this.x >= width-10) {
      this.dirX = this.dirX*-1
    }
   		 if (this.y <= 180 || this.y>= 580) {
      this.dirY = this.dirY*-1
    }
  }


  this.morirse = function() {
    this.vivo = 0;
  }
}

function Baya() {
  this.x = random(width, -width);
  this.y = random(0, height-40);
  this.tamano = 40;
  this.vivo = 1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      noStroke();
      fill(192);
      ellipse(this.x,this.y,this.tamano,this.tamano-25);
      fill(0);
      ellipse (this.x+12, this.y, this.tamano-37.5,this.tamano-37.5);
   
    }
  }

  this.moverse = function(){
 
    this.x = this.x +1.5;
    
    if(this.y<=190){
      this.vivo=0;
    }

    if (this.x >width){
      this.x = random (0, width-40);
      this.y = random (-25, -height);
    }

  }

}


  function k(){
    this.x = random (0,width);
    this.y = random (0,height);
    this.t=17;
    this.vivo=1;
    this.t1=20;
    this.t2=20;
    this.tY=17;
    
    this.dibujarse = function(){
      if (this.vivo ==1) {
        fill (227,56,61);
  ellipse (this.x,this.y,this.t+10,this.tY);
  noFill();
  stroke(227,56,61);
  strokeWeight(3);
  beginShape();
  vertex(this.x+10,this.y+5);
  vertex(this.x-50,this.y-5);
  vertex(this.x-80,this.y+3);
  endShape();
  beginShape();
  vertex(this.x+80,this.y+3);
  vertex(this.x+50,this.y-5);
  vertex(this.x+10,this.y+6);
  endShape();
  beginShape();
  vertex(this.x+80,this.y-3);
  vertex(this.x+50,this.y-15);
  vertex(this.x+10,this.y-1);
  endShape();
  beginShape();
  vertex(this.x-10,this.y-3);
  vertex(this.x-50,this.y-15);
  vertex(this.x-80,this.y-3);
  endShape();
  fill (252,232,15);
  noStroke();
  ellipse(this.x-3,this.y,this.t1-17,this.t1-17);
  ellipse(this.x+3,this.y+3,this.t1-17,this.t1-17);
  ellipse(this.x+6,this.y-4,this.t1-17,this.t1-17);
  fill(0);
  ellipse(this.x-6,this.y-3,this.t2-16,this.t2-14);
  ellipse(this.x+6,this.y-3,this.t2-16,this.t2-14);
      }
    }
 
this.crecer = function(){
  this.t= this.t+0.1;
  this.t2=this.t2+0.001;
 // this.t1= this.t1+01;
  this.tY=this.tY+0.01;
  
  if(this.t>90){
    this.vivo=0;
  }
  }


this.morirse = function(){
  this.vivo= 0;

}

  this.moverse = function(){
    this.x =this.x+random(1,1);
    this.y =this.y+random(-1,1);
   
    if(this.y<=570){
      this.y=600;
    }
    
    if(this.y>=700){
      this.y=690;
    }
    
    if(this.x>=900){
     this.x=this.x*-dir;
  
  }
    
   if(this.x<=0){
     this.x=0;
  }
  }
  }







function orca () {
   this.x = random(10, width-10);
  this.y = random(10, height-10);
  this.t = 10;
  this.vivo = 1;
  this.dirX=1;
  this.dirY=1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
    
  fill (0);
  ellipse(this.x,this.y,this.t+210,this.t+60);
  fill (252);
  ellipse (this.x,this.y+20,this.t+165,this.t+30);
  fill (0);
  ellipse (this.x,this.y+15,this.t+180,this.t+20);
  fill (252);
  ellipse (this.x+50,this.y+6,this.t+20,this.t+5);
  ellipse (this.x+75,this.y+15,this.t-1,this.t-3);
  fill(0);
  ellipse (this.x+77,this.y+15,this.t-5,this.t-5);
  triangle (this.x,this.y-30,this.x-4,this.y-70,this.x+25,this.y-30);
	triangle (this.x+20,this.y+25,this.x+12,this.y+55,this.x+50,this.y+25);
    }
    
     this.moverse = function() {
    this.x = this.x+this.dirX;
    this.y = this.y+this.dirY;
       
       if(this.y <= 165){
      this.vivo=0;
   }
       
     /* 	if(this.y >= 580){
      this.vivo=0;
   }*/
       
      if (this.x <= 10 || this.x >= width-10) {
      this.dirX = this.dirX*-1
    }
   		 if (this.y <= 170 || this.y>= 580) {
      this.dirY = this.dirY*-1
    }
  }

  }
}

  function reed (){

  this.x = random(10, width-10);
  this.y = random(10, height-10);
  this.t = 10;
  this.vivo = 1;
  this.dirX=1;
  this.dirY=1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
    
  fill (173,122,43);
  ellipse (this.x,this.y,this.t+47,this.t+49);
  fill (201,135,43);
	ellipse (this.x+7,this.y+14,this.t+12,this.t+10);
  ellipse (this.x-7,this.y+14,this.t+22,this.t+10);
  fill (0);
  ellipse (this.x-11,this.y-5,this.t-4,this.t-2);
  ellipse (this.x+9,this.y-5,this.t-4,this.t-2);
  ellipse (this.x+2,this.y+2,this.t-8,this.t-8);
  ellipse (this.x-3,this.y+2,this.t-8,this.t-8);
  fill (255,192,203);
  ellipse (this.x,this.y+23,this.t,this.t-6);
  fill (252);
  triangle (this.x-10,this.y+21,this.x-8,this.y+45,this.x-5,this.y+21);
  triangle (this.x+5,this.y+21,this.x+7,this.y+45,this.x+10,this.y+21);
  
    }
  }

  this.moverse = function() {
    this.x = this.x+this.dirX;
    this.y = this.y+this.dirY;
    
   if(this.y <= 175){
      this.vivo=0;
   }
          
      
      if (this.x <= 10 || this.x >= width-10) {
      this.dirX = this.dirX*-1
    }
   		 if (this.y <= 180 || this.y>= 580) {
      this.dirY = this.dirY*-1
    }
  }


  this.morirse = function() {
    this.vivo = 0;
  }    
}


function Baya() {
  this.x = random(width, -width);
  this.y = random(0, height-40);
  this.tamano = 40;
  this.vivo = 1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      noStroke();
      fill(192);
      ellipse(this.x,this.y,this.tamano,this.tamano-25);
      fill(0);
      ellipse (this.x+12, this.y, this.tamano-37.5,this.tamano-37.5);
   
    }
  }

  this.moverse = function(){
 
    this.x = this.x +1.5;
    
    if(this.y<=190){
      this.vivo=0;
    }
    
    //if(this.x>=900){
      //dir = -dir;
  //}
    
    if (this.x >width){
      this.x = random (0, width-40);
      this.y = random (-25, -height);
    }
    
/*     if(this.x<=0){
      this.x = dir*this.x;
  }*/
  }
}
