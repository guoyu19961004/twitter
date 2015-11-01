//语言转换 登陆显示
var language = document.getElementById("support-language");
var form = document.getElementById("login-form");
document.getElementById("nav").addEventListener("click", hide, false);

function hehe() {
	form.style.display = "block";
	document.getElementById("nav").removeEventListener("click", hide, false);
}

function toggleMenu() {
	if (form.style.display == "block") {
		hide();
		document.getElementById("nav").addEventListener("click", hide, false);
	}

	if (language.style.display == "block") {
		hide();
		document.getElementById("nav").addEventListener("click", hide, false);
	} else {
		document.getElementById("nav").removeEventListener("click", hide, false);
		showMenu();
		setTimeout('document.getElementById("nav").addEventListener("click", hide, false);', 500);
	}
}

function toggleLogin() {
	if (language.style.display == "block") {
		hide();
		document.getElementById("nav").addEventListener("click", hide, false);
	}
	if (form.style.display == "block") {
		hide();
		document.getElementById("nav").addEventListener("click", hide, false);
	} else {
		document.getElementById("nav").removeEventListener("click", hide, false);
		showForm();
		document.forms.login.name.focus();
		setTimeout('document.getElementById("nav").addEventListener("click", hide, false);', 500);
	}
}

function showMenu() {
	if (language.style.display == "block") return false;
	language.style.display = "block";
}

function hide() {
	if (language.style.display == "block") language.style.display = "none";
	else if (form.style.display == "block") form.style.display = "none";
	else return false;
}

function showForm() {
	if (form.style.display == "block") return false;
	form.style.display = "block";
}
//hover显示
var home = document.getElementById("home");
var blackSpan = document.getElementById("black-span");
var timer;
home.onmouseover = function() {
	if (window.innerWidth <= 940) {
		timer = setTimeout('blackSpan.style.display="block";', 300)
	}
}
home.onmouseout = function() {
	if (window.innerWidth <= 940) {
		clearTimeout(timer);
		blackSpan.style.display = "none";
		// home.style.overflow="hidden";
	}
}
//表单验证
function loginCheck() {
	var name = login.name;
	var temp1 = new RegExp("[A-Za-z0-9]", "g");
	var temp2 = new RegExp("^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$", "g");
	var temp3 = new RegExp("/^1\d{10}$", "g");
	if (!temp1.test(name.value) && !temp2.test(name.value) && !temp3.test(name.value)) {
		if (!temp1.test(name.value)) {
			alert("用户名中包含特殊字符！");
			return false;
		}
		if (!temp2.test(name.value)) {
			alert("邮箱格式不正确！");
			return false;
		}
		if (!temp3.test(name.value)) {
			alert("手机号格式不正确！");
			return false;
		}
	}
	var password = login.password;
	if (!temp1.test(password.value)) {
		alert("密码不正确！");
		return false;
	}
	if (!(name.value == "guoyu" && password.value == "guoyu")) {
		alert("用户名或密码不正确！");
		return false;
	}
	return true;
}
//输入实时判断
var status;

function showList(arr, k) {
	for (var i = 0; i < arr.length; i++) {
		if (i == k) arr[i].style.display = "block";
		else arr[i].style.display = "none";
	}
}

function allHide(parent) {
	var list = parent.getElementsByTagName('p');
	for (var i = 0; i < list.length; i++) list[i].style.display = "none";
}
var nameP = document.getElementById("form-name").getElementsByTagName("p");

function nameCheck() {
	var name = document.getElementById('username');
	var temp1 = new RegExp("^[\\w]+$", "g");
	var temp2 = new RegExp("[Tt][Ww][Ii][Tt][Tt][Ee][Rr]", "g");
	var temp3 = new RegExp("^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$", "g");
	if (!name.value) {
		showList(nameP, 1);
		status = false;
	} else if (temp2.test(name.value)) {
		showList(nameP, 3);
		status = false;
	} else if (!temp1.test(name.value)) {
		showList(nameP, 2);
		status = false;
	} else {
		showList(nameP, 0);
		status = true;
	}
}
var epP = document.getElementById("form-ep").getElementsByTagName("p");

function epCheck() {
	showList(epP, 1);
	document.getElementById("phone-information").style.display = "none";
	var ep = document.getElementById('ep');
	var temp3 = new RegExp("^[0-9]+$", "g");
	var temp1 = new RegExp("^1\\d{10}$", "g");
	var temp2 = new RegExp("^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$", "g");
	if (!ep.value) {
		showList(epP, 4);
		status = false;
	} else {
		setTimeout(function() {
			if (!ep.value) {
				showList(epP, 4);
				status = false;
			} else if (temp3.test(ep.value)) {
				if (!temp1.test(ep.value)) {
					showList(epP, 3);
					status = false;
				} else {
					if (ep.value == "18973707225") {
						showList(epP, 6);
						status = false;
					} else {
						showList(epP, 0);
						status = true;
						document.getElementById("phone-information").style.display = "block";
					}
				}
			} else if (!temp2.test(ep.value)) {
				showList(epP, 2);
				status = false;
			} else if (ep.value = "1923588660@qq.com") {
				showList(epP, 5);
				status = false;
			} else {
				showList(epP, 0);
				status = true;
			}
		}, 2000);
	}
}
var passP = document.getElementById("form-pass").getElementsByTagName("p");
var bar = document.getElementById("progress-bar");
var nowWidth = bar.style.width;

function passCheck() {
	var pass = document.getElementById('pass');
	var temp = new RegExp("(\\S)\\1{5,}", "g");
	if (!pass.value) {
		showList(passP, 2);
		status = false;
		bar.style.width = 0;
	} else if (pass.value.length < 6) {
		showList(passP, 1);
		status = false;
		bar.style.width = 0;
	} else if (temp.test(pass.value)) {
		showList(passP, 3);
		status = false;
		bar.style.width = 0;
	} else {
		showList(passP, 0);
		status = true;
		setTimeout('bar.style.width=pass.value.length/0.25+"%";', 1000);
	}
}

function getData() {
	var data=window.location.search.split("&");
	for(var i=0;i<data.length;i++){
		var value=data[i].split("=");
		if(value[1]) {
			if(i==0) {
				document.getElementById('username').value=decodeURIComponent(value[1]);
				nameCheck();
			} 
			if(i==1) {
				document.getElementById('ep').value=decodeURIComponent(value[1]);
				epCheck();
			}
			if(i==2){
				document.getElementById('pass').value=decodeURIComponent(value[1]);
				passCheck();
			}
			console.log(decodeURIComponent(value[1]));
		} 
	}
}