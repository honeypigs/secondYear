var babyObj = function() {
	this.x;
	this.y;
	this.angle = 0;
	this.babyBody = new Image();

	this.babyTailTimer = 0;
	this.babyTailCount = 0;


	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;


	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
};

babyObj.prototype.init = function() {
	this.x = canvasWidth * 0.5 - 50;
	this.y = canvasHight * 0.5 + 50;
	this.babyBody.src = "./img/babyFade0.png";

};

babyObj.prototype.draw = function() {
	//lerp x,y
	this.x = lerpDistance(mom.x,this.x,0.99);
	this.y = lerpDistance(mom.y,this.y,0.99);


	//delta angle 

	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI; 

	//lerp angle
	this.angle = lerpAngle(beta,this.angle,0.8);

	//baby tail count
	this.babyTailTimer += deltaTime;
	if (this.babyTailTimer > 50) {
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}

	//baby eye count
	this.babyEyeTimer += deltaTime;
	if (this.babyEyeTimer > this.babyEyeInterval) {
		this.babyEyeCount = (this.babyEyeCount + 1 ) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;

		if (this.babyEyeCount == 0	) {
			this.babyEyeInterval = Math.random() * 1500 + 2000;
		} else {
			this.babyEyeInterval = 200;
		}
	}

	//baby body 
	this.babyBodyTimer += deltaTime;
	if (this.babyBodyTimer > 350) {
		this.babyBodyCount = this.babyBodyCount + 1;
		this.babyBodyTimer %= 350;	 
		if (this.babyBodyCount > 19) {
			this.babyBodyCount = 19;
			//game over 
			data.gameOver = true;
		}
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(babyTail[this.babyTailCount],-babyTail[this.babyTailCount].width * 0.5 + 26,-babyTail[this.babyTailCount].height * 0.5);
	ctx1.drawImage(babyBody[this.babyBodyCount],-babyBody[this.babyBodyCount].width * 0.5,-babyBody[this.babyBodyCount].height * 0.5);
	ctx1.drawImage(babyEye[this.babyEyeCount],-babyEye[this.babyEyeCount].width * 0.5,-babyEye[this.babyEyeCount].height * 0.5);


	ctx1.restore();
};
