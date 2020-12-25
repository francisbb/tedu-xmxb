// 封装AJAX方法
function ajax(method,url,params,callback) {
    // 1.初始化对象
    var xhr = new XMLHttpRequest();
    //判断是否是get方法，并且参数不是空
    if (method == 'GET' || method == 'get' && params != undefined) {
        // 判读为true的话，将参数拼接到地址中(get方法传参在地址中传)
        url = url + '/' + params;
    }
    // 2.配置请求信息  方法，地址，是否异步
    xhr.open(method, url, true);
    // 3.监听状态改变事件
    xhr.onreadystatechange = function() {
        // responseText  文本格式的响应信息
        // responseXML   XML格式的响应信息
        // 判断是否成功，并且是否数据解析完毕
        if (xhr.status == 200 && xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    };
    // 判断是否是post方法，并且参数不为空
    if (method == 'POST' || method == 'post' && params != undefined) {
        // 4.发送请求(如果是post有参的话，将参数传进去)
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(params);
    } else {
        xhr.send();
    }
}


// 动态获取首页新品商品信息
function getProductIdx(){
ajax('post','/index/idxlist_pro','feature_id=10',function(r){
	var arr=JSON.parse(r);
	var htmlstr='';
	for(let i=0;i<arr.length;i++){
		if(i>=4){
			break;
		}
		htmlstr+=`
		<li>
			<a href="product_detail.html?pid=${arr[i].pid}">
				<img src="img/index/${arr[i].index_img}" alt="">
				<span><em>¥</em>${arr[i].price}</span>
				<p>${arr[i].pname}</p>
			</a>
		</li>
		`
	}
	idxnew.innerHTML=htmlstr;
}) 
}

// 动态获取首页鞋子商品信息
function getProductShoe(){
ajax('post','/index/idxlist_pro','family_id=10',function(r){
	var arr=JSON.parse(r);
	var htmlstr='';
	for(let i=0;i<arr.length;i++){
		if(i>=8){
			break;
		}
		htmlstr+=`
		<li>
			<a href="product_detail.html?pid=${arr[i].pid}">
				<img src="img/index/${arr[i].index_img}" alt="">
				<div class="producttxt">
					<p>${arr[i].pname}</p>
					<span><em>¥</em>${arr[i].price}</span>
				</div>
			</a>
		</li>
		`
	}
	idxshoe.innerHTML=htmlstr;
}) 
}


// 动态获取首页包包商品信息
function getProductBag(){
ajax('post','/index/idxlist_pro','family_id=40',function(r){
	var arr=JSON.parse(r);
	var htmlstr='';
	for(let i=0;i<arr.length;i++){
		if(i>=8){
			break;
		}
		htmlstr+=`
		<li>
			<a href="product_detail.html?pid=${arr[i].pid}">
				<img src="img/index/${arr[i].index_img}" alt="">
				<div class="producttxt">
					<p>${arr[i].pname}</p>
					<span><em>¥</em>${arr[i].price}</span>
				</div>
			</a>
		</li>
		`
	}
	idxbag.innerHTML=htmlstr;
}) 
}

// 动态获取首页帽子商品信息
function getProductHat(){
ajax('post','/index/idxlist_pro','family_id=20',function(r){
	var arr=JSON.parse(r);
	var htmlstr='';
	for(let i=0;i<arr.length;i++){
		if(i>=8){
			break;
		}
		htmlstr+=`
		<li>
			<a href="product_detail.html?pid=${arr[i].pid}">
				<img src="img/index/${arr[i].index_img}" alt="">
				<div class="producttxt">
					<p>${arr[i].pname}</p>
					<span><em>¥</em>${arr[i].price}</span>
				</div>
			</a>
		</li>
		`
	}
	idxhat.innerHTML=htmlstr;
}) 
}

// 动态获取首页箱包商品信息
function getProductChest(){
ajax('post','/index/idxlist_pro','family_id=30',function(r){
	var arr=JSON.parse(r);
	var htmlstr='';
	for(let i=0;i<arr.length;i++){
		if(i>=8){
			break;
		}
		htmlstr+=`
		<li>
			<a href="product_detail.html?pid=${arr[i].pid}">
				<img src="img/index/${arr[i].index_img}" alt="">
				<div class="producttxt">
					<p>${arr[i].pname}</p>
					<span><em>¥</em>${arr[i].price}</span>
				</div>
			</a>
		</li>
		`
	}
	idxchest.innerHTML=htmlstr;
}) 
}

// 动态获取首页箱包商品信息
// function getProductChest(){
// 	var xhr = new XMLHttpRequest();
	
// 	xhr.onreadystatechange = function(){
// 		if(xhr.readyState==4&&xhr.status==200){
// 			var r = xhr.responseText;
// 			var arr=JSON.parse(r);
// 			var htmlstr='';
// 			for(let i=0;i<arr.length;i++){
// 				if(i>=8){
// 					break;
// 				}
// 				htmlstr+=`
// 				<li>
// 					<a href="product_detail.html?pid=${arr[i].pid}">
// 						<img src="img/index/${arr[i].index_img}" alt="">
// 						<div class="producttxt">
// 							<p>${arr[i].pname}</p>
// 							<span><em>¥</em>${arr[i].price}</span>
// 						</div>
// 					</a>
// 				</li>
// 				`
// 			}
// 			idxchest.innerHTML=htmlstr;
			
// 		}
// 	}
	
// 	//2.创建请求
// 	xhr.open('post',`/index/idxlist_pro`,true);
// 	//3.发送请求
// 	var formdata = `family_id=30`;
	
// 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	
// 	xhr.send(formdata);
// }

function load(){
	getProductChest();
	getProductShoe();
	getProductHat();
	getProductBag();
	getProductIdx();
}