
var NORMAL = function (){
	var item = document.createElement('div');
	barrage.barrageList.movingList.push(barrage.barrageList.waitList[0]);
	barrage.barrageList.waitList.shift();
	item.setAttribute("class","item normal");
	item.innerHTML = barrage.barrageList.movingList[0].content;
	item.style.color = barrage.barrageList.movingList[0].color;
	item.style.left = barrage.window.offsetWidth + 'px';
	item.style.top = Math.floor(Math.random() * (barrage.window.clientHeight - barrage.barrageList.movingList[0].size)) + 'px';
	barrage.window.appendChild(item);
	item.style.left = -item.offsetWidth + 'px';
	barrage.barrageList.movingList.shift();
};

var TOP = function (){
	var item = document.createElement('div');
	barrage.barrageList.topMovingList.push(barrage.barrageList.topWaitList[0]);
	barrage.barrageList.topWaitList.shift();
	item.setAttribute("class","item top");
	item.setAttribute("flag",0);
	item.innerHTML = barrage.barrageList.topMovingList[0].content;
	item.style.color = barrage.barrageList.topMovingList[0].color;
	item.style.left = barrage.window.offsetWidth / 2 + 'px';
	item.style.top = barrage.barrageList.topMovingList[0].size * (barrage.barrageList.topMovingList[0].topid % 10) + 'px';
	barrage.window.appendChild(item);
	barrage.barrageList.topMovingList.shift();
};

var BOTTOM = function (){
	var item = document.createElement('div');
	barrage.barrageList.bottomMovingList.push(barrage.barrageList.bottomWaitList[0]);
	barrage.barrageList.bottomWaitList.shift();
	item.setAttribute("class","item bottom");
	item.setAttribute("flag",0);
	item.innerHTML = barrage.barrageList.bottomMovingList[0].content;
	item.style.color = barrage.barrageList.bottomMovingList[0].color;
	item.style.left = barrage.window.offsetWidth / 2  + 'px';
	item.style.bottom = barrage.barrageList.bottomMovingList[0].size * (barrage.barrageList.bottomMovingList[0].bottomid % 10)+ 'px';
	barrage.window.appendChild(item);
	barrage.barrageList.bottomMovingList.shift();
};
