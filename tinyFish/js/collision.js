//判断距离
function momFruitCollision() {
	if (!data.gameOver) {
		for (var i = 0; i < fruit.num; i++) {
			if (fruit.alive[i] && fruit.l[i] >= 15) {
				var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if (l < 400) {
					fruit.dead(i);
					data.fruitNum++;
					mom.bigBodyCount++;
					if (mom.bigBodyCount > 7) {
						mom.bigBodyCount = 7;
					}
					if (fruit.fruitType[i] == "blue") {
						data.double = 2;
					}
					wave.born(fruit.x[i],fruit.y[i],"white");
				}
			}
		}
	}
}

//mom baby collision 
function momBabyCollision() {
	if (!data.gameOver && data.fruitNum != 0) {
		var l = calLength2(mom.x,mom.y,baby.x,baby.y);
		if (l < 900) {
			baby.babyBodyCount = 0;
			data.addScore();
			mom.bigBodyCount = 0;
			wave.born(baby.x,baby.y,"orange");
		}

	}
}