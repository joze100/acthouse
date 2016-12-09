<?php
	require 'utils.php';
	$id = $_GET['id'];

	$sql = "update posts set likes = likes + 1 where id = ${id}";
	get_db()->query($sql);

	$url = "show.php?id=${id}";
	header("Location: ${url}");
	exit();

?>