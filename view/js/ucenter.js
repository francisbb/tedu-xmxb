//购物车删除按钮
(function() {
	var purchase_table = document.getElementById('purchase_table');
	var tds = purchase_table.querySelectorAll(
		'.purchase-table tr td:last-child'
	)

	for (var td of tds) {
		var btn = td.children[0].children[0];
		btn.onclick = function() {
			var tr = this.parentElement.parentElement.parentElement;
			purchase_table.deleteRow(tr.rowIndex);

			//3. 修改总计:
			//3.1 查找tbody中每行内最后一个td
			var everyTotals = purchase_table.querySelectorAll(
				"tr>td:nth-last-of-type(2) span"
			);
			//声明一个变量total，准备累加每个小计
			var totalAll = 0;
			//3.2 遍历找到的每个td
			for (var everyTotal of everyTotals) {
				//3.3 每遍历一个td就将td的内容累加到变量total上
				totalAll += parseFloat(everyTotal.innerHTML)
			}
			//3.4 查找tfoot中最后一个td
			var lastTotal = document.querySelectorAll(
				".purchase-bar>li:nth-last-of-type(2)"
			);
			//3.5 将计算后的total，放入tfoot中最后一个td中。
			lastTotal[0].innerHTML = `￥${totalAll.toFixed(2)}`;
		}
	}
})();


//购物车修改数量&价格变化
(function() {
	var purchase_table = document.getElementById('purchase_table');
	var tds = purchase_table.getElementsByClassName('amount');
	for (var td of tds) {
		var as = td.getElementsByTagName("a");
		for (var a of as) {
			a.onclick = function() {
				var input = this.parentElement.children[1];
				var n = parseInt(input.value);
				if (this.innerHTML == '-' && n > 1) {
					n--;
				} else if (this.innerHTML == '+') {
					n++;
				}
				input.value = n;

				var total = this.parentElement.parentElement.nextElementSibling.children[0].children[0];
				var price = this.parentElement.parentElement.previousElementSibling.children[1].children[0];
				total.innerHTML = `${(parseInt(price.innerHTML)*n).toFixed(2)}`;

				//3. 修改总计: 
				//3.1 查找tbody中每行内最后一个td
				var everyTotals = purchase_table.querySelectorAll(
					"tr>td:nth-last-of-type(2) span"
				);
				//声明一个变量total，准备累加每个小计
				var totalAll = 0;
				//3.2 遍历找到的每个td
				for (var everyTotal of everyTotals) {
					//3.3 每遍历一个td就将td的内容累加到变量total上
					totalAll += parseFloat(everyTotal.innerHTML)
				}
				//3.4 查找tfoot中最后一个td
				var lastTotal = document.querySelectorAll(
					".purchase-bar>li:nth-last-of-type(2)"
				);
				//3.5 将计算后的total，放入tfoot中最后一个td中。
				lastTotal[0].innerHTML = `￥${totalAll.toFixed(2)}`;
			}
		}
	}

})();


//删除收藏
(function() {
	var favourite = document.getElementById('favourite');
	var as = favourite.querySelectorAll(
		'.favourite .favouritetxt a'
	)
	for (var a of as) {
		a.onclick = function(e) {
			e.preventDefault();
			var ul = this.parentElement.parentElement.parentElement;
			var li = this.parentElement.parentElement;
			ul.removeChild(li);
		}
	}

})();

//用户模块切换
(function() {
	var userinfo_nav = document.getElementsByClassName('userinfo-nav')[0];
	var lis = userinfo_nav.querySelectorAll(
		'.userinfo-nav>ul li'
	)
	for (var li of lis) {
		li.onclick = function() {
			var otherLis = this.parentElement.children;
			for (var k of otherLis) {
				k.className = "";
			}
			if (this.dataset.id == 'baseinfo') {
				this.className = 'active1';
			} else if (this.dataset.id == 'changepw') {
				this.className = 'active2';
			}


			var id = this.dataset.id;
			var div = document.getElementById(id);
			var otherDivs = div.parentElement.children;
			for (var otherDiv of otherDivs) {
				otherDiv.style.display = "none";
			}
			div.style.display = '';

		}
	}
})();


//增加收货地址弹窗
(function() {
	var add_address = document.getElementById('addAddress');
	add_address.addEventListener('click', showAdd);

	function showAdd(e) {
		e.preventDefault();
		var addressBox = document.getElementById('addressBox');
		addressBox.style.display = 'inline-block';
	}
})();

//关闭收货地址弹窗
(function() {
	var close_addressbox = document.getElementById('close_addressbox');
	close_addressbox.addEventListener('click', closeAdd);

	function closeAdd(e) {
		e.preventDefault();
		var addressBox = document.getElementById('addressBox');
		addressBox.style.display = 'none';
	}
})();

//订单修改数量&价格变化

// $(function() {
// 	$trs = $('.order-table tr');
// 	console.log($trs);
// 	$trs.on('mouseover', function() {
// 		var $this = $(this);
// 		var price_val = $this.find(".price>p:nth-of-type(2) span").html();
// 		var amount_val = $this.find(".amount>div span").html();
// 		var everyTotals = $this.find(".total>p span");

// 		everyTotals_val = (parseFloat(amount_val) * parseFloat(price_val)).toFixed(2);
// 		everyTotals.html(everyTotals_val);
// 		// Totals = $this.find(".order-bar>li:nth-child(1) span").html();
// 		console.log(everyTotals_val);
// 	})
// })
