var barrageBox = React.createClass({
	render: function () {
		return (
			<div className = "barrageBox">
				hello,world!
			</div>
		);
	}
});

React.render(
	<barrageBox />,
	document.querySelector("video");
);