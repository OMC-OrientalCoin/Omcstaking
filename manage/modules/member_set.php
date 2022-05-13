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
		$newUserID  = @$_POST['newUserID'];  

		$_tmpUserID ="";
		$_omcMemState =""; 
		$_getData =""; 

		if($userID !="" )
		{ 
			$_getData = get_member_data_OMCWallet($userID);

			$_tmpUserID   = @$userID;
			$_userPhone   = $_getData['userPhone'];
			$_userName 	  = $_getData['userName'];
			$_userEmail   = @$_getData['userEmail']  ;
			$_omcMemState = 1;
			$_omcWalletAddr= @$_getData['omcWalletAddr']; 
		
		}else if($newUserID !="" ){

			$_tmpUserID   	= @$newUserID;
			$_userPhone 	= @$_POST['newUserPhone'];
			$_userName 		= @$_POST['newUserName'];
			$_omcMemState 	= 0;
			$_omcWalletAddr = @$_POST['omcWalletAddr'];
			$_userEmail 	= @$_POST['newUserEmail'];
			
		}
  
			
		if($_tmpUserID !="" )
		{
			$params['userLevel']   		= "GM"; //일반회원
			$params['userID']   	= @$newUserID;
			$params['userPW']	    = @$_POST['newUserPW'];
			$params['userPhone']	= @$_userPhone;
			$params['userName']		= @$_userName;
			$params['OMCWalletAddr']= $_omcWalletAddr;
			$params['omcMemState']	= $_omcMemState; 
			$params['userPhone']	= @$_userPhone;
			$params['userEmail']	= @$_userEmail;
			$params['useState']	    = 1;
			$params['remarks']	    = "";
			$params['recDate']	    = @$_recDate; 

 
			$add_query = $database->insert( $table, $params );

			if($add_query)
			{ 
				$lastid = $database->lastid();   

	 

				if($newUserID !="" ){



					$_WalletAddr =  makeWallet($newUserPW){
				
					$params['OMCWalletAddr'] =  @$_WalletAddr;  
					$where['userID'] 		 =  @$userID; 
					$ret_query = $database->update( $table, $params, $where , '' ); 
					////////////////////////
					
					$params['userID']	  = $userID;
					$params['userPW']	  = @$_POST['newUserPW']; 
					$params['userName']	  = @$_POST['newUserPW']; 
					$params['userEmail']  = @$_POST['newUserEmail'];
					$params['userPhone']  = @$_POST['newUerPhone'];
					$params['userNation'] = ""; 

					setOMCWallet_member( $params); 

				}

				 		
			}//add_query
	
		$msg  = $lastid; 
 	 
 	}else{
 	  	$msg  = " params error " ;
	}

	//echo '{ "message"  :  "' .$add_query.'_'.$lastid .'" }';   
	echo $msg;   

	function getWallet(){
		

	}
 

	function makeWallet($userPW){
		$response =  false; 

		if(!$userPW)
			$response =  false; 
		else{

				$data = array();

				$data["jsonrpc"] = "2.0";
				$data["method"] = "personal_newAccount";
				$data["params"] = [$walletPasswd];
				$data["id"] = "1";

				$fields = json_encode($data); 
			
				$url = "http://omcapi.net:3334";
				$response = curlFunction($url, $fields);
		}

		return $response; 
	}

	function get_member_data_OMCWallet( $fields){ 

		$url = "https://omcwallet.net/m/module/set_member_rec.php";
		$response = curlFunction($url, $fields);
		return $response;  
	} 
 
	function set_member_data_OMCWallet( $fields){ 

		$url = "https://omcwallet.net/m/module/set_member_rec.php";
		$response = curlFunction($url, $fields);
		return $response;  
	}

	function get_member_WalletAddr_OMCWallet( $fields){ 

		$url = "https://omcwallet.net/m/module/get_MyWalletAddress.php";
		$response = curlFunction($url, $fields);
		return $response; 
	}
 

	function curlFunction($url, $fields){  
		$post_field_string = http_build_query($fields, '', '&'); 
		$ch = curl_init();                                                            
	
		curl_setopt($ch, CURLOPT_URL, $url);     
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");  
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($json_encoded_data)));                         
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);               
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);               
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);                  
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_field_string);       
		curl_setopt($ch, CURLOPT_POST, true);                               
		$response = curl_exec($ch);
		curl_close ($ch);


		return $response; 
	}
 
 ?>