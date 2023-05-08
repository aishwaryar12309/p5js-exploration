function setup() {
  createCanvas(400, 600, WEBGL)
  angleMode(DEGREES)

  
}

function draw() {
  background(30)
  rotateX(60)
  noFill()
  stroke(250)
  
  for (let i = 0; i < 15; i++){
    beginShape()
    for (let j = 0; j < 360; j+=10){
      var rad  = i * 8
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount + i * 20) * 20
      
      vertex(x,y,z)
      
    }
    endShape(CLOSE)
  }
  
}
