<?php 

header("Content-Type: text/html; charset=UTF-8");
//config
require_once $_SERVER['DOCUMENT_ROOT']."/lib/orientalStakingDB.php"; 

	error_reporting(E_ALL); 
	ini_set("display_errors", 1); 

	date_default_timezone_set('Asia/Seoul'); 
	$_recDate =date("Y-m-d H:i:s"); 

?>