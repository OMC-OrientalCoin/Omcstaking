<?php
/********************************************************
 * 1. 기존회원 
 * 		1) 회원 조회 omcWallet
 * 		2) 회원값 대입  -> omcWallet 값 추출
 * 		3) 회원저장 : staking
 * 		4) 신규회원일경우
 * 			- 지갑생성 : omcapi
 * 			- 통합회원 : omcWallet 회원가입 
 * 						: 지갑목록에 지갑 등록
 * 		5) 회원정보 
 * 			- staking 지갑 정보 업데이트
 * 			- omc 회원정보 업데이트
 * 	
 ********************************************************/
 	header('Content-Type: application/json; charset=utf-8'); 
 	require_once "./config.php"; 
		 
	date_default_timezone_set('Asia/Seoul'); 
	$_recDate =date("Y-m-d H:i:s"); 
	$msg ="";
	$params = array(); 
 
	$table = " member ";
	

		$userID  = @$_POST['userID']  ;   
			
		if($userID !="" )
		{

			$check_user['userID'] = $userID ;
			$exists = $database->exists( $table, 'userID', $check_user );

			if($exists)
			{
				$msg  = 0; 

			}else{
				$params['userLevel']   	= "GM"; //일반회원
				$params['userID']   	= @$userID;
				$params['userPW']	    = @$_POST['userPW'];
				$params['userPhone']	= @$_POST['userPhone'];
				$params['userName']		= @$_POST['userName'];
				$params['userNation']	= @$_POST['userNation'];  
				$params['OMCWalletAddr']= "";//$_omcWalletAddr;
				$params['omcMemState']	= 1;//$_omcMemState; 
				$params['StakingState']	= 0;
				$params['userPhone']	= @$_POST['userPhone'];  
				$params['userEmail']	= @$_POST['userEmail'];  
				$params['useState']	    = 1;
				$params['updateDate']	=  @$_recDate;
				$params['manager']	    = "";
				$params['remarks']	    = "";
				$params['recDate']	    = @$_recDate; 

	
				$add_query = $database->insert( $table, $params );

				if($add_query)
				{ 
					$msg = $database->lastid();    
				}//add_query
			} 
 	}else{
 	  	$msg  = -1 ;
	}
 
	echo $msg;
 ?>