<?php
	require_once "./config.php"; 
	
	@session_start();

	@$WHERE_CLAUSE = ""; 
	@$_userID = $_POST['userID'] ;  
	
	$result_array = array(); 
	$TABLE =" omcStaking ";   
 

 
	$query = " 	SELECT * 	FROM omcStaking WHERE userID = '$_userID' ";
 
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