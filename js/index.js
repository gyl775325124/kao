/**
 * Created by Administrator on 2018/11/19/019.
 */
$(function(){
    $(".wei-qq .wei").hover(function(){
        $(".wei-xia").toggle()
    })
    $(".wei-qq .qq").hover(function(){
        $(".qq-xia").toggle()
    });
    var index;
    var timer;
    var page = 0;
    $(".slide-nav a").mouseenter(function(){
        index = $(this).index();
        $(".slide-nav a").removeClass("active").eq(index).addClass("active")
        $(".slide-item ").removeClass("active").eq(index).addClass("active")
    })
    $(".lun-nav a").click(function(){
        index = $(this).index()
        $(".lun-nav a").removeClass("active").eq(index).addClass("active")
        $(" .box1").removeClass("active").eq(index).addClass("active")
    })
var next= function right(){
    page++;
    $(".slide-nav a").removeClass("active").eq(page).addClass("active")
    $(".slide-item ").removeClass("active").eq(page).addClass("active")
    if(page==5){
        //page=0
        //$(".slide-nav a").removeClass("active").eq(page).addClass("active")
        //$(".slide-item ").removeClass("active").eq(page).addClass("active")
        $(" .box1").hide()
        $(" .box2").show()
        $(".lun-nav a").eq(0).removeClass("active")
        $(".lun-nav a").eq(1).addClass("active")
    }
    if(page==9){
        $(" .box1").show()
        $(" .box2").hide()
        $(".lun-nav a").eq(1).removeClass("active")
        $(".lun-nav a").eq(0).addClass("active")
        page=0
        $(".slide-nav a").removeClass("active").eq(page).addClass("active")
        $(".slide-item ").removeClass("active").eq(page).addClass("active")
    }
};
timer = setInterval(next,1000);
$(".news-nav a").mouseenter(function(){
    index = $(this).index()
    $(".news-nav a").removeClass("active").eq(index).addClass("active")
    $(" .txt-list").removeClass("active").eq(index).addClass("active")
});
    $(".cont2 .news-nav a").mouseenter(function(){
        index = $(this).index();
        $(".cont2 .news-nav a").removeClass("active").eq(index).addClass("active")
        $(".cont2 .slide-item1 ").removeClass("active").eq(index).addClass("active")
    });
 (function(){
    var len=$(".banner .banner-item").length;
    var index=0;
    var show= $(".banner .banner-item");
    var prev=$(".banner .banner-prev");
    var next= $(".banner .banner-next");
    var box=$(".banner");
    function lunbo(len,index,show,prev,next,box){
        next.click(function(){
            index++;
            if(index>len-1){
                index=0;
            }
            show.fadeOut().eq(index).fadeIn();
        });

        prev.click(function(){
            index--;
            if(index<0){
                index=len-1;
            }
            show.fadeOut().eq(index).fadeIn();
        });

        var right=function(){
            index++;
            if(index>len-1){
                index=0;
            }
            show.fadeOut().eq(index).fadeIn();
        };
        var timer=setInterval(right,2000);
        box.hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(right,2000);
        })
    }

    lunbo(len,index,show,prev,next,box)
})();
    var tager = 1
    var run = function (){
            $("#noticeWrap .notice-box ")[0].style.left=$("#noticeWrap .notice-box ")[0].offsetLeft-tager+"px"
        }
    timer1=setInterval(run,30);

      $(".entry-nav a").hover(function(){
          index = $(this).index();
          $(".entry-nav a").removeClass("slide-active").eq(index).addClass("slide-active")
          $(".slide-item2").hide().eq(index).show()
      })
    var width = $(".slide-item2").eq(0).width()
    console.log(width);
    var aee = 0
    $(".cal-prev").click(function(){
        aee--
        if(aee<0){
            $(".calendar-box .slide-wrapper").css("left", -($(".slide-item3").length - 1) * width)
            aee = $(".slide-item3").length - 2;
            $(".calendar-box .slide-wrapper").stop().animate({left: -aee * width})
        }
        $(".calendar-box .slide-wrapper").stop().animate({left: -aee * width})
    })
    $(".cal-next").click(function(){
        aee++;
        if(aee>$(".slide-item3").length - 1){
            $(".calendar-box .slide-wrapper").css("left", 0)
            aee = 1;
            $(".calendar-box .slide-wrapper").stop().animate({left: -aee * width})
        }
        $(".calendar-box .slide-wrapper").stop().animate({left: -aee * width})
    })






})
