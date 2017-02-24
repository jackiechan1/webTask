<?php   //新闻删除后台
        require("sjklj.php");      
        $deleteId=$_POST["deleteId"];
        $sql="DELETE FROM baidunews WHERE id=".$deleteId."";
        if(mysql_query($sql,$sqllj))
        {
        	echo json_encode(array("delete"=>"success"));
        }else {

        	die('Error: ' . mysql_error());
        }
        mysql_close($sqllj);

 ?>