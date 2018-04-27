var datos;
var t = "FIREBALL & BOLIDE";
var t1 = "REPORTS";
var f;
var u;

//posicion numeros
var solx = 280;
var soly = 430;
var lunax = 375;
var lunay = 430;

var fondo;
var protistas;
var herramienta = 0;

var contadora = 0;
var contadorb = 0;
var contadorc = 0;
var contadord = 0;
var contadore = 0;
var contadorf = 0;


function preload() {
  datos = loadJSON("https://data.nasa.gov/resource/2af2-m89m.json"); //reporte de la cantidad que bolas de fuego que cayeron
  fondo = loadImage("ff.png");
  //protistas = loadSound("M.mp3"); //sonido vacio
  carlos = loadSound("es.mp3");
}


function setup() {
  createCanvas(700, 700);
  background(0, 0, 0);

 // protistas.play();
 // protistas.setVolume(1,3);
  
        
      carlos.play();
        carlos.setVolume(0.5);


  for (var i = 0; i < 92; i = i + 1) { //recorre todos los datos
   
    var fechaHora = split(datos[i].date_time_peak_brightness_ut, 'T'); //se divide en la t

    var fecha = fechaHora[0];
    var hora = fechaHora[1];

    //print(fecha);
    //print(hora);

    var anoMesDia = split(fecha, '-'); //se divide en el guion

    var ano = anoMesDia[0];
		print(ano);
    //print(mes);
    //print(dia);

    if (ano == 2014) { //cuenta los que cayeron en 2014
      contadora = contadora + 1;
    }
    if (ano == 2015) { //los que cayeron en 2015
      contadorb = contadorb + 1;
    }
    
    if (ano == 2013) { //cuenta los que cayeron en 2013
      contadorc = contadorc + 1;
    }
    if (ano == 2012) { //los que cayeron en 2012
      contadord = contadord + 1;
    }
    
    if (ano == 2011) { //cuenta los que cayeron en 2011
      contadore = contadore + 1;
    }
    if (ano == 2010) { //los que cayeron en 2010
      contadorf = contadorf + 1;
    }
  }

  print(contadora);
  print(contadorb); 
  print(contadore);//para verificar
}



function draw() {
  // imagen real de bola de fuego
  image(fondo, -700, -170, 1800, 900);
  
  //cuadrado blanco y azul
  fill(0, 0, 255);
  rect((width / 2) - 110, (height / 2) + 8, 248, 70);
  fill(255);
  stroke(0, 0, 255);
  strokeWeight(4);
  rect((width / 2) - 120, height / 2, 250, 70)

  // texto de titulos
  fill(0, 0, 255);
  textSize(22);
  noStroke();
  textFont('courier New');
  text('FIREBALL & BOLIDE', (width / 2) - 106, (height / 2) + 30);
  text('REPORTS', (width / 2) - 40, (height / 2) + 50);

  //texto de numeros
  stroke(2);
  fill(255);
  textSize(25);
  text('2014', solx, soly);
  text('2015', lunax, lunay);
  text ('2013', solx,460);
  text ('2012', lunax,460);
  text ('2011', solx,490);
  text ('2010',lunax,490);

  noFill();
  noStroke();
  rect(solx, soly, 20, 20);



  if (mouseIsPressed) {

    if (mouseX > solx && mouseX < solx + 60 && mouseY > soly - 15 && mouseY < soly + 5) {
      herramienta = 1;
    }

    if (mouseX > lunax && mouseX < lunax + 60 && mouseY > lunay - 15 && mouseY < lunay + 5) {
      herramienta = 2;
    }

      //2013
     if (mouseX > solx && mouseX < solx +60 && mouseY > 460-15 && mouseY < 460+5) {
			herramienta = 3
  }
  
  //2012
     if (mouseX > lunax && mouseX < lunax +60 && mouseY > 460-15 && mouseY < 460+5) {
			herramienta = 4
  }
  
  //2011
     if (mouseX > solx && mouseX < solx +60 && mouseY > 490-15 && mouseY < 490+5) {
			herramienta = 5
  }
  
  //2010
     if (mouseX > lunax && mouseX < lunax +60 && mouseY > 490-15 && mouseY < 490+5) {
			herramienta = 6
  }
    
    var y= random(0,height);
    
    if (herramienta == 1) {

      for (var i = 0; i < contadora; i = i + 1) {
        fill(255);
        noStroke();
        ellipse(random(0, width), random(0, height), 20, 2);

      }
    }
//2014
    if (herramienta == 2) {
  for (var i = 0; i < contadorb; i = i + 1) {
        fill(255);
        noStroke();
        ellipse(random(0, width), random(0, height), 20, 2);
      }
    }
//2013
        if (herramienta == 3) {
      for (var i = 0; i < contadorc; i = i + 1) {
        fill(255);
        noStroke();
        ellipse(random(0, width), random(0, height), 20, 2);
      }
    }
    //2012
        if (herramienta == 4) {
      for (var i = 0; i < contadord; i = i + 1) {
        fill(255);
        noStroke();
        ellipse(random(0, width), random(0, height), 20, 2);
      }
    }
    //2011
        if (herramienta == 5) {
      for (var i = 0; i < contadore; i = i + 1) {
        fill(255);
        noStroke();
        ellipse(random(0, width), random(0, height), 20, 2);
      }
    }
    //2010
        if (herramienta == 6) {
      for (var i = 0; i < contadorf; i = i + 1) {
        fill(205);
        noStroke();
        posx = random(0, width);
        ellipse(random(0, width), random(0, height), 20, 2);

      }
    }
  }
}