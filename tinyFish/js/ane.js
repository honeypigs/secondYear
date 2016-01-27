var aneObj = function() {
	this.x = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.angle = 0;
};

aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = i * 16 + Math.random() * 20;
		this.headx[i] = this.x[i];
		this.heady[i] = canvasHight - 180 - Math.random() * 50;  
		this.amp[i] = Math.random() * 50 + 50;
	}
};
aneObj.prototype.draw = function() {
	this.angle += deltaTime * 0.0005;
	var l = Math.sin(this.angle);
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for (var i = 0; i < this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canvasHight);
		this.headx[i] = this.x[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.x[i],canvasHight - 100,this.headx[i],this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
};