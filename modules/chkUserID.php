<?php
 
    require_once "./config.php";   
	  	
 	$TABLE = " member "; 


	@$userID =  @$_POST['userID']; 
 
 	$WHERECAUSE =  "where  userID = '".$userID."'   ";
	$query = "	SELECT  count(*)  FROM  $TABLE  $WHERECAUSE ";  
	list($cnt) = $database->get_row($query); 

	echo $cnt;

?>
   