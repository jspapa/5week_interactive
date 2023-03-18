let video;
function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	angleMode(DEGREES);
	video = createCapture(VIDEO);
  video.size(width, height); 
	video.hide(); // 원본 웹캠을 가린다?
}

function draw() {
	background(255); // 잔상이 남아서 백그라운드를 넣어줌

	video.loadPixels();
	video.updatePixels(); // 비디오를 불러옴
	
	for (let y = 0; y < video.height; y = y + 20) {
    for (let x = 0; x < video.width; x = x + 20) {
			let pixel_index = (y * video.width + x) * 4;
      let darkness = (255 - video.pixels[pixel_index]) / 255;
					
      let 지름 = 10 * darkness; // 한글로도 입력이 가능함
			
			push();
			translate(x, y);
			
			if(darkness > 0.8) {
				rect(0, 0, 지름, 지름);
			}

			if(darkness <= 0.8 && darkness >= 0.5) {
				ellipse(0, 0, 지름, 지름);
			}

			if(darkness < 0.5) {
				line(0, 0, 지름, 지름);
			}
			pop();
		}
	}

}
