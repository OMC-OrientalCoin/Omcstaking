<?php 
	header('Content-Type: application/json; charset=utf-8');
 
 
$data["userID"] = @$_POST['userID'] ;
$data["userPW"] = @$_POST['userPW'] ;
 

$json_encoded_data = json_encode($data); 
$url = 'http://omcwallet.net/m/module/get_memberData_staking.php';
$result = post($url, $data);

 
echo $result;

function post($url, $fields)
{

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
 