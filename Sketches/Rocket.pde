RocketObject rockee;
boolean launched;


void setup()
{
  frameRate(120);
  size(screen.width,screen.height);
  noStroke();
  background(189, 245, 252);
  //System.out.println((width - 100) + " " + (height - 100));
  fill(127, 255, 0);
  rect(0, height - 200, width, 300);
  //fill(255, 0, 0);
  //rect(100, height - 300, 15, 100);
  //fill(207, 211, 211);
  rockee = new RocketObject(200, height - 300);
  rockee.Display();
}

void draw()
{
  textSize(32);
  background(189, 245, 252);
 // text("FrameRate: " + frameRate(), width / 2, height / 2 - 100);
  if(12000 - millis() > 0)
  {
    text("Launch in: " + (12000 - millis()), width / 2, height / 2);
  }
  else
  {
    launched = true;
  }
  if(launched)
  {
    rockee.SetCoords(rockee.GetX(), rockee.GetY() - 10);
  }
  fill(127, 255, 0);
  rect(0, height - 200, width, 300);
  rockee.Display();
}


class RocketObject
{
  float x;
  float y;
  
  
  RocketObject(float x, float y)
  {
    this.x = x;
    this.y = y;
  }
  float GetX()
  {
    return x;
  }
  float GetY()
  {
    return y;
  }
  void SetCoords(float x, float y)
  {
    this.x = x;
    this.y = y;
  }
  
  void Display()
  {
    float offset = random(-1, 1);
    fill(255, 0, 0);
    rect(x + offset, y, 15, 100);
    fill(0, 0, 0);
    triangle(x + offset, y, x + offset + 15, y, x + offset + 7.5, y - 15);
    fill(142, 142, 142);
    triangle(x + offset, y + 100, x + offset, y + 85, x + offset - 15, y + 100);
    triangle(x + offset + 15, y + 100, x + offset + 15, y + 85, x + offset + 30, y + 100);
  }
}


class SmokeCloud
{
  float x;
  float y;
  float desiredSize;
  float currentSize;
  
  SmokeCloud(float x, float y, float desiredSize, float currentSize)
  {
    this.x = x;
    this.y = y;
    this.desiredSize = desiredSize;
    this.currentSize = currentSize;
  }
  void Display()
  {
    currentSize = lerp(currentSize, desiredSize, 0.05f);
    int fillScale = (int)random(0, 255);
    fill(fillScale, fillScale, fillScale);
    ellipse(x, y, currentSize, currentSize);
  }
}