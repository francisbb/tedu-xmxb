//引入数据库连接池
const pool = require('../pool.js')
//引入文件express
const express = require('express');
//创建路由器r
const r = express.Router();
//1.增加商品查询详情的窗口
r.get('/detail/:pid', (req, res) => {
	var _pid = parseInt(req.params.pid);
	var arr = [];
	var sql1 = 'select * from product where pid = ?'
	var sql2 = 'select  product_detail from product_detail where productid = ?'
	pool.query(sql1, [_pid], (err, result) => {
		var a;
		if (err) throw err;
		if (result.length > 0) {
			arr = result;
		} else {
			a = res.send('0');
			return;
		}

		pool.query(sql2, [_pid], (err, result) => {
			if (err) throw err;
			if (result.length > 0) {
				res.send(arr.concat(result));
			} else {
				res.send('0')
			}
		})
	})
})
/*
//1.增加商品详情查询接口
r.get('/detail',(req,res)=>{
	let obj=req.query;
	//console.log(obj)
	if(obj.pid===""){
		res.send({code:401,msg:"pid required"})
		return;
	}
	console.log(Number(obj.pid))
	pool.query('select * from product where pid=?',[Number(obj.pid)],(err,result)=>{
		if(err) throw err;
		//console.log(result)
		if(result.length===0){
			res.send({code:302,msg:'此商品不存在'})
		}else{
			res.send(result);
		}
	})
	
})
*/
//2.增加删除商品路由
r.delete('/delete/:pid', (req, res) => {
	var _pid = req.params.pid;
	console.log(_pid);
	if (!_pid) {
		res.send('0');
		return;
	}
	var sql1 = 'delete from product where pid=?';
	var sql2 = 'delete from product_detail where productid=?';
	pool.query(sql1, [_pid], (err, result) => {
		if (err) throw err;
		if (result.affectedRows < 0) {
			res.send("0");
			return;
		}
	})
	pool.query(sql2, [_pid], (err, result) => {
		if (err) throw err;
		console.log(result.affectedRows);
		if (result.affectedRows <= 0) {
			res.send('0');
		} else {
			res.send('1');
		}
	})
})

/*
//2.增加删除商品模块
r.post('/delete',(req,res)=>{
	let obj=req.body;
	//console.log(obj);
	  if(obj===''){
		res.send({code:404,msg:"pid required"})
		return;
	}
	 pool.query("delete from product where pid=?",[parseInt(obj.pid)],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows===0){
			res.send({code:302,msg:"此商品不存在"})
		}else{res.send({code:202,msg:"此商品已成功删除"})}
	})
})
*/
//3.增加添加商品模块
 r.post('/add',(req,res)=>{
	let obj=req.body;
	//console.log(obj);
	for(var key in obj){
		if(!obj[key]){
			res.send('0');
			return;
		}
	}
	pool.query('insert into product set ?',[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})

//4.添加商品详细模块路由
r.post('/add_detail', (req, res) => {
	let obj = req.body;
	var sql = 'insert into product_detail set ?'
	pool.query(sql, [obj], (err, result) => {
		if (err) throw err;
		res.send('1')
	})

})

//获取商品列表
r.post('/list', (req, res) => {
	let obj = req.body;
	console.log(obj);
	let sql = "select * from product left outer join  product_category on family_id=caid where caid=?";
	if (!obj.caid) {
		res.send({
			code: 401,
			msg: "caid required"
		})
		return;
	}
	pool.query(sql, [obj.caid], (err, result) => {
		if (err) throw err;
		console.log(result)
		res.send(result);
	})
})

//获取按升序排列商品列表
r.post('/list_priceasc', (req, res) => {
	let obj = req.body;
	console.log(obj);
	let sql =
		"select * from product left outer join  product_category on family_id=caid where caid=? order by price asc";
	if (!obj.caid) {
		res.send({
			code: 401,
			msg: "caid required"
		})
		return;
	}
	pool.query(sql, [obj.caid], (err, result) => {
		if (err) throw err;
		console.log(result)
		res.send(result);
	})
})

//获取按降序排列商品列表
r.post('/list_pricedesc', (req, res) => {
	let obj = req.body;
	console.log(obj);
	let sql =
		"select * from product left outer join  product_category on family_id=caid where caid=? order by price desc";
	if (!obj.caid) {
		res.send({
			code: 401,
			msg: "caid required"
		})
		return;
	}
	pool.query(sql, [obj.caid], (err, result) => {
		if (err) throw err;
		console.log(result)
		res.send(result);
	})
})


module.exports = r;
