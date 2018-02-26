var posx=1000;
var x = 0;
var dir =1;
var hora;
var minuto;
var segundo;



function setup() { 
  createCanvas(1000, 1000);
  background(255);
  angleMode (DEGREES);
  
  hora= hour ();
  minuto = minute ();
  segundo = second ();
} 
  
  
function draw() { 
  
  hora = hour();
  minuto = minute ();
  segundo = second ();
  
 stroke (115,235,174);
fill (255,245,66);
  ellipse (x, 500,1000,1000);
x = x + 8*dir; // direccion
    
if (x>500){
  dir = 0;
}
  
   stroke (115,235,174);
fill (255,245,66);
  ellipse (posx, 500,1000,1000);
posx = posx - 8*dir; 
    
  if (posx<500){
  dir = 0;
}
  
 push ();
  translate (height/2, width/2);

  ellipse (0,0,10,10);
 
 
  strokeWeight (10);
  stroke (115,235,174,100);
  segundoMapeado = map (segundo, 0,59,0,359);
  rotate(segundoMapeado);

  line (0, 0,0,-400);
  
  pop ();
  
  push ();
  translate (height/2, width/2);
   strokeWeight (10);
  stroke (115,235,174,180);
  minutoMapeado = map (minuto, 0,59,0,359);
  rotate (minutoMapeado);
line (0, 0,0,-400);
  pop();
  
  push ();
  translate (height/2,width/2);
  stroke (115,235,174,180);
   strokeWeight (10);
  
  if (hora>12){
    hora = hora -12;
  }
  
  horaMapeado = map (hora,0,11,0,359);
rotate (horaMapeado);
  
  line (0, 0,0,-200);
  pop ();

  

}