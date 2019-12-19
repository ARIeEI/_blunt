
/*main menu*/

//mobile,tablet 
var mainMenu = $('header');
var nav = $('nav');
var navW = $('.navWrap');

$('.three_menu').click(function () {
    navW.stop().toggleClass('open');
    nav.stop().slideToggle();
});

//pc 수정
navW.removeClass('open');
nav.find('ul').children('li').hover(function () {
    mainMenu.stop().addClass('open');
}, function () {
    mainMenu.stop().removeClass('open');
});

$(window).resize(function () {
    if ($(this).width() > 1279) {
        navW.removeClass('open');
        nav.find('ul').children('li').hover(function () {
            mainMenu.stop().addClass('open');
        }, function () {
            mainMenu.stop().removeClass('open');
        });

    } else {
        navW.removeClass('open');
        nav.slideUp('on');
    }
});

//페러럭스 함수화.            
//mobile
function starAniM2(th, vv, mm) {
    if (th.scrollTop() > vv.offset().top - 780) {
        vv.addClass(mm);
    } else {
        vv.removeClass(mm);
    }
}

//pc
function starAni2(th, vv, mm) {
    if (th.scrollTop() > vv.offset().top - 1290) {
        vv.addClass(mm);
    } else {
        vv.removeClass(mm);
    }
}

//vivus 함수화
function starAniVm(th, ms, vv) {
    if (th.scrollTop() > $(ms).offset().top -300) {
        vv.play();
    } else {
        vv.reset();
    }
}