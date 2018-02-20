var posx= 0
var posy= 0

var herramienta =0;
var colorselect =0;

var x =30;
var robotx =13;
var roboty= 71;
var robott=40;
var florx=33;
var flory=150;
var solx= 30;
var soly=210;
var arboly= 270;
var arbolx=30;
var llax=20;
var llay=320;
var lunax=33;
var lunay=390;
var plx= 33;
var ply =467;
var nx=33;
var ny=510;
var bx=33;
var by=570;

var c1= 64;
var c2=224;
var c3=208;
var c4=192;
var c5=128;
var c6=77;
var c7=255;
var c8=181;
var c9=30;
var c10= 0;

function setup() {
createCanvas (1000,600);
background (0);

for (var nf = 0; nf <10; nf = nf +1){
  for (var f=0; f<1; f = f +1){
    noFill();
    stroke (255);
    rect (posx, posy, 65,60);
    posx = posx +60;
  }
    posx= 0;
    posy = posy +60;
}
    
}

function draw() {
  
  
  // cara
  stroke (0);
  strokeWeight (1);
  fill (218,212,209);
  ellipse (x,x,50,50);
  fill (0);
  ellipse (x-8,x-8,12,12);
  ellipse (x+10,x-8,12,12);
  ellipse (x+1,x+10,13,17);
  
  //robot
  stroke (253,200,15);
  strokeWeight (4);
  fill (253,232,15);
	rect (robotx,roboty,robott,robott);
  fill (0);
  noStroke();
  ellipse (robotx+12, roboty+15,11,11);
  ellipse (robotx+30, roboty+15,11,11);
  rect (robotx+11, roboty+26,20,5);
  
  //flor
  stroke(255);
  fill (253,232,15);
  ellipse (florx, flory, 1,1);
  noStroke();
  fill (255,0,0);
  ellipse (florx+10, flory, 15,7);
  ellipse (florx-10, flory, 15,7); 
  ellipse (florx, flory-10, 7,15);
  ellipse (florx, flory+10, 7,15);
  //ellipse (florx+15, flory, 20,7);
  //ellipse (florx+15, flory, 20,7);
 
  //sol
  fill (64,224,208);
  ellipse (solx+2, soly, 33,33);
  //fill (255);
  ellipse (solx-5,soly-23,5,5);
  ellipse (solx+7, soly+23,5,5);
  ellipse (solx+25, soly,5,5);
  ellipse (solx-21, soly,5,5);
  ellipse (solx+21, soly+17,5,5);
  ellipse (solx-17, soly+14,5,5);
  ellipse (solx-17, soly-15,5,5);
  ellipse (solx+19, soly-16,5,5);
  ellipse (solx-6, soly+23,5,5);
  ellipse (solx+8, soly-23,5,5);
  
  //arbol 
 
  fill (127, 200,0);
  triangle (arbolx-15, arboly+20, arbolx+3,arboly-10, arbolx+20,arboly+20);
  fill (127,240,0);
  triangle (arbolx-10, arboly, arbolx+3, arboly-23, arbolx+15,arboly);
  stroke(255);
  strokeWeight (0.5);
  fill (0);
  rect (arbolx,arboly+20, 5,5);
  
  //estrella
  strokeWeight (3);
  stroke (224,192,224);
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  //luna
  noStroke();
  fill (255);
	ellipse (lunax, lunay, 40,40);
  fill (0);
  ellipse (lunax+15,lunay,30,40);
  
  //peligro
  fill (255,90,255);
	triangle (plx-23, ply+5, plx+1,ply-35,plx+23,ply+5);
  strokeWeight (2);
  stroke (255);
  line (plx,ply-25, plx, ply-7);
  fill(255);
  noStroke();
  ellipse (plx, ply,5,5);
  
  //nariz
  fill (240,192,208);
  ellipse (nx,ny,47,30);
  fill (255);
  ellipse (nx+5,ny,10,20);
  ellipse (nx-7,ny,10,20);
  
  //blah
  fill (255);
  ellipse (bx+5,by,20,20);
  ellipse (bx-7,by,20,20);
  
  
  fill (c7,c7,c7-c7);
  rect (80,10,40,40);
  
  fill (c1,c1,c1+c1);
  rect (80,70,40,40);
  
  fill (c2,c2,c2+c2);
  rect (80,130,40,40);
  
  fill (c3+c3,c3,c3+c3+c3);
  rect (80,190,40,40);
  
  fill (c4,c4+c4,c4-c4);
  rect (80,250,40,40);
  
  fill (c5,c5+c5,c5);
  rect (80,310,40,40);
  
  fill (c6,c6-c6,c6);
  rect (80,370,40,40);
  
  fill (c8-200,c8-30,c8);
  rect (80,430,40,40);
  
  stroke(255);
  fill (c10);
  rect (80,490,40,40);
  noStroke ();
  
  fill (c9+220,c9,c9-30);
  rect (80,550,40,40);
  
  
  
  
  if (mouseIsPressed) {


    
    if (mouseX > solx && mouseX < solx +30 &&
			mouseY > soly && mouseY < soly+30) {
			herramienta = 3;
		} 
    
   if (mouseX > lunax && mouseX < lunax+30  &&
			mouseY > lunay && mouseY < lunay+30 ) {
			herramienta = 6;
		}
    
      if (mouseX > arbolx && mouseX < arbolx +30 &&
			mouseY > arboly && mouseY < arboly+30 ) {
			herramienta = 4;
		}
    
     //hfdjjgdj
    if (mouseX > x && mouseX < x+30  &&
			mouseY > x && mouseY < x+30 ) {
			herramienta = 1;
		}
    
     if (mouseX > plx && mouseX < plx +30 &&
		mouseY > ply && mouseY < ply+30 ) {
			herramienta = 7;
		}
    
     if (mouseX > nx && mouseX < nx +30 &&
		mouseY > ny && mouseY < ny+30 ) {
			herramienta = 8;
		}
    
     if (mouseX > florx && mouseX < florx+30  &&
			mouseY > flory && mouseY < flory+30 ) {
			herramienta = 2;
		}
    
    //ESTRELLA
    if (mouseX > llax && mouseX < llax + 30 &&
			mouseY > llay && mouseY < llay + 30) {
			herramienta = 5;
		}
    
    if (mouseX > robotx && mouseX < robotx + robott &&
			mouseY > roboty && mouseY < roboty + robott) {
			herramienta = 0;
		}
    
    if (mouseX > bx && mouseX < bx + 30 &&
			mouseY > by && mouseY < by + 30) {
			herramienta = 10;
		}
    
////COLOR/////////////////////////////////////////////////////////////
if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 10&& mouseY < 10 + 40) {
			colorselect = 1;
		}
 
    if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 70&& mouseY < 70 + 40) { //40 AREA
			colorselect = 2;
		}
    
    if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 130&& mouseY < 130 + 40) { //40 AREA
			colorselect = 3;
		}
    
    if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 190&& mouseY < 190 + 40) { //40 AREA
			colorselect = 4;
		}
    
    if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 250&& mouseY < 250 + 40) { //40 AREA
			colorselect = 5;
		}
    
    if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 310&& mouseY < 310 + 40) { //40 AREA
			colorselect = 6;
		}
    
    if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 370&& mouseY < 370 + 40) { //40 AREA
			colorselect = 7;
		}
    
    if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 430&& mouseY < 430 + 40) { //40 AREA
			colorselect = 8;
		}
    
    if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 490&& mouseY < 490 + 40) { //40 AREA
			colorselect = 10;
		}
    
    if (mouseX > 80 && mouseX < 80 + 40 &&
			mouseY > 550&& mouseY < 550 + 40) { //40 AREA
			colorselect = 9;
		}

    if (colorselect==1){
      fill (c7,c7,c7-c7);
      stroke (c7,c7,c7-c7);
}
    if (colorselect==2){
      fill (c1,c1,c1+c1);
      stroke (c1,c1,c1+c1);
}
    
    if (colorselect==3){
      fill (c2,c2,c2+c2);
      stroke (c2,c2,c2+c2);
}
    
    if (colorselect==4){
      fill (c3+c3,c3,c3+c3+c3);
      stroke (c3+c3,c3,c3+c3+c3);
}
    
    if (colorselect==5){
      fill (c4,c4+c4,c4-c4);
      stroke (c4,c4+c4,c4-c4);
}
    
    if (colorselect==6){
      fill (c5,c5+c5,c5);
      stroke (c5,c5+c5,c5);
}
    
    if (colorselect==7){
      fill (c6,c6-c6,c6);
      stroke (c6,c6-c6,c6);
}
    
    if (colorselect==8){
      fill (c8-200,c8-30,c8);
      stroke (c8-200,c8-30,c8);
}
    
    if (colorselect==9){
      fill (c9+220,c9,c9-30);
      stroke (c9+220,c9,c9-30);
}
    
    if (colorselect==10){
      fill (c10);
      stroke (c10);
}
    
    
    ////////////////////////////////////////////////////////////////
    
