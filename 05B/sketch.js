
var frank = 59;
var hora;
var minuto;
var segundo;
var segundomMapeado;
var sp = segundo *10;

var x= 850;
var xs= -200;
var dir=1;

var r= 250;
var g= 0;
var b= 0;
var z=1;


var herramienta =0;
var t = "P  N C ";
var t1= "  A   I  O";


function setup() { 
  createCanvas(1000, 1000);
  angleMode (DEGREES);

}

function draw() { 
 background (242,245,220);
  
 // fill (96,96,255);
  fill (r,g,b,190);
	rect (35,35,930,930);
   
  
  
  //boton
	fill (255,0,0);
  stroke (255,215,0,200);
  strokeWeight (5);
  ellipse (x,x,150,150);
  
//panico
  noStroke ();
  textSize (30);
fill(0);
  text(t, 797, 836, 200, 80); 
  text (t1,797,840,200,80);
  
  //reloj
  translate (height/2, width/2);
fill (242,245,220);
  ellipse (0,0,500,500);
	 ellipse (0,0,10,10);
 
  
  if (mouseIsPressed) {
	if (mouseX > 775 && mouseX < 925  &&
			mouseY > 775 && mouseY < 925) {
			herramienta = 1;
		}
    
    
  if (herramienta ==1){
  
    
    r= r+202*z;
    g= g+255*z;
    b= b+200*z;
  
    if(r>226||r<82){
    z=z*-1;
    }
      
      frank = 5; //frecuencia
  }   

  }
    hora= hour ();
  minuto = minute ();
  segundo = second ();
    

  
  //segundero
  push ();
   strokeWeight (8);
  stroke (255,215,0,180);
  segundoMapeado = map (segundo, 0,frank,0,359);
  rotate(segundoMapeado);
line (0, 0,0,-200);
  pop ();
  
  //minutero
  push ();
   strokeWeight (10);
  stroke (255,215,0,200);
  minutoMapeado = map (minuto, 0,59,0,359);
  rotate (minutoMapeado);
line (0, 0,0,-200);
  pop();
  
  //hora
  push ();
  stroke (255,215,0,200);
   strokeWeight (10);
  
  if (hora>12){
    hora = hora -12;
  }
  
  horaMapeado = map (hora,0,11,0,359);
rotate (horaMapeado);
  
  line (0, 0,0,-110);
  pop ();
  
  
  
}