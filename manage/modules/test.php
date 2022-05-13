<?php
  
	
		$userID  = "tomas"  ; 
		 
			$url = "https://omcwallet.net/m/module/get_MyWalletAddress.php";
			$fields['userID'] =   @$userID;
         

            $response = joinOMCWallet($url, $fields); 
            $_jsonData = json_decode($response,true); 
  
            
            for ($i=0; $i < count($_jsonData) ; $i++) { 
                echo $_jsonData[$i]['walletAddress'];
            }
           
	 

	// function getWallet(){
		
    //     return "A"; 
	// }

	// function makeWallet(){
    //     return "B";//$response; 
	// }

	function joinOMCWallet($url, $fields){ 
   
		$post_field_string = http_build_query($fields, '', '&');
		$ch = curl_init();                                                            
	
		curl_setopt($ch, CURLOPT_URL, $url);                                
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