var getData = function (){
// 	if (barrage.barrageList.waitList.length === 0) {
// 		$ajax ({
// 			type: "GET",
// 			url: "",
// 			dataType: "script",
// 			success : function () {
// 				//...barrage item
// 				}
// 		});
// 	}
	var color = ['black','red','blue'];

	for (var i = 0; i < 3; i++) {
		barrage.barrageItem = {
			'content' : 'hehehehhe',
			'location' : 'top',
			'color' : color[i],
			'size' : 16
		};
		barrage.barrageList.waitList.push(barrage.barrageItem);
		barrage.barrageList.movingList.push(barrage.barrageItem);

	}
	return barrage;
};


