var jieguo = document.getElementsByTagName("input")[0];
var yunsuan = document.getElementById("formula");
var aA = document.getElementsByTagName("a");
var panduan = true;
var operator = "";
var s=false;
for (var i = 0; i < aA.length; i++) {
  aA[i].onclick = function() { //所有的a标签绑定单击事件，获取它的值

    switch (this.innerText) {

    case "c":
      //重置
      chongzhi();
      break;

    case "back":
      //回退一格,字符只有一位时重置为0
      if (jieguo.value.length == 1) {
        jieguo.value = 0;
      } else {

        jieguo.value = (jieguo.value).substring(0, jieguo.value.length - 1)
      }
      break;

    case "sin":
      //求正弦值
      if (jieguo.value != 0) {
        jieguo.value = parseFloat(Math.sin(jieguo.value).toFixed(8));
      }
      break;

    case "cos":
      if (jieguo.value != 0) //求余弦值
      {
        jieguo.value = parseFloat(Math.cos(jieguo.value).toFixed(8));
      }
      break;

    case "%":
      panduan = true;
      count("%")
      break;

    case "/":
      panduan = true;
      count("/")
      break;

    case "*":
      panduan = true;
      count("*")
      break;

    case "-":
      panduan = true;
      count("-")
      break;

    case "+":
      panduan = true;
      count("+")
      break;

    case "+/-":
      if (jieguo.value != 0) {
        if (jieguo.value.substr(0, 1) == "-") {
          jieguo.value = jieguo.value.replace("-", "");
        } else {
          jieguo.value = "-" + jieguo.value;
        }
      }
      break;

    case "=":

      if (/\/0$/.test(yunsuan.value + jieguo.value)||/%0$/.test(yunsuan.value + jieguo.value)) //除数不能为零
      {
        yunsuan.value = "除数不能为零,2秒后自动重置"
        setTimeout(chongzhi, 2000)
        break;
      }
      if (jieguo.value.substr(0, 1) == "-") //负数加括号
      {
        jieguo.value = "(" + jieguo.value + ")";
      }
      jieguo.value = parseFloat(eval(yunsuan.value + jieguo.value).toFixed(8)); //使用eval函数 ，运算整个表达式的值
      if (jieguo.value.length > 20) {
        jieguo.value = jieguo.value.substring(0, 20); //运算结果最大长度不超过20位,包含小数点
      }
      panduan = false;
      s=true;
      count();
      break;

    case ".":
      if (jieguo.value.search(/[\.]/) != -1) //阻止输入数字中包含多个小数点
      break;

    default:
      if(s&&/[0-9]/.test(this.innerText)) //等于之后按的第一个字符是数字的话重置结果为0,重新计算
      {
        jieguo.value = 0;
        s = false;
        operator="";
      }
      if (jieguo.value == 0 && jieguo.value.length < 2 && this.innerText != ".") //初始化为空
      {
        jieguo.value = "";
      }
      if (/[\%\/\*\-\+]/.test(yunsuan.value) && panduan) //新的数字
      {
        jieguo.value = "";
        jieguo.value += this.innerText;
        panduan = false;
      } else if (jieguo.value.length < 10)      //数字不能超过10位
       { 
        jieguo.value += this.innerText; //数字位数累加
      }
      break;
    }
  }
}

function count(a) {
  if (panduan) {
    if (operator == "") {
      yunsuan.value = jieguo.value + a; //整个表达式的值
      jieguo.value = jieguo.value.replace(/\%\/\*\-\+/, ''); //数字的值
    } else {

      if (/\/0$/.test(yunsuan.value + jieguo.value)||/%0$/.test(yunsuan.value + jieguo.value)) //除数不为零
      {
        yunsuan.value = "除数不能为零,2秒后自动重置"
        setTimeout(chongzhi, 2000)
      } else {
        if (jieguo.value.substr(0, 1) == "-") //负数加括号
        {
          jieguo.value = "(" + jieguo.value + ")";
        }

        var jieguo2 = jieguo.value; //一个表达式里面出现第二个运算符时，执行=的作用。可以重复运算！
        
        jieguo.value = parseFloat(eval(yunsuan.value + jieguo.value).toFixed(8)); //运算结果  
        if((operator=="-"||operator=="+")&&(a=="*"||a=="/"||a=="%"))                        
        {
          yunsuan.value = "("+yunsuan.value + jieguo2+")" + a;  //表达式
        } else{
          yunsuan.value = yunsuan.value + jieguo2 + a;  
        }
 
      }

    }

  } else {
    yunsuan.value = ""; //点击等于号之后重置之前的表达式为空          
  }
  operator = a;
}

function chongzhi() { //重置函数
  yunsuan.value = "";
  jieguo.value = 0;
  operator="";
}