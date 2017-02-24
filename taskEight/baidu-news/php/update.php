<?php   //新闻修改后台
		require("sjklj.php");
		$unewstitle=addslashes($_POST["unewstitle"]);
		$unewstype=addslashes($_POST["unewstype"]);
		$unewsimg=addslashes($_POST["unewsimg"]);
		$unewstime=$_POST["unewstime"];
		$unewssrc=addslashes($_POST["unewssrc"]);
		$updateId=$_POST["updateId"];
		$sql="UPDATE baidunews SET newstitle='".$unewstitle."' ,newstype='".$unewstype."' , newsimg='".$unewsimg."' , newstime='".$unewstime."' , newssrc='".$unewssrc."'  WHERE id=".$updateId." ";
		if(mysql_query($sql,$sqllj))
		{
			echo json_encode(array("update"=>"success"));
		}
		else {
			die('Error: ' . mysql_error());
		}
		mysql_close($sqllj);
?>