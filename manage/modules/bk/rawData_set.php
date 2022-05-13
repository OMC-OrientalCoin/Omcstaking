<?php
 
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/DB.php"; 
		 
	date_default_timezone_set('Asia/Seoul'); 
	$_recDate =date("Y-m-d H:i:s"); 
	$msg ="";
	$params = array(); 
 
	$table = "rawdata";
	
	$_RTU_IP  = @$_POST['RTU_IP']  ? @$_POST['RTU_IP']  : @$_GET['RTU_IP'] ;
	$_RTU_MAC = @$_POST['RTU_MAC'] ? @$_POST['RTU_MAC'] : @$_GET['RTU_MAC'] ;
	$_devID   = @$_POST['devID']   ? @$_POST['devID']   : @$_GET['devID'] ;
	
    if($_RTU_IP !="" && $_RTU_MAC !="" && $_devID !="")
    {
	
		$params['recDate']		= @$_recDate;
		$params['RTU_IP']		= @$_RTU_IP;
		$params['RTU_MAC']		= @$_RTU_MAC;
		$params['devKind']		= @$_POST['devKind']    ?   @$_POST['devKind']     :  null;
		$params['devID']		= @$_devID;
		$params['GPS_POINT']	= @$_POST['GPS_POINT']    ?   @$_POST['GPS_POINT']     :  null;
		$params['UWB_POINT']	= @$_POST['UWB_POINT']    ?   @$_POST['UWB_POINT']     :  null;
		$params['Temperature']	= @$_POST['Temperature']  ?   @$_POST['Temperature']   :  0;
		$params['Heart_rate']	= @$_POST['Heart_rate']   ?   @$_POST['Heart_rate']    :  0;
		$params['Acc_sensor']	= @$_POST['Acc_sensor']   ?   @$_POST['Acc_sensor']    :  0;
		$params['Gyro_sensor']	= @$_POST['Gyro_sensor']  ?   @$_POST['Gyro_sensor']   :  0; 
		$params['GAS_sensor1']	= @$_POST['GAS_sensor1']  ?   @$_POST['GAS_sensor1']   :  0; 
		$params['GAS_sensor2']	= @$_POST['GAS_sensor2']  ?   @$_POST['GAS_sensor2']   :  0; 
		$params['GAS_sensor3']	= @$_POST['GAS_sensor3']  ?   @$_POST['GAS_sensor3']   :  0; 
		$params['Leak_sensor1']	= @$_POST['Leak_sensor1'] ?   @$_POST['Leak_sensor1']  :  0; 
		$params['Leak_sensor2']	= @$_POST['Leak_sensor2'] ?   @$_POST['Leak_sensor2']  :  0;
		$params['Leak_sensor3']	= @$_POST['Leak_sensor3'] ?   @$_POST['Leak_sensor3']  :  0;
		$params['remark']		= @$_POST['remark']       ?   @$_POST['remark']        :  null;

 
		$add_query = $database->insert( $table, $params );

		if( $add_query )
		{
		//  echo '<p>Successfully inserted &quot;'. $params['subject']. '&quot; into the database.</p>';
			$lastid = $database->lastid();   
		}
	
		$msg  = $lastid;

 	 
 	 }else{
 	  	$msg  = " params error " ;
 	  }

	//echo '{ "message"  :  "' .$add_query.'_'.$lastid .'" }';   
	echo $msg;   
 
 ?>