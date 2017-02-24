$(document).ready(function() {
  var newstbody = $("table tbody");
  var deleteId = null;
  var updateId = null;
  sxxwlb();
  $("#zengjianews").click(function() { //保存新闻
   	 tijiao();
  });

  newstbody.on("click", ".btn-danger.btn-xs",
  function() { //获取需要删除新闻的ID 以及弹出确定框
    $("#deleteModal").modal("show");
    deleteId = $(this).parent().prevAll().eq(5).html();
  }) 
  $("#confrimDelete").click(function() {                    //把需要删除的新闻ID传到后台,然后后台删除
    $.ajax({
      url: "./php/delete.php",
      type: "post",
      dataType: "json",
      data: {
        deleteId: deleteId
      },
      success: function(data) {
        console.log(data);
        $("#deleteModal").modal("hide");
        sxxwlb();
      }
    });

  });
  newstbody.on("click", ".btn-warning.btn-xs",
  function() { //点击修改，从数据库查找数据传到前台
    $("#updateModal").modal("show");
    updateId = $(this).parent().prevAll().eq(5).html();
    $.ajax({
      url: "./php/select.php",
      type: "post",
      data: {
        updateId,
        updateId
      },
      success: function(data) {
        data.forEach(function(value, index, array) {
          $("#unewstitle").val(value.newstitle);
          $("#unewstype").val(value.newstype);
          $("#unewsimg").val(value.newsimg);
          var nyr=value.newstime.split(" ");
          $("#unewstime").val(nyr[0]);
          $("#unewssrc").val(value.newssrc);
        })
      }

    });
  });

  $("#confrimupdate").click(function() { //获取修改的数据传到后台，后台来处理UPDATE
    $.ajax({
      url: "./php/update.php",
      data: {
        updateId: updateId,
        unewstitle: $("#unewstitle").val(),
        unewstype: $("#unewstype").val(),
        unewsimg: $("#unewsimg").val(),
        unewstime: $("#unewstime").val(),
        unewssrc: $("#unewssrc").val()
      },
      type: "post",
      success: function(data) {
        console.log(data);
        $("#updateModal").modal("hide");
        sxxwlb();
      }
    });
  });

});
//刷新页面时，重新载入新闻列表
function sxxwlb() {
  var newsType_attr=["精选","百家","本地","娱乐","社会"];
  $(".panel-body table tbody").empty();
  $.ajax({
    url: "./php/sxxwlb.php",
    type: "post",
    dataType: "json",
    success: function(data) {
      data.forEach(function(value, index, array) {
        var $tRow = $("<tr>");
        var $tId = $("<td>").text(value.id);
        var $tImg = $("<td>").text(value.newsimg);
        var $tType = $("<td>").text(newsType_attr[parseInt(value.newstype)]);
        var $tTime = $("<td>").text(value.newstime);
        var $tTitle = $("<td>").text(value.newstitle);
        var $tSrc = $("<td>").text(value.newssrc);
        var $Td = $("<td>");
        var $tWarning = $("<button>").addClass("btn btn-warning btn-xs").attr("type", "button").text("修改");
        var $tDanger = $("<button>").addClass("btn btn-danger btn-xs").attr("type", "button").text("删除");
        $Td.append($tWarning, $tDanger);
        $tRow.append($tId, $tTitle, $tType, $tImg, $tTime, $tSrc, $Td);
        $("table tbody").append($tRow);
      });
    }
  });
}

//新增新闻功能
function tijiao() {
  if ($("#newstitle").val() === "" || $("#newsimg").val() === "" || $("#newstime").val() === "" || $("#newssrc").val() === "") {
    if ($("#newstitle").val() === "") {
      $("#newstitle").parent().addClass("has-error");
    } else if ($("#newsimg").val() === "") {
      $("#newsimg").parent().addClass("has-error");
    } else if ($("#newstime").val() === "") {
      $("#newstime").parent().addClass("has-error");
    } else if ($("#newssrc").val() === "") {
      $("#newssrc").parent().addClass("has-error");
    }
  } else {
    var json_xz = {
      newstitle: $("#newstitle").val(),
      newstype: $("#newstype").val(),
      newsimg: $("#newsimg").val(),
      newstime: $("#newstime").val(),
      newssrc: $("#newssrc").val()
    }

    $.ajax({
      url: "./php/zengjia.php",
      type: "post",
      dataType: "json",
      data: json_xz,
      success: function(data) {
        console.log(data);
        sxxwlb();
      }

    });
  }
}