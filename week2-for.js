let slider1; 
let slider1_value = 0; // slider ui 값을 담을 변수


function setup() {
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

// 색상 문자열 index
let coolors = ["#21c7b6","#cbbcf0","#009f1c","#ffbc69"];
let coolors2 = ["#50514f","#f25f5c","#ffe066","#247ba0","#70c1b3"]
let colorIndex = 0;

function mouseClicked() {
	colorIndex = colorIndex + 1;
	colorIndex = colorIndex % 4;
}

let dragX = 0;
let dragY = 0;

function mouseDragged() {
	// 마우스 드래그해서 도형 위치 이동해보기.	dragX = mouseX;
	dragY = mouseY;
}

// 현재까지 우리가 만든 알파벳 도형 함수들

// myRectA(), myCircleB(), myArcD(), myRectE(), myTriM(), myCircleO()

function draw() {
  background(0);
  // drawGrid(20);         // 모눈종이표
  showCoordinateNum();  // 마우스 현재 위치 좌표값
	noStroke();

let rot = map(dragX, 0, width, 0, 360);

for(let y = 0; y < height; y = y + 40) {
		push();
		translate(y, y);
		scale(0.5);
		homework();
		pop();

}	
	// 도형 하나를 반복해서 알파벳 A 혹은 O ... 만들기.

	push();
	for(let i = 1; i < 6; i = i+1) {
		// rect(50, 20 * i, 25 * i, 10);

	}

	pop();
	// 알파벳 도형 묶음 1개를 반복해보기.
	for(let x = 0; x < width; x = x + 20) {
		push();
		translate(x, x);
		scale(0.2);
		rotate(x+10);
		// myTriM();
		pop();
	}

	

}

function homework() {
	push();
	scale(0.6);

// LOVE 1
	push();
	translate(0,0);
	fill(coolors[colorIndex]);
	homeworkL();
	pop();

// LOVE 2
	push();
	translate(20,0);
	fill(coolors2[colorIndex]);
	homeworkO();
	pop();

// LOVE 3
	push();
	translate(40,0);
	fill(coolors[colorIndex]);
	homeworkV();
	pop();

// LOVE 4
	push();
	translate(60,0);
	fill(coolors2[colorIndex]);
	homeworkE();
	pop();

	pop();

}