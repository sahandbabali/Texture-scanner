var cameravideo;

var brushx = 0;




function mousePressed() {
      noLoop();
    }
    
function doubleClicked() {
      loop();
    }

function setup() {
  
  createCanvas(640, 960).parent("canvasema");
  background(200);
  
  cameravideo = createCapture(VIDEO);
  cameravideo.size(640,480);
  cameravideo.hide();
}



function draw() {

  frameRate(60);
  image(cameravideo,0,0,640,480);
  
  
  //noStroke();
  let tempak = get(321, 0, 1, 480);
  set(brushx, 480, tempak);
  updatePixels();
  brushx = brushx+1;
  if(brushx > width){
    brushx = 0;
    noLoop();
  }
  stroke("yellow")
  line(320,0, 320, 480);
  
}





//https://www.youtube.com/watch?v=bkGf4fEHKak&list=PLglp04UYZK_PrN6xWo_nJ-8kzyXDyFUwi&index=71