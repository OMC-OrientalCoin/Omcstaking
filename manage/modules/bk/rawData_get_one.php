<?php   

	require_once $_SERVER['DOCUMENT_ROOT']."/lib/DB.php"; 	  
	$TABLE ="rawdata";   
	@$_idx	 = @$_POST['idx'] ;  
	@$WHERECOUSE = " WHERE  idx='$_idx' "; 



	$result_array = array(); // 결과 값을 담을 변수 생성  

	$query = "SELECT  *  FROM $TABLE $WHERECOUSE  order by idx desc ";//LIMIT $start_row, $limit_row";

	$results = $database->get_results( $query );

	foreach( $results as $row )
	{
		$result_array[] = $row;
	}  



	echo @$_GET['callback'].json_encode($result_array);
	?> 