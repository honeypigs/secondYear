var canvas1 = document.querySelector("#canvas1");
var canvas2 = document.querySelector("#canvas2");

var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');

var canvasWidth = canvas1.width;
var canvasHight = canvas1.height;

var lastTime = Date.now();
var deltaTime = 0;

var bgPic = new Image();
var ane = new aneObj();

document.body.onload = game;

function game() {
	init();
	gameloop();
}

function init() {
	//get cnavas
	//draw background
	ane.init();
}

function gameloop() {
	requestAnimFrame(gameloop);//frame per second
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	
	bgPic.src = "img/background.jpg";
	ctx2.drawImage(bgPic,0,0,canvasWidth,canvasHight);
	ane.draw();

}