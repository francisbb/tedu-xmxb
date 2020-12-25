//引入数据库连接池
const pool = require('../pool.js')
//引入文件express
const express = require('express');
//创建路由器r
const r = express.Router();



//获取按首页商品新品列表
r.post('/idxlist_pro', (req, res) => {
	let obj = req.body;
	console.log(obj);
	let sql ="select pid,pname,price,index_img from product where feature_id=? or family_id=?";
	pool.query(sql, [obj.feature_id,obj.family_id], (err, result) => {
		if (err) throw err;
		console.log(result)
		res.send(result);
	})
})


module.exports = r;