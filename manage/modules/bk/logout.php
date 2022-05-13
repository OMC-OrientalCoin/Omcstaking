<?php

	@session_start();  
  header('Content-Type: text/html; charset=utf-8');
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_GBI_DB.php"; 	 
		// Session 삭제  
	$recDate = gmdate("Y-m-d H:i:s", time()); 

	unset($_SESSION['doctorID']); 
	unset($_SESSION['doctorName']); 

	session_destroy(); 
 
?>
 <meta http-equiv='refresh' content='0;url=/gbiweb/index.html'>

 