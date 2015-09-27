<?php
	$pattern = '/hehe.+11111/U';
	$subject = 'I am hehe111111111111';

	$matches = array();
	preg_match($pattern, $subject, $matches);

	show($matches);



	function show($var = null) {
		if (empty($var)) {
			echo "null";
		} elseif (is_array($var) || is_object($var)) {
			echo '<pre>';
			print_r($var);
			echo '</pre>';
		} else {
			echo $var;
		}
	}
?>