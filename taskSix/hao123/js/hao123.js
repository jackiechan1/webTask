document.getElementById("skin-btn").onclick = function() {				//换肤功能显示和隐藏
	if (document.getElementById("hao123-skin").style.display == "block") {
		document.getElementById("hao123-skin").style.display = "none";
	} else {
		document.getElementById("hao123-skin").style.display = "block";
	}
	return false;	
};


function cz_mask() {			//所有换肤功能图片变暗

	for (var y = 0; y < item.length; y++) {							
		item[y].getElementsByClassName("mask")[0].style.display = "block";
	}

}

function cz_select() {		   //隐藏所有换肤功能图片左上交的绿色勾

	for (var z = 0; z < item.length; z++) {
		item[z].getElementsByClassName("select")[0].style.visibility = "hidden";
	}
}

var screens = document.getElementsByClassName("screens")[0];

var item = screens.getElementsByTagName("a");

   /*点击小图片切换背景图片 start*/
for (var i = 0; i < item.length; i++) {

	item[i].onclick = function() {					

		if (this.getElementsByClassName("mask")[0].style.display == "none")

		{

			this.getElementsByClassName("mask")[0].style.display = "block";

		} else {

			cz_mask();

			this.getElementsByClassName("mask")[0].style.display = "none";
		}

		if (this.getElementsByClassName("select")[0].style.visibility == "visible") {

			this.getElementsByClassName("select")[0].style.visibility = "hidden";
		} else {
			cz_select();
			this.getElementsByClassName("select")[0].style.visibility = "visible";
		}
		if (this.getElementsByClassName("mask")[0].style.display == "none") {
			document.getElementById("huanfu").style.background = 'url(img/bj'+this.title+'.jpg) center top / 100% no-repeat ';
			document.getElementsByClassName("header")[0].style.background = "";
		} else {
			document.getElementById("huanfu").style.background = "";
			document.getElementsByClassName("header")[0].style.background = "url(img/hf_body_bg.png) repeat-x left top";
		}
		return false;
	}

}
/*点击小图片切换背景图片 end*/

document.getElementsByClassName("cansel")[0].onclick = function() {   //取消背景图片的切换

	document.getElementById("hao123-skin").style.display = "none";
	document.getElementById("huanfu").style.background = "";
	document.getElementsByClassName("header")[0].style.background = "url(img/hf_body_bg.png) repeat-x left top";
	cz_select();
	cz_mask();
	if (localStorage.getItem("bj") != null && localStorage.getItem("tb_bj") != null) {
		document.getElementById("huanfu").style.background = localStorage.getItem("bj");
		document.getElementsByClassName("header")[0].style.background = localStorage.getItem("tb_bj");
	}
	return false
}

document.getElementById("save").onclick = function() {                 //保存背景图片的切换

	document.getElementById("hao123-skin").style.display = "none";
	var bj = document.getElementById("huanfu").style.background;
	var tb_bj = document.getElementsByClassName("header")[0].style.background;
	localStorage.setItem("bj", bj);
	localStorage.setItem("tb_bj", tb_bj);
	return false
};


if (localStorage.getItem("bj") != null && localStorage.getItem("tb_bj") != null) {	//重新开打页面时自动切换上面保存的背景图片
	document.getElementById("huanfu").style.background = localStorage.getItem("bj");
	document.getElementsByClassName("header")[0].style.background = localStorage.getItem("tb_bj");
}