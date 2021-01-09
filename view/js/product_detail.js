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

// 动态获取商品信息

function getProductDetail() {
	//获取地址栏中的查询字符串对象
	var obj = new URLSearchParams(location.search);
	//通过这个对象的GET方法获取对应的参数
	var _pid = obj.get("pid");
	ajax('get','/product/detail',`${_pid}`,function(r){
		var arr = JSON.parse(r);
		console.log(arr);
		var htmlstr='';
		
			htmlstr+=`
		
			`
		test.innerHTML=htmlstr;
	})
}


// 动态获取商品信息

// function getProductDetail() {
// 	//获取地址栏中的查询字符串对象
// 	var obj = new URLSearchParams(location.search);
// 	//通过这个对象的GET方法获取对应的参数
// 	var _pid = obj.get("pid");
// 	console.log(_pid);
// 	var xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function() {

// 		if (xhr.readyState == 4 && xhr.status == 200) {
// 			var r = xhr.responseText;
// 			var arr = JSON.parse(r);
// 			console.log(arr);
// 			var htmlstr='';
			
// 				htmlstr+=`
// 				<div class="contain">
// 					<a href="product_list.html?pid=${arr[0].pid}">
// 						<img src="img/index/${arr[0].index_img}" alt="">
// 						<span><em>¥</em>${arr[0].price}</span>
// 						<p>${arr[0].pname}</p>
// 					</a>
// 				</div>
// 				`
// 			test.innerHTML=htmlstr;

// 		}
// 	}

// 	xhr.open('get', `/product/detail/${_pid}`, true);

// 	xhr.send();
	
// }

