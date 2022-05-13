<?php 
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/DB.php";  	 s

	$retValue ="";
	$recDate =date("Y-m-d H:i:s"); 
	$update = array(); 
	$update_where = array(); 
	$table = "rawdata";  
	
 		$update_where['idx']	= @$_POST['idx'];

 		$update['response_recDate']		= @$recDate;
 		$update['response_data']		= @$_POST['response_data']; 

		$retValue = $database->update( $table, $update, $update_where, 1 );  
 

    	 echo $retValue  ; 
?>