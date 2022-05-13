<?php

	@session_start(); 
	
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_DB.php";  
 
	error_reporting(E_ALL); 
	ini_set("display_errors", 1);
	
 	$TABLE =" member ";
	$state = 0 ;
	//$_USERKIND = $_POST['userKind'] ;
	$_USERID = @$_POST['userID'];
	$_USERPW = @$_POST['userPassword'];
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
		
	 	$query = " SELECT userID,userName,userEmail, userNation, userPhone  FROM $TABLE WHERE userID ='".trim($_USERID)."' AND userPW ='".trim($_USERPW)."' ";
	 	list( $userID,$userName,$userEmail, $userNation, $userPhone) = $database->get_row($query);
	 	
		if($userID != "")
		{
			$_SESSION['userID']		= $userID;
			$_SESSION['userNation']	= $userNation;
			$_SESSION['userPhone']	= $userPhone;  
			$_SESSION['userName']	= $userName;
			$_SESSION['userEmail']	= $userEmail;

			$state = 1 ;
		}
		else
			$state = 0;

 	}else{
 			$state = 0;
 	}


	echo $state;//({"messabe"; $state});
?>