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
			console.log(lastTotal)
			//3.5 将计算后的total，放入tfoot中最后一个td中。
			lastTotal[0].innerHTML = `￥${totalAll.toFixed(2)}`;
		}
	}
})();


//购物车修改数量&价格变化
(function() {
	var purchase_table = document.getElementById('purchase_table');
	var tds = purchase_table.getElementsByClassName('amount');
	console.log(tds);
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
				console.log(lastTotal)
				//3.5 将计算后的total，放入tfoot中最后一个td中。
				lastTotal[0].innerHTML = `￥${totalAll.toFixed(2)}`;
			}
		}
	}

})()


//删除收藏
