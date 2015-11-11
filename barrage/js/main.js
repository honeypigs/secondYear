require.config({
 urlArgs: "bust=" + (new Date()).getTime()
});

require(["js/animate.js"],function(){
	require(["js/judgement.js"],function(){
		setInterval(function (){
			loop();
		},100);
	});
});


var barrage = {
	'window' : document.getElementById('curtain'),
	'barrageList' : {
		'waitList' : [],
		'movingList' : [],
		'topWaitList' : [],
		'topMovingList' : [],
		'bottomWaitList' : [],
		'bottomMovingList' : []
	}
};



var getData = function (){
	if (barrage.barrageList.waitList.length === 0) {
		var url = 'js/data.php?isAjax=1';
		var data ={};
		$.get(url,data,function(res){
			res = JSON.parse(res);
						console.log(res);
		for (var i = 0; i < res.length; i++) {
			if (res[i].location === 'normal') {
				barrage.barrageList.waitList.push(res[i]);
			} else if (res[i].location === 'top') {
				barrage.barrageList.topWaitList.push(res[i]);
			} else if (res[i].location === 'bottom') {
				barrage.barrageList.bottomWaitList.push(res[i]);
			}
		}
		return barrage;
		});
	}
};

// getData();

function loop(){
	Judgement();
	if (barrage.barrageList.waitList.length === 0 || barrage.barrageList.topWaitList.length === 0 || barrage.barrageList.bottomWaitList.length === 0) {
		getData();
	}
	if (barrage.barrageList.waitList.length !== 0) {
		NORMAL();
	}
	if (barrage.barrageList.topWaitList.length !== 0) {
		TOP();
	}
	if (barrage.barrageList.bottomWaitList.length !== 0) {
		BOTTOM();
	}
}










