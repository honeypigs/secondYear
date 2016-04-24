var Bg = function () {
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.galleryNum = 20;
	this.gallerys = [];
	this.gallerysEmpty = [];
};

Bg.prototype.init = function () {
	this.x = background.offsetLeft;
	this.y = background.offsetTop;
	this.width = background.offsetWidth;
	this.height = background.offsetHeight;
	for (var i = 0; i < this.galleryNum ; i++) {
		this.gallerys[i] = i * (this.height / this.galleryNum);
		this.gallerysEmpty[i] = true;
	}
};