<?php 	//新闻列表后台
	require("sjklj.php"); 
 	$sql="SELECT * FROM  baidunews";
    $result=mysql_query($sql,$sqllj);
    $arr=array();
	     while($row = mysql_fetch_array($result)){
	        array_push($arr,array("id"=>$row["id"],"newstype"=>$row["newstype"],"newsimg"=>$row["newsimg"],"newstitle"=>$row["newstitle"],"newstime"=>$row["newstime"],"newssrc"=>$row["newssrc"]));  
	    }
    echo json_encode($arr);
    mysql_close($sqllj);
?>

