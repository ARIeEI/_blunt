/*main menu*/
//mobile,tablet 
var mainMenu = $('header');
var nav = $('nav');
var navW = $('.navWrap');

$('.three_menu').click(function () {
    navW.stop().toggleClass('open'); //x버튼
    nav.stop().slideToggle();
});

//pc 수정
navW.removeClass('open'); // x버튼
nav.find('ul').hover(
    function () {
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

function scrollAnimation ( selector, active ){
    var thisSelector = $(selector);
    thisSelector.each(function(index, item){            
        var $window = $(window);        
        var $item = $(item);
        var $itemChildren = $item.children();
        // var $itemChildren = $item.children;
        $window.scroll(function(){            
            if($window.scrollTop() > $item.offset().top - window.innerHeight){
                $itemChildren.addClass(active);
            } else {
                $itemChildren.removeClass(active);                
            }
        });
    });
}

scrollAnimation ('.aniu', 'AniU');
scrollAnimation ('.anid', 'AniD');
scrollAnimation ('.anir', 'AniR');