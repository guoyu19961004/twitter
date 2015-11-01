//登录页语言切换
var language = document.getElementById("support-language");
document.getElementById("nav").addEventListener("click", hideMenu, false);

function toggleMenu() {
	if (language.style.display == "block") {
		hideMenu();
		document.getElementById("nav").addEventListener("click", hideMenu, false);
	} else {
		document.getElementById("nav").removeEventListener("click", hideMenu, false);
		showMenu();
		setTimeout('document.getElementById("nav").addEventListener("click", hideMenu, false);', 500);
	}
}

function showMenu() {
	if (language.style.display == "block") return false;
	language.style.display = "block";
}

function hideMenu() {
	if (language.style.display == "none") return false;
	language.style.display = "none";
}
//登录页图片滚动
var bgImg = document.getElementById("bg-img").getElementsByTagName("img");
var bgImgList = document.getElementById("bg-img");
var text = document.getElementById("text-list").getElementsByTagName("li");
var index = 0;
var time;

function getFirstChild(parent) {
	var ele;
	for (var i = 0; i < parent.childNodes.length; i++) {
		if (parent.childNodes[i].nodeType == 1) {
			ele = parent.childNodes[i];
			break;
		}
	}
	return ele;
}

function nextImg() {
	var firstEle = bgImgList.removeChild(getFirstChild(bgImgList));
	bgImgList.appendChild(firstEle);
}

function change() { //更改文本文字和图片
	text[index].className = "";
	text[index + 1 > text.length - 1 ? 0 : index + 1].className = "on";
	bgImg[0].className = "hide-picture";
	setTimeout('bgImg[0].className="";bgImg[1].className="show-picture";nextImg();', 500);
	setTimeout('bgImg[0].className="on";', 1000);
	if (index == text.length - 1) index = -1;
	index++;
}

function play() {
	// body...
	time = setInterval(change, 5000);
}

function stop() {
	// body...
	clearInterval(time);
}
play();
window.onfocus = play;
window.onblur = stop;
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
var test="123";
function registerCheck() {
	var name = register.name;
	var email = register.email;
	var password = register.password;
	var temp1 = new RegExp("[A-Za-z0-9]", "g");
	var temp2 = new RegExp("^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$", "g");
	if (!temp1.test(name.value) || !temp2.test(email.value) || !temp1.test(password.value) || !name.value || !email.value || !password.value) {
		//window.open("register.html");
		register.action = "register.html";
		return true;
	}
	return true;
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
	}
}