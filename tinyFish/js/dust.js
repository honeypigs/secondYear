var dustObj = function() {
	this.x = [];
	this.y = [];
	this.amp =[];
	this.ID = [];
	this.angle ;	
}

dustObj.prototype.num = 30;
dustObj.prototype.init = function() {
	for(var i = 0; i < this.num; i++) {
		this.x[i] = Math.random() * canvasWidth;
		this.y[i] = Math.random() * canvasHight;
		this.amp[i] = 20 + Math.random() * 10 ;
		this.ID[i] = Math.floor(Math.random() * 7);
		this.angle = 0; 
	}
};

dustObj.prototype.draw = function() {
	this.angle += deltaTime * 0.0005;
	var l = Math.sin(this.angle);
	for (var i = 0; i < this.num; i++) {
		var no = this.ID[i];
		ctx1.drawImage(dustPic[no],this.x[i] + this.amp[i] * l,this.y[i])
	}
};