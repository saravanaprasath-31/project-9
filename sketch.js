var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  
  b1_red = createButton("red");
  b1_red.position = 100,75
  b1_red.mousePressed(red_bg);

  b2_green = createButton("green");
  b2_green.position = 200,150
  b2_green.mousePressed(green_bg);

  b3_blue = createButton("blue");
  b3_blue.position = 300,225
  b3_blue.mousePressed(blue_bg);

  function red_bg()
  {
    r=255;
    g=0;
    b=0

  }
  function green_bg()
  {
    r=0;
    g=255;
    b=0
    
  }
  function blue_bg()
  {
    r=0;
    g=0;
    b=255;
    
  }
}

function draw() {
  background(r,g,b);
}

