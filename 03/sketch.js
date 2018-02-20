var posy= 900;
var dir =1;
var posx=20;
var posy2=0;
var f=0; // forma
var t=2300; // tamaño
var t1=1030;
var r = 114;
var g = 80;
var b = 160;
var nombre = "miFlipbook"

function setup() { 
  //frameRate (3)
  createCanvas(1280, 1100);
  background(0);
} 

function draw() { 
  background(255);
	
  
  noStroke ();
  fill (r,g,b,240);
  ellipse (620,530,t,t1);
  
  	r= r+0.35;
  	g= g+0.35;
  	b= b+0.35;
  	t1 = t1-3; 
  	t= t -3;


 //noStroke ();
  //fill (115,235,174,100);
  //ellipse (640,530,t,130);
 //t = t+0.2; 


  
 	noStroke ();
	fill (255,245,66);
  //triangulos hacia arriba
  triangle (130,posy+200,230,posy,330,posy+200);
  triangle (330,posy+200,430,posy,530,posy+200);
  triangle (530,posy+200,630,posy,730,posy+200);
  triangle (730,posy+200,830,posy,930,posy+200);
  triangle (930,posy+200,1030,posy,1130,posy+200);
  posy = posy-7*dir;
  
  triangle (230,posy2,330,posy2+200,430,posy2);
  triangle (430,posy2,530,posy2+200,630,posy2);
  triangle (630,posy2,730,posy2+200,830,posy2);
  triangle (830,posy2,930,posy2+200,1030,posy2);
  posy2= posy2+7*dir;
  
 if (posy<450){
 dir =-1;
 }
  
	if (posy>600){
	dir=1;
	}
    stroke (255);
  	strokeWeight (40);
    fill (0);
  	rect (370,100,150,150,f);
  	f = f+0.4;
  	  
  	rect (700,100,150,150,f);
  	f = f+0.4; 
 
//if(frameCount<100){
 //saveCanvas ("miFlipbook" + frameCount, "jpg");
//}
  
  
}