if (herramienta ==0){
  stroke(253,200,15);
  strokeWeight (4);
 //fill (253,232,15);
  rect (mouseX,mouseY,robott,robott);
  fill (0);
  noStroke();
  ellipse (mouseX+12, mouseY+15,11,11);
  ellipse (mouseX+30, mouseY+15,11,11);
  rect (mouseX+11, mouseY+26,20,5);
}
    
if (herramienta ==1){
   stroke (0);
  strokeWeight (1);
 // fill (218,212,209);
  ellipse (mouseX,mouseY,50,50);
  fill (0);
  ellipse (mouseX-8,mouseY-8,12,12);
  ellipse (mouseX+10,mouseY-8,12,12);
  ellipse (mouseX+1,mouseY+10,13,17);
  }
    
if (herramienta ==2){
   stroke(255);
 fill (253,232,15);
  ellipse (mouseX, mouseY, 1,1);
  noStroke();
  //fill (255,0,0);
  ellipse (mouseX+10, mouseY, 15,7);
  ellipse (mouseX-10, mouseY, 15,7); 
  ellipse (mouseX, mouseY-10, 7,15);
  ellipse (mouseX, mouseY+10, 7,15);
  }
    
if (herramienta ==3){
   // fill (64,224,208);
  ellipse (mouseX+2, mouseY, 33,33);
  //fill (255);
  ellipse (mouseX-5,mouseY-23,5,5);
  ellipse (mouseX+7, mouseY+23,5,5);
  ellipse (mouseX+25, mouseY,5,5);
  ellipse (mouseX-21, mouseY,5,5);
  ellipse (mouseX+21, mouseY+17,5,5);
  ellipse (mouseX-17, mouseY+14,5,5);
  ellipse (mouseX-17, mouseY-15,5,5);
  ellipse (mouseX+19, mouseY-16,5,5);
  ellipse (mouseX-6, mouseY+23,5,5);
  ellipse (mouseX+8, mouseY-23,5,5);
  }

