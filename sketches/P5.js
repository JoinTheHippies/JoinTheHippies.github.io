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
  //Sky
  background(135, 182, 167);
  //Sun
  fill(247,159,121);
  ellipse(width / 2, height / 2, 500, 500);
  //Ground (rect and tri)
  fill(91, 89, 65);
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
    //Rocket body
    fill(227,240,155);
    rect(this.x + offset, this.y, 15, 100);
    //Rocket body smaller pieces
    fill(154, 163, 104);
    rect(this.x + offset, this.y + 75, 15, 25);
    rect(this.x + offset, this.y, 15, 25);
    //Nose cone
    fill(121, 124, 101);
    triangle(this.x + offset, this.y, this.x + offset + 15, this.y, this.x + offset + 7.5, this.y - 15);
    //Fins
    triangle(this.x + offset, this.y + 100, this.x + offset, this.y + 85, this.x + offset - 15, this.y + 100);
    triangle(this.x + offset + 15, this.y + 100, this.x + offset + 15, this.y + 85, this.x + offset + 30, this.y + 100);
  }
}

function Cloud()
{
  this.x = rocketObj.GetX() + random(-30, 30);
  this.y = rocketObj.GetY() + 15;
  this.desiredSize = random(50, 100);
  console.log(this.desiredSize);
  this.cloudSize = 0;
  this.cloudBool = Math.random() >= 0.5;
  this.opacity = 255;
  
  this.Display = function()
  {
    this.cloudSize = lerp(this.cloudSize, this.desiredSize, 0.5);
    if(this.desiredSize - this.cloudSize <= 1)
    {
      console.log("reducing opacity");
      this.opacity -= 15;
    }
    if(this.cloudBool)
    {
      fill(247,159,121, this.opacity);
    }
    else
    {
      fill(247,208,138, this.opacity);
    }
    //fill(this.cloudColorDecider, this.cloudColorDecider, this.cloudColorDecider, this.opacity);
    ellipse(this.x, this.y + 100, this.cloudSize, this.cloudSize);
  }
}
