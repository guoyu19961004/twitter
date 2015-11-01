//搜索框效果
document.forms.search.searchContent.onfocus = function() {
	document.getElementById('search-icon').style.backgroundColor = "#fff";
}
document.forms.search.searchContent.onblur = function() {
		document.getElementById('search-icon').style.backgroundColor = "#efefef";
	}
	//账号资料
var introduct = document.getElementById('introduct');
var user = document.getElementById('user');
introduct.previousElementSibling.addEventListener("mouseover", checkUser, false);
document.getElementById("nav").addEventListener("click", hideMenu, false);

function toggleMenu() {
	if (user.style.display == "block") {
		hideMenu();
		document.getElementById("nav").addEventListener("click", hideMenu, false);
	} else {
		document.getElementById("nav").removeEventListener("click", hideMenu, false);
		showMenu();
		setTimeout('document.getElementById("nav").addEventListener("click", hideMenu, false);', 500);
	}
}

function showMenu() {
	if (user.style.display == "block") return false;
	user.style.display = "block";
	introduct.style.display = "none";
	introduct.previousElementSibling.removeEventListener("mouseover", checkUser, false);
}

function hideMenu() {
	if (user.style.display == "none") return false;
	user.style.display = "none";
	introduct.previousElementSibling.addEventListener("mouseover", checkUser, false);
}

function checkUser() {
	if (user.style.display == "block") introduct.style.display = "none";
	else introduct.style.display = "block";
}
introduct.previousElementSibling.onmouseout = function() {
		introduct.style.display = "none";
	}
	//文本输入
function showArea(ele) {
	ele.style.minHeight = 80 + "px";
	ele.nextElementSibling.style.display = "none";
	console.log(ele.parentNode.nextElementSibling);
	ele.parentNode.nextElementSibling.style.display = "block";
}

function hideArea(ele) {
	if (!ele.value) {
		ele.style.minHeight = 20 + "px";
		ele.nextElementSibling.style.display = "block";
		console.log(ele.parentNode.nextElementSibling);
		ele.parentNode.nextElementSibling.style.display = "none";
	}
}

// function countNumber(ele) {
// 	// body...
// 	var temp = new RegExp("\\S", "g");
// 	if (!temp.test(ele.value))
// }