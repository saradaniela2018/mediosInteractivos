var mx = 0.0;
var llax=-390;
var llay=-70;

var llax=-390;
var llay=-70;

var solx=30;
var soly=210;


function setup() {
createCanvas (800,800,WEBGL); //3D
angleMode (DEGREES);
}


function draw() {
  background (2,11,54);
 
  //rotateX (mx);
  
  
  push ();
  noStroke ();
  translate (0,160);
  fill (mx, 114,89-80,73);
  box (800,400);
  pop ();
  
  
  
  push ();
  
  fill (mx,204,101,80);
  noStroke ();
  beginShape ();
  vertex (200,-200);
  vertex (400,-60);
  vertex (0,-60);
  endShape();
  
  beginShape ();
  vertex (-270,-260);
  vertex (-600,-60);
  vertex (0,-60);
  endShape();
  
  beginShape ();
  vertex (-70,-160);
  vertex (60,-60);
  vertex (-200,-60);
  endShape();
 
  //ARBOLES PUNTA
  
  //rosado
translate (-180,180)
 rotateX (180);

  strokeWeight (0.4);
  stroke (192);
  fill (mx,168,188-120);
  cone (20,50);
  
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
 
  
  translate (200,-200)
  
  //3ro amarillo
  
  translate (200,200)
  strokeWeight (0.4);
  stroke (225);
  fill (255-60,241,mx);
  cone (10,50);


  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
   //4to verde
  
  translate (20,300)
  strokeWeight (0.4);
  stroke (225);
  fill (mx,251-30,183);
  cone (20,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);-60
  cylinder (6,6);
  
   //5to verde
  
  translate (40,-50)
  strokeWeight (0.4);
  stroke (225);
  fill (mx,251-30,183);
  cone (10,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
   //6to amarillo
  
  translate (340,500)
  strokeWeight (0.4);
  stroke (225);
  fill (255-60,241,mx);
  cone (10,50);

  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
    //6to amarillo
  
  translate (-340,-300)
  strokeWeight (0.4);
  stroke (225);
  fill (255-60,241,mx);
  cone (20,50);

  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
  
  
   //6to amarillo
  
  translate (-160,-200)
  strokeWeight (0.4);
  stroke (225);
  fill (255-60,241,mx);
  cone (20,50);

  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
    //6to amarillo
  
  translate (-460,50)
  strokeWeight (0.4);
  stroke (225);
  fill (255-60,241,mx);
  cone (10,50);

  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
      //6to amarillo
  
  translate (-26,200)
  strokeWeight (0.4);
  stroke (225);
  fill (255-60,241,mx);
  cone (20,50);

  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
//6to amarillo
  
  translate (306,200)
  strokeWeight (0.4);
  stroke (225);
  fill (255-60,241,mx);
  cone (10,50);

  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
   //rosado
translate (70,-80)
  strokeWeight (0.4);
  stroke (225);
  fill (mx,168,188-40);
  cone (20,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);

  //rosado
translate (70,-80)
  strokeWeight (0.4);
  stroke (225);
  fill (mx,168,188-600);
  cone (20,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
//rosado
translate (-170,80)
  strokeWeight (0.4);
  stroke (225);
  fill (mx,168,188-600);
  cone (20,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
  
  
  
  
  

  
  
  
  pop ();
  
  //ARBOLES DONA
  
  push ();
  
  translate (-200,325);
  translate (400,-230);
  strokeWeight (0.4);
  stroke (255);
  //fill (204,204,255);
  fill (mx,204,255-250);
  torus (15,10);
 
  stroke (255);
  strokeWeight (0.1);
  translate (0,40);
  fill (192);
  ellipsoid (5,30,1);
  
   //3ro
  translate (-500,-90);
  strokeWeight (0.4);
  stroke (255);
  fill (mx,204,255-250);
  torus (15,10);
  
  
  stroke (255);
  strokeWeight (0.1);
  translate (0,40);
  fill (192);
  ellipsoid (5,30,1);
  
    //4to diminuto
  translate (590,-90);
  strokeWeight (0.4);
  stroke (255);
  fill (mx,204,255-250);
  torus (10,5);

  stroke (255);
  strokeWeight (0.1);
  translate (0,25);
  fill (192);
  ellipsoid (3,13,1);
  
   //4to a diminuto
  translate (90,20);
  strokeWeight (0.4);
  stroke (255);
  fill (mx,204-60,255-250);
  torus (10,5);

  stroke (255);
  strokeWeight (0.1);
  translate (0,25);
  fill (192);
  ellipsoid (3,13,1);
  
  //4to b diminuto
  translate (-700,100);
  strokeWeight (0.4);
  stroke (255);
  fill (mx,204,255-250);
  torus (10,5);

  stroke (255);
  strokeWeight (0.1);
  translate (0,25);
  fill (192);
  ellipsoid (3,13,1);
  
  
  
  //5to 
  translate (700,130);
  strokeWeight (0.4);
  stroke (255);
  fill (mx,204,255-250);
  torus (25,10);
  fill (255);
  torus (15,5);
  
  stroke (255);
  strokeWeight (0.1);
  translate (0,70);
  fill (192);
  ellipsoid (5,40,1);
  
  //rosado 
  
  rotateX (180);
  translate (-100,60);
  strokeWeight (0.4);
  stroke (225);
  fill (mx,168,188-40);
  cone (20,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
//rosado b
	translate (-650,400);
  strokeWeight (0.4);
  stroke (225);
  fill (mx,168,188-600);
  cone (20,40);
  
  translate (0,-20);
  cone (20,30);
  
  translate (0,-15);
  cone (20,30);
  
  stroke (100,30,30);
  translate (0,-20);
  fill (90,53,57);
  cylinder (6,6);
  
    
//rosado b
	translate (100,-200);
  strokeWeight (0.4);
  stroke (225);
  fill (243,168,188);
  cone (10,40);
  
  translate (0,-20);
  cone (20,30);
  
  translate (0,-15);
  cone (20,30);
  
  stroke (100,30,30);
  translate (0,-20);
  fill (90,53,57);
  cylinder (6,6);
  
 
  
    
   //4to verde
  
  translate (20,300)
  strokeWeight (0.4);
  stroke (225);
  fill (200,251,103);
  cone (20,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
  //4to verde
  
  translate (20,-100)
  strokeWeight (0.4);
  stroke (225);
  fill (mx,251-30,103);
  cone (10,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
  //4to verde
  
  translate (-40,-100)
  strokeWeight (0.4);
  stroke (225);
  fill (mx,251-30,103);
  cone (20,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
    //4to verde
  
  translate (270,300)
  strokeWeight (0.4);
  stroke (225);
  fill (mx,251-30,103);
  cone (10,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
    //4to verde
  
  translate (600,-100)
  strokeWeight (0.4);
  stroke (225);
  fill (mx,251-30,103);
  cone (20,50);
  
  translate (0,-20);
  cone (20,40);
  
  translate (0,-15);
  cone (20,40);
  
  stroke (100,30,30);
  translate (0,-25);
  fill (90,53,57);
  cylinder (6,6);
  
  //rosado b
	translate (-500,200);
  strokeWeight (0.4);
  stroke (225);
  fill (243,168,188);
  cone (10,40);
  
  translate (0,-20);
  cone (20,30);
  
  translate (0,-15);
  cone (20,30);
  
  stroke (100,30,30);
  translate (0,-20);
  fill (90,53,57);
  cylinder (6,6);
  
  

  
  pop (); 
  
  //NUBEES
  stroke (102);
  push ();
  translate (300,-300,mouseX);
  fill (200);
  sphere (50);
  
  

  stroke (192);
  strokeWeight (0.5);
  translate (-500,-30);
  fill (255);
  sphere (30);
  
  translate (30,0);
  fill (255);
  sphere (30);
  
 translate (25,0);
  fill (255);
  sphere (30);
  
  //segunda nube
  translate (180,70);
  stroke (192);
  strokeWeight (0.5);
  fill (255);
  sphere (20);
  
  translate (20,0);
  fill (255);
  sphere (20);
  
  translate (20,0);
  fill (255);
  sphere (20);

  //tercera nube
  translate (-380,20);
  stroke (192);
  strokeWeight (0.5);
  fill (255);
  sphere (27);
  
  translate (25,0);
  fill (255);
  sphere (27);
  
  translate (30,0);
  fill (255);
  sphere (27);
  
  
  pop();
  

  
  // Actualiza a localización del marcador
  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif/32.0;
  }
  
  // Mantiene el marcador en la pantalla
  mx = constrain(mx, 1, width-1);
  noStroke();
  
  // Dibuja el rectángulo inferior
  push();
  fill(255);
  translate(0, (height/2)-2);
  plane(width, 5);
  pop();
  
  // Dibuja el marcador de posición
  push();
  fill(204, 102, 0);
  translate(mx-(width/2)-1, (height/2)-2);
  plane(4, 5);
  pop();
  
 // -----
  translate (299,-300);
 	fill (2,11,54);
  sphere (50);
  
  //ESTRELLAS
  
  strokeWeight (2);
  stroke (220);
  llax=-390;
  llay=-70
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (220);
  llax=-320;
  llay=-30;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (250);
  llax=-250;
  llay=-45;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (220);
  llax=-590;
  llay=-15;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (255);
  llax=-80;
  llay=-15;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
   strokeWeight (2);
  stroke (240);
  llax=-150;
  llay=-57;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (200);
  llax=-170;
  llay=-10;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (240);
  llax=-230;
  llay=70;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (240);
  llax=30;
  llay=70;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (240);
  llax=-420;
  llay=4;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (240);
  llax=-640;
  llay=-60;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  strokeWeight (2);
  stroke (200);
  llax=-50;
  llay=50;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);
  
  
  strokeWeight (2);
  stroke (240);
  llax=-360;
  llay=50;
  line (llax, llay, llax+25, llay+25);
  line (llax+25, llay, llax, llay+25);
  line (llax+13, llay-5, llax+13, llay+28);
  line (llax, llay+13, llax+25, llay+13);

}