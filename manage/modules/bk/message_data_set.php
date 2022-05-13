<?php
 
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/DB.php"; 
		 
	date_default_timezone_set('Asia/Seoul'); 
	$recDate =date("Y-m-d H:i:s"); 
	$msg ="";
	$params = array(); 
 
	$table = "rawdata";
	
	$sender_ip  = @$_POST['sender_ip']  ? @$_POST['sender_ip']  : @$_GET['sender_ip'] ;
	$sender_info = @$_POST['sender_info'] ? @$_POST['sender_info'] : @$_GET['sender_info'] ; 
	
    if($sender_ip !="" && $sender_info  !="")
    {
	
 
		$params['sender_ip']	= @$sender_ip;
		$params['sender_info']	= @$sender_info;
		$params['msg_kind']	= @$msg_kind;
		$params['receive_data']	= @$receive_data; 
		$params['res_state']	= 0; 
		$params['recDate']	= @$recDate;   
 
		$add_query = $database->insert( $table, $params );

		if( $add_query )
		{
		 
			$lastid = $database->lastid();   
		}
	
		$msg  = $lastid;

 	 
 	 }else{
 	  	$msg  = " params error " ;
 	  }

	//echo '{ "message"  :  "' .$add_query.'_'.$lastid .'" }';   
	echo $msg;   
 
 ?>