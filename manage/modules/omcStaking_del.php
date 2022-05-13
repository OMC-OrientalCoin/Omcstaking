<?php
	@session_start(); 

	require_once "./config.php";  

	@$_confirmManager = @$_SESSION['userID'];
  
 
	$where = array(); 
 
	$table =" omcStaking ";    

	 $where['staking_code']   = @$_POST['staking_code'];
 
 
	$result = $database->delete( $table , $where,  1 );

// $database->disconnect();
	//echo @$_GET['callback']."('".json_encode($result_array)."')";
	echo $result;//@$_GET['callback'].json_encode($result_array);
	 // /$_GET['callback'].*/
?>   