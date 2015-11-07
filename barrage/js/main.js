var barrage = {
	'window' : document.getElementById('curtain'),
	'barrageList' : {
		'waitList' : [],
		'movingList' : []
	},
	'barrageItem' : {
		'content' : '',
		'location' : '',
		'color' : '',
		'size' : 16,
		'holding' : 1500,
		'num' : 0
	}
};

var getData = function (){
// 	if (barrage.barrageList.waitList.length === 0) {
// 		$ajax ({
// 			type: "GET",
// 			url: "",
// 			dataType: "script",
// 			success : function () {
// 				//...barrage item
// 				}
// 		});
// 	}
	var color = ['black','red','blue'];

	for (var i = 0; i < 3; i++) {
		barrage.barrageItem = {
			'content' : 'hehehehhe',
			'location' : 'top',
			'color' : color[i],
			'size' : 16,
			'holding' : 1500,
			'num' : 0
		};
		barrage.barrageList.waitList.push(barrage.barrageItem);
		barrage.barrageList.movingList.push(barrage.barrageItem);

	}
	return barrage;
};



var normal = function (){
	var item = document.createElement('div');
	item.setAttribute("class","item");
	item.innerHTML = barrage.barrageList.movingList[0].content;
	item.style.color = barrage.barrageList.movingList[0].color;
	item.style.left = barrage.window.offsetWidth + 'px';
	item.style.top = Math.floor(Math.random() * barrage.window.clientHeight / 3) + 'px';
	barrage.window.appendChild(item);
	barrage.barrageList.movingList.shift();
	barrage.barrageList.movingList.push(barrage.barrageList.waitList[0]);
	barrage.barrageList.waitList.shift();
	item.style.left = -item.offsetWidth + 'px';
};

var TOP = function (){
	var item = document.createElement('div');
	item.setAttribute("class","item");
	item.innerHTML = barrage.barrageList.movingList[0].content;
	item.style.color = barrage.barrageList.movingList[0].color;
	item.style.left = barrage.window.offsetWidth / 2 + 'px';
	item.style.top = barrage.barrageItem.size * (barrage.barrageItem.num++ % 5) + 'px';
	barrage.window.appendChild(item);
	barrage.barrageList.movingList.shift();
	barrage.barrageList.movingList.push(barrage.barrageList.waitList[0]);
	barrage.barrageList.waitList.shift();
	console.log(barrage.barrageItem.num);
};

var BOTTOM = function (){
	var item = document.createElement('div');
	item.setAttribute("class","item");
	item.innerHTML = barrage.barrageList.movingList[0].content;
	item.style.color = barrage.barrageList.movingList[0].color;
	item.style.left = barrage.window.offsetWidth / 2 + 'px';
	item.style.bottom = barrage.barrageItem.size * (barrage.barrageItem.num++ % 5) + 'px';
	barrage.window.appendChild(item);
	barrage.barrageList.movingList.shift();
	barrage.barrageList.movingList.push(barrage.barrageList.waitList[0]);
	barrage.barrageList.waitList.shift();
	console.log(barrage.barrageItem.num);
};


function loop(){
	if (barrage.barrageList.waitList.length === 0) {
		getData();
	}else if(barrage.barrageList.waitList.length !== 0) {
		TOP();
	}
}

// setInterval(function (){
// 	loop();
// },barrage.barrageItem.holding);



