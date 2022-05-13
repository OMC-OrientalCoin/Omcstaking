<?php
	chdir(dirname(__FILE__));
// 기존 코드

 
function resultMsgFunc($state, $arrData )
 {

 	$arrResult = array(); // 결과 값을 담을 변수 생성   
	
	if($state){
		$arrResult['code'] = 1;
		$arrResult['message'] = "OK";	
		$arrResult['data'] = json_encode($arrData );

	}else{
		$arrResult['code'] = 0;
		$arrResult['message'] = "error";
		$arrResult['data'] = $arrData;
	}
 
 	return $arrResult;
 }


?>