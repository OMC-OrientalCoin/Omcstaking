<?php
	require_once "./config.php"; 
	
	@session_start(); 

	@$_confirmManager = @$_SESSION['userID'] ?  @$_SESSION['userID'] :"tester";
  
	$params = array(); 
	$update_where = array(); 

	@$recDate = gmdate("Y-m-d H:i:s", time()); 
	$table ="omcStaking_income";   
 
	 
	$params['manager']   	= $_confirmManager;
	$params['deleteDate']   = @$recDate;
	$params['useState']   	= 0;

	 $update_where['idx']   = @$_POST['idx'];
	//$update_where['userID']   = $_POST['userID'] ; 
 
	$result = $database->update( $table , $params, $update_where , 1 );

// $database->disconnect();
	//echo @$_GET['callback']."('".json_encode($result_array)."')";
	echo $result;//@$_GET['callback'].json_encode($result_array);
	 // /$_GET['callback'].*/
?> 