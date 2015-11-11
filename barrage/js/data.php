<?php
	header("Content-type:text/html;charset = utf-8");
	$isAjax = $_GET['isAjax'];
	if (!$isAjax) {
		return false;
	} 
	try {
			$db_host = 'localhost';
			$db_name = 'test';
			$db_user = 'root';
			$db_password = '';
			$obj = array();
			$dsn = "mysql:host=$db_host;dbname=$db_name";  
			$pdo = new PDO($dsn, $db_user, $db_password);
			$sql = "select * from barrage";
			$res = $pdo -> query($sql);
			foreach ($res as $row) {
				array_push($obj, $row);
			}
			$obj = json_encode($obj);
		}catch(PDOeException $e) {
			echo $e -> getMessage();
		}
	echo $obj;	
?>

