<?php
	require_once "./config.php"; 
	
	@session_start();
	@$_idx =  $_POST['idx'] ; 

	@$_WHERECLAOUSE = "";
	 
	// @$state = @$_POST['cate'];
	// @$cate = @$_POST['srItem']  ; 
	// @$srWord = $_POST['srWord']; 

	$result_array = array(); 
	$TABLE =" news ";  
 
 
	if($_idx !="")
		$_WHERECLAOUSE = " WHERE  idx = '".@$_idx."' ";    
	
 
	$query = "SELECT  *  FROM $TABLE $_WHERECLAOUSE order by recDate desc ";//LIMIT $start_row, $limit_row";
 
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