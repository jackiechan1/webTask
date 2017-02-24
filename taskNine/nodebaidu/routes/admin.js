var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var pool=mysql.createPool({
			host:'localhost',
			user:'root',
			port:3306,
			password:'x5',
			database:'cmsv6'
});

/* 后台刷新新闻列表 */
router.post('/sxxwlb', function(req, res, next) {
		pool.query('SELECT * FROM  baidunews ORDER BY id DESC',function(err,data){
			 if(err){
			 	console.log('select '+err)
			 	return;
			 }
			 res.json(data);
			 
		});
});
/* 后台新增新闻 */
router.post('/zengjia', function(req, res, next) {
		var  newstitle=req.body.newstitle;
	    var  newstype=req.body.newstype;
	    var  newsimg=req.body.newsimg;
	    var  newstime=req.body.newstime;
	    var  newssrc=req.body.newssrc;
		pool.query('INSERT INTO baidunews (newstype,newsimg,newstitle,newstime,newssrc) VALUES (?,?,?,?,?)',[newstype,newsimg,newstitle,newstime,newssrc],function(err,result){
			 if(err){
			 	console.log('insert '+err)
			 	return;
			 }
			 	 res.json(result);
		});
});

/* 后台删除新闻 */
router.post('/delete', function(req, res, next) {
		var  deleteId=req.body.deleteId;
		pool.query('DELETE FROM baidunews WHERE id=?',[deleteId],function(err,result){
			 if(err){
			 	console.log('delete '+err)
			 	return;
			 }
			 	 res.json(result);
		});
});

/* 后台修改新闻-查询 */
router.post('/select', function(req, res, next) {
		var  updateId=req.body.updateId;
		pool.query('SELECT * FROM baidunews  WHERE id=?',[updateId],function(err,data){
			 if(err){
			 	console.log('select '+err)
			 	return;
			 }
			 	 res.json(data);
		});
});

/* 后台修改新闻-修改 */
router.post('/update', function(req, res, next) {
		var  updateId=req.body.updateId;
		var  newstitle=req.body.unewstitle;
	    var  newstype=req.body.unewstype;
	    var  newsimg=req.body.unewsimg;
	    var  newstime=req.body.unewstime;
	    var  newssrc=req.body.unewssrc;
		pool.query('UPDATE baidunews SET newstitle=? ,newstype=? , newsimg=? , newstime=? , newssrc=?  WHERE id=? ',[newstitle,newstype,newsimg,newstime,newssrc,updateId],function(err,result){
			 if(err){
			 	console.log('update '+err)
			 	return;
			 }
			 	 res.json(result);
		});
});

module.exports = router;
