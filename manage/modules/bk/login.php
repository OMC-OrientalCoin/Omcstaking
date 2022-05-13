<?php

@session_start();
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_GBI_DB.php"; 	 
date_default_timezone_set('Asia/Seoul'); 
$recDate =date("Y-m-d H:i:s"); 
/*
 	if(!isset($_POST['userID'])){
 		echo "userID empty";
 		exit;

 	}

 	if(!isset($_POST['userPassword'])){
 		echo "userPassword data";
 		exit;

 	}
*/
 	$TABLE =" member_doctor ";
	$state = 0 ;
	//$_USERKIND = $_POST['userKind'] ;
	$_USERID = @$_POST['uID'] ;
	$_USERPW = @$_POST['uPW'] ;
 /**
  * Run check to see if value exists, returns true or false
  *
  * Example Usage:
  * $check_user = array(
  * 'user_email' => 'someuser@gmail.com',
  * 'user_id' => 48
  * );
  * $exists = $database->exists( 'your_table', 'user_id', $check_user );
  */
	$check_user['doctorID'] = @$_USERID;
	$check_user['doctorPW'] = @$_USERPW;

	$exists = $database->exists( $TABLE, 'doctorID', $check_user);

	if($exists)
	{
		
	 	$query = " SELECT doctorID, level, Name, usedState FROM $TABLE WHERE doctorID ='".trim($_USERID)."' AND doctorPW ='".trim($_USERPW)."' ";
	 	list( $doctorID, $level, $Name, $usedState ) = $database->get_row($query);
		if($doctorID != "")
		{
			$_SESSION['doctorID']	 = $doctorID;
			$_SESSION['doctorLEVEL'] = $level;
			$_SESSION['doctorName']	 = $Name; 
			$_SESSION['userSTATE']	 = $usedState;
			
			$state = 1 ;
		}
		else
			$state = 0;

 	}else{
 			$state = 0;
 	}


	echo $state;//({"messabe"; $state});
?>