const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//创建路由器对象
const r = express.Router();


//添加购物车

r.post('/addCart',(req,res)=>{
	let obj=req.body;
	console.log(req.body);
	let sql1="select product_id,user_id,ccount from shopping_cart where product_id=? and user_id=?"
	let sql2="insert into shopping_cart set ?";
	let sql3="update shopping_cart set ccount=? where user_id=? and product_id=?";
	if(obj.user_id==0||obj.product_id==0||obj.ccount==0){
			res.send({code:401,msg:"uid&pid&count"});
			return;
	}else{

				pool.query(sql1,[obj.product_id,obj.user_id],(err,result)=>{
					if(err)throw err;
					console.log(result);
					let oldnum=result[0].ccount;
					if(result.length){
						let num=obj.ccount*1+oldnum*1;
						console.log(num);
						pool.query(sql3,[num,obj.user_id,obj.product_id],(err,result)=>{
							if(err)throw err;
							res.send({code:200,msg:"商品数量修改成功！"});
						});
						return;
					}else{
						pool.query(sql2,obj,(err,result)=>{
							if(err)throw err;
							res.send({code:200,msg:"添加成功！"});
						});
					}
				});

	}
})
	


//删除购物车
r.delete('/delCart/:cid',(req,res)=>{
	let obj=req.params;
	console.log(obj);
	if(!obj.cid){
		res.send('请输入编号')
		return;
	}
	pool.query('delete from shopping_cart where cid=?',[obj.cid],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows===0){
		res.send({code:401,msg:'no delete'})
		}else{
		res.send('删除'+result.affectedRows+'条数据');
		}
	})
})

//查询购物车
r.post('/cartList',(req,res)=>{
	let obj = req.body;
	console.log(obj);
	if(!obj.pno){
		obj.pno=1;
	}
	if(!obj.pcount){
		obj.pcount=4;
	}

	//计算出开始查询的值
	let _user_id = obj.user_id;
	console.log(_user_id);
	let _pcount = parseInt(obj.pcount);
	let _start=(obj.pno-1)*obj.pcount;

	
	//执行SQL命令
	let sql="select pname,price,ccount,index_img,ccount*price as total from product inner join shopping_cart on pid=product_id where user_id=? limit ?,?";
	pool.query(sql,[_user_id,_start,_pcount],(err,result)=>{
		if(err)throw err;
		console.log(result);
		if(result.length===0){
			res.send('没有数据！');
		}else{
			res.send(result);
		}
	})
})

//修改购物车数量
r.post('/updateCartCount',(req,res)=>{
	let obj=req.body;
	console.log(obj);
	if(!obj.ccount){
		res.send('请输入编号')
		return;
	}
	if(!obj.user_id){
		res.send('请输入用户编号')
		return;
	}
	if(!obj.product_id){
		res.send('请输入商品编号')
		return;
	}
	pool.query('update shopping_cart set ccount=? where user_id=? and product_id=?',[obj.ccount,obj.user_id,obj.product_id],(err,result)=>{
		if(err)throw err;
		console.log(result);
		if(result.affectedRows===0){
		res.send({code:401,msg:'no update'})
		}else{
		res.send('修改'+result.affectedRows+'条数据');
		}
	})
})


//修改购物车是否勾选
r.post('/updateCartChecked',(req,res)=>{
	let obj=req.body;
	console.log(obj);
	if(!obj.ischecked){
		res.send('请输入状态')
		return;
	}
	if(!obj.user_id){
		res.send('请输入用户编号')
		return;
	}
	if(!obj.product_id){
		res.send('请输入商品编号')
		return;
	}
	pool.query('update shopping_cart set ischecked=? where user_id=? and product_id=?',[obj.ischecked,obj.user_id,obj.product_id],(err,result)=>{
		if(err)throw err;
		console.log(result);
		if(result.affectedRows===0){
		res.send({code:401,msg:'no update'})
		}else{
		res.send('修改成功！');
		}
	})
})

module.exports=r;