var momObj = function() {
	this.x;
	this.y;
	this.angle = 0;

	this.bigTailTimer = 0;
	this.bigTailCount = 0;


	this.bigEyeTimer = 0;
	this.bigEyeCount = 0;
	this.bigEyeInterval = 1000;

	this.bigBodyCount = 0;
};

momObj.prototype.init = function() {
	this.x = canvasWidth * 0.5;
	this.y = canvasHight * 0.5;

};

momObj.prototype.draw = function() {
	//lerp x,y
	this.x = lerpDistance(mx,this.x,0.988);
	this.y = lerpDistance(my,this.y,0.988);

	//delta angle 
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI; 

	//lerp angle
	this.angle = lerpAngle(beta,this.angle,0.6);


	//big tail count
	this.bigTailTimer += deltaTime;
	if (this.bigTailTimer > 50) {
		this.bigTailCount = (this.bigTailCount + 1) % 8;
		this.bigTailTimer %= 50;
	}

	//big eye count
	this.bigEyeTimer += deltaTime;
	if (this.bigEyeTimer > this.bigEyeInterval) {
		this.bigEyeCount = (this.bigEyeCount + 1 ) % 2;
		this.bigEyeTimer %= this.bigEyeInterval;

		if (this.bigEyeCount == 0	) {
			this.bigEyeInterval = Math.random() * 1500 + 2000;
		} else {
			this.bigEyeInterval = 200;
		}
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	if (data.double == 1) {	
		ctx1.drawImage(bigBodyOra[this.bigBodyCount],-bigBodyOra[this.bigBodyCount].width * 0.5,-bigBodyOra[this.bigBodyCount].height * 0.5);
	} else {
		ctx1.drawImage(bigBodyBlue[this.bigBodyCount],-bigBodyBlue[this.bigBodyCount].width * 0.5,-bigBodyBlue[this.bigBodyCount].height * 0.5);
	}
	ctx1.drawImage(bigEye[this.bigEyeCount],-bigEye[this.bigEyeCount].width * 0.5,-bigEye[this.bigEyeCount].height * 0.5);
	ctx1.drawImage(bigTail[this.bigTailCount],-bigTail[this.bigTailCount].width * 0.5 + 30,-bigTail[this.bigTailCount].height * 0.5);


	ctx1.restore();
};