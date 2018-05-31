var rocketObj;
var smokeList;
var widthOffset;
var heightOffset;
// var fleckList;

function setup() {
  widthOffset = 0;
  heightOffset = 200;
  console.log("flecks version 10");
  smokeList = [];
  //fleckList = [];
  noStroke();
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('display', 'block');
  background(0, 255, 0);
  rocketObj = new Rocket();

  //Spawn flecks
  // for(var x = 0; x < Math.round(width); x+=20)
  // {
  //   for(var y = 0; y < Math.round(height); y+=35)
  //   {
  //     fleckList.push(new Fleck(x, y));
  //   }
  // }
}

function draw() {
  textSize(32);
  //Sky
  background(44,53,49);
  //Sun
  fill(247,159,121);
  ellipse(width / 2, height / 2, 500, 500);

  //Ground (rect and tri)
  // fill(5,56,107);
  // triangle(width, height / 4, width, height, 0, height);
  // rect(0, height - 200, width, 200);
  DrawPlatform();

  //Random sky-colored flecks
  // fleckList.forEach(function(f){
  //   f.Display();
  // });

  rocketObj.Display();
  
  if(millis() < 12000)
  {
    fill(255, 255, 255);
    text("Launching in: " + (12000 - millis()), width / 2, height / 2);
  }
  else
  {
    rocketObj.SetCoords(rocketObj.GetX(), rocketObj.GetY() - 15);
    if(int(random(1, 3)) == 2)
    {
      smokeList.push(new Cloud());
    }
  }
  smokeList.forEach(function(element){
    element.Display();
  });
}

function DrawPlatform()
{
  quad(width / 2 - 400 + widthOffset, height / 2 + 50 + heightOffset, width / 2 - 200 + widthOffset, height / 2 - 50 + heightOffset, width / 2 + 100 + widthOffset, height / 2 - 50 + heightOffset, width / 2 - 100 + widthOffset, height / 2 + 50 + heightOffset);
  quad(width / 2 - 100 + widthOffset, height / 2 + 50 + heightOffset, width / 2 + 100 + widthOffset, height / 2 - 50 + heightOffset, width / 2 + 100 + widthOffset, height / 2 + heightOffset, width / 2 - 100 + widthOffset, height / 2 + 100 + heightOffset);
  quad(width / 2 - 400 + widthOffset, height / 2 + 50 + heightOffset, width / 2 - 100 + widthOffset, height / 2 + 50 + heightOffset, width / 2 - 100 + widthOffset, height / 2 + 100 + heightOffset, width / 2 - 400 + widthOffset, height / 2 + 100 + heightOffset);
  
  strokeWeight(5);
  stroke(255, 255, 255);
  
  line(width / 2 - 400 + widthOffset, height / 2 + 50 + heightOffset, width / 2 - 200 + widthOffset, height / 2 - 50 + heightOffset);
  line(width / 2 - 200 + widthOffset, height / 2 - 50 + heightOffset, width / 2 + 100 + widthOffset, height / 2 - 50 + heightOffset);
  line(width / 2 + 100 + widthOffset, height / 2 - 50 + heightOffset, width / 2 - 100 + widthOffset, height / 2 + 50 + heightOffset);
  line(width / 2 + 100 + widthOffset, height / 2 - 50 + heightOffset, width / 2 + 100 + widthOffset, height / 2 + heightOffset);
  line(width / 2 - 100 + widthOffset, height / 2 + 50 + heightOffset, width / 2 - 100 + widthOffset, height / 2 + 100 + heightOffset);
  line(width / 2 + 100 + widthOffset, height / 2 + heightOffset, width / 2 - 100 + widthOffset, height / 2 + 100 + heightOffset);
  line(width / 2 - 100 + widthOffset, height / 2 + 50 + heightOffset, width / 2 - 400 + widthOffset, height / 2 + 50 + heightOffset);
  line(width / 2 - 400 + widthOffset, height / 2 + 50 + heightOffset, width / 2 - 400 + widthOffset, height / 2 + 100 + heightOffset);
  line(width / 2 - 400 + widthOffset, height / 2 + 100 + heightOffset, width / 2 - 100 + widthOffset, height / 2 + 100 + heightOffset);
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


    //Rocket Body Outline
    fill(92,219,149)
    rect(this.x + offset - 2, this.y - 2, 19, 104);
    //Nose cone outline
    fill(92,219,149);
    triangle(this.x + offset - 2, this.y, this.x + offset + 17, this.y, this.x + offset + 7.5, this.y - 17);
    //Fins outline
    fill(92,219,149);
    triangle(this.x + offset, this.y + 100, this.x + offset, this.y + 83, this.x + offset - 17, this.y + 100);
    triangle(this.x + offset + 15, this.y + 100, this.x + offset + 15, this.y + 83, this.x + offset + 32, this.y + 100);



    //Rocket body
    fill(5,56,107);
    rect(this.x + offset, this.y, 15, 100);
    //Rocket body smaller pieces
    fill(92,219,149);
    rect(this.x + offset + 2, this.y + 75, 11, 25);
    rect(this.x + offset + 2, this.y, 11, 25);
    //Nose cone
    fill(5,56,107);
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
  //console.log(this.desiredSize);
  this.cloudSize = 0;
  this.cloudBool = Math.random() >= 0.5;
  this.opacity = 255;
  
  this.Display = function()
  {
    this.cloudSize = lerp(this.cloudSize, this.desiredSize, 0.5);
    if(this.desiredSize - this.cloudSize <= 1)
    {
      //console.log("reducing opacity");
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

function Fleck(inX, inY)
{
  this.x = inX;
  this.y = inY;

 
  this.Display = function()
  {
    fill(92,219,149);
    rect(this.x, this.y, 4, 7, 2, 2);
  }
}
