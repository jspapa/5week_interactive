function draw() {
	background(0);
	drawGrid(20);  				// 모눈종이표
	showCoordinateNum();  // 마우스 현재 위치 좌표값
	noFill();
	stroke(255);
	
// 	네잎클로버 //
	push();
	fill('red');
	strokeWeight(3);
	translate_guide(20);
	rect_guide(600, 200, 100, 100, 100, 100, 100);
	pop();
	
	push();
	fill('red');
	strokeWeight(3);
	translate_guide(20);
	rect_guide(500, 200, 100, 100, 100, 100, 0, 100);
	pop();
	
	push();
	fill('red');
	strokeWeight(3);
	translate_guide(20);
	rect_guide(500, 300, 100, 100, 100, 0, 100, 100);
	pop();
	
	push();
	fill('red');
	strokeWeight(3);
	translate_guide(20);
	rect_guide(600, 300, 100, 100, 0, 100, 100, 100);
	pop();
	
// 	정체를 알 수 없는 원 3개 //
	
	push();
	strokeWeight(3);
	translate_guide(20);
	rect_guide(150, 220, 100, 100, 100, 100, 100);
	pop();
	
	push();
	strokeWeight(3);
	translate_guide(20);
	rect_guide(150, 240, 100, 100, 100, 100, 100);
	pop();
	
	push();
	strokeWeight(3);
	translate_guide(20);
	rect_guide(150, 260, 100, 100, 100, 100, 100);
	pop();
	
// 물고기인가 - 삼각형 //	
	
	push();
	translate(50, 50);
	triangle(250, 250, 300, 300, 200, 300);
	pop();
	
	push();
	translate(50, 50);
	triangle(300, 300, 350, 250, 350, 350);
	pop();

	
// 	↓ 원 6 개 //
	push();
	fill('green');
	translate(50, 50);
	arc_guide(100, 400, 100, 100, 180, 270+90, PIE);
	pop();
	
	push();
	fill('blue');
	translate(50, 50);
	arc_guide(200, 400, 100, 100, 0, 90+180, PIE);
	pop();
	
	push();
	fill('white')
	translate(50, 50);
	arc_guide(300, 400, 100, 100, 90, 270+180, PIE);
	pop();
	
	push();
	fill('red');
	translate(50, 50);
	arc_guide(400, 400, 100, 100, 180, 270+180, PIE);
	pop();
	
	push()
	fill(205, 122, 214);
	noStroke();
	translate_guide(50, 50);
	arc_guide(500, 400, 100, 100, 270, 270+180, CHORD);
	pop();
	
	push();
	fill('yellow');
	translate(50, 50);
	arc_guide(600, 400, 100, 100, 90, 90+90, PIE);
	pop();
	
	push();
	noStroke();
	translate_guide(50, 50);
	fill(255);
	ellipse_guide(0,0,100,100);
	fill(150);
	ellipse_guide(0,0,60,60);
	fill(0);
	ellipse_guide(0,0,30,30);
	pop();
		
	
}

/** 
여기 있는 arc_guide(), ellipse_guide(), rect_guide() 함수는 
utils.js에서 정의한 함수를 사용하는 것이다.
내가 직접 만든 알파벳 도형 함수들을 여기에 다 정리해보자.
*/
function myRectA() {
	push();
	rect_guide(50, 20, 25 * 0.5, 10);
	rect_guide(50, 40, 25, 10);
	rect_guide(50, 60, 50, 10);
	rect_guide(50, 80, 75, 10);
	rect_guide(50, 100, 100, 10);
	pop();
}
function myRectMouseA() {
    let mWidth = constrain(mouseX, 0, 200);
    push();
    rect_guide(50, 20, 25 * 0.5 + mWidth, 10);
    rect_guide(50, 40, 25 + mWidth, 10);
    rect_guide(50, 60, 50 + mWidth, 10);
    rect_guide(50, 80, 75 + mWidth, 10);
    rect_guide(50, 100, 100 + mWidth, 10);
    pop();
}

function myCircleB() {
	// ellipse로 만든 B
	push();
	ellipse_guide(20, 40, 50, 50);
	ellipse_guide(20, 80, 50, 50);
	pop();
}

function myArcB() {
	push();
	arc_guide(0, 40, 100, 50, 270, 270+180);
	arc_guide(0, 40+60, 100, 50, 270, 270+180);
	pop();
}




function myArcD() {
	let rot = map(mouseX, 0, width, 0, 360);	
	push();
	translate(20,50);
	// rotate(rot)
	arc(0, 0, 150, 100, 270, 270+180);
	pop();
}


function myRectE() {
	push();
	rectMode(CORNER);
	rect(0, 0, 20, 100);
	rect(20, 0, 40, 20);
	rect(20, 40, 40, 20);
	rect(20, 80, 40, 20);
	pop();
}

function myTriM() {
	push();
	triangle(0, 100, 20, 0, 40, 100);
	triangle(40, 100, 60, 0, 80, 100);
	pop();
}

function myTriMouseM() {
	push();
	triangle( 0 + mouseX,   100 + mouseY, 
					 20 + mouseX ,    0 + mouseY, 
					 40 + mouseX ,  100 + mouseY);
	triangle(40 + mouseX ,  100 + mouseY, 
					 60 + mouseX ,    0 + mouseY, 
					 80 + mouseX ,  100 + mouseY);
	pop();
}

function myCircleO() {
	push();
	noStroke();
	fill(255);
	ellipse_guide(0, 0, 100, 100);
	fill(150);
	ellipse_guide(0, 0, 60, 60);
	fill(0);
	ellipse_guide(0, 0, 30, 30);
	pop();
}

// 실습 T //
function myRectT() {
	push();
	fill('red');
	rect(50, 40, 60, 10);
	rect(50, 75, 10, 60);
	pop();
}


function homeworkL() {
	push();	
	rect(40,40,20,60);
	rect(55,80,50,20);
	pop();

}

function homeworkO() {
	push();
	circle(150,50,80);
	pop();

}

function homeworkV() {
	push();
	triangle(220,10,260,90,300,10);
	pop();
}

function homeworkE() {
	push();
	rect(340,50,20,80);
	rect(370,20,40,20);
	rect(370,50,40,20);
	rect(370,80,40,20);
	pop();

}
