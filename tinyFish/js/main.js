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


var babyTail = [];
var babyEye = [];
var babyBody = [];


var bigTail = [];
var bigEye = [];
var bigBodyOra = [];
var bigBodyBlue = [];

var data;

var wave;

var dust;
var dustPic = [];


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
	bgPic.src = "./img/background.jpg";

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

	for(var i = 0;i < 8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = "./img/babyTail" + i + ".png";
	}

	for(var i = 0;i < 2; i++) {
		babyEye[i] = new Image();
		babyEye[i].src = "./img/babyEye" + i + ".png";
	}

	for(var i = 0;i < 20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = "./img/babyFade" + i + ".png";
	}

	for(var i = 0;i < 8; i++) {
		bigTail[i] = new Image();
		bigTail[i].src = "./img/bigTail" + i + ".png";
	}

	for(var i = 0;i < 2; i++) {
		bigEye[i] = new Image();
		bigEye[i].src = "./img/bigEye" + i + ".png";
	}

	data = new dataObj();

	for (var i = 0;i < 8; i++) {
		bigBodyBlue[i] = new Image();
		bigBodyOra[i] = new Image();

		bigBodyOra[i].src = "./img/bigSwim" + i + ".png";
		bigBodyBlue[i].src = "./img/bigSwimBlue" + i + ".png";

	}

	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";

	wave = new waveObj();
	wave.init();

	for(var i = 0;i < 7; i++) {
		dustPic[i] = new Image();
		dustPic[i].src = "./img/dust" + i + ".png";
	}
	dust = new dustObj();
	dust.init();

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
	momBabyCollision();
	
	data.draw();
	wave.draw();
	dust.draw();
}


function onMouseMove(e) {
	if (!data.gameOver) {

		if (e.offSetX || e.layerX) {
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		}
	}
}