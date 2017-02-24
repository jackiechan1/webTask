//瀑布流效果函数
 function pubuliu() {
  //变量初始化区域
  var contWidth = $(window).width() - parseInt($("#container").css("marginLeft")) * 2; //整个瀑布流的宽度
  var imgWidth = $(".box:eq(0)").width(); //单张图片的宽度            
  var num = Math.floor(contWidth / imgWidth); //一行最多能摆几张图片
  var arr = [];

  $(".box").each(function(index, value) {

    if (index < num) {
      arr[index] = $(value).height(); //得到一行图片所有的高度值
    } 
    else {
      var boxMinHeight = Math.min.apply(null, arr); //计算出一行图片里面最低高度
      var boxMinIndex = $.inArray(boxMinHeight, arr); //最低高度的图片在一行中的位置
      $(value).css({ //下一行图片依次在上一行最低高度图片的位置下面摆放
        position: "absolute",
        left: imgWidth * boxMinIndex + parseInt($("#container").css("marginLeft")) + "px",   //左偏移量
        top: boxMinHeight + "px" //上偏移量  
      });
      arr[boxMinIndex] += $(value).height(); //一张图片摆放完之后产生新的高度,替换之前的高度
    }
    
  });
}

pubuliu();  //调用瀑布流效果函数

var wbtpzy={"data":         //图片的地址
    [ 
      {'src':"../pubuliu/img/1.jpg"},
      {'src':"../pubuliu/img/2.jpg"},
      {'src':"../pubuliu/img/3.jpg"},
      {'src':"../pubuliu/img/4.jpg"},
      {'src':"../pubuliu/img/5.jpg"},
      {'src':"../pubuliu/img/6.jpg"},
      {'src':"../pubuliu/img/7.jpg"},
      {'src':"../pubuliu/img/8.jpg"},
      {'src':"../pubuliu/img/9.jpg"},
      {'src':"../pubuliu/img/10.jpg"}
    ] 
}

function scrollgx(){        //判断滚动条是否超过零界点函数
  var boxlastTop=$(".box:last").offset().top;     //最后一个box距离文档的上偏移量
  var boxlastHeidht=Math.floor($(".box:last").height()/2); //最后一张图片的高度的一半
  var scrollTop=$(document).scrollTop();     //滚动条距离开始位置的上偏移量       
  var screenHeidht=$(window).height();   //文档的高度
  return  (boxlastTop+boxlastHeidht)<(scrollTop+screenHeidht);   
}
  
$(window).scroll(function() {     //当滚动条超过零界点时自动加载图片   

  if(scrollgx())
  {   $.each(wbtpzy.data,function(index,value){
        var boxDiv=$("<div></div>").addClass("box").appendTo($("#container")); //新增一个div放入#container里面
        var contentDiv=$("<div></div>").addClass("content").appendTo(boxDiv);  //在新增一个div放入.box里面 
        $("<img>").attr("src",$(value).attr('src')).appendTo(contentDiv);      //新增一个图片，并动态取到地址，放入.content里面  
        $("<p></p>").text("第"+(index+1)+"美女").appendTo(contentDiv);         
      });
      pubuliu();    //让新增的每行图片都是瀑布流的效果呈现
  } 

});


$(window).resize(function(){      //当文档宽度发生变化时重新布局

  $(".box").each(function(index,value){    //清除所有的$(.box)的style
            $(value).removeAttr("style");
  });

  pubuliu();  //调用瀑布流效果函数

});

 