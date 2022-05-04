let snake;
let square = 20;
let food;
let score=0;

function setup() {
	createCanvas(windowWidth,windowHeight);
	frameRate(12);
	snake = new Snake();
	pickLocation();
	textSize(30);
}

function pickLocation(){
	let cols = floor(width/square);
	let rows = floor(height/square);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(square);
}

function draw() {
	background(51);
	fill(255);
	text(score,width/2,800);

	if(snake.eat(food)){
		pickLocation();
	}
	snake.death();
	snake.update();
	snake.show();
	
	fill(255,0,100);
	stroke(51);
	rect(food.x,food.y,square,square);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		snake.dir(0,-1);
	}else if(keyCode === DOWN_ARROW){
		snake.dir(0,1);
	}else if(keyCode === RIGHT_ARROW){
		snake.dir(1,0);
	}else if(keyCode === LEFT_ARROW){
		snake.dir(-1,0);
	}
}