<?php
	require_once "./config.php"; 
	
	@session_start();

	@$WHERE_CLAUSE = "";
	
	@$_userID = $_SESSION['userID'] ;
	
	$result_array = array(); 

	$query = " 	SELECT * 	FROM omcStaking_income WHERE userID = '$_userID' AND useState='1' ";
 
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