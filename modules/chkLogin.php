<?php

	@session_start(); 
	
	require_once "./config.php"; 
 
	error_reporting(E_ALL); 
	ini_set("display_errors", 1);
	
 	$TABLE =" member ";
	$state = 0 ;
	//$_USERKIND = $_POST['userKind'] ;
	$_USERID = @$_POST['userID'];
	$_USERPW = @$_POST['userPW'];
 /**
  * Run check to see if value exists, returns true or false
  *
  * Example Usage:
  * $check_user = array(userID
  * 'user_email' => 'someuser@gmail.com',
  * 'user_id' => 48
  * );
  * $exists = $database->exists( 'your_table', 'user_id', $check_user );
  */

 

	$check_user['userID'] = @$_USERID;
	$check_user['userPW'] = @$_USERPW;

	$exists = $database->exists( $TABLE, 'userID', $check_user);
 
	if($exists)
	{
		
	 	//$query = " SELECT userID, userLevel, userName,userEmail, userNation, userPhone  FROM $TABLE WHERE userID ='".trim($_USERID)."' AND userPW ='".trim($_USERPW)."' ";
		 $query = " SELECT userID, userLevel, userName,userEmail, userPhone, userPhone, StakingState  FROM $TABLE WHERE userID ='".trim($_USERID)."' AND userPW ='".trim($_USERPW)."' ";
	 	list( $userID,$userLevel ,$userName,$userEmail, $userPhone, $StakingState) = $database->get_row($query);
	 	
		if($userID != "")
		{
			$_SESSION['userID']		= $userID;   
			$_SESSION['userLevel']	= $userLevel; 	 
			$_SESSION['userPhone']	= $userPhone;  
			$_SESSION['userName']	= $userName;
			$_SESSION['userEmail']	= $userEmail;
			$_SESSION['StakingState']	= $StakingState;

			$state = 1 ;
		}
		else
			$state = 0;

 	}else{
 			$state = 0;
 	}


	echo $state;//({"messabe"; $state});
?>