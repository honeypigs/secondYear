function start () {
	console.log("Request handler 'start' was called");

	function sleep(millisSeconds){
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + millisSeconds);
}

	sleep(1000);
	return "hello Start";
}

function upload() {
	console.log("Request handler 'upload' was called");
	return "hello Upload";
}

exports.start = start;
exports.upload = upload;