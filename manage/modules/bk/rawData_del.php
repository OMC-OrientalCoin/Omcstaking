<?php
 
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/DB.php"; 
 
 	$CAUSE = array();
  
	$TABLE ="rawdata"; 
	//$CAUSE['idx'] = @$_POST['idx']; 
 	$CAUSE = @$_POST['idx']; 


 	// $ret = $database->get_results( "DELETE FROM  $TABLE WHERE idx in ()";//FROM users ORDER BY name ASC" );



	$ret = $database->delete_multi( $TABLE, $CAUSE, 1 );  
	echo  $ret ;
?>
 