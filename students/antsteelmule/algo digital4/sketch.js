var a = 2;

var b =0.301;

var aS = 0.004;

var bs = 0.001;

var count = 100;

var r = 255;
var g = 255;
var b = 255;

 //source: http://digitaldesign.flause.org/?p=667

 var w = window, 
 wX = w.innerWidth,
 wY = w.innerHeight;

function setup() {

createCanvas(600,650);

smooth();

background(128, 109, 87);

noFill();

stroke(100,50);
//before: stroke(200,200)

}


function draw(){



if(count == 1) {

fill (255, 200);

//rect (0,0, width, height);

noFill();

count =10;

}

count ++;



translate(width/2,
height/77); // koordinatensystem im Mittelpunkt
translate(cos(a)*700, sin(b)*100);
//before: translate(cos(a)*500, sin(b)*300)

rotate(b*5);
//before: rotate(a*5)

g-=0.2;


stroke(0, g, 0);



strokeWeight (0.2);
//before: strokeWeight (0.5)

ellipse(0,0,5
+80*tan(pow(b, 20)),500);
// before ellipse (0,22,100)

a += aS;

b += aS;
// before: b += aS;

}