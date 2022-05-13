<?php
	require_once "./config.php"; 
	
	@session_start();
	@$userID = $_SESSION['userID'] ? $_POST['userID'] : "tomas" ; 

	@$WHERE_CLAUSE = "";
	 
	// @$state = @$_POST['cate'];
	// @$cate = @$_POST['srItem']  ; 
	// @$srWord = $_POST['srWord']; 

	$result_array = array(); 
	$TABLE ="omcStaking_income";  
 
	@$regDate = gmdate("Y-m-d H:i:s", time());  

	$WHERE_CLAUSE = " WHERE  userID = '".@$userID."' ";    
	
 
	$query = "SELECT  *  FROM $TABLE $WHERE_CLAUSE order by recDate desc ";//LIMIT $start_row, $limit_row";
 
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