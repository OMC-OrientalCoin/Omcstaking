<?php
	require_once "./config.php"; 
	
	@session_start();

	@$WHERE_CLAUSE = "";
	
	
	@$_userID = $_SESSION['userID'] ?  $_SESSION['userID'] :  $_POST['userID']  ; 
 	@$_idx = @$_POST['idx'];
	// @$cate = @$_POST['srItem']  ; 
	// @$srWord = $_POST['srWord']; 

	$result_array = array(); 
	$TABLE =" omcStaking ";   

	//$WHERE_CLAUSE = " WHERE  userID = '".@$_userID."' AND idx = '".@$_idx."' ";    
	$WHERE_CLAUSE = " WHERE  userID = '".@$_userID."' ";    
	
 
	$query = "SELECT  *  FROM $TABLE $WHERE_CLAUSE order by idx desc ";//LIMIT $start_row, $limit_row";
 
	$results = $database->get_results( $query );

	foreach( $results as $row )
	{
		$result_array[] = $row;
	}  

	//$database->disconnect();
	//echo @$_GET['callback']."('".json_encode($result_array)."')";
	echo @$_GET['callback'].json_encode($result_array);
	 // /$_GET['callback'].*/
?> 