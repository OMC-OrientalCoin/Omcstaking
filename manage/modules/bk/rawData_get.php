<?php   

  error_reporting( E_ALL );
  ini_set( "display_errors", 1 );

	require_once $_SERVER['DOCUMENT_ROOT']."/lib/DB.php"; 	 

	$TABLE ="rawData";  
  
	@$_state 	 = @$_POST['state'] ;
	@$_startDate = @$_POST['_startDate'] ;
	@$_endDate   = @$_POST['_endDate'];

	@$WHERECOUSE ="";

	if($_state == "S")
  		@$WHERECOUSE = " WHERE  DATE(recDate) BETWEEN '$_startDate' AND '$_endDate' "; 

 
 
	$result_array = array(); // 결과 값을 담을 변수 생성  
 
	$query = "SELECT  *  FROM $TABLE $WHERECOUSE  order by idx desc  LIMIT  100 ";////$start_row, $limit_row";
 
	$results = $database->get_results( $query );

	foreach( $results as $row )
	{
		$result_array[] = $row;
	}  
 


	echo @$_GET['callback'].json_encode($result_array);
?> 