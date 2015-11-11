function Judgement() {
	var normal = $('.normal');
	var topList = $('.top');
	var bottomList = $('.bottom');
	for (var i = 0; i < normal.length; i++) {
		if ((normal[i].offsetLeft + normal[i].offsetWidth) <= 0) {
			normal[i].setAttribute("class","remove");
			$(".remove").remove();
		}
	}
	if (topList.length !== 0) {
		for (i = 0; i < topList.length; i++) {
			if (parseInt(topList[i].getAttribute("flag")) === 20) {
				topList[i].setAttribute("class","remove");
				$(".remove").remove();
			} else {
				topList[i].setAttribute("flag",parseInt(topList[i].getAttribute("flag")) + 1);
			}
		}
	}
	if (bottomList.length !== 0) {
		for (i = 0; i < bottomList.length; i++) {
			if (parseInt(bottomList[i].getAttribute("flag")) === 20) {
				bottomList[i].setAttribute("class","remove");
				$(".remove").remove();
			} else {
				bottomList[i].setAttribute("flag",parseInt(bottomList[i].getAttribute("flag")) + 1);
			}
		}
	}
}