var attr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var obj = {};
var max = 0;
var y = 0;

/*生成每个字符在数组中出现次数的对象 start*/
for (var i = 0; i < attr.length; i++) {
  if (obj[attr[i]]) {
    obj[attr[i]] += 1;
  } 
  else {
    obj[attr[i]] = 1
  }
}
/*生成每个字符在数组中出现次数的对象 end*/

/*找出数组中出现次数最多的字符 start*/
for (var index in obj) {
  if (obj[index] > max) {
    max = obj[index];
  }
}
/*找出数组中出现次数最多的字符 end*/

/*打印出现最多的字符和出现的个数以及每一个所在的顺序。start*/
for (var index in obj) {
  if (max == obj[index]) {
    console.log("数组中出现最多的字符是:" + index + "\n" +index+"在数组中出现的次数是：" + max);
    for (var x = 0; x < attr.length; x++) {
      if (index == attr[x]) {
        y += 1;
        console.log(index + "在数组中第" + y + "次出现的位置是：" + (x + 1));
      }
    }
  }
}
/*打印出现最多的字符和出现的个数以及每一个所在的顺序。end*/