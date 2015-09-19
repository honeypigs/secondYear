var c = 0;

(function globalFunction() {
	var c = 0;
	c++;
	console.log(++c);
	console.log(c);
	c += 1;

	(function localFunction() {
			c ++;
			console.log(c);
	})();
})();

console.log(c++);

