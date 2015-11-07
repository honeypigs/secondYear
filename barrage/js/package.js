var packageData = function (){
	var item = document.createElement("div");
	item.setAttribute("class","item");
	item.innerHTML = barrage.barrageList.movingList[0].content;
	item.style.css = barrage.barrageList.movingList[0].color;
	barrage.window.appendChild(item);
	barrage.barrageList.movingList.shift();
	barrage.barrageList.movingList.push(barrage.barrageList.waitList[0]);
	barrage.barrageList.waitList.shift();
};