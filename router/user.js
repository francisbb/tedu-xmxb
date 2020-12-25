const express=require('express');
//引入连接池模快
const pool=require('../pool.js');
//
//创建路由器对象
const r=express.Router();
//添加路由器
//1.用户注册（post/reg）
r.post('/restful_get',(req,res)=>{
	
	//1.1获取post请求的数据
	let obj=req.body;
	console.log(obj);
	//1.2验证各项数据是否为空
	if(!obj.uname){
		res.send({code:401,msg:'uname required'});
	return;
	}
	if(!obj.email){
		res.send({code:402,msg:'email required'});
	return;
	}
	if(!obj.password){
	  res.send({code:403,msg:'password required'});
	return;
	}
	if(!obj.phone){
	  res.send({code:404,msg:'phone required'});
	return;
	}

	let sql="select * from user where uname=?";
	pool.query(sql,[obj.uname],(err,result)=>{
		if(err) throw err;
		if(!result.length){
			pool.query('insert into user set ?',[obj],(err,result)=>{
				if(err) throw err;
				console.log(result);
				res.send({code:200,msg:'reg suc'});
			});
		}else{
			res.send({code:400,msg:'用户名已存在！'});
		}
	})
});
//2.用户登录
r.post('/restful_login',(req,res)=>{
	//2.1获取post请求的数据
	let obj=req.body;
	console.log(obj);
	//2.2检测各项数据是否为空
	if(!obj.uname){
		res.send({code:401,msg:'uname required'});
	return;
	}
	if(!obj.password){
		res.send({code:402,msg:'password required'});
	return;
	}
	//2.3执行SQL命令
	pool.query('select * from user where uname=? and password=?',[obj.uname,obj.password],(err,result)=>{
		if(err) throw err;
		console.log(result);
		//根据结果判断是否登录成功
		if(result.length===0){
			  res.send({code:301,msg:'login err'});
			}else{
			  res.send({code:200,msg:'login suc'});
			}
	});
});
//3.检测用户是否存在
r.get('/restful_exists/:uname',(req,res)=>{
	var _uname=req.params.uname;
	pool.query('select * from user where uname=?',[_uname],(err,result)=>{
		if(err)throw err;
		console.log(result);
		//如果结果是空数组表示没有此用户，可以使用；否则此用户存在，不可以使用
		if(result.length===0){
			res.send({code:200,msg:'可以使用'});
		}else{
			res.send({code:201,msg:'该用户已被注册'});
		}	
	});
});
//4.删除用户
r.delete("/del_user/:uid",(req,res)=>{
	var _uid=req.params.uid;
	var sql="delete from user where uid=?";
	pool.query(sql,[_uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"已删除"});
		}else{
			res.send({code:201,msg:"不存在"});
		}
		});
	});
//5.修改用户信息
//5.1获取post请求的数s据
r.post("/update",(req,res)=>{
	//5.1获取post请求的数据
		let obj=req.body;
		console.log(obj);
	 //5.2验证各项数据是否为空
		let i=400;
		for(let k in obj){
			i++;
			if(!obj[k]){
				  res.send({code:i,msg:k+'required'});
				  return;
				}
			  }
				if(!obj.uname){
					res.send({code:401,msg:'uname required'});
				return;
				}
				if(!obj.email){
					res.send({code:402,msg:'email required'});
				return;
				}
				if(!obj.password){
				  res.send({code:403,msg:'password required'});
				return;
				}
				if(!obj.phone){
				  res.send({code:404,msg:'phone required'});
				return;
				}
	pool.query(`update user set ? where uid=?`,[obj,obj.uid],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows===0){
			  res.send({code:301,msg:'update err'});
			}else{
			  res.send({code:200,msg:'update suc'});
			}
			
		  });
		});
//6.用户列表`
r.get("/alluser",(req,res)=>{
	var sql="select * from user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(typeof(result));
		res.send(result);
	});
});

//导出
module.exports=r;