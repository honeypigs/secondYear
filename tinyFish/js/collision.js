//判断距离
function momFruitCollision() {
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i] && fruit.l[i] >= 15) {
			var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if (l < 400) {
				fruit.dead(i);
			}
		}
	}
}