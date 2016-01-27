var momObj = function() {
	this.x;
	this.y;
	this.angle = 0;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
};

momObj.prototype.init = function() {
	this.x = canvasWidth * 0.5;
	this.y = canvasHight * 0.5;
	this.bigEye.src = "./img/bigEye0.png";
	this.bigBody.src = "./img/bigSwim0.png";
	this.bigTail.src = "./img/bigTail0.png";

};

momObj.prototype.draw = function() {
	//lerp x,y
	this.x = lerpDistance(mx,this.x,0.99);
	this.y = lerpDistance(my,this.y,0.99);

	//delta angle 
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI; 

	//lerp angle
	this.angle = lerpAngle(beta,this.angle,0.6);

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigEye,-this.bigEye.width * 0.5,-this.bigEye.height * 0.5);
	ctx1.drawImage(this.bigBody,-this.bigBody.width * 0.5,-this.bigBody.height * 0.5);
	ctx1.drawImage(this.bigTail,-this.bigTail.width * 0.5 + 30,-this.bigTail.height * 0.5);


	ctx1.restore();
};