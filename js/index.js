
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

//vivus 함수화
function starAniVm(th, ms, vv) {
    if (th.scrollTop() > $(ms).offset().top -300) {
        vv.play();
    } else {
        vv.reset();
    }
}

//parallax
var anid = $('.anid').children();
anid.each(function(){
    var anidContent = $(this);

    $(window).scroll(function(){    
    if ($(window).scrollTop() > anidContent.offset().top - 1000) {
            anidContent.addClass('AniD');
            } else {
                    anidContent.removeClass('AniD');
            }
    });
});

var aniu = $('.aniu').children();
aniu.each(function(){
        var aniuContent = $(this);

        $(window).scroll(function(){    
        if ($(window).scrollTop() > aniuContent.offset().top - 1000) {
                aniuContent.addClass('AniU');
                } else {
                        aniuContent.removeClass('AniU');
                }
        });
});

var anir = $('.anir');
anir.each(function(){
    var anirContent = $(this);

    $(window).scroll(function(){    
    if ($(window).scrollTop() > anirContent.offset().top - 1000) {
            anirContent.addClass('AniR');
            } else {
                    anirContent.removeClass('AniR');
            }
    });
});
