$(document).ready(function() {
  reloadyemian(0);
  var type = null;
  $("nav li").each(function(index, value) { //动态的获取新闻类型，并传参给reloadyemian函数
    $(value).click(function() {
      type = index;
      reloadyemian(type);
    });

  });
});

function reloadyemian(type) { //传新闻类型给后台，后台返回该新闻类型的数据，前台动态加载
  $('.news-lists').empty();
  $.ajax({
    url: "php/sxxwlb.php",
    type: "post",
    data: {
      type: type
    },
    dataType: "json",
    success: function(data) {
    	console.log(data);
      data.forEach(function(value, index, array) {
        var $lists = $('.news-lists');
        var $list = $('<li></li>').addClass('news-list').prependTo($lists);
        var $newsimg = $('<div></div>').addClass('newsimg').appendTo($list);
        var $img = $('<img>').attr("src", value.newsimg).appendTo($newsimg);
        var $newspq = $("<div></div>").addClass('newspq').appendTo($list);
        var $newstitle = $('<div></div>').addClass('newstitle').text(value.newstitle).appendTo($newspq);
        var $newstime = $('<b></b>').addClass('newstime').text(value.newstime).appendTo($newspq);
        var $newssrc = $('<b></b>').addClass('newssrc').text(value.newssrc).appendTo($newspq);
      });
    }
  });

}