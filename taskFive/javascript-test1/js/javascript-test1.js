/*input聚焦事件 start*/
document.getElementById('grade').focus();
document.getElementById('grade').onblur = function() {
	document.getElementById("focus").style.display = "none";
}
document.getElementById('grade').onfocus = function() {
	document.getElementById("focus").style.display = "block";
}
/*input聚焦事件 end*/

/*判断学生等级及input输入验证 start*/
function virification() {
	var grade = document.getElementById("grade").value;
	var regexp = /^[0-9]{1,2}$|^100$/;
	if (regexp.test(grade)) {
		var gradeint=parseInt(grade);
		if (gradeint <= 100 && gradeint >= 90) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "一等生");
		} else if (gradeint >= 80) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "二等生");
		} else if (gradeint >= 70) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "三等生");
		} else if (gradeint >= 60) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "四等生");
		} else if (gradeint >= 50) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "五等生");
		} else if (gradeint >= 40) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "六等生");
		} else if (gradeint >= 30) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "七等生");
		} else if (gradeint >= 20) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "八等生");
		} else if (gradeint >= 10) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "九等生");
		} else if (gradeint >= 0) {
			alert("您的成绩是:" + gradeint + "分" + "\n" + "学生等级：" + "十等生");
		}
	} else {
		alert("成绩不合法，请按要求重新输入！");
	}
}
/*判断学生等级及input输入验证 end*/