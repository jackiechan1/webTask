<?php    //新闻列表前台
  	require("sjklj.php"); 
    if(@$_POST["type"]!=null)
    {
          $type=$_POST["type"];
          $sql="SELECT * FROM  baidunews WHERE newstype=".$type." ORDER BY id DESC";
          $result=mysql_query($sql,$sqllj);
          $arr=array();
             while($row = mysql_fetch_array($result)){
                array_push($arr,array("id"=>$row["id"],"newstype"=>$row["newstype"],"newsimg"=>$row["newsimg"],"newstitle"=>$row["newstitle"],"newstime"=>$row["newstime"],"newssrc"=>$row["newssrc"]));  
            }
          echo json_encode($arr);
          mysql_close($sqllj);

    }else {
        $sql="SELECT * FROM  baidunews  ORDER BY id DESC";
          $result=mysql_query($sql,$sqllj);
          $arr=array();
             while($row = mysql_fetch_array($result)){
                array_push($arr,array("id"=>$row["id"],"newstype"=>$row["newstype"],"newsimg"=>$row["newsimg"],"newstitle"=>$row["newstitle"],"newstime"=>$row["newstime"],"newssrc"=>$row["newssrc"]));  
            }
          echo json_encode($arr);
          mysql_close($sqllj);
    }
?>