if (herramienta ==4){
  //  fill (127, 200,0);
  triangle (mouseX-15, mouseY+20, mouseX+3,mouseY-10, mouseX+20,mouseY+20);
  //fill (127,240,0);
  triangle (mouseX-10, mouseY, mouseX+3, mouseY-23, mouseX+15,mouseY);
  stroke(255);
  strokeWeight (0.5);
  fill (0);
  rect (mouseX,mouseY+20, 5,5);
  }
    
if (herramienta ==5){
    strokeWeight (3);
  stroke (224,192,224);
  line (mouseX, mouseY, mouseX+25, mouseY+25);
  line (mouseX+25, mouseY, mouseX, mouseY+25);
  line (mouseX+13, mouseY-5, mouseX+13, mouseY+28);
  line (mouseX, mouseY+13, mouseX+25, mouseY+13);
}
if (herramienta ==6){
    noStroke();
 // fill (255);
	ellipse (mouseX, mouseY, 40,40);
  fill (0);
  ellipse (mouseX+15,mouseY,30,40);
}
if (herramienta ==7){
 //  fill (255,90,255);
	triangle (mouseX-23, mouseY+5, mouseX+1,mouseY-35,mouseX+23,mouseY+5);
  strokeWeight (2);
  stroke (255);
  line (mouseX,mouseY-25, mouseX, mouseY-7);
  fill(255);
  noStroke();
  ellipse (mouseX, mouseY,5,5);
}
    if (herramienta ==8){
      //fill (240,192,208);
  ellipse (mouseX,mouseY,47,30);
  fill (255);
  ellipse (mouseX+5,mouseY,10,20);
  ellipse (mouseX-7,mouseY,10,20);
}
    
    if (herramienta ==10){
       ellipse (mouseX+5,mouseY,20,20);
  ellipse (mouseX-7,mouseY,20,20);
}
}
}
      
      