<?php
	require_once "./config.php";  
	
 	$TABLE =" member ";
 
	 $arrReturn = array();   
	$_userID = @$_POST['userID'];
	$_userPhone = @$_POST['userPhone'] ;
 
 
  	@$_WHERE_CLAUSE = null; 

	$check_user['userPhone'] = @$_userPhone; 

	$exists = $database->exists( $TABLE, 'userPhone', $check_user);
 
	if($exists)
	{
		
		if(!$_userID){
			$_WHERE_CLAUSE = "WHERE userPhone ='".trim($_userPhone)."' ";
		}else{
			$_WHERE_CLAUSE = "WHERE userID ='".trim($_userID)."' AND userPhone ='".trim($_userPhone)."' ";
		}
		
	 	$query = " SELECT userID, userPW , userEmail FROM $TABLE $_WHERE_CLAUSE ";
	 	list( $userID, $userPW ,$userEmail ) = $database->get_row($query);
	 	
		if($userID != "")
		{
			$_arrReturn['userID']	 = $userID;
			$_arrReturn['userPW']	 = $userPW;
			$_arrReturn['userEmail'] = $userEmail;  
		 
			$_arrReturn['retValue'] = "OK";
		}
		else
			$_arrReturn['retValue'] = "ND";

 	}else{
		$_arrReturn['retValue'] = "NE";
 	}


	//echo  @$_GET['callback'].'(' .json_encode($_arrReturn).')'; 
	echo  @$_GET['callback'].json_encode($_arrReturn); 

?>