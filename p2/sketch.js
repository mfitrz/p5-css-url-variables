let num;
let clr;

function setup() {
  let canvas = createCanvas(0.5*windowWidth, 0.5*windowWidth); //create canvas half screen width
  canvas.addClass('centered'); //add centered class to canvas (see style.css)
   //get color value from URL
  let params = getParams();
  clr = params.color; 
  num = params.num; 
  //add color values in link to next page
  var a = document.getElementsByTagName('a')[0];
  var href = setParams(a.href, 'color', clr);
  a.href = href;

  background(0);
  fill('yellow');
  noStroke();

  frameRate(1)
}

function draw() {

  for(var i = 0; i < num; i++){
    ellipse(width/2, 50+i*30, 20);
  }

  for(var i = 0; i < num; i++){
    ellipse(width/2, 50+i*50, 20)
  }

  for(var i = 0; i < num; i++){
    if (i % 2 == 0) {
      fill(clr);
    } else {
      fill(random(255), random(255), random(255));
    }
    triangle(random(windowWidth/2), random(windowHeight/2), random(windowWidth/2), random(windowHeight/2), random(windowWidth/2), random(windowHeight/2))
  }

  
}
