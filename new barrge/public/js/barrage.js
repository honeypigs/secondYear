var Barrage = function () {
	this.content = "";
	this.x = bg.x;
	this.y = bg.y;
	this.lenght = 0;
	this.color = "black";
	this.size = 16;

};


var prepare = function () {
	for (var i = 0;i < len; i++) {
		prepareBarrages[i] = new Barrage();
		prepareBarrages[i].content = data[i].content;
		prepareBarrages[i].color = data[i].color;
		prepareBarrages[i].size = data[i].size;
	}
	for (var i = 0; i < len ; i ++) {
		randomGallary(i);
	}
};

function randomGallary (i) {
	var rand = parseInt(Math.random() * 20);
	if (bg.gallerysEmpty[rand] == true) {
		var tag = document.createElement("span");
		tag.className= "barrage";
		tag.style.left = (bg.width) + "px";
		tag.style.top = (bg.gallerys[rand]) + "px";
		tag.style.color = prepareBarrages[i].color;
		tag.style.fontSize = (prepareBarrages[i].size) + "px";
		tag.setAttribute("from",rand);
		tag.innerHTML = prepareBarrages[i].content;
		background.appendChild(tag);
		bg.gallerysEmpty[rand] = false;
		prepareBarrages[i] = tag;
	} else {
		return randomGallary(i);
	}
}

function move () {
	var i = 0;
	var stop = setInterval(function() {
		deletBarrages.push(moveBarrages[i]);
		moveBarrages[i].style.left = (-moveBarrages[i].offsetWidth) + "px";
		var rand = moveBarrages[i].getAttribute("from");
		bg.gallerysEmpty[rand] = true;
		i++;
		if (i == len) {
			clearInterval(stop);
		}
	},50);
}