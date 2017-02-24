<?php 	//公用的PHP代码		
		header('Content-type:text/json;charset=utf-8');
		 $sqllj=mysql_connect("localhost","root","");
		 mysql_query("SET NAMES utf8");
		 mysql_select_db("news",$sqllj);
 ?>