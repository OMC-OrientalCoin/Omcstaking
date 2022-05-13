<?php
 
 	header('Content-Type: application/json; charset=utf-8'); 
 	require_once "./config.php"; 
		 
	date_default_timezone_set('Asia/Seoul'); 
	$_recDate =date("Y-m-d H:i:s"); 
	$msg ="";
	$params = array(); 
 
	$table = " news ";
	
		
		$_subject = @$_POST['subject'];   
		$_writer  = @$_POST['writer']  ? @$_POST['writer'] : "manager" ; 
 
 if($_subject !="")
 { 
			$params['kind']   	= @$newUserID;
			$params['subject']	= @$_POST['subject'];
			$params['content']	= @$_userPhone;
			$params['tag']		= @$_POST['tag'];
			$params['writer']	= $_write; 
			$params['useState']	= 1; //$_write; 
			$params['recDate']  = @$_recDate; 

 
			$add_query = $database->insert( $table, $params );

			if($add_query)
			{ 
				$lastid = $database->lastid();    
				 		
			}//add_query
	
		$msg  = $lastid; 
 	 
 	}else{
 	  	$msg  = " params error " ;
	}

	//echo '{ "message"  :  "' .$add_query.'_'.$lastid .'" }';   
	echo $msg;   

 
 
 ?>