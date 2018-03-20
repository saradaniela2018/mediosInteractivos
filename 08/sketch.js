
var sonido;
var amplitud;
var volumen;
var r=177;
var g=214;
var b=182;
var z=1;
var play;
var pause;


function preload (){
  sonido = loadSound ("s/tristes.mp3");
  play = loadImage ("s/play.png");
  pause = loadImage ("s/pause.png");
  
}


function setup() {
  createCanvas(400, 400);
  sonido.play();
  sonido.setVolume (1.0);
  amplitud = new p5.Amplitude ();
}

function draw() {
//  r= map (posx, 0, width, 75,103);
  background(r,g,b);
  //r= r + 25*z;
  //g= g+20*z;
  //b= b+22*z; 
    //if(r>226||r<82){
    //z=z*-1;
    //}
  
  image (play, 140,313,55,55);
  image (pause, 210, 313, 55, 55);

 	//cejas
  noFill();
  strokeWeight (2);
  stroke (0);
  ellipse (130,102,60,15);
  ellipse (260, 102, 60, 15);
  fill (177, 214,182);
  noStroke ();
  ellipse (130,104, 60,15);
  ellipse (260, 104, 60, 15);
  //ojos
  fill (0);
  ellipse (130,110,20,16);
  ellipse (260,110,20,16);
  //nariz
  ellipse (190,150,3,3);
  ellipse (200,150,3,3);
  //boca
  ellipse (200,200,70,7);
  noStroke();
  fill (177,214,182);
  ellipse (200,201,70,7);
  
  stroke (0);
  noFill();
  ellipse (200,208,30,10); 
 	
  noStroke();
  fill (177,214,182);
  ellipse (200,210,120,10);
  
    strokeWeight (3.2);
  stroke (0);
  line (128,108,128,nivel);
  line (260,108,260,150);
  line (136,109,136,170);
  
  var nivel = amplitud.getLevel ();
	nivel = map (nivel, 0.0, 1.0, 0, 200);
  //print(nivel);
  
  sonido.setVolume (map(mouseY,400,0,0.0,1.0));
  strokeWeight (3.2);
  stroke (0);
  line (128,108,128,200+nivel);
  line (260,108,260,150+nivel);
  line (136,109,136,170+nivel*0.1);
  
}

  
//if (mousePressed){
  //if (mouseX>140 && mouseX<200 && mouseY>313 && mouseY<370){
    //herramienta =1;
  //}
  
//  if (mouseX>210 && mouseX<260 && mouseY>313 && mouseY<370){
  //  herramienta =2;
  //}
//}
  
 //if (herramienta ==1)
 // if (herramienta ==2)
function mouseReleased (){
    if(sonido.isPlaying()){
      sonido.pause ();
    } else {
    sonido.play();
    }
  }  
