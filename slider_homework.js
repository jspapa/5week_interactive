function setup() {
  createCanvas(windowWidth, windowHeight);
    
  //슬라이더 만들기
  Slider1 = createSlider(500, 2500, 1000);
  Slider1.position(50, 10);
  Slider1.style('width', '80px');
  
  Slider2 = createSlider(0, 360, 50);
  Slider2.position(50, 40);
  Slider2.style('width', '80px');
  
  Slider3 = createSlider(0, 100, 50);
  Slider3.position(50, 70);
  Slider3.style('width', '80px');
  
  Slider4 = createSlider(0, 100, 100);
  Slider4.position(50, 100);
  Slider4.style('width', '80px');
		
}

function draw(){
  let size = Slider1.value();
  let r 	 = Slider2.value();
  let g 	 = Slider3.value();
  let b 	 = Slider4.value();
  
  background(r,g,b);
  
  text('크기', 10, 20);
  text('R', 10, 50);
  text('G', 10, 80);
  text('B', 10, 110);
  
  strokeWeight(1);
  stroke(25,0,150);
  let a = 0;
  let inc = TWO_PI / size;
  for (let x = 0; x < width; x++) {
    for (let y = 80; y < height; y+=120) {
     line(x * 3, y, x * 3, y + sin(a) * 50);
     a = a + inc; 
    }
    for (let y = 120; y < height; y+=120) {
     line(x * 4, y, x * 4, y + cos(a) * 20);
     a = a + inc; 
    }


}
		
}