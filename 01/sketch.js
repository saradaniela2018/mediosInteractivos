function setup() { 
  createCanvas(700, 400);
	  background(239,230,200);
  
    noStroke ();
  fill (255,240,0);
  
  beginShape ();        // triangulo 
  vertex (380,150);
  vertex (440,250);
  vertex (330,250);
  endShape (close); 
  
 
	strokeWeight (4);
	stroke (0,0,0);
	
	line (660,0,660,315); 
	line (645,0,645,315); 
  
  fill (255,0,0)
  ellipse (40,360,50,50);
  
  fill (150,150,150);
  ellipse (486,273,99,99);
  
	
	strokeWeight (2);
	
	line (610,80,690,80);
	line (610,85,690,85);
	line (610,300,690,300);
	line (610,295,690,295);
	line (610,290,690,290);
  
  line (60,150,445,400);
	line (60,250,390,400);  
  
      strokeWeight (5); // rayas triangulo
	
	line (300,50,430,400);
	line (300,50,170,400);
  
      strokeWeight (1);    
      fill (150,150,150); 
  
  ellipse (150,150,70,70);
  
      fill(239,230,200);
  
  ellipse (486,273,87,87);
  ellipse (486,273,80,80);
  
    fill(42,46,140); //azul
  ellipse (486,273,70,70);
  
    // semicirculo
    noFill ();   
  ellipse (665,150,80,80);
  
    noStroke (); 
  fill (239,230,200);
  rect (677,100,677,130);
  
  
  
  }
