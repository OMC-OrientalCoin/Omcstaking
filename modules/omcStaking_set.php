<?php
 
 require_once "./config.php"; 
		  
 	$_recDate =date("Y-m-d H:i:s"); 
	$_msg ="";
	$lastId = 0;
	$_params = array(); 
	$_where = array(); 	
	
	$_table = " omcStaking "; 
	$_table_income = " omcStaking_income "; 
	$_userID  = @$_POST['userID']; 
	
    if($_userID !="" )
    {
		$_balance  = @$_POST['balance'];  
		$_deposit  = @$_POST['deposit']; 
		
				//$params['account']	        = 0;//@$_POST['account'];
		$_params['staking_code']   	= time();
		$_params['userID']   	    = $_userID;
		$_params['balance']	        = $_balance;   
		$_params['deposit']	        = @$_deposit; 
		$_params['deposit_period']	= @$_POST['deposit_period']  ;
        $_params['deposit_date']	    = @$_POST['deposit_date'];
        $_params['settlement_date']  = @$_recDate;//@$_POST['settlement_date'];
        $_params['remarks']	        = "";// @$_POST['remarks'];
        $_params['recDate']	        = @$_recDate;
        $_params['manager']	        = "";//@$_POST['manager']; 
          
		$_addQuery = $database->insert( $_table, $_params );

		if( $_addQuery )
		{
			//echo '<p>Successfully inserted &quot;'. $params['subject']. '&quot; into the database.</p>';
			$lastId = $database->lastid();   


			$_remittance_amount  = @$_balance - $_deposit;

			if($_remittance_amount< 1)
				$_remittance_amount = 0;

			$_WHERE_CLAUSE['remittance_amount'] = $_remittance_amount;
			$_WHERE_CLAUSE['stakingOnDate'] 	= @$_recDate;;
			$_WHERE['userID'] = $_userID; 

			$add_query = $database->update( $_table_income , $_WHERE_CLAUSE, $_WHERE , 1 ); 


		}
	
		$msg  = $lastId;

 	 
 	 }else{
 	  	$msg  = " params error " ;
 	  }

	//echo '{ "message"  :  "' .$add_query.'_'.$lastid .'" }';   
	echo $msg;   
 
 ?>