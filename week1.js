let 속도 = 0.5;
let ellipseWidth = 50 * 2;
let ellipseColor = '#0496ff';
console.log(ellipseWidth);
console.log(ellipseColor);

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	angleMode(DEGREES);
	rectMode(CENTER);
}

function draw() {
	background(0);
	drawGrid(20);  				// 모눈종이표
  showCoordinateNum();  // 마우스 현재 위치 좌표값
	noFill();
	stroke(255);
	
	push();
	fill(255, 238, 242);
	translate_guide(100, 400);
  rect_guide(0, 0, 200, 100, 100, 100, 100, 100);
	pop();
	
	push();
	strokeWeight(4);
	stroke(255, 200, 251);
	translate_guide(width * 0.5, height * 0.5);
	ellipse_guide(0, 0, 100, 100);
  pop();
		
	push();
	fill(255, 146, 194);
	noStroke();
	translate_guide(150, 50);
	arc_guide(0, 0, 100, 100, 270, 270+180, PIE);
	pop();
	
	push();
	fill("#FFE4F3");
	translate_guide(50, 50);
	triangle(0, 100, 50, 0, 100, 100);
	pop();
	
	push()
	// translate_guide(10, 10);
	// rect(0, 0, 100, 100);
	pop();
	
	push()
	// translate_guide(200, 200);
	// ellipse_guide(0, 0, 100, 100);
	pop()
	
	
}