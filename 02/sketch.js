var rojo = 31;
var pxg = 35; 
var azul = 31;
var pyg = 0;
var verde = 31;


var posx= 135;
var posy= 240;


function setup() { 
  createCanvas(285, 270);
  background(255,230,200);
 
 noStroke ();
for (var numfila = 0; numfila < 5; numfila = numfila +1){
  fill (rojo, verde, azul,90);
  rect (pxg, pyg,100,30);
  pyg = pyg + 30;
 
  azul = azul + 49;
   rojo = rojo + 60;
  verde = verde + 59;
}
    azul = 87;
    rojo = 237;
    verde = 186;
  
  	pyg=150;
  
for (var num = 0; num <3; num = num +1){
   fill (rojo,verde,azul,110);
    rect (pxg, pyg, 100, 30);
    pyg = pyg +30; 
    
    rojo= rojo + 2;
    verde= verde + 25;
    azul= azul + 34;

  
}
  rojo = 50;
  azul = 51;
  verde = 50;
  
  fill (255,255,255,230);
  rect (pxg,240,100,30);
  
  
  pxg= 135;
  pyg= 0; 
  
for (var num = 0; num <9; num = num + 1) {
    fill (rojo, verde, azul,120);
    rect (pxg, pyg, 30,30);
pyg = pyg + 30;

    rojo= rojo + 107;
    verde= verde + 88;
    azul= azul + 77;
  }
  
  pyg=0;
  pxg=225;
  
  rojo= 50;
  azul=51;
  verde =50;
  
for (var num = 0; num <9; num = num +1){
  fill (rojo, verde, azul, 120);
  rect (pxg, pyg, 30,30);
  pyg= pyg + 30;
  
  rojo= rojo + 107;
  verde= verde +88;
  azul= azul +77;
}
  
  pyg= 0;
  
   for (var num = 0; num <9; num = num + 1) {
    fill (255, 255, 220);
    rect (0, pyg, 35,30);
pyg = pyg + 30;
   }
  
   rojo= 141;
   verde = 126;
   azul = 220;
  
  pyg=0;
  pxg=165;
  
for (var num = 0; num < 5; num = num +1){
  fill (rojo, verde, azul,100);
  rect (pxg, pyg,30,30);
  pyg = pyg + 30;
 
  azul = azul + 22;
  rojo = rojo + 40;
  verde = verde + 40;
  }
  
  pyg=0;
  pxg= 255;
  
  rojo= 141;
   verde = 126;
   azul = 220;
  
 for (var num = 0; num < 5; num = num +1){
  fill (rojo, verde, azul,100);
  rect (pxg, pyg,30,30);
  pyg = pyg + 30;
 
  azul = azul + 22;
  rojo = rojo + 40;
  verde = verde + 40; 
 }
  
  rojo= 237;
  verde= 168;
  azul= 87;
  
  pyg= 150;
  pxg=165;
 
  
for (var num = 0; num <3; num = num +1){
    fill (rojo,verde,azul,110);
    rect (pxg, pyg, 30, 30);
    pyg = pyg +30; 
    
    rojo= rojo + 89;
    verde= verde + 25;
    azul= azul + 34;
  }
  
  rojo= 237;
  verde= 168;
  azul= 87;
  
  pyg= 150;
  pxg=255;
 
  
for (var num = 0; num <3; num = num +1){
    fill (rojo,verde,azul,110);
    rect (pxg, pyg, 30, 30);
    pyg = pyg +30; 
    
    rojo= rojo + 89;
    verde= verde + 25;
    azul= azul + 34;
  
}
  
  
for (var num=0; num <2; num = num +1){
  strokeWeight (1);
  stroke (0,0,0);
  line (posx, 240, 165, 270);
    posx = posx + 60;
  }
  
  posx=195
  
  for (var num=0; num <2; num = num +1){
  strokeWeight (1);
  stroke (0,0,0);
  line (posx, 240, 225, 270);
    posx = posx + 60;
  } 
  
  line (285,240,255,270);
  line (255,240,285,270);
  
  
  posx=135;
  
for (var num=0; num <2; num = num +1){
  strokeWeight (1);
  stroke (0,0,0);
    line (posx, 270, 165, 240);
    posx = posx + 60;
  }
  
  posx=195;
  
for (var num=0; num <2; num = num +1){
  strokeWeight (1);
  stroke (0,0,0);
  line (posx, 270, 225, 240);
    posx = posx + 60;
}
 

 
  pyg=0;
  pxg=195;
  
  noStroke (); 
for (var num = 0; num <9; num = num +1){
     fill (225,175,190,70);
     rect (pxg, pyg, 30, 30);
    pyg = pyg +30; 
  }
  
   rojo = 50;
  azul = 51;
  verde = 50;
  pxg=255;
  
  fill (255,255,255,100);
  rect (pxg,240,30,30);
  
  
}
