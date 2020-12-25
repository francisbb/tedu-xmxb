/*登陆注册切换 start */

(function navLoginChange(){
	var login_n=document.getElementById('login-n');
	var login_y=document.getElementById('login-y');
	login_n.addEventListener("click", changeLogin_n);
	login_y.addEventListener("click", changeLogin_y);
	function changeLogin_n(){
		alert('登陆成功!');
		login_n.style.display='none';
		login_y.style.display='block';
	}
	
	function changeLogin_y(){
		alert('退出成功!');
		login_n.style.display='block';
		login_y.style.display='none';
	}
})();

/*登陆注册切换 over */



