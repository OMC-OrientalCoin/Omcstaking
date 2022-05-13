<?php
	require_once "./config.php"; 
	
	@session_start(); 

	@$_confirmManager = @$_SESSION['userID'] ?  @$_SESSION['userID'] :"tester";
  
	$params = array(); 
	$update_where = array(); 


	$table ="omcStaking_income";   

	@$recDate = gmdate("Y-m-d H:i:s", time());  
	 
	 $params['confirmDate']    = @$recDate;
	 $params['confirmManager'] = @$_confirmManager;
	 $params['confirmState']   = 1;

	 $update_where['idx']   = @$_POST['idx'];
	 $update_where['userID']   = $_POST['userID'] ; 
 
	$result = $database->update( $table , $params, $update_where , 1 );

// $database->disconnect();
	//echo @$_GET['callback']."('".json_encode($result_array)."')";
	echo $result;//@$_GET['callback'].json_encode($result_array);
	 // /$_GET['callback'].*/
?> 