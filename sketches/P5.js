var rocketObj;
var smokeList;

function setup() {
  smokeList = [];
  noStroke();
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('display', 'block');
  background(0, 255, 0);
  rocketObj = new Rocket();
}

function draw() {
  textSize(32);
  background(255, 160, 0);
  fill(255, 138, 101);
  triangle(width, height / 4, width, height, 0, height);
  rect(0, height - 200, width, 200);
  rocketObj.Display();
  
  if(millis() < 12000)
  {
    text("Launching in: " + (12000 - millis()), width / 2, height / 2);
  }
  else
  {
    rocketObj.SetCoords(rocketObj.GetX(), rocketObj.GetY() - 15);
    //console.log("b");
    if(int(random(1, 3)) == 2)
    {
      //console.log("a");
      smokeList.push(new Cloud());
    }
  }
  smokeList.forEach(function(element){
    //console.log("looping");
    element.Display();
  });
  
  //text(smokeList.length, 100, 100);
}

function Rocket()
{
  this.x = 100;
  this.y = height - 300;
  
  this.GetX = function()
  {
    return this.x;
  }
  this.GetY = function()
  {
    return this.y;
  }
  this.SetCoords = function(x, y)
  {
    this.x = x;
    this.y = y;
  }
  this.Display = function()
  {
    var offset = random(-1, 1);
    fill(236, 239, 241);
    rect(this.x + offset, this.y, 15, 100);
    fill(44, 56, 74);
    rect(this.x + offset, this.y + 75, 15, 25);
    rect(this.x + offset, this.y, 15, 25);
    fill(3,155,229);
    triangle(this.x + offset, this.y, this.x + offset + 15, this.y, this.x + offset + 7.5, this.y - 15);
    //fill(255, 202, 40);
    triangle(this.x + offset, this.y + 100, this.x + offset, this.y + 85, this.x + offset - 15, this.y + 100);
    triangle(this.x + offset + 15, this.y + 100, this.x + offset + 15, this.y + 85, this.x + offset + 30, this.y + 100);
  }
}

function Cloud()
{
  this.x = rocketObj.GetX() + random(-30, 30);
  this.y = rocketObj.GetY();
  this.desiredSize = random(50, 100);
  console.log(this.desiredSize);
  this.cloudSize = 0;
  this.cloudColorDecider = random(0, 255);
  this.opacity = 255;
  
  this.Display = function()
  {
    this.cloudSize = lerp(this.cloudSize, this.desiredSize, 0.5);
    if(this.desiredSize - this.cloudSize <= 1)
    {
      console.log("reducing opacity");
      this.opacity -= 15;
    }
    fill(this.cloudColorDecider, this.cloudColorDecider, this.cloudColorDecider, this.opacity);
    ellipse(this.x, this.y + 100, this.cloudSize, this.cloudSize);
  }
}