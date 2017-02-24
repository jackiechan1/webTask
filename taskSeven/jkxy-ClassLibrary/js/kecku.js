$(window).load(function() {

  /*  header搜索特效  start  */

  $("#search-btn").click(function() { //点击搜索按钮增加class:scale
    $("#searchbox").addClass("scale");

  });
  $("#close-btn").click(function() { //点击关闭按钮移除class:scale

    $("#searchbox").removeClass("scale");
  });


  /*  header搜索特效  end  */


  /*  视频样式切换 start  */
  $(".kuai-icon").click(function() {
    $("#changeid").attr("class", "lesson-list");
    $(".lesson-infor p").css({
      display: "none",
      height: "0"
    });
    $(".zhongji").css("display", "none");
    $(".learn-number").css("display", "none");

  });

  $(".list-icon").click(function() {

    $("#changeid").attr("class", "lesson-list2");

    $(".lesson-infor p").css({
      display: "block",
      height: "36px"
    });
    $(".zhongji").css("display", "block");
    $(".learn-number").css("display", "block");

  });


  /*  视频样式切换 end  */


  /*  视频特效  start  */
  $("#changeid li").each(function(index, value) {
    $(value).hover(

    function() {
      $(this).find(".lesson-shoucang").css("display", "block");
      $(this).find(".lessonplay").stop(true, true).fadeIn("1000");
      if ($("#changeid").attr("class") == "lesson-list") {
        $(this).find(".lesson-infor").stop(true, false).animate({
          height: "175px"
        }, "normal");
        $(this).find(".zhongji").stop(true, false).fadeIn("fast");
        $(this).find(".lesson-infor p").stop(true, false).fadeIn("fast");
        $(this).find(".lesson-infor p").stop(true, false).animate({
          opacity: "1",
          height: "52px"
        }, "fast");
      }
    },


    function() {

      $(this).find(".lesson-shoucang").css("display", "none");
      $(this).find(".lessonplay").stop(true, true).fadeOut("1000");
      if ($("#changeid").attr("class") == "lesson-list") {
        $(this).find(".lesson-infor").stop(true, false).animate({
          height: "88px"
        }, "slow");
        $(this).find(".lesson-infor p").stop(true, false).fadeIn("normal");
        $(this).find(".zhongji").css("display", "none");
        $(this).find(".lesson-infor p").stop(true, false).animate({
          opacity: "0",
          height: "0px"
        }, "normal");
      }
    }


    );


  });

  /*  视频特效  end  */


  /*  回到顶部  start  */

  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $(".top").css("display", "block");

    } else {
      $(".top").css("display", "none");
    }
  });


  $(".gotop").click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 200);
  });

/*  回到顶部  end  */
});