/*数据规范验证及获取值 start*/

function ope() {
  regexp = /^[-?\d]+\.?\d*$/;
  if (regexp.test(document.getElementById("num1").value)) {
    var num1 = parseFloat(document.getElementById("num1").value); //条件成立获取第一个输入框的值
    if (document.getElementById("operator").value == "请选择运算符") {
      alert("您忘记选择运算符了");
    } else {
      var operator = document.getElementById("operator").value; //条件成立获取运算符的值
      if (regexp.test(document.getElementById("num2").value)) {
        var num2 = parseFloat(document.getElementById("num2").value); //条件成立获取第二个输入框的值
        var sum = calculate(num1, num2, operator); //调用函数，并传参
      } else {
        alert("第二个输入框的值有误");
      }
    }
  } else {
    alert("第一个输入框的值有误");
  }
} /*数据规范验证及获取值 end*/

/*运算 start*/

function calculate(i, z, y) {
  switch (y) {
  case "+":
    return alert(i + z);
  case "-":
    return alert(i - z);
  case "*":
    return alert(i * z);
  case "/":
    if (z == 0) {
      return alert("除数不能为零");
    } else {
      return alert(i / z);
    }
  default:
    break;
  }
} /*运算 end*/