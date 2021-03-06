$(document).ready(function() {
  //全局变量初始化
  var img_src = "";
  var i_arr = new Array();
  var jishu = -1;
  var panduan = true;
  var i = -1;
  //设置下拉
  $("#py").hover(function() {
    $(".bdpfmenu").css("display", "block");
    $(".bdpfmenu").hover(function() {
      $(this).css("display", "block");
    }, function() {
      $(this).css("display", "none");
    });
  }, function() {
    $(".bdpfmenu").css("display", "none");
  });

  //更多产品下拉
  $(".bry").hover(function() {
    $(".bdbriimg").css("display", "block");
    $(".bdbriimg").hover(function() {
      $(this).css("display", "block");
    }, function() {
      $(this).css("display", "none");
    });
  });

  //个人中心下拉
  $(".lb").hover(function() {
    $("#s_user_name_menu").css("display", "block");
    $("#s_user_name_menu").hover(function() {
      $(this).css("display", "block");
    }, function() {
      $(this).css("display", "none");
    });
  }, function() {
    $("#s_user_name_menu").css("display", "none");
  });
  //单击消息事件
  $(".s-msg").click(function() {
    if ($("#s_mod_msg").css("display") == "none") {
      $("#s_mod_msg").css("display", "block")
    } else {
      $("#s_mod_msg").css("display", "none")
    }

  });

  //换肤单击事件
  $(".title:eq(1)").click(function() {
    $("#s_top_wrap").fadeOut(300);
    $("#s_upfunc_menus").fadeOut(300);
    setTimeout(function() {

      $("#s_skin_layer").slideDown(300);
    }, 300);
  });

  //换肤功能实现
  $('.skin-img-list  li').each(function(index, value) {
    $(value).click(function() {
      var sfy_no_img = $(this).attr("class").indexOf("no-img");

      if (sfy_no_img == -1) {
        img_src = $(this).children("img").attr("src");
        img_dizhi = img_src.replace("skin_plus", "skin");
        $(".s-skin-container").attr("style", 'background-color:#404040;background-image:url(' + img_dizhi + ')');
        $("#s_top_wrap").attr("class", "s-top-huanfu");
        $(".logo img").attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png");
        $("#su").attr("class", "bdyx_huanfu");
        $(".input-box").attr("class", "input-box-huanfu");
        $("#bottom_container").css("color", "#fff")
        $("#bottom_container a").css("color", "#fff")
        $(".bg-hideOrShowAjax").css("visibility", "visible");
        $(".skin-no-bg").css("display", "");
        $('.skin-bg-png24-icon').attr("style", "");
        $('.skin-bg-png24-icon:eq(' + index + ')').css("display", "block");
        i = index;
        localStorage.setItem("index", index); //保存点击li的index放入localStorage
      }
    });
  });


  //不使用皮肤
  $(".skin-no-bg").click(function() {
    $('.skin-bg-png24-icon:eq(' + i + ')').attr("style", "");
    $(".s-skin-container").css("background", "none");
    $("#s_top_wrap").attr("class", "s-top-wrap");
    $(".logo img").attr("src", "img/bd_logo1.png");
    $("#su").attr("class", "bdyx-text");
    $(".input-box-huanfu").attr("class", "input-box");
    $("#bottom_container").css("color", "")
    $("#bottom_container a").css("color", "")
    $(".bg-hideOrShowAjax").css("visibility", "hidden");
    $(".skin-no-bg").css("display", "none");
    img_src = "";
    localStorage.removeItem("index");
  });

  //收起换肤功能
  $(".title:eq(5)").click(function() {

    $("#s_skin_layer").slideUp(300);

    setTimeout(function() {
      $("#s_top_wrap").fadeIn(300);
      $("#s_upfunc_menus").fadeIn(300);
    }, 200);
    bcllgdtp();
  });

  function bcllgdtp(){      //保存浏览过的图片

     if (localStorage.i_arr_lS) //判断保存的图片里面是否有重复的
    {
      i_arr_z = localStorage.i_arr_lS.split(',')
      for (var num in i_arr_z) {
        if (i_arr_z[num] == i) {
          panduan = false;
          break;
        }
        else{
          panduan = true;
        }
      }
    }
    if (i != -1 && img_src != "" && panduan && i < 108) 
    {
      if (localStorage.jishu_lS) {
        jishu = parseInt(localStorage.jishu_lS);
        jishu += 1;
        if (jishu % 27 == 0) {
          jishu = 0;
        }
      } else {
        jishu += 1;
      }
      if (localStorage.i_arr_lS) {
        var i_arr_z = localStorage.i_arr_lS.split(',')
        for (var num in i_arr_z) {
          i_arr[num] = i_arr_z[num];
        }
        i_arr[jishu] = i;
      } else {
        i_arr[jishu] = i;
      }
      localStorage.setItem("i_arr_lS", i_arr);
      localStorage.setItem("jishu_lS", jishu);
      $('.content-9999 li:eq(' + jishu + ') img').attr("src", img_src);
      $('.content-9999 li:eq(' + jishu + ')').removeClass("no-img");
    }
  }

  if (localStorage.i_arr_lS) //最新使用
  {
    var i_arr_z = localStorage.i_arr_lS.split(',')
    for (var num in i_arr_z) {
      i_arr[num] = i_arr_z[num];
    }

    for (var num in i_arr) {
      var zxsy_src = $('.skin-img-list  li:eq(' + i_arr[num] + ')').children("img").attr("src");

      $('.content-9999 li:eq(' + num + ') img').attr("src", zxsy_src);
      $('.content-9999 li:eq(' + num + ')').removeClass("no-img");
    }

    if (localStorage.index) {
      $('.skin-img-list  li:eq(' + localStorage.index + ')').click(); //自动点击     
    }
  }


  //换肤热门换图(翻页)
  $(".s-skin-page .skin-page-number").each(function(index, value) {
    $(value).click(function() {
      $("#s_skin_layer_cell").attr("class", 's-skin-layer-cell show-page-' + index + ' show-nav-1000');
      $(this).siblings().removeClass("choose-page-btn");
      $(this).addClass("choose-page-btn");

    });

  });

  $(".page-next").click(function() {

    var xiaobiao = parseInt($("#s_skin_layer_cell").attr("class").substr(28, 1));
    if (xiaobiao == 3) {
      xiaobiao -= xiaobiao;
    } else {
      xiaobiao += 1;
    }
    $("#s_skin_layer_cell").attr("class", 's-skin-layer-cell show-page-' + xiaobiao + ' show-nav-1000');
    $(".s-skin-page .skin-page-number").each(function(index, value) {
      if (index == xiaobiao) {
        $(value).siblings().removeClass("choose-page-btn");
        $(value).addClass("choose-page-btn");
      }
    });
  });


  $(".page-pre").click(function() {

    var xiaobiao = parseInt($("#s_skin_layer_cell").attr("class").substr(28, 1));
    if (xiaobiao == 0) {
      xiaobiao += 3;
    } else {
      xiaobiao -= 1;
    }
    $("#s_skin_layer_cell").attr("class", 's-skin-layer-cell show-page-' + xiaobiao + ' show-nav-1000');
    $(".s-skin-page .skin-page-number").each(function(index, value) {
      if (index == xiaobiao) {
        $(value).siblings().removeClass("choose-page-btn");
        $(value).addClass("choose-page-btn");
      }
    });
  });



  //换肤游戏换图(翻页)
  $(".s-skin-towTabNav li").each(function(index, value) {
    $(value).click(function() {
      $(this).siblings().attr("class", "")
      $(this).attr('class', "cur");
      $('.content-1012 ul:eq(' + index + ')').siblings().removeClass("cur");
      $('.content-1012 ul:eq(' + index + ')').addClass("cur");
    });
  });

  //换肤功能导航
  $(".s-skin-nav li").each(function(index, value) {

    $(value).click(function() {
      $(this).siblings().removeClass("choose-nav");
      $(this).addClass("choose-nav");
      if (index == 0) {
        $("#s_skin_layer").attr("class", "s-skin-layer");
        $("#s_skin_layer_cell").attr("class", "s-skin-layer-cell show-page-0 show-nav-1000");
        $(".s-skin-towTabNav").attr("style", "");
        $(".s-skin-page").attr("style", "");
        $(".s-skin-preview").css("display", "")
      } else if (index == 1) {
        $("#s_skin_layer").addClass("s-towTabNav-skin");
        $("#s_skin_layer_cell").attr("class", "s-skin-layer-cell show-page-0 show-nav-1012");
        $(".s-skin-towTabNav").css("display", "block");
        $(".s-skin-page").css("display", "none");
        $(".s-skin-preview").css("display", "")
      } else if (index == 3) {
        $("#s_skin_layer").attr("class", "s-skin-layer");
        $("#s_skin_layer_cell").attr("class", "s-skin-layer-cell hide-choose-img show-page-0 show-nav-9999");
        $(".s-skin-page").css("display", "none");
        $(".s-skin-preview").css("display", "none")
        $(".s-skin-towTabNav").css("display", "");
      }
    });
  });
  //换肤功能预览

  $('.skin-img-list  li:not(.no-img)').each(function(index, value) {

    $(value).hover(function() {
      var img_src = $(this).children("img").attr("src");
      $("#s_skin_preview_skin").attr("src", img_src);
      $(".preview-pageUI").css("backgroundPosition", "0 0")
    }, function() {
      $("#s_skin_preview_skin").removeAttr("src");
      $(".preview-pageUI").css("backgroundPosition", "-275px 0")
    });
  });

  //主要内容导航切换
  $(".s-menu-item").each(function(index, value) {
    $(value).click(function() {
      if (index != 0) {
        $(".s-menu-mine").removeClass("current");
        $(this).siblings().removeClass("current");
        $(this).addClass("current");
        $('#s_content_' + index + '').css("display", "block");
        $('#s_content_' + index + '').siblings().css("display", "none");
      } else {
        $("#s_content_100").css("display", "block");
        $("#s_content_100").siblings().css("display", "none");
        $(".s-menu-mine").addClass("current");
        $(".s-menu-item").siblings().removeClass("current");
      }

    });

  });

  //最高返利mouse事件
  $(".fanli-nav").each(function(index, value) {

    $(value).hover(function() {
      $(this).children(".rebate").addClass("rebate-hover");

      $(this).children(".rebate").css("display", "block");
    }, function() {
      $(this).children(".rebate").siblings().removeClass("rebate-hover");
      $(this).children(".rebate").css("display", "none");
    });

  });
  //超级返mouse事件
  $("#cjf").hover(function() {
    $(this).children(".arrow").addClass("up");
    $(this).addClass("white");
    $(".wrap-subtab a").addClass("in");
  }, function() {
    $(this).children(".arrow").removeClass("up");
    $(".wrap-subtab a").removeClass("in");
    $(this).removeClass("white");

  });
  //导航设置click事件
  $("#s_menu_set").click(function(e) {
    e.stopPropagation();
    $(".sui-tips-scene-recommend").css("display", "none");
    if ($("#sui-dialog").css("display") == "none") {
      $("#sui-dialog").css("display", "block");
      $("#sui-dialog-body").css("display", "block");
      $("#sui-dialog").animate({
        height: "186px"
      }, {
        duration: 300,
        step: function(now, fx) {
          $("#sui-dialog").css("height", now);
        }
      });

    } else {

      $("#sui-dialog").animate({
        height: "0"
      }, {
        duration: 200,
        step: function(now, fx) {
          $("#sui-dialog").css("height", now);
        }
      });
      setTimeout(function() {
        $("#sui-dialog").css("display", "none");
        $("#sui-dialog-body").css("display", "none");
      }, 200);
    }


  });
  //点击其他地方none
  $(document).click(function(){
            if($("#s_skin_layer").css("display")=="block")
            {
                $("#s_skin_layer").slideUp(300);
                setTimeout(function(){
              $("#s_top_wrap").fadeIn(300);
                $("#s_upfunc_menus").fadeIn(300);
                },200);
              bcllgdtp();
            }
            else{
                   $("#sui-dialog").animate({
              height:"0"
            },
            {
          duration:200,
          step:function(now,fx){
              $("#sui-dialog").css("height",now);
            }
          });
         setTimeout(function(){
          $("#sui-dialog").css("display","none");
        $("#sui-dialog-body").css("display","none");
         },200);   
            }                 
        })  

      $("#s_skin_layer").click(function(e){  //阻止冒泡
          e.stopPropagation();
      });

      $("#s_content_99").click(function(e){
        e.stopPropagation();
      })

  $(".scene-recomm-unknown").click(function() {
    if ($(".sui-tips-scene-recommend").css("display") == "none") {
      $(".sui-tips-scene-recommend").css("display", "block");
    } else {
      $(".sui-tips-scene-recommend").css("display", "none");
    }
  });
  //情景推荐
  $("#conRecommend_mod").click(function() {
    var mod_class = $("#conRecommend_mod").attr("class");

    var mod_checked = mod_class.substr(mod_class.length - 7, mod_class.length);
    if (mod_checked == "checked") {
      $("#conRecommend_mod").css("backgroundPosition", "2px 0");
      setTimeout(function() {
        $("#conRecommend_mod").removeClass("checked");
      }, 100);

    } else {
      $("#conRecommend_mod").addClass("checked");

      setTimeout(function() {
        $("#conRecommend_mod").attr("style", "");
      }, 100);
    }

  });
  //隐藏频道
  $("#s_hide_allmods").click(function() {
    $("#s_wrap").css("display", "none");
    $("#s_icons").append('<a class="s-lite" href="javascript:void();" ><span class="s-icon s-icon-lite"></span><span class="title">显示频道</span></a>');
  });

  //显示频道
  $("#s_icons").on("click", ".s-lite", function() {
    $("#s_wrap").css("display", "block");
    $(this).remove();
    $("#sui-dialog").css("display", "none");
    $("#sui-dialog-body").css("display", "none");
    $("#sui-dialog").css("height", "0");
  });
  //我的导航hover
  $(".s-mblock-title").hover(function() {
    $(".s-setbar").css("display", "block");
  }, function() {
    $(".s-setbar").css("display", "none");
  });
  //我的导航点击事件
  $(".s-mblock-title").click(function() {

    if ($(".block-nav-fanli").css("display") == "block") {
      $(".block-nav-fanli").css("display", "none")
      $(".mine-title-icon em").css({
        top: "0",
        left: "3px",
        borderLeft: "5px solid #666",
        borderTop: "5px dashed transparent"
      })

    } else {
      $(".block-nav-fanli").css("display", "block")
      $(".mine-title-icon em").css({
        top: "3px",
        left: "0",
        borderTop: "5px solid #666",
        borderLeft: "5px dashed transparent"
      })
    }
  });
  //返利模式点击
  $(".fanli-class").click(function() {
    var fanli_class = $(this).attr("class");
    var fanli_last7 = fanli_class.substr(fanli_class.length - 7, fanli_class.length);
    if (fanli_last7 == "classed") {
      $(this).removeClass("classed");
    } else {
      $(this).addClass("classed");
    }
    event.stopPropagation();
  });

  //百度一下 

  $(".bdyx-text").hover(function() {
    $(".bdyx-text").addClass("btnhover");
  }, function() {
    $(".bdyx-text").removeClass("btnhover");
  });

  //照相机 
  $(".soutu-btn").click(function() {
    $(".soutu-layer").toggle();
  });
  $(".soutu-close").click(function() {

    $(".soutu-layer").toggle();
  });

});

