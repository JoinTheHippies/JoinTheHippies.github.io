dot[] dots = new dot[20];
color c = color(random(225, 255), random(225, 255), random(225, 255));

void setup()
{
  noStroke();
  size(1000, 1000);
  for(int i = 0; i < dots.length; i++)
  {
    System.out.println("b");
    dots[i] = new dot(random(0, width), random(0, height), random(25, 50), color(random(0, 255), random(0, 255), random(0, 255)));
  }
}
void draw()
{
  background(c);
  System.out.println("a");
  
  for(dot a : dots)
  {
    if(a.GetX() - a.GetDesiredX() > 10)
    {
      a.SetCoords(lerp(a.GetX(), a.GetDesiredX(), 0.05f), lerp(a.GetY(), a.GetDesiredY(), 0.05f));
    }
    a.Display();
  }
}

class dot
{
  float desiredX;
  float desiredY;
  float x = width / 2;
  float y = width / 2;
  float scale;
  color fillColor;
  
  dot(float desiredX, float desiredY, float scale, color fillColor)
  {
    this.desiredX = desiredX;
    this.desiredY = desiredY;
    this.scale = scale;
    this.fillColor = fillColor;
  }
  
  float GetX()
  {
    return x;
  }
  float GetY()
  {
    return y;
  }
  float GetDesiredX()
  {
    return desiredX;
  }
  float GetDesiredY()
  {
    return desiredY;
  }
  void SetCoords(float x, float y)
  {
    this.x = x;
    this.y = y;
  }
  void Display()
  {
    fill(fillColor);
    tint(255, 127);
    ellipse(x, y, scale, scale);
  }
}