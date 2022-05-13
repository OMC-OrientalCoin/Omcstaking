<?php 
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/DB.php";  	

 
 

	$retValue ="";
	 
	$update = array(); 
	$update_where = array(); 
	$table = "rawdata";  
	
 		$update_where['idx']	= @$_POST['idx'];

 		$update['recDate']		= @$_POST['recDate'];
 		$update['RTU_IP']		= @$_POST['RTU_IP'];
		$update['RTU_MAC']		= @$_POST['RTU_MAC'];
		$update['devKind']		= @$_POST['devKind'];
		$update['devID']		= @$_POST['devID'];
		$update['GPS_POINT']	= @$_POST['GPS_POINT'];
		$update['UWB_POINT']	= @$_POST['UWB_POINT'];
		$update['Temperature']	= @$_POST['Temperature'];
		$update['Heart_rate']	= @$_POST['Heart_rate'];
		$update['Acc_sensor']	= @$_POST['Acc_sensor'];
		$update['Gyro_sensor']	= @$_POST['Gyro_sensor'];
		$update['GAS_sensor1']	= @$_POST['GAS_sensor1'];
		$update['GAS_sensor2']	= @$_POST['GAS_sensor2'];
		$update['GAS_sensor3']	= @$_POST['GAS_sensor3'];
		$update['Leak_sensor1']	= @$_POST['Leak_sensor1'];
		$update['Leak_sensor2']	= @$_POST['Leak_sensor2'];
		$update['Leak_sensor3']	= @$_POST['Leak_sensor3']; 

		$retValue = $database->update( $table, $update, $update_where, 1 );  
	 

		print_r($update);

    	//echo $retValue  ;
   
    

 
?>