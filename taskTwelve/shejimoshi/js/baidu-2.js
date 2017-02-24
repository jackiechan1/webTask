$(document).ready(function() {
  //工厂模式，三个hover的代码都是实现同一个功能，只是操作的dom元素不一样,没必要写重复的代码。
  function hoverPlant(name, name1) {
    $(name).hover(function() {
      $(name1).css("display", "block");
      $(name1).hover(function() {
        $(this).css("display", "block");
      },
      function() {
        $(this).css("display", "none");
      });
    },
    function() {
      $(name1).css("display", "none");
    });
  }
  hoverPlant("#py", ".bdpfmenu"); //设置下拉
  hoverPlant(".bry", ".bdbriimg"); //更多产品下拉
  hoverPlant(".lb", "#s_user_name_menu"); //个人中心下拉
  //工厂模式
  var gongchang = {
    create: function(domAttr) { //根据不同的参数创建新的对象
      return new gongchang[domAttr];
    },
    qjtj: function() {
      this.bind = function(domA) { //情景推荐
        $(domA).click(function() {
          var me = this;
          var mod_class = $(this).attr("class");
          var mod_checked = mod_class.substr(mod_class.length - 7, mod_class.length);
          if (mod_checked == "checked") {
            $(this).css("backgroundPosition", "2px 0");
            setTimeout(function() {
              $(me).removeClass("checked");
            },
            100);
          } else {
            $(this).addClass("checked");
            setTimeout(function() {
              $(me).attr("style", "");
            },
            100);
          }
        });
      };
    },
    ycpd: function() { //隐藏频道
      this.bind = function(domA, domB, domC) {
        $(domA).click(function() {
          $(domB).css("display", "none");
          $(domC).append('<a class="s-lite" href="javascript:void();" ><span class="s-icon s-icon-lite"></span><span class="title">显示频道</span></a>');
        });
      };
    },
    xspd: function() { //显示频道
      this.bind = function(domB, domC, domD, domE) {
        $(domC).on("click", ".s-lite",
        function() {
          $(domB).css("display", "block");
          $(this).remove();
          $(domE).css("display", "none");
          $(domD).css("display", "none");
          $(domE).css("height", "0");
        });
      };
    },
  };
  //情景推荐
  var qjtj = gongchang.create("qjtj");
  qjtj.bind("#conRecommend_mod");
  //隐藏频道
  var ycpd = gongchang.create("ycpd");
  ycpd.bind("#s_hide_allmods", "#s_wrap", "#s_icons");
  //显示频道
  var xspd = gongchang.create("xspd");
  xspd.bind("#s_wrap", "#s_icons", "#sui-dialog-body", "#sui-dialog");

  //  单例模式，代码的结构更清晰
  var zynrdhqh = {
    domAttr: function() { //操作dom的属性
      var me = this;
      me.a = ".s-menu-item";
      me.b = ".s-menu-mine";
      me.c = '#s_content_';
      me.d = "#s_content_100";
      me.e = "current";
    },
    bind: function() { //具体的绑定事件和业务逻辑
      var me = this;
      $(me.a).each(function(index, value) {
        $(value).click(function() {
          if (index != 0) {
            $(me.b).removeClass(me.e);
            $(this).siblings().removeClass(me.e);
            $(this).addClass(me.e);
            $(me.c + index).css("display", "block");
            $(me.c + index).siblings().css("display", "none");
          } else {
            $(me.d).css("display", "block");
            $(me.d).siblings().css("display", "none");
            $(me.b).addClass(me.e);
            $(me.a).siblings().removeClass(me.e);
          }
        });
      });
    },
    execute: function() { //执行
      var me = this;
      me.domAttr();
      me.bind();
    }
  };
  zynrdhqh.execute(); //主要内容导航切换
  //这里是练习面向对象编程的
  function clickEvent(name) { //点击的构造函数
    this.b = name;
  }
  clickEvent.prototype.shijian = function() { //点击原型上增加一个方法
    if ($(this.b).css("display") == "none") {
      $(this.b).show();
    } else {
      $(this.b).hide();
    }
  };

  function clickEvent2(name, name2, name3) { //点击2的构造函数
    clickEvent.call(this, name); //继承点击构造函数的属性
    this.c = name2;
    this.d = name3;
  };
  clickEvent2.prototype = new clickEvent(); //点击的实例给点击2的原型
  clickEvent2.prototype = {
    constructor: clickEvent2,
    //点击2原型的这个属性重新指向自己
    shijian2: function() {
      var me = this;
      $(this.b).fadeOut(300);
      $(this.c).fadeOut(300);
      setTimeout(function() {
        $(me.d).slideDown(300);
      },
      300);
    }
  };
  var xiaoxi = new clickEvent("#s_mod_msg"); //单击消息事件
  $(".s-msg").click(function() {
    xiaoxi.shijian();
  });
  var xiaoxi2 = new clickEvent2("#s_top_wrap", "#s_upfunc_menus", "#s_skin_layer"); //换肤单击事件
  $(".title:eq(1)").click(function() {
    xiaoxi2.shijian2();
  });

  //单例模式，换肤所有功能集合在一起                       
  var huanfu = {
    publicAttr: (function() { //全局属性和方法
      this.i_arr = new Array();
      this.jishu = -1;
      this.img_src = '';
      this.img_dizhi = '';
      this.i = -1;
      this.panduan = true;
      this.i_arr_z = [];
      this.bcllgdtp = function() { //保存浏览过的图片
        var me = this;
        me.q = '.content-9999 li';
        if (localStorage.i_arr_lS) //判断保存的图片里面是否有重复的
        {
          i_arr_z = localStorage.i_arr_lS.split(',');
          for (var num in i_arr_z) {
            if (i_arr_z[num] == i) {
              panduan = false;
              break;
            } else {
              panduan = true;
            }
          }
        }
        if (i != -1 && img_src != "" && panduan && i < 108) {
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
            var i_arr_z = localStorage.i_arr_lS.split(',');
            for (var num in i_arr_z) {
              i_arr[num] = i_arr_z[num];
            }
            i_arr[jishu] = i;
          } else {
            i_arr[jishu] = i;
          }
          localStorage.setItem("i_arr_lS", i_arr);
          localStorage.setItem("jishu_lS", jishu);
          $('' + me.q + ':eq(' + jishu + ') img').attr("src", img_src);
          $('' + me.q + ':eq(' + jishu + ')').removeClass("no-img");
        }
      };
    })(),
    domAttr: function() { //私有属性
      var me = this;
      me.a = '.skin-img-list  li';
      me.b = ".s-skin-container";
      me.c = "#s_top_wrap";
      me.d = ".logo img";
      me.e = "#su";
      me.g = ".input-box";
      me.h = "#bottom_container";
      me.i = "#bottom_container a";
      me.j = ".bg-hideOrShowAjax";
      me.k = ".skin-no-bg";
      me.l = '.skin-bg-png24-icon';
      me.n = ".input-box-huanfu";
      me.o = "#s_skin_layer";
      me.p = "#s_upfunc_menus";
      me.q = '.content-9999 li';
      me.r = '.s-skin-page .skin-page-number';
      me.s = '#s_skin_layer_cell';
      me.t = ".s-skin-page";
      me.u = ".s-skin-preview";
      me.v = "#s_skin_preview_skin";
      me.y = ".s-skin-towTabNav";
      me.w = ".preview-pageUI";
    },
    hfgnsx: function() {
      var me = this;
      $(me.a).each(function(index, value) { //换肤功能实现
        $(value).click(function() {
          var sfy_no_img = $(this).attr("class").indexOf("no-img");
          if (sfy_no_img == -1) {
            img_src = $(this).children("img").attr("src");
            img_dizhi = img_src.replace("skin_plus", "skin");
            $(me.b).attr("style", 'background-color:#404040;background-image:url(' + img_dizhi + ')');
            $(me.c).attr("class", "s-top-huanfu");
            $(me.d).attr("src", "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png");
            $(me.e).attr("class", "bdyx_huanfu");
            $(me.g).attr("class", "input-box-huanfu");
            $(me.h).css("color", "#fff");
            $(me.i).css("color", "#fff");
            $(me.j).css("visibility", "visible");
            $(me.k).css("display", "");
            $(me.l).attr("style", "");
            $('' + me.l + ':eq(' + index + ')').css("display", "block");
            i = index;
            localStorage.setItem("index", index); //保存点击li的index放入localStorage
          }
        });
      });
    },
    bsyhf: function() {
      var me = this;
      $(me.k).click(function() { //不使用皮肤
        $('' + me.l + ':eq(' + i + ')').attr("style", "");
        $(me.b).css("background", "none");
        $(me.c).attr("class", "s-top-wrap");
        $(me.d).attr("src", "img/bd_logo1.png");
        $(me.e).attr("class", "bdyx-text");
        $(me.n).attr("class", "input-box");
        $(me.h).css("color", "");
        $(me.i).css("color", "");
        $(me.j).css("visibility", "hidden");
        $(me.k).css("display", "none");
        img_src = "";
        localStorage.removeItem("index");
      });
    },
    sqfhgn: function() {
      var me = this;
      $(".title:eq(5)").click(function() { //收起换肤功能
        $(me.o).slideUp(300);
        setTimeout(function() {
          $(me.c).fadeIn(300);
          $(me.p).fadeIn(300);
        },
        200);
        bcllgdtp();
      });
    },
    zxsy: function() {
      var me = this;
      if (localStorage.i_arr_lS) //最新使用
      {
        var i_arr_z = localStorage.i_arr_lS.split(',');
        for (var num in i_arr_z) {
          i_arr[num] = i_arr_z[num];
        }

        for (var num in i_arr) {
          var zxsy_src = $('' + me.a + ':eq(' + i_arr[num] + ')').children("img").attr("src");
          $('' + me.q + ':eq(' + num + ') img').attr("src", zxsy_src);
          $('' + me.q + ':eq(' + num + ')').removeClass("no-img");
        }

        if (localStorage.index) {
          $('' + me.a + ':eq(' + localStorage.index + ')').click(); //自动点击     
        }
      }
    },
    hfrmht: function() { //换肤热门换图(翻页)
      var me = this;
      $(me.r).each(function(index, value) {
        $(value).click(function() {
          $(me.s).attr("class", 's-skin-layer-cell show-page-' + index + ' show-nav-1000');
          $(this).siblings().removeClass("choose-page-btn");
          $(this).addClass("choose-page-btn");

        });

      });

      $(".page-next").click(function() {

        var xiaobiao = parseInt($(me.s).attr("class").substr(28, 1));
        if (xiaobiao == 3) {
          xiaobiao -= xiaobiao;
        } else {
          xiaobiao += 1;
        }
        $(me.s).attr("class", 's-skin-layer-cell show-page-' + xiaobiao + ' show-nav-1000');
        $(me.r).each(function(index, value) {
          if (xiaobiao == index) {
            $(value).siblings().removeClass("choose-page-btn");
            $(value).addClass("choose-page-btn");
          }
        });
      });

      $(".page-pre").click(function() {

        var xiaobiao = parseInt($(me.s).attr("class").substr(28, 1));
        if (xiaobiao == 0) {
          xiaobiao += 3;
        } else {
          xiaobiao -= 1;
        }
        $(me.s).attr("class", 's-skin-layer-cell show-page-' + xiaobiao + ' show-nav-1000');
        $(me.r).each(function(index, value) {
          if (index == xiaobiao) {
            $(value).siblings().removeClass("choose-page-btn");
            $(value).addClass("choose-page-btn");
          }
        });
      });

    },
    hfyxht: function() {
      //换肤游戏换图(翻页)
      var me = this;
      $("" + me.y + " li").each(function(index, value) {
        $(value).click(function() {
          $(this).siblings().attr("class", "");
          $(this).attr('class', "cur");
          $('.content-1012 ul:eq(' + index + ')').siblings().removeClass("cur");
          $('.content-1012 ul:eq(' + index + ')').addClass("cur");
        });
      });
    },
    hfgzdh: function() {
      var me = this;
      //换肤功能导航
      $(".s-skin-nav li").each(function(index, value) {

        $(value).click(function() {
          $(this).siblings().removeClass("choose-nav");
          $(this).addClass("choose-nav");
          if (index == 0) {
            $(me.o).attr("class", "s-skin-layer");
            $(me.s).attr("class", "s-skin-layer-cell show-page-0 show-nav-1000");
            $(me.y).attr("style", "");
            $(me.t).attr("style", "");
            $(me.u).css("display", "")
          } else if (index == 1) {
            $(me.o).addClass("s-towTabNav-skin");
            $(me.s).attr("class", "s-skin-layer-cell show-page-0 show-nav-1012");
            $(me.y).css("display", "block");
            $(me.t).css("display", "none");
            $(me.u).css("display", "")
          } else if (index == 3) {
            $(me.o).attr("class", "s-skin-layer");
            $(me.s).attr("class", "s-skin-layer-cell hide-choose-img show-page-0 show-nav-9999");
            $(me.t).css("display", "none");
            $(me.u).css("display", "none");
            $(me.y).css("display", "");
          }
        });
      });
    },
    hfgnyr: function() {
      //换肤功能预览
      var me = this;
      $('' + me.a + ':not(.no-img)').each(function(index, value) {

        $(value).hover(function() {
          var img_src = $(this).children("img").attr("src");
          $(me.v).attr("src", img_src);
          $(me.w).css("backgroundPosition", "0 0")
        },
        function() {
          $(me.v).removeAttr("src");
          $(me.w).css("backgroundPosition", "-275px 0")
        });
      });
    },
    execute: function() {
      var me = this;
      me.domAttr(); //DOM操作元素初始化
      me.hfgnsx(); //具体的业务和绑定事件
      me.bsyhf();
      me.sqfhgn();
      me.zxsy();
      me.hfrmht();
      me.hfyxht();
      me.hfgzdh();
      me.hfgnyr();
    }

  };
  huanfu.execute();
  //单例模式
  var zgflMouse = { //最高返利mouse事件
    domAttr: function() {
      var me = this;
      me.a = ".fanli-nav";
    },
    bind: function() {
      var me = this;
      $(me.a).each(function(index, value) {
        $(value).hover(function() {
          $(this).children(".rebate").addClass("rebate-hover");
          $(this).children(".rebate").css("display", "block");
        },
        function() {
          $(this).children(".rebate").siblings().removeClass("rebate-hover");
          $(this).children(".rebate").css("display", "none");
        });

      });

    },
    execute: function() {
      var me = this;
      me.domAttr();
      me.bind();
    }
  };
  zgflMouse.execute();

  //单例模式
  var cjhMouse = { //超级返mouse事件
    domAttr: function() {
      var me = this;
      me.a = "#cjf";
      me.b = ".wrap-subtab a";
    },
    bind: function() {
      var me = this;
      $("#cjf").hover(function() {
        $(this).children(".arrow").addClass("up");
        $(this).addClass("white");
        $(".wrap-subtab a").addClass("in");
      },
      function() {
        $(this).children(".arrow").removeClass("up");
        $(me.b).removeClass("in");
        $(this).removeClass("white");
      });

    },
    execute: function() {
      var me = this;
      me.domAttr();
      me.bind();
    }
  };
  cjhMouse.execute();

  //单例模式
  var dhszClick = { //导航设置click事件
    domAttr: function() {
      var me = this;
      me.a = "#s_menu_set";
      me.b = ".sui-tips-scene-recommend";
      me.c = '#sui-dialog';
      me.d = "#sui-dialog-body";
    },
    bind: function() {
      var me = this;
      $(me.a).click(function(e) {
        e.stopPropagation();
        $(me.b).css("display", "none");
        if ($(me.c).css("display") == "none") {
          $(me.c).css("display", "block");
          $(me.d).css("display", "block");
          $(me.c).animate({
            height: "186px"
          },
          {
            duration: 300,
            step: function(now, fx) {
              $(me.c).css("height", now);
            }
          });

        } else {

          $(me.c).animate({
            height: "0"
          },
          {
            duration: 200,
            step: function(now, fx) {
              $(me.c).css("height", now);
            }
          });
          setTimeout(function() {
            $(me.c).css("display", "none");
            $(me.d).css("display", "none");
          },
          200);
        }
      });
    },
    execute: function() {
      var me = this;
      me.domAttr();
      me.bind();
    }
  };
  dhszClick.execute();

  //点击其他地方none
  $(document).click(function() {
    if ($("#s_skin_layer").css("display") == "block") {
      $("#s_skin_layer").slideUp(300);
      setTimeout(function() {
        $("#s_top_wrap").fadeIn(300);
        $("#s_upfunc_menus").fadeIn(300);
      },
      200);
      bcllgdtp();
    } else {
      $("#sui-dialog").animate({
        height: "0"
      },
      {
        duration: 200,
        step: function(now, fx) {
          $("#sui-dialog").css("height", now);
        }
      });
      setTimeout(function() {
        $("#sui-dialog").css("display", "none");
        $("#sui-dialog-body").css("display", "none");
      },
      200);
    }
  });

  $("#s_skin_layer").click(function(e) { //阻止冒泡
    e.stopPropagation();
  });

  $("#s_content_99").click(function(e) {
    e.stopPropagation();
  });

  $(".scene-recomm-unknown").click(function() {
    if ($(".sui-tips-scene-recommend").css("display") == "none") {
      $(".sui-tips-scene-recommend").css("display", "block");
    } else {
      $(".sui-tips-scene-recommend").css("display", "none");
    }
  });

  //单例模式
  var dhExecute = { //我的导航hover/我的导航点击事件
    domAttr: function() {
      var me = this;
      me.a = ".s-mblock-title";
      me.b = ".s-setbar";
      me.c = ".block-nav-fanli";
      me.d = ".mine-title-icon em";
    },
    wddhHover: function() {
      var me = this;
      $(me.a).hover(function() {
        $(me.b).css("display", "block");
      },
      function() {
        $(me.b).css("display", "none");
      });
    },
    wddhClick: function() {},
    execute: function() {
      var me = this;
      me.domAttr();
      me.wddhHover();
      me.wddhClick();
    }
  };
  dhExecute.execute();

  //单例模式
  var dhExecute = { //我的导航hover/我的导航点击事件
    domAttr: function() {
      var me = this;
      me.a = ".s-mblock-title";
      me.b = ".s-setbar";
      me.c = ".block-nav-fanli";
      me.d = ".mine-title-icon em";
    },
    wddhHover: function() {
      var me = this;
      $(me.a).hover(function() {
        $(me.b).css("display", "block");
      },
      function() {
        $(me.b).css("display", "none");
      });
    },
    wddhClick: function() {
      var me = this;
      $(me.a).click(function() {
        if ($(me.c).css("display") == "block") {
          $(me.c).css("display", "none");
          $(me.d).css({
            top: "0",
            left: "3px",
            borderLeft: "5px solid #666",
            borderTop: "5px dashed transparent"
          })

        } else {
          $(me.c).css("display", "block");
          $(me.d).css({
            top: "3px",
            left: "0",
            borderTop: "5px solid #666",
            borderLeft: "5px dashed transparent"
          })
        }
      });
    },
    execute: function() {
      var me = this;
      me.domAttr();
      me.wddhHover();
      me.wddhClick();
    }
  };
  dhExecute.execute();
  //单例模式
  var zxj = { //照相机点击
    domAttr: function() {
      var me = this;
      me.a = ".soutu-btn";
      me.b = ".soutu-layer";
      me.c = ".soutu-close";
    },
    xianshi: function() {
      var me = this;
      $(me.a).click(function() {
        $(me.b).toggle();
      });
    },
    yingcang: function() {
      var me = this;
      $(me.c).click(function() {
        $(me.b).toggle();
      });
    },
    execute: function() {
      var me = this;
      me.domAttr();
      me.xianshi();
      me.yingcang();
    }
  };
  zxj.execute();
});