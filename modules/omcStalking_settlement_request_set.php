<?php
 
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/DB.php"; 
		 
	date_default_timezone_set('Asia/Seoul'); 
	$_recDate =date("Y-m-d H:i:s"); 
	$msg ="";
	$params = array(); 
 
	$table = " omcStalking_settlement_request ";
	
	$UserID  = @$_POST['UserID']   ;
    $pIdx  = @$_POST['pIdx']   ;
    
	
    if($UserID !="" || $pIdx !=""  )
    { 
        $params['pIdx']     = @$pIdx;
		$params['UserID']   = @$UserID;
		$params['amount']   = @$_POST['amount'];
		$params['state']	= @$_POST['state']  ; 
        $params['remarks']  = @$_POST['remarks'];
        $params['recDate']  = @$_recDate; 
 
		$add_query = $database->insert( $table, $params );

		if( $add_query )
		{
		//  echo '<p>Successfully inserted &quot;'. $params['subject']. '&quot; into the database.</p>';
			$lastid = $database->lastid();   
		}
	
		$msg  = $lastid;

 	 
 	 }else{
 	  	$msg  = " params error " ;
 	  }

	//echo '{ "message"  :  "' .$add_query.'_'.$lastid .'" }';   
	echo $msg;   
 
 ?>