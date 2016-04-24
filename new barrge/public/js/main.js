var data;
var background;
var len;

var bg;
var prepareBarrages = [];
var moveBarrages = [];
var deletBarrages = [];

var nowTime;
var lastTime;


function getData() {
	$.ajax({
		type : "GET",
		url : "http://121.42.185.52:1234/home/barrage/getbarrage",
		dataType : "json",
		success : function(result) {
			data = result;
		}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																		
	})
}


function init() {
	getData();
	len = data.length < 20 ? data.length : 20
	background = document.querySelector("#bg");
	bg = new Bg();
	bg.init();
	prepare();
}


window.onload = init();



function gameloop() {
	window.requestAnimationFrame(gameloop);
	if (prepareBarrages.length == 0) {
		getData();
		prepare();
	}
	if (moveBarrages.length == 0 ) {
		for(var i = 0; i < len; i++) {
			moveBarrages.push(prepareBarrages.shift()); 
		}
		move();
	}
	setInterval(function() {
		moveBarrages = [];
	},2000);
	if (deletBarrages.length != 0) {
		for (var i = 0; i < deletBarrages.length; i++) {
			if (deletBarrages[i].offsetLeft == (-deletBarrages[i].offsetWidth)) {
				background.removeChild(deletBarrages[i]);
				deletBarrages.shift();
			}
		};
	}
}

gameloop();







































































