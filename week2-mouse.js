// 색상 문자열 리스트 Array - 대괄호를 사용함
let coolors = ["#cbf3f0", "#2ec4b6", "#ff9f1c","#ffbf69"];
let coolors2 = ["#642ca9", "#ae36ab", "#ff74d4", "#ffb8de", "#ffdde1"];
let colorIndex =  0;
console.log(coolors[colorIndex]);

function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

let dragX = 0;
let dragY = 0;
function mouseDragged() {
	console.log("drag", mouseX, mouseY);
	// 마우스 드래그해서 도형 위치 이동해보기.
	dragX = mouseX;
	dragY = mouseY;
}
function mouseClicked() {
		colorIndex = colorIndex + 1;
	  colorIndex = colorIndex % 4;
		console.log(colorIndex);
	// 마우스 클릭해서 색깔 바꿔보기.
}

// 현재까지 우리가 만든 알파벳 도형 함수들
// myRectA(), myCircleB(), myArcD(), myRectE(), myTriM(), myCircleO()
function draw() {
  background(0);
  drawGrid(20);         // 모눈종이표
  showCoordinateNum();  // 마우스 현재 위치 좌표값
	noStroke();
	
	// 마우스 위치 값 => 도형 위치 연습
	push();
	// translate(mouseX, mouseY);
	// myRectMouseA();
	pop();
	
	// 마우스 위치 값 => 도형 사이즈 연습
	let cx = constrain(mouseX, 20, 200); // 값을 최소, 최대값으로 지정하는 함수
	let mapX = map(mouseX, 0, width, 0.5, 1.5); // map(실제값, 실제최소값, 실제 최대값, 변환할 최소값, 변환할 최대값)
	push();
	translate_guide(width/4 + cx, height/2);
	scale(mapX, 1.0); 
	// myRectA();
	pop();
	
	// 마우스 위치 값 => 도형 회전
	let rot = map(mouseX, 0, width * 0.1 , 0, 360);
	push();
	translate(dragX, dragY);
	// myArcD();
	pop();
	
	push();
	translate(dragX, dragY);
	rotate(rot);
	fill(coolors2[colorIndex]);
	scale(mapX, 1.0);
	// myRectT();
	pop();
	
	
	// 마우스 클릭 색상 변경
	push();
	translate_guide(dragX, dragY);
	fill(coolors[colorIndex]);
	// myArcD();
	pop();
	
	
	push();
	translate_guide(dragX, dragY);
	fill(coolors[colorIndex]);
	// myArcD();
	pop();
	
	
}
