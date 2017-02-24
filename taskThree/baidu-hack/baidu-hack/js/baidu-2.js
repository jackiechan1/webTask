/*设置 js start */
document.getElementsByClassName('py')[0].onmouseover = function() {
	document.getElementsByClassName('bdpfmenu')[0].style.display = "block";


	document.getElementsByClassName('bdpfmenu')[0].onmouseover = function() {
		document.getElementsByClassName('bdpfmenu')[0].style.display = "block";
	}
	document.getElementsByClassName('bdpfmenu')[0].onmouseout = function() {
		document.getElementsByClassName('bdpfmenu')[0].style.display = "none";

	}
}
document.getElementsByClassName('py')[0].onmouseout = function() {
	document.getElementsByClassName('bdpfmenu')[0].style.display = "none";
} /*设置 js end */


/*更多产品 js start */
document.getElementsByClassName('bry')[0].onmouseover = function() {
	document.getElementsByClassName('bdbriimg')[0].style.display = "block";


	document.getElementsByClassName('bdbriimg')[0].onmouseover = function() {
		document.getElementsByClassName('bdbriimg')[0].style.display = "block";
	}
	document.getElementsByClassName('bdbriimg')[0].onmouseout = function() {
		document.getElementsByClassName('bdbriimg')[0].style.display = "none";

	}
} /*更多产品 js end */

/*百度一下 js start */

document.getElementsByClassName('bdyx-box')[0].onmouseover = function() {

	document.getElementsByClassName('bdyx-text')[0].setAttribute("class", "bdyx-text btnhover");

}

document.getElementsByClassName('bdyx-box')[0].onmouseout = function() {

	document.getElementsByClassName('bdyx-text')[0].setAttribute("class", "bdyx-text");

} /*百度一下 js end */

/*照相机 js start */

document.getElementsByClassName('soutu-btn')[0].onclick = function() {

	document.getElementsByClassName('soutu-layer')[0].style.display = "block"

}

document.getElementsByClassName('soutu-close')[0].onclick = function() {

	document.getElementsByClassName('soutu-layer')[0].style.display = "none"

}/*照相机 js end */