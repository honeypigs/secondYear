var canvas1;
var canvas2;

var ctx1;
var ctx2;

var canvasWidth;
var canvasHight;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;
var fruit;

var mom;
var baby;

var mx;
var my;

document.body.onload = game;

function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init() {
	//get cnavas
	canvas1 = document.querySelector("#canvas1");
	ctx1 = canvas1.getContext('2d');
	canvas2 = document.querySelector("#canvas2");
	ctx2 = canvas2.getContext('2d');

	canvas1.addEventListener("mousemove",onMouseMove,false);


	//draw background!
	bgPic.src = "img/background.jpg";

	canvasWidth = canvas1.width;
	canvasHight = canvas1.height;
	
	ane = new aneObj();
	ane.init();
	
	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canvasWidth * 0.5;
	my = canvasHight * 0.5;
}

function gameloop() {
	window.requestAnimFrame(gameloop);//frame per second
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if (deltaTime > 40) deltaTime = 40;
	
	ctx2.drawImage(bgPic,0,0,canvasWidth,canvasHight);
	ane.draw();
	fruitMonitor();
	fruit.draw();


	ctx1.clearRect(0,0,canvasWidth,canvasHight);
	mom.draw();
	baby.draw();
	momFruitCollision();


}


function onMouseMove(e) {
	if (e.offSetX || e.layerX) {
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
	}
}