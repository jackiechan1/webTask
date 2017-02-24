<?php  //新闻增加后台
	require("sjklj.php");
	$newstitle=addslashes($_POST["newstitle"]);
	$newstype=addslashes($_POST["newstype"]);
	$newsimg=addslashes($_POST["newsimg"]);
	$newstime=$_POST["newstime"];
	$newssrc=addslashes($_POST["newssrc"]);
	$sql="INSERT INTO baidunews (newstype,newsimg,newstitle,newstime,newssrc) VALUES ('".$newstype."','".$newsimg."','".$newstitle."','".$newstime."','".$newssrc."')";
	if(mysql_query($sql,$sqllj))
	{
				echo json_encode(array("zengjia"=>"success"));
	}else 
	 {
  	 echo "Error creating database: " . mysql_error();
  	}
	mysql_close($sqllj);
?>