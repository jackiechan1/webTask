<?php 	//新闻修改查询后台
		require("sjklj.php");
		$updateId=$_POST["updateId"];
		$sql="SELECT * FROM baidunews  WHERE id=".$updateId."";
		$result=mysql_query($sql,$sqllj);
		$arr=array();
		  	while($row = mysql_fetch_array($result)){
		  			array_push($arr,array("id"=>$row["id"],"newstype"=>$row["newstype"],"newsimg"=>$row["newsimg"],"newstitle"=>$row["newstitle"],"newstime"=>$row["newstime"],"newssrc"=>$row["newssrc"]));	
		  	}
  		echo json_encode($arr);
		mysql_close($sqllj);
?>	