var datos;
var myfont;
var t = "FIREBALL & BOLIDE";
var t1 = "REPORTS";
var f;
var u;
var solx = 280;
var soly = 430;
var lunax = 375;
var lunay = 430;
var fondo;
var protistas;
var herramienta = 0;

function preload() {
  datos = loadJSON("https://data.nasa.gov/resource/2af2-m89m.json");
	fondo = loadImage ("ff.png");
  protistas = loadSound ("M.mp3");
}


function setup() {
  createCanvas(700, 700);
  background(0, 0, 0);
  
  protistas.play();
  protistas.setVolume(0.7);
 
  //for (var i = 0; i < 92; i = i +1){
    //print(datos[i].date_time_peak_brightness_ut);
    
    //var fechaHora = split(datos[i].date_time_peak_brightness_ut, 'T');
  //}
 
  print(datos[50].date_time_peak_brightness_ut);
  
  var fechaHora = split(datos[50].date_time_peak_brightness_ut, 'T');
  
  var fecha = fechaHora[0];
  var hora = fechaHora[1];
  
  //print(fecha);
  //print(hora);
  
  var anoMesDia = split(fecha, '-');
  
  var ano = anoMesDia[0];
  var mes = anoMesDia[1];
  var dia = anoMesDia[2];
  
  //print(ano);
  //print(mes);
  //print(dia);

}

function draw() {
  
 // image(fondo,-600,-130,1500,700); si es er
  image(fondo,-700,-170,1800,900);
  
  fill(0,0,255);
  rect ((width/2)-110,(height/2)+8,248,70);
	fill(255);
  stroke(0,0,255);
  strokeWeight(4);
  rect ((width/2)-120,height/2,250,70)
 
 // stroke(0,0,255);
  fill(0,0,255);
  textSize(22);
  noStroke();
  textFont('courier New');
  text('FIREBALL & BOLIDE', (width/2)-106, (height/2)+30);
	text('REPORTS', (width/2)-40, (height/2)+50);

  stroke(2);
  fill(255);
  textSize(25);
  text('2014',solx, soly);
  text('2015',lunax, lunay);
  
  noFill();
  noStroke();
  rect (solx,soly,20,20);



if (mouseIsPressed) {
  
  if (mouseX > solx && mouseX < solx +60 && mouseY > soly-15 && mouseY < soly+5) {
			herramienta = 1;
  }
  
   if (mouseX > lunax && mouseX < lunax +60 && mouseY > lunay-15 && mouseY < lunay+5) {
			herramienta = 2;
  }
  if (herramienta ==1) {
  
// if (ano == "2014") {
  for (var i = 0; i < 33; i = i + 1) {
    fill(255);
    noStroke();
  //  print(fecha);
    ellipse(random(0, width), random(0, height), 20, 2);
 // }
  }
  }
  
  if (herramienta ==2){
     
 //if (ano == "2014") {
  for (var i = 0; i < 10; i = i + 1) {
    fill(255);
    noStroke();
    ellipse(random(0, width), random(0, height), 20, 2);
  }
//  }
  }
   
}
}
    
