<?php
 
 require_once "./config.php"; 
		  
 $_recDate =date("Y-m-d H:i:s"); 
	$msg ="";
	$params = array(); 
 
	$table = " omcStaking_reservation "; 
	$userID  = @$_POST['userID']   ; 
	
    if($userID !="" )
    {
	
		
 
		$params['UserID']   	    = @$userID;
		$params['deposit']	        = @$_POST['deposit']
		$params['account']	        = 0;
		$params['deposit_period']	= @$_POST['deposit_period']  ;
        $params['deposit_date']	    = @$_POST['deposit_date'];
        $params['settlement_date']  = @$_recDate;//@$_POST['settlement_date'];
        $params['remarks']	        = "";// @$_POST['remarks'];
        $params['recDate']	        = @$_recDate;
        $params['manager']	        = "";//@$_POST['manager']; 
        
 

 
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