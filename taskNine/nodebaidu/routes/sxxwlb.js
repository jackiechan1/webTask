var express = require('express');
var router = express.Router();
var mysql=require('mysql');
/* 前台刷新新闻列表 */
router.post('/', function(req, res, next) {  
	  //新闻类型               
  	  var newstype=req.body.type;          
  	  //连接数据库的参数
  	  var connection=mysql.createConnection({	
  	  	  host:'localhost',
  	  	  password:'x5',
  	  	  user:'root',
  	  	  database:'cmsv6',
  	  	  port:3306
  	  });
  	  //连接数据库
  	  connection.connect(function(err){		
  	  	if(err){
  	  		 console.log('数据库连接错误:'+err);  
     	     return;  
  	  	}
  	  	console.log('数据库连接成功');  
  	  	
  	  });	
  	  //查询数据库
  	  connection.query('select * from baidunews where newstype=?',[newstype],function(err,data){ 
  	  	          if(err){
  	  	          	console.log("select  "+err);
					             return;
  	  	          }
  	  	          res.json(data);	//返回数据库查询到的数据（JSON）到前台
  	  	          
  	  });
	 //关闭mysql连接
	connection.end(function(err){	
		if(err){
			console.log(err.toString());
			return;
		}
		console.log("关闭mysql连接");
	});

});

module.exports = router;
