<?php
	$db = new PDO('mysql:host=localhost;dbname=acthouse;charset=utf8mb4','root', '');
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::
		ERRMODE_EXCEPTION);

	$id = $_GET['id'];
	$sql = "delete from students where id = ?";
	$stmt = $db->prepare($sql);
	$success = $stmt->execute(array($id));
	header("Location: index.php");
	exit();
	?>
