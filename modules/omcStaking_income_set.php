<?php
 
 require_once "./config.php"; 
		 
	date_default_timezone_set('Asia/Seoul'); 
	$_recDate =date("Y-m-d H:i:s"); 
	$_nullDate =date("0000-00-00 00:00:00"); 
 
	$params = array(); 
	$msg 	= "";
	$table = " omcStaking_income ";
	
	$UserID   = @$_POST['senderID'];
	$fromAddr = @$_POST['fromAddr'];
	$toAddr	  = @$_POST['toAddr'];
 	$remittance_amount = @$_POST['sendQty']; 
	
    if($UserID !="" && $remittance_amount !="" )
    { 

		$params['UserID']   	    = @$UserID;
		$params['toAddr']			= @$toAddr;  
		$params['fromAddr']			= @$fromAddr;  
		//$params['transaction']		= ""; //송금액 
		
		$params['remittance_amount']= @$remittance_amount; //송금액 
		$params['confirmState']	    = 0 ;
		//$params['confirmManager']   = 'NULL';//관리자;
		$params['confirmDate']      = @$_recDate;      
      //  $params['remarks']	        =  'NULL';//@$_POST['remarks']; 
		$params['useState']	        = 1;//@$_POST['remarks']; 
		//$params['manager']   		= 'NULL';
		//$params['deleteDate']   	= ""; //  
 

        $params['recDate']	        = @$_recDate; 
         
 
		$add_query = $database->insert( $table, $params );

		if( $add_query )
		{

			 //트랜잭션 확인 후 리저베이션 데이터를 스테킹으로 복사
		//  echo '<p>Successfully inserted &quot;'. $params['subject']. '&quot; into the database.</p>';mun620909!! 
			$msg = $database->lastid();   
		}
	
	 

 	 
 	 }else{
 	  	$msg  = 0;
 	  }

	//echo '{ "message"  :  "' .$add_query.'_'.$lastid .'" }';   
	echo $msg;   
 
 ?>