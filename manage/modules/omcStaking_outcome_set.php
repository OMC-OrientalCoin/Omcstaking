<?php
 
 require_once "./config.php"; 
 
	$_recDate =date("Y-m-d H:i:s"); 
 
 
	$params = array(); 
	$msg = '';
	$table = " omcStaking_outcome ";
	
	$UserID  = @$_POST['senderID']   ;
 	$remittance_amount = @$_POST['sendQty'];

	
    if($UserID !="" )
    { 

		$params['UserID']   	    = @$UserID;
		$params['omcStaking_idx']	= @$_POST['omcStaking_idx']; 
		$params['amount']	= @$_POST['amount']; 
		$params['confirmState']	    = 0 ;
		$params['confirmManager']   = null;//관리자;
		$params['confirmDate']      = @$_recDate;      
        $params['remarks']	        = null;//@$_POST['remarks']; 
        
        $params['recDate']	        = @$_recDate; 
         
 
		$add_query = $database->insert( $table, $params );

		if( $add_query )
		{
		//  echo '<p>Successfully inserted &quot;'. $params['subject']. '&quot; into the database.</p>';
			$msg = $database->lastid();   
		}
	
	 

 	 
 	 }else{
 	  	$msg  = " params error " ;
 	  }

	//echo '{ "message"  :  "' .$add_query.'_'.$lastid .'" }';   
	echo $msg;   
 
 ?>