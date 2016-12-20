// 顶部导航设置部门隐藏与显示

$(document).ready(function() {
    $("#set").mouseover(function() {
        $("#setbar").show();
    });
});
$(document).ready(function() {
    $("#setbar").mouseover(function() {
        $("#setbar").show();
    });
    $("#setbar").mouseout(function() {
        $("#setbar").hide();
    });
});


// 顶部导航登陆部分隐藏与显示

$(document).ready(function() {
    $("#login").mouseover(function() {
        $("#setbar2").show();
    });
});
$(document).ready(function() {
    $("#setbar2").mouseover(function() {
        $("#setbar2").show();
    });
    $("#setbar2").mouseout(function() {
        $("#setbar2").hide();
    });
});


// 顶部更多产品部分隐藏与显示

$(document).ready(function() {
    $("#more").mouseover(function() {
        $("#morebox").show();
    });
});
$(document).ready(function() {
    $("#morebox").mouseover(function() {
        $("#morebox").show();
    });
    $("#morebox").mouseout(function() {
        $("#morebox").hide();
    });
});


// 页面主体Tab切换

$(function() {
    $("#tab_left_1").hover(function() {
        $("#tab_con_1").fadeIn(600);
    });
    $("#tab_left_2").hover(function() {
        $("#tab_con_1").hide();
        $("#tab_con_3").hide();
        $("#tab_con_4").hide();
        $("#tab_con_5").hide();
        $("#tab_con_2").fadeIn(600);
    });
    $("#tab_left_3").hover(function() {
        $("#tab_con_2").hide();
        $("#tab_con_1").hide();
        $("#tab_con_4").hide();
        $("#tab_con_5").hide();
        $("#tab_con_3").fadeIn(600);
    });
    $("#tab_left_4").hover(function() {
        $("#tab_con_1").hide();
        $("#tab_con_2").hide();
        $("#tab_con_3").hide();
        $("#tab_con_5").hide();
        $("#tab_con_4").fadeIn(600);
    });
    $("#tab_left_5").hover(function() {
        $("#tab_con_1").hide();
        $("#tab_con_2").hide();
        $("#tab_con_3").hide();
        $("#tab_con_4").hide();
        $("#tab_con_5").fadeIn(600);
    });
});


// 页面主体导航部分tab切换

$(function() {
    $("#mynav").hover(function() {
        $("#recommendnavcon").hide();
        $("#mynavcon").fadeIn(600);
    });
    $("#recommendnav").hover(function() {
        $("#mynavcon").hide();
        $("#recommendnavcon").fadeIn(600);
    });
});


// 页面主体新闻部分幻灯片

var timer;
var i = -1;
var offset = 3000;

function roll() {
    i++;
    if (i > 3) {
        i = 0;
    }
    slide(i);
    timer = setTimeout(roll, offset)
}

function slide(i) {
    $('.big a').eq(i).fadeIn().siblings().hide();
    $('.num li').eq(i).siblings().removeClass('on');
    $('.num li').eq(i).addClass('on');
}

function stopBig() {
    $('.big').hover(function() {
        clearTimeout(timer);
    }, function() {
        timer = setTimeout(roll, offset);
    });
}

function stoproll() {
    $('.num li').hover(function() {
        clearTimeout(timer);
        i = $(this).index();
        slide(i);
    }, function() {
        timer = setTimeout(roll, offset);
    })
}
$(function() {
    roll();
    stoproll();
    stopBig()
})

// 页面主体购物部分tab切换

$(function() {
    $("#best").hover(function() {
        $("#bestcon").fadeIn(600);
    });
    $("#food").hover(function() {
        $("#bestcon").hide();
        $("#filmcon").hide();
        $("#enjoycon").hide();
        $("#hotelcon").hide();
        $("#foodcon").fadeIn(600);
    });
    $("#film").hover(function() {
        $("#bestcon").hide();
        $("#foodcon").hide();
        $("#enjoycon").hide();
        $("#hotelcon").hide();
        $("#filmcon").fadeIn(600);
    });
    $("#enjoy").hover(function() {
        $("#bestcon").hide();
        $("#foodcon").hide();
        $("#filmcon").hide();
        $("#hotelcon").hide();
        $("#enjoycon").fadeIn(600);
    });
    $("#hotel").hover(function() {
        $("#bestcon").hide();
        $("#foodcon").hide();
        $("#filmcon").hide();
        $("#enjoycon").hide();
        $("#hotelcon").fadeIn(600);
    });
});
